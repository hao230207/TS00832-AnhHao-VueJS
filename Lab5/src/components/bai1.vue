<template>
  <div class="p-5">
    <p>{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('Thông điệp ban đầu'); // Khởi tạo biến message [cite: 575]
const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!'; // Cập nhật thông điệp mới [cite: 578]
};
</script>