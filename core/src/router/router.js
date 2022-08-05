import { createRouter,createWebHashHistory } from 'vue-router'

import Login from "views/auth/login.vue";
import register from "views/auth/register.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        component: Login
      },
      {
        path: '/register',
        component: register
      }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     // {x:10,y:10}  now {left:10,top:10}
    //     if (savedPosition) {
    //         return savedPosition;
    //     } else {
    //         return { top: 10 };
    //     }
    // }
  })

export default (app) => {
    
    app.use(router)

}
