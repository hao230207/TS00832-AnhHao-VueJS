<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(false)
const userProfile = ref({ name: '' })

const updateAuthStatus = () => {
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    try {
      userProfile.value = JSON.parse(savedUser)
      isLoggedIn.value = true
    } catch (e) {
      localStorage.removeItem('user')
      isLoggedIn.value = false
    }
  } else {
    isLoggedIn.value = false
    userProfile.value = { name: '' }
  }
}

onMounted(() => {
  updateAuthStatus()
  // Lắng nghe sự kiện đăng nhập từ LoginView
  window.addEventListener('auth-change', updateAuthStatus)
})

const handleLogout = () => {
  localStorage.removeItem('user')
  updateAuthStatus()
  alert("Đã đăng xuất!")
  router.push('/login')
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger shadow">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">BLOG MÂN ĐÀN</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item"><router-link class="nav-link" to="/">Trang chủ</router-link></li>
          
          <template v-if="isLoggedIn">
            <li class="nav-item"><router-link class="nav-link" to="/create-post">Đăng bài</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/profile">Hồ sơ</router-link></li>
            <li class="nav-item ms-3 text-white small">
              Chào, <strong>{{ userProfile.name }}</strong>
              <button @click="handleLogout" class="btn btn-sm btn-outline-light ms-2">Thoát</button>
            </li>
          </template>

          <li v-else class="nav-item ms-3">
            <router-link class="btn btn-warning btn-sm fw-bold" to="/login">Đăng nhập</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container mt-4"><router-view /></div>
</template>