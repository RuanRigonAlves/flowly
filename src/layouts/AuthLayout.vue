<template>
  <v-main class="fill-height">
    <router-view></router-view>
  </v-main>
</template>
<script setup>
defineOptions({
  meta: {
    layout: "auth",
  },
});
</script>
