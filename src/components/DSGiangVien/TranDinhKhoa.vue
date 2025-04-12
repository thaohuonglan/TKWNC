<template>
    <ThongTinCanBo
      hoTen="Trần Đình Khoa"
      hocVi="Thạc sĩ"
      chucVu="Giảng viên"
      avatarUrl="/images/khoa.jpg"
      phongLamViec="Phòng B204"
      tieuSu="Nhiệt huyết, sáng tạo trong giảng dạy, từng hướng dẫn nhiều sinh viên đạt giải nghiên cứu khoa học."
      linhVucGiangDay="Anh văn giao tiếp, kỹ năng nghe – nói"
      :thanhTich="[
        'Giải thưởng sáng tạo phương pháp giảng dạy 2023'
      ]"
    />
  </template>
  
  <script setup>
  import ThongTinCanBo from '../ThongTinGiangVien.vue'
  </script>
  