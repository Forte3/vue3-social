<template>
  <header class="header">
    <NavBar></NavBar>
  </header>
  <router-view></router-view>
</template>

<script setup>
import "./assets/base.css";
import NavBar from './components/NavBar.vue'
import TheIcon from "./components/TheIcon.vue";
</script>

<style scoped>

</style>
