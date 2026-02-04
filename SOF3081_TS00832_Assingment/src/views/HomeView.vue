<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])
// Lấy thông tin người dùng đang đăng nhập để so sánh quyền sở hữu
const currentUser = ref(JSON.parse(localStorage.getItem('user')) || null)

const fetchPosts = async () => {
  try {
    const res = await axios.get('http://localhost:3000/posts')
    posts.value = res.data
  } catch (err) {
    console.error("Lỗi tải bài viết:", err)
  }
}

onMounted(fetchPosts)

// Hàm xử lý xóa bài viết
const deletePost = async (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`)
      alert("Đã xóa bài viết thành công!")
      fetchPosts() // Tải lại danh sách bài viết sau khi xóa
    } catch (err) {
      alert("Lỗi khi xóa bài viết!")
    }
  }
}
</script>

<template>
  <div class="row">
    <div v-for="post in posts" :key="post.id" class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm border-0 position-relative">
        
        <button 
          v-if="currentUser && currentUser.name === post.author" 
          @click="deletePost(post.id)"
          class="btn btn-sm btn-dark position-absolute top-0 end-0 m-2 opacity-75 shadow"
          title="Xóa bài viết của tôi"
        >
          🗑️ Xóa
        </button>

        <img :src="post.image" class="card-img-top" style="height: 200px; object-fit: cover;">
        
        <div class="card-body d-flex flex-column">
          <h5 class="fw-bold text-dark">{{ post.title }}</h5>
          <p class="small text-muted text-truncate mb-3">{{ post.desc }}</p>
          
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <small class="text-danger fw-bold">By: {{ post.author }}</small>
            <router-link :to="'/detail/' + post.id" class="btn btn-outline-danger btn-sm px-3">
              Chi tiết
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>