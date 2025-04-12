<template>
  <HeaderWeb/>
  <BannerSection/>
  <div class="container my-5">
    <div class="card shadow-lg p-4">
      <h2 class="text-danger text-center mb-4">📢 Thông báo mới cho nhà trường</h2>

      <transition name="fade">
        <div v-if="isVisible">
          <p class="fw-bold">🎤 TALKSHOW “Foreign Language Skills – Global Opportunities”</p>
          <ul class="list-unstyled ms-3">
            <li>✅ Bạn gặp khó khăn khi học ngoại ngữ?</li>
            <li>✅ Bạn thiếu tự tin khi giao tiếp tiếng Anh hoặc tiếng Hàn?</li>
            <li>✅ Bạn cần phương pháp học thực tế và hiệu quả?</li>
            <li>🔥 Đừng bỏ lỡ talkshow đặc biệt này!</li>
          </ul>

          <p class="fw-bold">Điểm nhấn của sự kiện:</p>
          <ul class="list-unstyled ms-3">
            <li>✨ Diễn giả giàu kinh nghiệm trong lĩnh vực ngoại ngữ</li>
            <li>✨ Mẹo học nhanh – nhớ lâu – ứng dụng được ngay</li>
            <li>✨ Giao lưu – thực hành trực tiếp cùng khách mời</li>
            <li>✨ Truyền cảm hứng từ những câu chuyện thực tế</li>
          </ul>

          <div class="text-center my-4">
            <img
              :src="imageUrl"
              class="img-fluid rounded shadow"
              alt="Talkshow Poster"
              @error="imageError"
              style="max-height: 500px"
            />
          </div>
        </div>
      </transition>

      <div class="text-center">
        <button @click="toggleVisibility" class="btn btn-primary">
          {{ isVisible ? 'Ẩn thông báo' : 'Xem thông báo' }}
        </button>
      </div>
    </div>
  </div>
  <FooterWeb/>
</template>

<script  setup>
import { ref } from 'vue';
import HeaderWeb from '../components/HeaderWeb.vue';
import FooterWeb from '@/components/FooterWeb.vue';
import BannerSection from '@/components/BannerSection.vue';
    const isVisible = ref(true);
    const imageUrl = ref(
      'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/487405705_967935898860425_5199437901130215916_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=zFyZzSWTME4AX-K3_Q5&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfD1RODoN3V60lRW4rzY53W6sDPaIuTBaNsLFM5O2A2EPQ&oe=661EBD04'
    );

    const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };

    const imageError = () => {
      imageUrl.value = 'https://via.placeholder.com/800x400?text=Ảnh+không+tải+được';
    };
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
