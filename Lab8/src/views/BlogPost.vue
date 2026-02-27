<template>
    <div>
      <h1>Chi tiết bài viết</h1>
      <div class="alert alert-info">
        Bạn đang xem nội dung của bài viết có **ID: {{ $route.params.id }}**
      </div>
      <router-link to="/blog" class="btn btn-secondary">Quay lại danh sách</router-link>
    </div>
  </template>