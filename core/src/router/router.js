import { createRouter,createWebHashHistory } from 'vue-router'

// 守卫
// import { onBeforeRouteLeave } from "vue-router";
// onBeforeRouteLeave((to, from) => {
//   const answer = window.confirm("你确定要离开当前页面吗？");
//   if (!answer) {
//     return false;
//   }
// });

import Layout from "layouts/index.vue";

import Login from "layouts/login.vue";

import userRouter from './modules/user.js'

const TOKEN_KEY = 'USER_TOKEN'

/**
 * Note: 子菜单仅当路由的children.length >= 1时才出现
 *
 * hidden: true                   设置为true时路由将不显示在sidebar中(默认false)
 * alwaysShow: true               如果设置为true则总是显示在菜单根目录
 *                                如果不设置alwaysShow, 当路由有超过一个子路由时,
 *                                将会变为嵌套模式, 否则不会显示根菜单
 * redirect: noRedirect           如果设置noRedirect时，breadcrumb中点击将不会跳转
 * name:'router-name'             name用于<keep-alive> (必须设置!!!)
 * meta : {
    roles: ['admin','editor']    页面可访问角色设置 
    title: 'title'               sidebar和breadcrumb显示的标题 
    icon: 'svg-name'/'el-icon-x' sidebar中显示的图标
    breadcrumb: false            设置为false，将不会出现在面包屑中
    activeMenu: '/example/list'  如果设置一个path, sidebar将会在高亮匹配项
  }
 */
const constantRoutes = [
  {
    path: "/login",
    hidden: true,
    name: "login",
    component: Login,
    children:[
      {
        path: "",
        name:"login",
        component: () => import("views/auth/login.vue"),
        meta: { title: "登录", icon: "el-icon-s-home" },
      },
      {
        path: "/register",
        name: "register",
        component: () => import("views/auth/register.vue"),
        meta: { title: "注册", icon: "el-icon-s-home" },
      }
    ]
  }
]

export const routes = [
  ...constantRoutes,
  {
    path: "/",
    // redirect: "/home",
    component: Layout,
    meta: { title: "导航", icon: "el-icon-s-home" },
    children: [
      {
        path: "",
        component: () => import("views/index.vue"),
        name: "Home",
        meta: { 
          title: "首页", 
          // icon: "el-icon-s-home" 
        },
        children: [
          // {
          //   path: ":id",
          //   component: () => import("views/test/test.vue"),
          //   name: "test",
          //   hidden: true,
          //   meta: {
          //     title: "详情",
          //     icon: "el-icon-s-home",
          //     activeMenu: "/home",
          //   },
          // }
        ],
      },
      {
        path: "test",
        component: () => import("views/test/test.vue"),
        name: "test",
        meta: {
          title: "测试",
          // icon: "el-icon-s-home",
          activeMenu: "/test",
        },
      }
    ],
  },
  userRouter
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     // {x:10,y:10}  now {left:10,top:10}
    //     if (savedPosition) {
    //         return savedPosition;
    //     } else {
    //         return { top: 10 };
    //     }
    // },
  })
  
  const isAuthenticated = async ()=>{
    // 是否已登录
    const token = window.localStorage.getItem(TOKEN_KEY)
    return token || false;
  }

  router.beforeEach(async (to, /**from,next**/) => {
    const noAuth = ['login','register'];
    if( ! await isAuthenticated() && !noAuth.includes(to.name) ){
      return "/login"
    }
    // else{
    //   next()
    // }
  })
  router.afterEach(() => {
    // 分析、更改页面标题、声明页面等辅助功能以及许多其他事情
    // finish progress bar
    // NProgress.done()
  })

export default (app) => {
    
    app.use(router)

}
