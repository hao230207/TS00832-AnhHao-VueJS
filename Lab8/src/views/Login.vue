<template>
    <div class="col-sm-6 mx-auto">
      <h1>Trang Đăng Nhập</h1>
      <div class="mb-3">
        <label class="form-label">Tên đăng nhập:</label>
        <input type="text" class="form-control" v-model="username" placeholder="Nhập tên bất kỳ">
      </div>
      <button @click="handleLogin" class="btn btn-success">Đăng nhập</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const router = useRouter();
  
  const handleLogin = () => {
    if (username.value.trim()) {

      localStorage.setItem('isAuthenticated', 'true');
      alert('Đăng nhập thành công!');
      router.push({ name: 'Dashboard' }); 
    } else {
      alert('Vui lòng nhập tên!');
    }
  };
  </script>