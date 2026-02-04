<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const user = ref({ name: '', email: '', avatar: '' })

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/profile')
  user.value = res.data
})

const updateProfile = async () => {
  try {
    await axios.put('http://localhost:3000/profile', user.value)
    alert("Cập nhật thành công vào db.json!")
  } catch (err) {
    alert("Lỗi khi cập nhật!")
  }
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow border-0 p-4">
        <h3 class="fw-bold text-center text-danger mb-4">THÔNG TIN CÁ NHÂN (Y2.4)</h3>
        <div class="text-center mb-3">
          <img :src="user.avatar" class="rounded-circle border border-4 border-danger p-1" style="width: 130px; height: 130px; object-fit: cover;">
        </div>
        <form @submit.prevent="updateProfile">
          <div class="mb-3">
            <label class="form-label fw-bold small">Họ và Tên</label>
            <input v-model="user.name" type="text" class="form-control">
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold small">Email</label>
            <input v-model="user.email" type="email" class="form-control">
          </div>
          <button type="submit" class="btn btn-danger w-100 fw-bold py-2 mt-3 shadow-sm">LƯU THÔNG TIN</button>
        </form>
      </div>
    </div>
  </div>
</template>