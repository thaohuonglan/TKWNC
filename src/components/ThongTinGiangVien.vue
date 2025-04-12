<template>
  <div class="can-bo-card">
    <router-link to="/about/nhansu">
      <button type="button" class="btn btn-primary">Trở lại</button>
    </router-link>
    <h2 class="title mt-3">{{ chucVu }} - {{ hoTen }}</h2>
    <div class="info">
      <img class="avatar" :src="avatarUrl" :alt="'Ảnh của ' + hoTen" />
      <div class="details">
        <p><strong>Học vị:</strong> {{ hocVi || 'Cử nhân' }}</p>
        <p><strong>Email:</strong> {{ email || 'Đang cập nhật' }}</p>
        <p v-if="soDienThoai"><strong>SĐT:</strong> {{ soDienThoai }}</p>
        <p v-if="phongLamViec"><strong>Phòng làm việc:</strong> {{ phongLamViec }}</p>
        <p v-if="tieuSu"><strong>Tiểu sử:</strong> {{ tieuSu }}</p>

        <p v-if="linhVucGiangDay"><strong>Lĩnh vực giảng dạy:</strong> {{ linhVucGiangDay }}</p>

        <div v-if="thanhTich.length">
          <strong>Thành tích nổi bật:</strong>
          <ul>
            <li v-for="(item, index) in thanhTich" :key="index">{{ item }}</li>
          </ul>
        </div>

        <div v-if="linkGS">
          <a :href="linkGS" target="_blank">🔗 Google Scholar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hoTen: String,
  hocVi: String,
  chucVu: String,
  email: { type: String, default: '' },
  soDienThoai: { type: String, default: '' },
  avatarUrl: { type: String, default: '/default-avatar.jpg' },
  phongLamViec: { type: String, default: '' },
  tieuSu: { type: String, default: '' },
  linhVucGiangDay: { type: String, default: '' },
  thanhTich: { type: Array, default: () => [] },
  linkGS: { type: String, default: '' }
})
</script>

<style scoped>
.can-bo-card {
  max-width: 600px;
  margin: auto;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  background-color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
}

.title {
  font-size: 22px;
  text-align: center;
  margin-bottom: 20px;
}

.info {
  display: flex;
  gap: 20px;
}

.avatar {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid #ccc;
}

.details {
  flex: 1;
}

.details ul {
  padding-left: 20px;
  margin: 6px 0;
}
</style>
