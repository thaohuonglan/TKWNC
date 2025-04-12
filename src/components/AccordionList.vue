<template>
    <div class="container py-5">
      <div class="row gy-4">
        <div class="col-md-6" v-for="(item, index) in items" :key="index">
          <AccordionCard
            :title="item.title"
            :content="item.content"
            :isOpen="openIndex === index"
            @toggle="toggleCard(index)"
          />
        </div>
      </div>
    </div>
    
  </template>
  
  <script setup>
  import { ref} from 'vue'
  import AccordionCard from './AccordionCard.vue'
  
  // Dữ liệu mẫu – bạn có thể tách ra file JSON nếu muốn
  const items = [
    {
      title: 'Chức năng và nhiệm vụ',
      content: `
        Khoa Ngoại ngữ là một khoa chuyên môn độc lập, đào tạo ngành tiếng Anh và tiếng Hàn.
        Bên cạnh đó, khoa còn phụ trách giảng dạy tiếng Anh căn bản, tiếng Anh chuyên ngành và các ngoại ngữ khác như tiếng Trung, tiếng Hàn cho các ngành đào tạo khác.
      `
    },
    {
      title: 'Dấu ấn & thành tựu',
      content: `
        + Khoa Ngoại ngữ có đội ngũ nhà giáo đạt nhiều giải thưởng cấp thành phố và toàn quốc.<br>
        + Sinh viên luôn năng động, tự tin trong các hoạt động học thuật và giao lưu quốc tế.<br>
        + Khoa đạt danh hiệu Tập thể Lao động tiên tiến và xuất sắc nhiều năm liên tiếp.
      `
    },
    {
      title: 'Lịch sử hình thành',
      content: `
        Ngày 01/09/2005: Tổ Ngoại ngữ được hình thành với 4 thành viên.<br>
        Ngày 01/09/2008: Khoa Ngoại ngữ chính thức thành lập với 11 thành viên.<br>
        Từ 2008 đến nay: Khoa không ngừng phát triển về quy mô và chất lượng đào tạo.
      `
    },
    {
      title: 'Câu lạc bộ tiếng Anh',
      content: `
        Câu lạc bộ tiếng Anh (TESC) được thành lập vào ngày 01/04/2007, giúp sinh viên thực hành tiếng Anh thông qua các hoạt động học tập và giải trí bổ ích.
      `
    },
    {
      title: 'Cơ cấu nhân sự',
      content: `
        <strong>*Quản lý khoa:</strong><br>
        Trưởng khoa: Th.S Nguyễn Thanh Xuân<br>
        Phó trưởng khoa: Th.S Trần Thị Hồng Thi<br>
        Tổ trưởng tổ Anh văn chuyên ngành: Th.S Nguyễn Thị Bảo Ngọc<br>
        Tổ trưởng tổ Anh văn căn bản: Th.S Vũ Hoàng Giang<br>
        Giáo vụ khoa: Th.S Nguyễn Văn Thư<br>
      `
    },
    {
      title: 'Thông tin khác',
      content: `
        + Khoa Ngoại ngữ đã ký kết hợp tác với nhiều doanh nghiệp để hỗ trợ thực tập và việc làm cho sinh viên.<br>
        + Khoa thường xuyên tổ chức kỳ thi chuẩn đầu ra tiếng Anh và cập nhật thông tin trên trang web.
      `
    }
  ]
  const DSTo='<a href="../components/GiangVienAccordion.vue"></a>';
  const openIndex = ref(null)
  
  function toggleCard(index) {
    openIndex.value = openIndex.value === index ? null : index
  }
  </script>
  