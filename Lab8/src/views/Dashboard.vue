<template>
    <div>
      <h1>Bảng điều khiển (Dashboard)</h1>
      <p class="alert alert-success">Chúc mừng! Bạn đã truy cập được vào khu vực bảo mật.</p>
      <button @click="handleLogout" class="btn btn-danger">Đăng xuất</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    alert('Đã đăng xuất!');
    router.push({ name: 'Home' });
  };
  </script>