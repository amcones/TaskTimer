import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";

import Home from '../views/OnGoing.vue'
import History from '../views/History.vue'

const routes=[
    {path:'/',component:Home},
    {path: '/history',component: History}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router