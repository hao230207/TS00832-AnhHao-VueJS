<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const post = ref({ 
  title: '', 
  desc: '', 
  content: '', 
  image: 'https://p2.hostingprod.com/@manutd.com/mu/HLV-Ten-Hag.jpg' 
})

const handlePost = async () => {
  if (!post.value.title || !post.value.content) return alert("Vui lòng điền đủ tin!")
  try {
  
    await axios.post('http://localhost:3000/posts', {
      ...post.value,
      author: JSON.parse(localStorage.getItem('user'))?.name || 'Ẩn danh',
      date: new Date().toLocaleDateString()
    })
    alert("Đăng bài kèm ảnh thành công!")
    router.push('/')
  } catch (err) {
    alert("Lỗi khi lưu bài viết!")
  }
}
</script>

<template>
  <div class="card shadow border-0 p-4">
    <h3 class="text-danger fw-bold mb-4 border-bottom pb-2">ĐĂNG BÀI VIẾT MỚI (Y2.2)</h3>
    <form @submit.prevent="handlePost">
      <div class="mb-3">
        <label class="form-label fw-bold small">Tiêu đề</label>
        <input v-model="post.title" type="text" class="form-control" placeholder="Tiêu đề...">
      </div>
      
      <div class="mb-3">
        <label class="form-label fw-bold small">Link hình ảnh bài viết</label>
        <input v-model="post.image" type="text" class="form-control" placeholder="Dán link ảnh vào đây...">
        <div class="mt-2 text-center">
           <p class="small text-muted">Xem trước ảnh:</p>
           <img :src="post.image" class="img-thumbnail" style="height: 150px; object-fit: cover;">
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label fw-bold small">Mô tả ngắn</label>
        <input v-model="post.desc" type="text" class="form-control" placeholder="Mô tả tóm tắt...">
      </div>
      <div class="mb-3">
        <label class="form-label fw-bold small">Nội dung chi tiết</label>
        <textarea v-model="post.content" class="form-control" rows="5"></textarea>
      </div>
      <button type="submit" class="btn btn-danger px-5 fw-bold py-2">XUẤT BẢN BÀI VIẾT</button>
    </form>
  </div>
</template>