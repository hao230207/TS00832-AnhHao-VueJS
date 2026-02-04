<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoginMode = ref(true) // Chuyển đổi giữa Đăng nhập và Đăng ký

// Dữ liệu cho Đăng nhập
const loginData = ref({ email: '', password: '' })

// Dữ liệu cho Đăng ký (Y2.1)
const registerData = ref({ name: '', email: '', password: '' })

// Xử lý Đăng nhập (Y2.1)
const handleLogin = async () => {
  try {
    const res = await axios.get('http://localhost:3000/users')
    const user = res.data.find(u => u.email === loginData.value.email && u.password === loginData.value.password)
    
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      window.dispatchEvent(new Event('auth-change')) // Báo cho App.vue cập nhật Menu
      alert("Đăng nhập thành công!")
      router.push('/')
    } else {
      alert("Sai email hoặc mật khẩu!")
    }
  } catch (err) {
    alert("Lỗi kết nối server! Hãy chắc chắn json-server đang chạy.")
  }
}

// Xử lý Đăng ký (Y2.1)
const handleRegister = async () => {
  if (!registerData.value.name || !registerData.value.email || !registerData.value.password) {
    return alert("Vui lòng nhập đầy đủ thông tin đăng ký!")
  }
  
  try {
    // 1. Kiểm tra xem email đã tồn tại trong db.json chưa
    const resCheck = await axios.get('http://localhost:3000/users')
    const exists = resCheck.data.find(u => u.email === registerData.value.email)
    
    if (exists) {
      return alert("Email này đã được sử dụng!")
    }

    // 2. Thêm người dùng mới vào db.json (Y2.1)
    const newUser = {
      id: Date.now().toString(), // Tạo ID duy nhất
      ...registerData.value
    }
    
    await axios.post('http://localhost:3000/users', newUser)
    alert("Đăng ký thành công! Giờ bạn có thể đăng nhập.")
    
    // Reset form và chuyển về tab Đăng nhập
    registerData.value = { name: '', email: '', password: '' }
    isLoginMode.value = true
  } catch (err) {
    alert("Lỗi khi đăng ký tài khoản!")
  }
}
</script>

<template>
  <div class="row justify-content-center pt-5">
    <div class="col-md-5">
      <div class="card shadow border-0 overflow-hidden">
        <div class="d-flex bg-light">
          <button @click="isLoginMode = true" 
                  :class="['btn w-50 py-3 fw-bold rounded-0 border-0', isLoginMode ? 'btn-danger' : 'text-dark']">
            ĐĂNG NHẬP
          </button>
          <button @click="isLoginMode = false" 
                  :class="['btn w-50 py-3 fw-bold rounded-0 border-0', !isLoginMode ? 'btn-danger' : 'text-dark']">
            ĐĂNG KÝ
          </button>
        </div>

        <div class="card-body p-4">
          <form v-if="isLoginMode" @submit.prevent="handleLogin">
            <div class="mb-3">
              <label class="form-label small fw-bold">Email</label>
              <input v-model="loginData.email" type="email" class="form-control shadow-none" placeholder="example@gmail.com" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-bold">Mật khẩu</label>
              <input v-model="loginData.password" type="password" class="form-control shadow-none" placeholder="******" required>
            </div>
            <button type="submit" class="btn btn-danger w-100 fw-bold py-2 shadow-sm mt-2">BẮT ĐẦU TRẢI NGHIỆM</button>
          </form>

          <form v-else @submit.prevent="handleRegister">
            <div class="mb-3 text-start">
              <label class="form-label small fw-bold">Họ và Tên</label>
              <input v-model="registerData.name" type="text" class="form-control shadow-none" placeholder="Nhập tên của bạn" required>
            </div>
            <div class="mb-3 text-start">
              <label class="form-label small fw-bold">Email tài khoản</label>
              <input v-model="registerData.email" type="email" class="form-control shadow-none" placeholder="email@fpt.edu.vn" required>
            </div>
            <div class="mb-3 text-start">
              <label class="form-label small fw-bold">Mật khẩu</label>
              <input v-model="registerData.password" type="password" class="form-control shadow-none" placeholder="Tạo mật khẩu" required>
            </div>
            <button type="submit" class="btn btn-danger w-100 fw-bold py-2 shadow-sm mt-2">TẠO TÀI KHOẢN MỚI</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>