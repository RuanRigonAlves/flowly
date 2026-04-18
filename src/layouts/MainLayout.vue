<template>
  <top-nav-bar></top-nav-bar>

  <v-main class="fill-height">
    <router-view> </router-view>
  </v-main>

  <bottom-nav-bar></bottom-nav-bar>
</template>

<script setup>
import BottomNavBar from "@/layouts/components/BottomNavBar.vue";
import TopNavBar from "@/layouts/components/TopNavBar.vue";
</script>
