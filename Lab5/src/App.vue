<template>
  <div id="app">
    <h1 class="text-center mb-4">Ứng dụng Blog nhỏ với Vue.js</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

// Thêm sẵn dữ liệu mẫu giống hệt hình đề bài
const posts = ref([
  {
    title: 'Bật Mí 8 Nguyên Tắc Phối Màu Quần Áo Sành Điệu',
    content: 'Bạn có thể phối áo màu xanh lá, quần màu kem và giày màu tím theo cách phối màu kiểu tam giác. Hoặc có thể phối các set đồ cùng ton lạnh hoặc nóng ...',
    author: 'Nguyễn Văn Tèo',
    backgroundColor: '#fdf2f2', 
    textColor: '#333'
  }
])

function addPost(post) {
  posts.value.push(post)
}
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>