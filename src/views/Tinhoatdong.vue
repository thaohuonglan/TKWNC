<template>
  <HeaderWeb/>
  <BannerSection/>
  <div class="container py-4">
    <div class="text-center mb-4">
      <h2 class="text-danger fw-bold">
        TIN HOẠT ĐỘNG - PHONG TRÀO KHOA
      </h2>
    </div>

    <div v-if="isVisible" class="mb-3">
      <p>TALKSHOW “Foreign Language Skills – Global Opportunities”</p>
      <p>Bạn có đang chật vật với việc học ngoại ngữ?</p>
      <p>Bạn đã từng thiếu tự tin khi giao tiếp tiếng Anh hay tiếng Hàn?</p>
      <p>Bạn muốn tìm ra phương pháp học HIỆU QUẢ và THỰC TẾ hơn?</p>
      <p>Đừng bỏ lỡ Talkshow “Foreign Language Skills – Global Opportunities” do Liên chi Đoàn – Liên chi Hội Khoa Ngoại ngữ tổ chức!</p>
      <p class="fw-bold">🔥 ĐIỂM NHẤN CỦA TALKSHOW:</p>
      <ul class="list-unstyled">
        <li>✨ Gặp gỡ các diễn giả giàu kinh nghiệm, chuyên gia về ngoại ngữ.</li>
        <li>✨ Bỏ túi ngay những bí quyết học tiếng Anh và tiếng Hàn hiệu quả, dễ áp dụng vào thực tế.</li>
        <li>✨ Thực hành cùng khách mời: Phát âm như người bản xứ, mẹo nhớ từ vựng lâu và sâu, luyện kỹ năng nghe – nói – đọc – viết siêu “mượt”.</li>
        <li>✨ Phá bỏ rào cản tâm lý, tự tin giao tiếp và hội nhập.</li>
        <li>✨ Truyền cảm hứng và động lực học tập từ những câu chuyện thật!</li>
      </ul>
    </div>

    <div class="text-center">
      <img
        src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/487405705_967935898860425_5199437901130215916_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE7S_LiTywGP5KBAQLo_fHeTvnoAzXyco9O-egDNfJyj130o09y--x5b79EX3G_CoGwls02c3dgxsrSc3UrZdbp&_nc_ohc=2bwL2Du0QxIQ7kNvwEMEF9V&_nc_oc=Adkn6R9doRTOcILZPX0H6eZoCD2BfjQuerUAxHdNITrNMa3uygaki0KIIgTZ_BG042M&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=Bd0RcKg9G6pMGXw9luhz4w&oh=00_AYFKR45bGcj5l0Dmh4UQ4vQZzKNJdXmna4HMZJ_za7QBtA&oe=67F51A70"
        alt="Talkshow Poster"
        class="img-fluid rounded shadow"
        style="max-width: 600px"
      />
    </div>
  </div>
  <FooterWeb/>
</template>

<script setup>
import { ref } from 'vue';
import HeaderWeb from '../components/HeaderWeb.vue';
import FooterWeb from '@/components/FooterWeb.vue';
import BannerSection from '@/components/BannerSection.vue';

  const isVisible = ref(true);
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
</script>

<style scoped>
/* Không cần thêm style nếu đã dùng Bootstrap */
</style>
