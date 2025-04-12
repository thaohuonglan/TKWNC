<template>
    <ThongTinCanBo
      hoTen="Nguyễn Thanh Xuân"
      hocVi="Thạc sĩ"
      chucVu="Trưởng khoa"
      email="xuan.nt@hutech.edu.vn"
      avatarUrl="/images/xuan.jpg"
      phongLamViec="Phòng B202"
      tieuSu="Trưởng khoa năng động, tâm huyết với nghề và sinh viên, có nhiều đóng góp trong công tác tổ chức đào tạo."
      linhVucGiangDay="Quản lý giáo dục, phương pháp giảng dạy tiếng Anh"
      :thanhTich="[
        'Trưởng khoa xuất sắc năm 2021',
        'Thành viên ban biên soạn chương trình mới của Khoa Ngoại ngữ'
      ]"
    />
  </template>
  
  <script setup>
  import ThongTinCanBo from '../ThongTinGiangVien.vue'
  </script>
  