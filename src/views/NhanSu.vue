<template>
    <HeaderWeb/>
    <BannerSection/>
    <div class="container my-4">
        <div class="card">
            <div class="card-header bg-primary text-white text-center">
                <h1 class="h4 mb-0">Cơ Cấu Tổ Chức Khoa Ngoại Ngữ</h1>
            </div>
            <div class="card-body">
                <ul class="list-group">
                <li v-for="item in Infor" :key="item.id" class="list-group-item">
                    <strong>{{ item.title }}</strong>
                    <!-- Kiểm tra nếu có cấp con -->
                    <ul v-if="item.children && item.children.length" class="list-group mt-2 ms-4">
                        <li v-for="child in item.children" :key="child.id" class="list-group-item py-1">
                            <div v-if="child.id==11">
                                <router-link to="/nguyenthanhxuan" class="text-decoration-none">
                                    Trưởng Khoa: Th.S Nguyễn Thanh Xuân
                                </router-link>
                            </div>
                            <div v-if="child.id==12">
                                <router-link to="/tranthihongthi" class="text-decoration-none">
                                    Phó trưởng Khoa: Th.S Trần Thị Hồng Thi
                                </router-link>
                            </div>
                            <div v-if="child.id==13">
                                <GiangVienAccordion/>
                            </div>
                            {{ child.title }}
                        </li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    </div>
    <FooterWeb/>
</template>

<script setup>
import { ref } from 'vue';
import HeaderWeb from '@/components/HeaderWeb.vue';
import FooterWeb from '@/components/FooterWeb.vue';
import BannerSection from '@/components/BannerSection.vue';
import GiangVienAccordion from '@/components/GiangVienAccordion.vue';
  
  // Dữ liệu cơ cấu tổ chức mẫu
  const Infor = ref([
    {
      id: 1,
      title: "CƠ CẤU NHÂN SỰ HIỆN TẠI",
      children: [
        { id: 11, },
        { id: 12, },
        { id: 13, },
        { id: 14, title: "Giáo vụ khoa: Th.S Nguyễn Vân Thư", }
      ]
    },
    {
      id: 2,
      title: "DẤU ẤN VÀ THÀNH TỰU",
      children: [
        { id: 21, title: "Từ khi thành lập vào năm 2008, Khoa Ngoại ngữ luôn chú trọng vào việc phát triển chất lượng đội ngũ nhà giáo. 100% nhà giáo đều đạt chuẩn chuyên môn, nghiệp vụ theo quy định và thường xuyên chủ động học tập, bồi dưỡng nâng cao trình độ chuyên môn và cập nhật phương pháp giảng dạy hiện đại. Đội ngũ nhà giáo khoa Ngoại ngữ liên tục nhiều năm đạt giải cao trong Hội thi giáo viên dạy giỏi cấp trường, cấp thành phố, cấp toàn quốc: 02 giải nhất cấp thành phố, 01 giải nhất cấp toàn quốc." },
        { id: 22, title: "Sinh viên khoa Ngoại ngữ luôn thể hiện tính năng động, tự tin, sáng tạo trong các hoạt động phong trào và là lực lượng nòng cốt trong các hoạt động trao đổi học thuật và giao lưu quốc tế của nhà trường. Sinh viên tốt nghiệp ngành tiếng Anh có thể làm việc ở nhiều lĩnh vực nghề nghiệp khác nhau và được các đơn vị sử dụng lao động đánh giá cao." },
        { id: 23, title: "Tập thể khoa Ngoại ngữ liên tục nhiều năm đạt tập thể Lao động tiên tiến, tập thể Lao động xuất sắc và nhiều thành tích khen thưởng khác." }
      ]
    },
    {
      id: 3,
      title: "VĂN PHÒNG KHOA NGOẠI NGỮ",
      children: [
        {id:31,title:"Địa chỉ: 33 Vĩnh Viễn, Phường 2, Quận 10, TP.HCM"},
        {id:32,title:"E-mail: khoangoaingu@kthcm.edu.vn"},
        {id:32,title:"Giờ làm việc: từ thứ Hai đến thứ Sáu."}
      ]
    }
  ]);
</script>
<style scoped>

</style>
