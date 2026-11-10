<template>
  <div class="app-wrapper">
    <Navbar />
    <Sidebar />
    <main class="app-main">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
</script>
