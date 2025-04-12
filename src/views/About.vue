<template>
    <HeaderWeb/>
    <BannerSection/>
    <div class="container my-5">
      <button class="btn btn-outline-primary mb-3" @click="toggleVisibility">
        {{ isVisible ? 'Ẩn nội dung' : 'Hiện nội dung' }}
      </button>
  
      <div class="text-center mb-4">
        <h2 class="text-danger fw-bold">LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN</h2>
      </div>
  
      <p v-if="isVisible">
        Trường Cao đẳng Kinh tế Thành phố Hồ Chí Minh (tên giao dịch tiếng Anh: Ho Chi Minh City College of Economics)...
      </p>
  
      <div class="text-center my-4">
        <img class="rounded-circle" src="https://www.kthcm.edu.vn/wp-content/uploads/2023/10/Untitled-5.jpg" alt="About Image" width="150" height="150" />
      </div>
  
      <ul v-if="isVisible" class="list-unstyled">
        <li>- Trung học Tài chính</li>
        <li>- Trung học Kế hoạch</li>
        <li>- Trung học Thương nghiệp</li>
        <li>- Trung học Lao động – Tiền lương</li>
      </ul>
  
      <div class="text-danger fw-bold">
        <h4>TRƯỜNG CAO ĐẲNG KINH TẾ THÀNH PHỐ HỒ CHÍ MINH</h4>
      </div>
  
      <p v-if="isVisible"><strong>Tên tiếng Anh:</strong> HOCHIMINH CITY COLLEGE OF ECONOMICS</p>
      <p v-if="isVisible"><strong>Tên viết tắt:</strong> HCE</p>
      <p v-if="isVisible"><strong>Trụ sở:</strong> 33 Vĩnh Viễn, Phường 2, Quận 10, TP.HCM</p>
  
      <div class="text-center text-danger fw-bold mt-5">
        <h3>NHỮNG CỘT MỐC LỊCH SỬ QUAN TRỌNG</h3>
      </div>
  
      <p v-if="isVisible">15/09/1989: Trường Trung học Kinh tế Thành phố Hồ Chí Minh được thành lập...</p>
      <p v-if="isVisible">03/02/2005: Trường được nâng cấp lên thành Trường Cao đẳng...</p>
      <p v-if="isVisible">07/03/2005: Cơ quan chủ quản của Trường là Sở Giáo dục và Đào tạo TP.HCM...</p>
  
      <div class="text-start text-danger fw-bold mt-4">
        <h5>Vài nét nổi bật trong công cuộc hình thành và phát triển:</h5>
      </div>
  
      <p v-if="isVisible">Trường không ngừng nâng cao chất lượng đào tạo...</p>
  
      <div class="text-center text-danger fw-bold mt-5">
        <h3>HOẠT ĐỘNG CỦA NHÀ TRƯỜNG</h3>
      </div>
  
      <h3 class="text-start text-danger mt-3">Về đào tạo</h3>
      <p v-if="isVisible">Trường triển khai 26 ngành đào tạo, trong đó có 18 ngành Cao đẳng...</p>
  
      <h3 class="text-start text-danger mt-3">Về hợp tác</h3>
      <p v-if="isVisible">Trường đã xây dựng hệ thống các đối tác chiến lược trong và ngoài nước...</p>
  
      <h3 class="text-start text-danger mt-3">Về chiến lược</h3>
      <p v-if="isVisible">Trường đẩy mạnh hợp tác quốc tế, giao lưu sinh viên với các quốc gia khác...</p>
    </div>
    <FooterWeb/>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import HeaderWeb from '@/components/HeaderWeb.vue';
  import FooterWeb from '@/components/FooterWeb.vue';
  import BannerSection from '@/components/BannerSection.vue';
  const isVisible = ref(true)
  
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value
  }
  </script>
  