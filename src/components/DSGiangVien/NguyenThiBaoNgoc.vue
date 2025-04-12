<template>
    <ThongTinCanBo
      hoTen="Nguyễn Thị Bảo Ngọc"
      hocVi="Thạc sĩ"
      chucVu="Tổ trưởng Tổ Anh văn chuyên ngành"
      avatarUrl="/images/baongoc.jpg"
      phongLamViec="Phòng C301"
      tieuSu="Có chuyên môn sâu về tiếng Anh chuyên ngành, từng tu nghiệp tại nước ngoài."
      linhVucGiangDay="Tiếng Anh chuyên ngành kỹ thuật, thương mại"
      :thanhTich="[
        'Tổ chức thành công hội thảo tiếng Anh chuyên ngành 2023',
        'Tổ trưởng xuất sắc nhiều năm liền'
      ]"
    />
  </template>
  
  <script setup>
  import ThongTinCanBo from '../ThongTinGiangVien.vue'
  </script>
  