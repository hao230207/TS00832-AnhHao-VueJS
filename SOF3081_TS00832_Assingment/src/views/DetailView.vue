<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const post = ref({})
const currentUser = ref(JSON.parse(localStorage.getItem('user')) || null)

onMounted(async () => {
  const id = route.params.id
  try {
    const res = await axios.get(`http://localhost:3000/posts/${id}`)
    post.value = res.data
  } catch (err) {
    alert("Không tìm thấy bài viết!")
    router.push('/')
  }
})

const handleDelete = async () => {
  if (confirm("Xóa bài viết này bạn sẽ không thể khôi phục. Tiếp tục?")) {
    try {
      await axios.delete(`http://localhost:3000/posts/${post.value.id}`)
      alert("Đã xóa bài thành công!")
      router.push('/')
    } catch (err) {
      alert("Lỗi khi xóa bài!")
    }
  }
}
</script>

<template>
  <div class="container py-4" v-if="post.title">
    <div class="d-flex justify-content-between align-items-start mb-3">
      <div>
        <h1 class="fw-bold mb-1">{{ post.title }}</h1>
        <small class="text-muted">Tác giả: <b class="text-danger">{{ post.author }}</b> | Ngày: {{ post.date }}</small>
      </div>
      
      <button 
        v-if="currentUser && currentUser.name === post.author" 
        @click="handleDelete" 
        class="btn btn-outline-secondary btn-sm"
      >
        🗑️ Xóa bài của tôi
      </button>
    </div>

    <img :src="post.image" class="img-fluid rounded shadow-sm mb-4 w-100" style="max-height: 450px; object-fit: cover;">
    
    <div class="content fs-5 lh-lg mb-5" style="white-space: pre-line;">
      {{ post.content }}
    </div>

    </div>
</template>