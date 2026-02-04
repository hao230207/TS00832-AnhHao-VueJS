import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DetailView from '../views/DetailView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { 
      path: '/create-post', 
      name: 'create-post', 
      component: CreatePostView, 
      meta: { requiresAuth: true } 
    },
    { 
      path: '/profile', 
      name: 'profile', 
      component: ProfileView, 
      meta: { requiresAuth: true } 
    },
    { path: '/detail/:id', name: 'detail', component: DetailView }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedInUser = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedInUser) {
    alert("Bạn cần đăng nhập để sử dụng tính năng này!")
    next('/login')
  } else {
    next()
  }
})

export default router