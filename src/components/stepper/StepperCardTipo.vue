<template>
  <v-card height="250" elevation="0" class="bg-color1 mb-5">
    <div class="d-flex justify-center align-center h-100 flex-column">
      <v-icon
        :icon="
          tipo === 'entrada' ? ' mdi-arrow-up-bold' : 'mdi-arrow-down-bold'
        "
        :class="tipo === 'entrada' ? 'text-green' : 'text-red'"
        size="45"
      >
      </v-icon>
      <h1 class="ma-0">{{ tipo }}</h1>
    </div>
  </v-card>
</template>

<script setup>
const props = defineProps(["tipo"]);
</script>
