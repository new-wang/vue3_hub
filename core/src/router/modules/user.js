import Layout from 'layouts/index.vue'

const userRouter = {
    path: '/user',
    name: "Users",
    meta: {
        title: "用户管理",
        icon: "el-icon-user-solid",
    },
    redirect: '/user/list',
    component: Layout,
    children: [{
        path: "list",
        name: "用户列表",
        component: () => import('views/user/index.vue'),
        meta: {
            title: "用户列表",
            roles: [1, 2, 3, 4]
        },
    },
    {
        path: "create",
        component: () => import("views/user/create.vue"),
        hidden: true,
        meta: {
            title: "创建新用户",
            activeMenu: "/user/list",
        },
    },
    {
        path: "edit/:id(\\d+)",
        name: "userEdit",
        component: () => import("views/user/edit.vue"),
        hidden: true,
        meta: {
            title: "编辑用户信息",
            activeMenu: "/user/list",
        },
    },
    ]
}

export default userRouter