<template>
    <ThongTinCanBo
      hoTen="Trần Thị Oanh Đào"
      hocVi="Thạc sĩ"
      chucVu="Giảng viên"
      avatarUrl="/images/oanhdao.jpg"
      phongLamViec="Phòng B205"
      tieuSu="Luôn tận tâm với sinh viên, có chuyên môn vững về ngữ pháp và viết học thuật."
      linhVucGiangDay="Ngữ pháp tiếng Anh, kỹ năng viết học thuật"
      :thanhTich="[
        'Biên soạn tài liệu viết học thuật nội bộ',
        'Tham gia đề tài nghiên cứu về dạy tiếng Anh học thuật'
      ]"
    />
  </template>
  
  <script setup>
  import ThongTinCanBo from '../ThongTinGiangVien.vue'
  </script>
  