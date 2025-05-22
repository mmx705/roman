import { createRouter, createWebHashHistory } from 'vue-router'

// 页面组件
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
    { path: '/Register', component: Register },
  { path: '/home', component: Home },
  { path: '/detail/:id', component: Detail }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router