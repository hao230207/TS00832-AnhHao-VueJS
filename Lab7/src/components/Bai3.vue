<template>
    <div class="row p-5">
      <div class="col-sm-6">
        <h3>Form Đăng Ký</h3>
        <form @submit.prevent="register">
          <div class="mb-3 mt-3">
            <label>Họ tên:</label>
            <input type="text" class="form-control" v-model="user.name" placeholder="Nhập họ tên">
          </div>
          <div class="mb-3">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="user.email" placeholder="Nhập email">
          </div>
          <div class="mb-3">
            <label>Mật khẩu:</label>
            <input type="password" class="form-control" v-model="user.password" placeholder="Nhập mật khẩu">
          </div>
          <div class="mb-3">
            <label>Ngày sinh:</label>
            <input type="date" class="form-control" v-model="user.dob">
          </div>
          <div class="mb-3">
            <label class="me-3">Giới tính: </label>
            <input type="radio" value="Nam" v-model="user.gender"> Nam
            <input type="radio" value="Nữ" v-model="user.gender" class="ms-2"> Nữ
            <input type="radio" value="Khác" v-model="user.gender" class="ms-2"> Khác
          </div>
          <div class="mb-3">
            <label class="me-3">Ngôn ngữ: </label>
            <input type="checkbox" value="Tiếng Việt" v-model="user.languages"> Tiếng Việt
            <input type="checkbox" value="Tiếng Anh" v-model="user.languages" class="ms-2"> Tiếng Anh
            <input type="checkbox" value="Tiếng Nhật" v-model="user.languages" class="ms-2"> Tiếng Nhật
          </div>
          <button type="submit" class="btn btn-primary">Đăng ký</button>
        </form>
      </div>
      
      <div class="col-sm-6">
        <h3>Thông tin đã đăng ký:</h3>
        <div v-if="isShow">
          <p><strong>Họ tên:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Ngày sinh:</strong> {{ user.dob }}</p>
          <p><strong>Giới tính:</strong> {{ user.gender }}</p>
          <p><strong>Ngôn ngữ:</strong> {{ user.languages.join(', ') }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  

  const user = ref({
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: 'Nam',
    languages: []
  });
  
  const isShow = ref(false);
  
  const register = () => {
    isShow.value = true; 
  };
  </script>