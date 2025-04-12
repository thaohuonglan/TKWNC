<template>
    <div class="accordion-wrapper">
      <details class="accordion" open>
        <summary class="accordion-title">Tổ Anh văn căn bản</summary>
        <ul>
          <li v-for="gv in toCanBan" :key="gv.path">
            <RouterLink :to="gv.path">{{ gv.hoTen }}</RouterLink>
          </li>
        </ul>
      </details>
  
      <details class="accordion">
        <summary class="accordion-title">Tổ Anh văn chuyên ngành</summary>
        <ul>
          <li v-for="gv in toChuyenNganh" :key="gv.path">
            <RouterLink :to="gv.path">{{ gv.hoTen }}</RouterLink>
          </li>
        </ul>
      </details>
    </div>
  </template>
  
  <script setup>
  const toCanBan = [
    { hoTen: 'Th.S Vũ Hoàng Giang', path: '/vuhoanggiang' },
    { hoTen: 'Th.S Nguyễn Thanh Xuân', path: '/nguyenthanhxuan' },
    { hoTen: 'Th.S Trần Đình Khoa', path: '/trandinhkhoa' },
    { hoTen: 'Th.S Trần Thị Oanh Đào', path: '/tranthioanhdao' },
    { hoTen: 'Nguyễn Đình Thao', path: '/nguyendinhthao' },
    { hoTen: 'Nguyễn Thị Cẩm Tiên', path: '/nguyenthicamtien' }
  ]
  
  const toChuyenNganh = [
    { hoTen: 'Th.S Nguyễn Thị Bảo Ngọc', path: '/nguyenthibaongoc' },
    { hoTen: 'Th.S Đỗ Ngọc Quỳnh', path: '/dongocquynh' },
    { hoTen: 'Th.S Trần Thị Hồng Thi', path: '/tranthihongthi' },
    { hoTen: 'Bùi Thị Thanh Thảo', path: '/buithithanhthao' },
    { hoTen: 'Võ Hoàng Nhân', path: '/vohoangnhan' }
  ]
  </script>
  
  
  <style scoped>
  .accordion-wrapper {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
  }
  
  .accordion {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 1rem;
    background: #f9f9f9;
  }
  
  .accordion-title {
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0 1rem 1rem 1.5rem;
  }
  
  li {
    margin: 0.5rem 0;
  }
  
  a {
    text-decoration: none;
    color: #0055aa;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  