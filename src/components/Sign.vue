<script setup>
import { ref } from 'vue';

import { defineEmits } from 'vue';


const emit = defineEmits(['close'])
const isLogin = ref(true);
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};

const handleSubmit = () => {
  if (!isLogin.value && password.value !== confirmPassword.value) {
    alert("Mật khẩu xác nhận không khớp!");
    return;
  }
  alert(isLogin.value ? "Đăng nhập thành công!" : "Đăng ký thành công!");
};
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <button class="close-btn" @click="emit('close')">X</button>
      <h2>{{ isLogin ? "Đăng nhập" : "Đăng ký" }}</h2>
      <form @submit.prevent="handleSubmit">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Mật khẩu" required />
        <input v-if="!isLogin" v-model="confirmPassword" type="password" placeholder="Xác nhận mật khẩu" required />
        <button type="submit">{{ isLogin ? "Đăng nhập" : "Đăng ký" }}</button>
      </form>
      <p @click="toggleForm">
        {{ isLogin ? "Chưa có tài khoản? Đăng ký ngay!" : "Đã có tài khoản? Đăng nhập!" }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 450px;
  height: 350px;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
button {
  padding: 10px;
  width: 100%;
  cursor: pointer;
  background: #00b147;
}
p {
  cursor: pointer;
  color: blue;
}
.close-btn{
    position: absolute;
    border: none;
    outline: none;
    width: 10%;
    left: 380px;
    top: 10px;
    background: #00b147;
}
</style>
