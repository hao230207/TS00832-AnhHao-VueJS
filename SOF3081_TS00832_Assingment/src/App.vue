<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger shadow-sm">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold text-uppercase" to="/">
        <i class="fa-solid fa-futbol me-2"></i>Blog Mân Đàn
      </RouterLink>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/">
              <i class="fa-solid fa-house me-1"></i> Trang chủ
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/register">
              <i class="fa-solid fa-user-plus me-1"></i> Đăng ký
            </RouterLink>
          </li>
          <li class="nav-item ms-2">
            <RouterLink class="btn btn-warning fw-bold btn-sm px-3 text-dark" to="/login">
              <i class="fa-solid fa-right-to-bracket me-1"></i> Đăng nhập
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container my-4" style="min-height: 80vh;">
    <RouterView />
  </div>

  <footer class="bg-dark text-white text-center py-3 mt-auto">
    <div class="container">
      <small>&copy; 2026 Blog Mân Đàn - Fan Club VN</small>
    </div>
  </footer>
</template>

<style>
/* Active link màu vàng */
.navbar-nav .nav-link.active {
  font-weight: bold;
  color: #ffc107 !important;
}
</style>