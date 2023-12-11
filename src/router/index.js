 import {createRouter, createWebHistory} from 'vue-router'
 import MaHome from '../views/MaHome.vue'
 import PageDeux from '../views/PageDeux.vue'

 const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MaHome
        },
        {
            path: '/deux',
            component: PageDeux
        }
    ]
 })

 export default router;