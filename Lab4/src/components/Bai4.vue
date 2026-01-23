<template>
  <div class="container mt-5">
    <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-3"> <div class="card h-100"> <img 
            :src="items[0].image" 
            alt="Hình ảnh" 
            class="card-img-top" 
            style="height: 200px; object-fit: cover;" 
          /> <div class="card-body">
            <h3 class="card-title">{{ items[0].title }}</h3>
            <p class="card-text">{{ items[0].content }}</p>
            <button class="btn btn-info mt-auto">Xem chi tiết</button>
          </div>
        </div>
      </div>

      <div class="col-sm-4 mb-3">
        <div class="card h-100"> <img 
            :src="items[1].image" 
            alt="Hình ảnh" 
            class="card-img-top" 
            style="height: 200px; object-fit: cover;" 
          /> <div class="card-body">
            <h3 class="card-title">{{ items[1].title }}</h3>
            <p class="card-text">{{ items[1].content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>

      <div class="col-sm-4 mb-3">
        <div class="card h-100"> <img 
            :src="items[2].image" 
            alt="Hình ảnh" 
            class="card-img-top" 
            style="height: 200px; object-fit: cover;" 
          /> <div class="card-body">
            <h3 class="card-title">{{ items[2].title }}</h3>
            <p class="card-text">{{ items[2].content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';


const items = [
  { 
    title: '8 loại rau củ quả giàu canxi', 
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...', 
    image: img1 
  },
  { 
    title: 'Các loại gia vị tốt cho sức khỏe', 
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị khác...', 
    image: img2
  },
  { 
    title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
    content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein, vitamin...', 
    image: img3
  }
];
</script>