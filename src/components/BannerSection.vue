<template>
  <section class="py-5 text-center" style="background-color: #56a0b3; color: white;">
    <div class="container">
      <div class="bg-white text-dark p-3 rounded shadow-sm d-inline-block">
        <h2 class="mb-0">KHOA NGOẠI NGỮ</h2>
      </div>
      <p class="mt-4 fs-5 fw-semibold">
        Khoa Ngoại ngữ là một khoa chuyên môn độc lập, đào tạo ngành tiếng Anh và ngành tiếng Hàn.
        Nhiệm vụ đào tạo của khoa là hướng đến chuẩn hóa ngoại ngữ cho toàn bộ sinh viên nhà trường.
      </p>
      <button class="btn btn-success mt-3" @click="handleClick">Tìm hiểu thêm</button>
    </div>
  </section>
</template>

<script setup>
function handleClick() {
  alert('Chức năng "Tìm hiểu thêm" đang được phát triển!');
}
</script>

<style scoped>
  .container{
    cursor: pointer;
    transition: all 0.5s ease;
    animation: slideIn 1.5s ease-out;
  }
</style>
