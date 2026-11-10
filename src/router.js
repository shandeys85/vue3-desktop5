import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import Beranda from './Beranda.vue';
import TanggalLahir from './TanggalLahir.vue';
import JsonOnline from './JsonOnline.vue';

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', name: 'Beranda', component: Beranda },
      { path: 'tanggal', name: 'TanggalLahir', component: TanggalLahir },
      { path: 'jsononline', name: 'JsonOnline', component: JsonOnline }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
