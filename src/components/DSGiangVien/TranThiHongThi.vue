<template>
    <ThongTinCanBo
      hoTen="Trần Thị Hồng Thi"
      hocVi="Thạc sĩ"
      chucVu="Phó trưởng Khoa"
      avatarUrl="/images/hongthi.jpg"
      phongLamViec="Phòng C303"
      tieuSu="Nhiệt huyết với nghề, giảng dạy nhiều khóa tiếng Anh chuyên ngành cho kỹ sư."
      linhVucGiangDay="Tiếng Anh chuyên ngành kỹ thuật, thuyết trình chuyên đề"
      :thanhTich="[
        'Giảng viên được yêu thích nhất 2021 theo bình chọn sinh viên'
      ]"
    />
  </template>
  
  <script setup>
  import ThongTinCanBo from '../ThongTinGiangVien.vue'
  </script>
  