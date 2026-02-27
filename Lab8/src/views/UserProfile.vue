<template>
    <div>
      <h1>Hồ sơ người dùng</h1>
      <p>Trang này có thể truy cập qua URL <code>/profile</code> hoặc <code>/me</code> (Alias)[cite: 46].</p>
      
      <nav class="nav nav-tabs mb-3">
        <router-link to="/profile/info" class="nav-link">Thông tin cá nhân</router-link>
        <router-link to="/profile/settings" class="nav-link">Cài đặt</router-link>
      </nav>
  
      <div class="border p-3 bg-light">
        <router-view></router-view>
      </div>
    </div>
  </template>