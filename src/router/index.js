// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
// import LichSu from '@/views/About/LichSu.vue';
import NhanSu from '@/views/NhanSu.vue';
import TinHoatDong from '@/views/Tinhoatdong.vue';
import ThongBao from '@/views/Thongbao.vue';
// import DaoTao from '@/views/Tuyensinh/DaoTao.vue';
// import ChuanDauRa from '@/views/Tuyensinh/ChuanDauRa.vue';
// import CongTrinhSV from '@/views/Nghiencuu/CongTrinhSV.vue';
// import CongTrinhGV from '@/views/Nghiencuu/CongTrinhGV.vue';

// Tổ Anh văn cơ bản
import VuHoangGiang from '@/components/DSGiangVien/VuHoangGiang.vue'
import NguyenThanhXuan from '@/components/DSGiangVien/NguyenThanhXuan.vue'
import TranDinhKhoa from '@/components/DSGiangVien/TranDinhKhoa.vue'
import TranThiOanhDao from '@/components/DSGiangVien/TranThiOanhDao.vue'
import NguyenDinhThao from '@/components/DSGiangVien/NguyenDinhThao.vue'
import NguyenThiCamTien from '@/components/DSGiangVien/NguyenThiCamTien.vue'

// Tổ Anh văn chuyên ngành
import NguyenThiBaoNgoc from '@/components/DSGiangVien/NguyenThiBaoNgoc.vue'
import DoNgocQuynh from '@/components/DSGiangVien/DoNgocQuynh.vue'
import TranThiHongThi from '@/components/DSGiangVien/TranThiHongThi.vue'
import BuiThiThanhThao from '@/components/DSGiangVien/BuiThiThanhThao.vue'
import VoHoangNhan from '@/components/DSGiangVien/VoHoangNhan.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  // { path: '/about/lich-su', name: 'LichSu', component: LichSu },
  { path: '/about/nhansu', name: 'NhanSu', component: NhanSu },
  { path: '/tintuc/tinhoatdong', name: 'TinHoatDong', component: TinHoatDong },
  { path: '/tintuc/thongbao', name: 'ThongBao', component: ThongBao },
  // { path: '/tuyensinh/dao-tao', name: 'DaoTao', component: DaoTao },
  // { path: '/tuyensinh/chuan-dau-ra', name: 'ChuanDauRa', component: ChuanDauRa },
  // { path: '/nghiencuu/sinh-vien', name: 'CongTrinhSV', component: CongTrinhSV },
  // { path: '/nghiencuu/giang-vien', name: 'CongTrinhGV', component: CongTrinhGV },

  // --- Tổ căn bản ---
  { path: '/vuhoanggiang', name: 'toCanBan-Giang', component: VuHoangGiang},
  { path: '/nguyenthanhxuan', name: 'toCanBan-Xuan', component: NguyenThanhXuan},
  { path: '/trandinhkhoa', name: 'toCanBan-Khoa', component: TranDinhKhoa},
  { path: '/tranthioanhdao', name: 'toCanBan-OanhDao', component: TranThiOanhDao},
  { path: '/nguyendinhthao', name: 'toCanBan-Thao', component: NguyenDinhThao},
  { path: '/nguyenthicamtien', name: 'toCanBan-Tien', component: NguyenThiCamTien},

  // --- Tổ chuyên ngành ---
  { path: '/nguyenthibaongoc', name: 'toChuyenNganh-Ngoc', component: NguyenThiBaoNgoc},
  { path: '/dongocquynh', name: 'toChuyenNganh-Quynh', component: DoNgocQuynh},
  { path: '/tranthihongthi', name: 'toChuyenNganh-Thi', component: TranThiHongThi},
  { path: '/buithithanhthao', name: 'toChuyenNganh-ThanhThao', component: BuiThiThanhThao},
  { path: '/vohoangnhan', name: 'toChuyenNganh-Nhan', component: VoHoangNhan},
];


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
