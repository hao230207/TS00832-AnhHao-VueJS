<template>
  <div class="container mt-4">
    <h2 class="text-center">Ba Nguyễn Anh Hào - MSSV: TS00832</h2>
    <hr>
    
    <nav class="nav nav-pills justify-content-center mb-4">
      <router-link to="/" class="nav-link">Trang chủ</router-link>
      <router-link to="/blog" class="nav-link">Blog</router-link>
      <router-link to="/profile" class="nav-link">Hồ sơ</router-link>
      <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
      <router-link to="/login" class="nav-link">Đăng nhập</router-link>
    </nav>

    <div class="card p-4 shadow-sm">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.router-link-active {
  background-color: #0d6efd;
  color: white !important;
}
</style>