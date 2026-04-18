<template>
  <div class="d-flex justify-space-between align-center pr-4">
    <v-card width="" flat>
      <v-card-title class="font-weight-medium text-third">Saldo</v-card-title>
      <v-card-text
        style="font-size: 19pt"
        class="font-weight-medium text-secondary"
        >R$ 9999,99</v-card-text
      >
    </v-card>

    <div class="h-100 bg-white">
      <v-btn
        icon="mdi-card-multiple"
        class="bg-primary"
        size="55"
        elevation="0"
        rounded
      ></v-btn>
      <v-btn
        icon="mdi-chart-box"
        class="bg-white"
        size="55"
        rounded
        elevation="0"
      ></v-btn>
    </div>
  </div>

  <carousel></carousel>

  <lista-transacao></lista-transacao>
</template>

<script setup>
import Carousel from "@/components/Carousel.vue";
import ListaTransacao from "@/components/ListaTransacao.vue";
</script>
