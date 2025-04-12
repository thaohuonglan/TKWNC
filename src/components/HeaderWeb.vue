<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-white shadow-sm py-2 sticky-top">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="https://cdn.haitrieu.com/wp-content/uploads/2023/01/Logo-Truong-Cao-dang-Kinh-te-TP.HCM_.png" alt="Logo" class="me-2" />
        </a>

        <!-- Hamburger button -->
        <button class="btn d-lg-none" @click="toggleSidebar">
          ☰
        </button>

        <!-- Menu items (Desktop only) -->
        <ul class="navbar-nav mx-auto d-none d-lg-flex gap-4">
          <li v-for="(item, index) in navItems" :key="index"
            class="nav-item dropdown"
            @mouseenter="showDropdown(index)"
            @mouseleave="hideDropdown">
            <template v-if="item.to">
              <router-link
                class="nav-link fw-bold"
                :to="item.to"
                :class="{ active: isActive(item) }"
                @click="setActive(index)"
              >
                {{ item.title }}
              </router-link>
            </template>
            <template v-else>
              <span class="nav-link fw-bold">{{ item.title }}</span>
            </template>

            <!-- Dropdown menu -->
            <ul
              v-if="item.children"
              class="dropdown-menu show"
              :style="{ display: dropdownIndex === index ? 'block' : 'none' }"
            >
              <li v-for="(child, idx) in item.children" :key="idx">
                <router-link
                  v-if="child.to"
                  class="dropdown-item"
                  :to="child.to"
                >
                  {{ child.name }}
                </router-link>
                <span v-else class="dropdown-item">{{ child.name }}</span>
              </li>
            </ul>
          </li>
        </ul>

        <!-- Search + icons -->
        <div class="d-flex align-items-center gap-2">
          <input class="form-control" placeholder="Tìm kiếm..." />
          <button class="btn btn-success">🔍</button>
          <Sign v-if="ShowSign" @close="ShowSign = false" />
          <button @click="ShowSign = true" class="btn btn-success">👤</button>
        </div>
      </div>
    </nav>

    <!-- Sidebar (Mobile) -->
    <div class="sidebar bg-white shadow" :class="{ open: sidebarOpen }">
      <div class="d-flex justify-content-between p-3 border-bottom">
        <strong>Menu</strong>
        <button class="btn-close" @click="toggleSidebar"></button>
      </div>
      <ul class="list-group list-group-flush">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="list-group-item"
        >
          <div>
            <template v-if="item.to">
              <router-link
                :to="item.to"
                class="fw-bold text-decoration-none"
                @click="setActive(index); toggleSidebar()"
              >
                {{ item.title }}
              </router-link>
            </template>
            <template v-else>
              <span class="fw-bold text-decoration-none">{{ item.title }}</span>
            </template>

            <!-- Accordion dropdown -->
            <ul v-if="item.children" class="ps-3 mt-2">
              <li
                v-for="(child, i) in item.children"
                :key="i"
                class="text-muted small py-1"
              >
                <router-link
                  v-if="child.to"
                  :to="child.to"
                  class="fw-bold text-decoration-none"
                  @click="toggleSidebar()"
                >
                  {{ child.name }}
                </router-link>
                <span v-else class="text-decoration-none">{{ child.name }}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <!-- Overlay -->
    <div v-if="sidebarOpen" class="sidebar-overlay" @click="toggleSidebar"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sign from './Sign.vue';
import { useRoute } from 'vue-router';

const ShowSign = ref(false);
const activeIndex = ref(0);
const sidebarOpen = ref(false);
const dropdownIndex = ref(null);

const route = useRoute();

const navItems = [
  {
    title: 'Trang chủ',
    to: '/'
  },
  {
    title: 'Giới thiệu',
    to: '/about',
    children: [
      { name: 'Lịch sử hình thành', to: '/about' },
      { name: 'Đội ngũ nhân sự', to: '/about/nhansu' }
    ]
  },
  {
    title: 'Tin tức',
    to: '/tintuc/tinhoatdong',
    children: [
      { name: 'Tin hoạt động', to: '/tintuc/tinhoatdong' },
      { name: 'Thông báo', to: '/tintuc/thongbao' }
    ]
  },
  {
    title: 'Tuyển sinh',
    to: '/tuyensinh',
    children: [
      { name: 'Chương trình đào tạo', to: '/tuyensinh/chuongtrinhdaotao'},
      { name: 'Chuẩn đầu ra', to: '/tuyensinh/chuandaura' }
    ]
  },
  {
    title: 'Nghiên cứu',
    to: '',
    children: [
      { name: 'Công trình SV', to: '' },
      { name: 'Công trình GV', to: '' }
    ]
  }
];

// Xác định menu nào đang active dựa vào route
const isActive = (item) => {
  if (!item.to) return false;
  return route.path === item.to || route.path.startsWith(item.to + '/');
};

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}
function setActive(index) {
  activeIndex.value = index;
  dropdownIndex.value = null;
}
function showDropdown(index) {
  dropdownIndex.value = index;
}
function hideDropdown() {
  dropdownIndex.value = null;
}
</script>

<style scoped>
img {
  z-index: 100;
  width: 45px;
}

/* Dropdown fix for hover (desktop) */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
}

/* Sidebar styles (mobile) */
.sidebar {
  position: fixed;
  top: 0;
  left: -260px;
  width: 260px;
  height: 100vh;
  overflow-y: auto;
  transition: left 0.3s ease;
  z-index: 1050;
}
.sidebar.open {
  left: 0;
}

/* Overlay */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1040;
}
.nav-item{
  cursor: pointer;
}

/* Active tab underline */
.nav-link.active {
  color: #198754 !important;
  border-bottom: 2px solid #198754;
}
</style>
