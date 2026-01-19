<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Tab đang chọn ('login' hoặc 'register')
const currentTab = ref('login')

// Khi trang vừa load, kiểm tra xem đường dẫn là gì để bật Tab tương ứng
onMounted(() => {
  if (route.path === '/register') {
    currentTab.value = 'register'
  } else {
    currentTab.value = 'login'
  }
})

// Hàm chuyển Tab
const switchTab = (tab) => {
  currentTab.value = tab
  // Đổi URL để đúng logic (nhìn chuyên nghiệp hơn)
  if (tab === 'login') router.push('/login')
  else router.push('/register')
}

// --- DỮ LIỆU & XỬ LÝ ĐĂNG KÝ (Giống hệt ảnh mẫu) ---
const regForm = ref({
  fullname: '',
  email: '',
  phone: '',
  password: '',
  confirmPass: '',
  gender: 'Nam' // Mặc định chọn Nam
})
const regErrors = ref({})

const handleRegister = () => {
  regErrors.value = {}
  
  if (!regForm.value.fullname) regErrors.value.fullname = "Vui lòng nhập họ và tên"
  if (!regForm.value.email) regErrors.value.email = "Vui lòng nhập Email"
  if (!regForm.value.phone) regErrors.value.phone = "Vui lòng nhập số điện thoại"
  if (!regForm.value.password) regErrors.value.password = "Vui lòng nhập mật khẩu"
  
  // Kiểm tra xác nhận mật khẩu
  if (regForm.value.password !== regForm.value.confirmPass) {
    regErrors.value.confirmPass = "Mật khẩu xác nhận không khớp"
  }

  // Nếu không có lỗi
  if (Object.keys(regErrors.value).length === 0) {
    alert("Đăng ký thành công! Vui lòng đăng nhập.")
    switchTab('login') // Chuyển sang tab đăng nhập
  }
}

// --- DỮ LIỆU & XỬ LÝ ĐĂNG NHẬP ---
const loginForm = ref({ email: '', password: '' })
const loginErrors = ref({})

const handleLogin = () => {
  loginErrors.value = {}
  if (!loginForm.value.email) loginErrors.value.email = "Vui lòng nhập Email"
  if (!loginForm.value.password) loginErrors.value.password = "Vui lòng nhập Mật khẩu"
  
  if (Object.keys(loginErrors.value).length === 0) {
    alert("Đăng nhập thành công! Chào mừng đến Blog Mân Đàn.")
    router.push('/') // Về trang chủ
  }
}
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="card shadow-sm border-0">
      
      <div class="card-header bg-white p-0 border-bottom-0">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <button class="nav-link fw-bold px-4 py-3" 
              :class="{ 'active': currentTab === 'register' }" 
              @click="switchTab('register')">
              Đăng ký
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link fw-bold px-4 py-3" 
              :class="{ 'active': currentTab === 'login' }" 
              @click="switchTab('login')">
              Đăng nhập
            </button>
          </li>
        </ul>
      </div>

      <div class="card-body p-4 border rounded-bottom">
        
        <div v-if="currentTab === 'register'">
          <h3 class="mb-4 text-dark">Form Đăng Ký Thông Tin</h3>
          
          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <label class="form-label">Họ và Tên</label>
              <input v-model="regForm.fullname" type="text" class="form-control" 
                     placeholder="Nhập họ và tên" :class="{ 'is-invalid': regErrors.fullname }">
              <div class="invalid-feedback">{{ regErrors.fullname }}</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input v-model="regForm.email" type="email" class="form-control" 
                     placeholder="Nhập email" :class="{ 'is-invalid': regErrors.email }">
              <div class="invalid-feedback">{{ regErrors.email }}</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Số Điện Thoại</label>
              <input v-model="regForm.phone" type="text" class="form-control" 
                     placeholder="Nhập số điện thoại" :class="{ 'is-invalid': regErrors.phone }">
              <div class="invalid-feedback">{{ regErrors.phone }}</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Mật Khẩu</label>
              <input v-model="regForm.password" type="password" class="form-control" 
                     placeholder="Nhập mật khẩu" :class="{ 'is-invalid': regErrors.password }">
              <div class="invalid-feedback">{{ regErrors.password }}</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Xác Nhận Mật Khẩu</label>
              <input v-model="regForm.confirmPass" type="password" class="form-control" 
                     placeholder="Xác nhận mật khẩu" :class="{ 'is-invalid': regErrors.confirmPass }">
              <div class="invalid-feedback">{{ regErrors.confirmPass }}</div>
            </div>

            <div class="mb-3">
              <label class="form-label d-block">Giới Tính:</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="regForm.gender" value="Nam" id="genderMale">
                <label class="form-check-label" for="genderMale">Nam</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="regForm.gender" value="Nữ" id="genderFemale">
                <label class="form-check-label" for="genderFemale">Nữ</label>
              </div>
            </div>

            <button type="submit" class="btn btn-primary mt-3">Đăng ký</button>
          </form>
        </div>

        <div v-else>
          <h3 class="mb-4 text-dark">Đăng Nhập</h3>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input v-model="loginForm.email" type="email" class="form-control" 
                     placeholder="Nhập email" :class="{ 'is-invalid': loginErrors.email }">
              <div class="invalid-feedback">{{ loginErrors.email }}</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Mật Khẩu</label>
              <input v-model="loginForm.password" type="password" class="form-control" 
                     placeholder="Nhập mật khẩu" :class="{ 'is-invalid': loginErrors.password }">
              <div class="invalid-feedback">{{ loginErrors.password }}</div>
            </div>

            <button type="submit" class="btn btn-primary mt-3">Đăng nhập</button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS để giống style của Bootstrap Tabs chuẩn */
.nav-tabs .nav-link {
  color: #495057;
  border: 1px solid transparent;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.nav-tabs .nav-link.active {
  color: #0d6efd; /* Màu xanh active */
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
  border-bottom: 2px solid white; /* Che viền dưới để nối liền với content */
  margin-bottom: -1px; /* Đẩy xuống đè lên border card */
  z-index: 10;
}

.card-body {
  border-top: 1px solid #dee2e6; /* Viền trên của khung nội dung */
}
</style>