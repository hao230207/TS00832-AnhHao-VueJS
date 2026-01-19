<script setup>
import { ref } from 'vue'

// 1. Dữ liệu danh mục
const categories = ref([
  { name: 'Ngoại hạng Anh', count: 12, active: true },
  { name: 'Champions League', count: 5, active: false },
  { name: 'Tin chuyển nhượng', count: 20, active: false },
  { name: 'Bên lề sân cỏ', count: 4, active: false }
])

// 2. Bài viết nổi bật (Dùng ảnh đã tải về)
const featuredPost = ref({
  title: "HLV Ten Hag phát biểu cứng rắn trước trận Derby Manchester",
  // Đường dẫn ảnh trong thư mục public/uploads
  image: "/uploads/ten-hag.jpg", 
  desc: "Trước thềm trận đấu quan trọng, vị chiến lược gia người Hà Lan khẳng định MU sẽ chơi tấn công tổng lực để giành trọn 3 điểm tại Old Trafford...",
  comments: 342,
  time: "1 giờ trước"
})

// 3. Danh sách tin vắn bên phải (Dùng ảnh đã tải về)
const sidePosts = ref([
  { 
    id: 1, 
    title: "Rashford trở lại tập luyện, sẵn sàng ra sân", 
    comments: 156, 
    image: "/uploads/rashford.jpg" 
  },
  { 
    id: 2, 
    title: "Bruno Fernandes: 'Chúng tôi nợ người hâm mộ một chiến thắng'", 
    comments: 89, 
    image: "/uploads/bruno.jpg" 
  },
  { 
    id: 3, 
    title: "Kết quả: MU 3-0 West Ham", 
    comments: 212, 
    image: "/uploads/an-mung.jpg" 
  }
])
</script>

<template>
  <div class="row">
    <div class="col-lg-3 mb-4">
      
      <h5 class="text-danger fw-bold mb-3 border-start border-4 border-danger ps-2">
        GIẢI ĐẤU
      </h5>
      <div class="list-group mb-4 shadow-sm">
        <a href="#" v-for="(cat, index) in categories" :key="index" 
           class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
           :class="{ 'active bg-danger border-danger': cat.active }">
          {{ cat.name }}
          <span class="badge rounded-pill" :class="cat.active ? 'bg-white text-danger' : 'bg-danger'">
            {{ cat.count }}
          </span>
        </a>
      </div>

      <h5 class="text-danger fw-bold mb-3 border-start border-4 border-danger ps-2">
        VỀ CHÚNG TÔI
      </h5>
      <div class="card border-0 shadow-sm text-center p-4 bg-light">
        <img src="/uploads/logo-mu.png" 
             class="mx-auto mb-3" alt="Logo MU" style="width: 100px;">
        <h5 class="fw-bold text-danger">Man Utd Fan Club</h5>
        <p class="text-muted small">Cập nhật tin tức Quỷ Đỏ 24/7. Góc nhìn chuyên sâu từ người hâm mộ.</p>
        <button class="btn btn-danger w-100 rounded-pill fw-bold">
          <i class="fa-solid fa-heart me-1"></i> Theo dõi ngay
        </button>
      </div>
    </div>

    <div class="col-lg-9">
      <h2 class="text-danger fw-bold mb-4 border-bottom pb-2">
        <i class="fa-solid fa-fire text-warning"></i> Tiêu điểm Old Trafford
      </h2>

      <div class="row">
        <div class="col-lg-8 mb-4">
          <div class="card border-0 shadow h-100 hover-card">
            <div class="position-relative">
              <img :src="featuredPost.image" class="card-img-top featured-img" alt="Tin nổi bật">
              <span class="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 shadow">HOT</span>
            </div>
            <div class="card-body">
              <h3 class="card-title fw-bold text-dark lh-base">
                <a href="#" class="text-decoration-none text-dark stretched-link">{{ featuredPost.title }}</a>
              </h3>
              <div class="text-muted mb-3 small">
                <span class="me-3"><i class="fa-regular fa-clock me-1"></i> {{ featuredPost.time }}</span>
                <span><i class="fa-regular fa-comment me-1"></i> {{ featuredPost.comments }} bình luận</span>
              </div>
              <p class="card-text text-secondary">{{ featuredPost.desc }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-header bg-danger text-white fw-bold py-2 text-uppercase">
              <i class="fa-solid fa-bolt"></i> Tin mới nhận
            </div>
            <div class="list-group list-group-flush">
              <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" 
                 v-for="post in sidePosts" :key="post.id">
                <img :src="post.image" alt="Thumbnail" class="rounded flex-shrink-0 border" 
                     style="width: 75px; height: 75px; object-fit: cover;">
                <div class="d-flex flex-column justify-content-between">
                  <h6 class="mb-1 fw-bold text-dark line-clamp-2" style="font-size: 0.95rem;">
                    {{ post.title }}
                  </h6>
                  <small class="text-muted">
                    <i class="fa-regular fa-comment-dots"></i> {{ post.comments }}
                  </small>
                </div>
              </a>
            </div>
            <div class="card-footer bg-white text-center p-2 mt-auto">
              <button class="btn btn-link text-decoration-none text-danger fw-bold small">
                Xem tất cả tin <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS cho ảnh bài viết to đẹp hơn */
.featured-img {
  height: 380px;
  object-fit: cover; 
}

/* Hiệu ứng bay lên khi di chuột */
.hover-card {
  transition: transform 0.2s ease;
}
.hover-card:hover {
  transform: translateY(-5px);
}

/* Cắt chữ nếu tiêu đề quá dài (tối đa 2 dòng) */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>