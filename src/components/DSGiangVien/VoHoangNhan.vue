<template>
    <ThongTinCanBo
      hoTen="Võ Hoàng Nhân"
      hocVi=""
      chucVu="Giảng viên"
      avatarUrl="/images/nhan.jpg"
      phongLamViec="Phòng C305"
      tieuSu="Chuyên giảng dạy tiếng Anh kỹ thuật và thiết kế bài giảng trực quan."
      linhVucGiangDay="Anh văn chuyên ngành kỹ thuật, sử dụng phần mềm giảng dạy"
      :thanhTich="[
        'Triển khai mô hình lớp học trực tuyến hiệu quả',
        'Ứng dụng công nghệ VR trong giảng dạy'
      ]"
    />
  </template>
  
  <script setup>
  import ThongTinCanBo from '../ThongTinGiangVien.vue'
  </script>
  