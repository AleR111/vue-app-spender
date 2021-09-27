import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: "history",

    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('../pages/Home')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../pages/About')
        }
    ]
})
