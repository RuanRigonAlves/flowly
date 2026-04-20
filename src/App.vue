<template>
  <v-app class="bg-background">
    <component :is="layouts[route.meta.layout || 'default']">
      <router-view />
    </component>
  </v-app>
</template>

<script setup>
import { useRoute } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const route = useRoute();

const layouts = {
  default: MainLayout,
  auth: AuthLayout,
};
</script>
