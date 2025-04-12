<template>
    <HeaderWeb />
    <div class="tuyensinh-container">
     
  
      <!-- TIÊU CHUẨN ĐẦU RA -->
      <div class="section">
        <h2>TIÊU CHUẨN ĐẦU RA SAU KHI TỐT NGHIỆP</h2>
        <ul class="info-list">
          <li>
            <strong>1. Kiến thức:</strong>
            <ul class="sub-list">
              <li>Trình bày kiến thức về chính trị, văn hóa, xã hội, đáp ứng yêu cầu nghề nghiệp và hoạt động xã hội thuộc lĩnh vực chuyên môn.</li>
              <li>Vận dụng được kiến thức nền tảng về ngôn ngữ Anh, Trung, Hàn vào công việc.</li>
              <li>Áp dụng được kiến thức chuyên môn và các kỹ năng giao tiếp cần thiết để hỗ trợ cho công việc như dịch thuật, quản trị hành chính văn phòng và một trong các nghiệp vụ sau như: xuất nhập khẩu, giảng dạy ngôn ngữ nước ngoài.</li>
            </ul>
          </li>
          <li>
            <strong>2. Kỹ năng:</strong>
            <ul class="sub-list">
              <li>Sử dụng tiếng Anh, Trung, Hàn trong các kỹ năng nghe, nói, đọc, viết một cách trôi chảy, linh hoạt và hiệu quả.</li>
              <li>Ứng dụng kỹ năng thực hành nghề nghiệp thành thạo như dịch thuật, hành chính văn phòng, v.v.</li>
              <li>Hình thành kỹ năng mềm và bổ trợ cần thiết để phục vụ công việc.</li>
            </ul>
          </li>
          <li>
            <strong>3. Năng lực tự chủ và chịu trách nhiệm:</strong>
            <ul class="sub-list">
              <li>Có đạo đức công dân và phẩm chất tốt, đáp ứng yêu cầu tuyển dụng.</li>
              <li>Có hành vi ứng xử chuyên nghiệp.</li>
            </ul>
          </li>
          <li>
            <strong>4. Vị trí và việc làm sau khi tốt nghiệp:</strong>
            <ul class="sub-list">
              <li>Nhân viên dịch thuật</li>
              <li>Nhân viên hành chính văn phòng</li>
              <li>Nhân viên xuất nhập khẩu</li>
              <li>Giáo viên ngôn ngữ sơ cấp</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <FooterWeb />
  </template>
  
  <script setup>
  import HeaderWeb from './HeaderWeb.vue';
  import FooterWeb from './FooterWeb.vue';
  </script>
  
  <style scoped>
  .tuyensinh-container {
    gap: 20px;
    padding: 20px;
    background-color: #f8f8f8;
  }
  
  .section {
    margin: 1rem 0;
    background: white;
    padding: 15px;
    border-radius: 8px;
  }
  
  .section-img {
    width: 35%;
    border-radius: 8px;
    flex-shrink: 0;
  }
  
  .section-body {
    display: flex;
    max-width: 1200px;
    margin: auto;
    justify-content: space-around;
  }
  
  h2 {
    text-align: center;
  }
  
  .info-list {
    list-style-type: disc;
    margin-left: 1.5rem;
  }
  
  .sub-list {
    list-style-type: circle;
    margin-left: 1.5rem;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .section {
      flex-direction: column;
      text-align: center;
    }
  
    .section-img {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
  </style>
  