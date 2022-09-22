<template>
  <header class="header">
    <NavBar></NavBar>
  </header>
  <TheLayout>
    <router-view></router-view>
  </TheLayout>
</template>

<script setup>
import "./assets/base.css";
import NavBar from './components/NavBar.vue'
import TheLayout from "./components/TheLayout.vue";
</script>

<style scoped>

</style>
