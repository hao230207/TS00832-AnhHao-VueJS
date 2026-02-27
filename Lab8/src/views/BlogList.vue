<template>
    <div>
      <h1>Danh sách bài viết Blog</h1>
      <ul class="list-group">
        <li class="list-group-item" v-for="id in [1, 2, 3]" :key="id">
          <router-link :to="{ name: 'BlogPost', params: { id: id } }">
            Xem bài viết số {{ id }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>