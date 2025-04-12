<template>
  <div class="card shadow rounded-4 overflow-hidden">
    <div class="card-header text-center fw-bold py-3 text-dark" :style="gradientStyle" @click="$emit('toggle')" style="cursor: pointer;">
      {{ title }}
    </div>

    <transition name="slide">
      <div v-show="isOpen" class="card-body text-dark small" v-html="content" />
    </transition>
  </div>
</template>
  
  <script setup>
  defineProps({
    title: String,
    content: String,
    isOpen: Boolean,
  });
  
  defineEmits(['toggle']);
  
  const gradientStyle = {
    background: 'linear-gradient(to bottom, #f44336, white)',
  };
  </script>
  
  <style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.4s ease;
    overflow: hidden;
  }
  .slide-enter-from,
  .slide-leave-to {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  .slide-enter-to,
  .slide-leave-from {
    max-height: 1000px;
    opacity: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  </style>
  