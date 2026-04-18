<template>
  <top-nav-bar></top-nav-bar>
  <v-container>
    <div class="ma-0">
      <h1 class="ma-0">Saldo</h1>
      <p class="ma-0">R$ 9999,99</p>
    </div>
  </v-container>

  <carousel></carousel>

  <div>
    <div class="d-flex justify-space-between align-center px-4">
      <p class="font-weight-bold text-secondary">Transacoes recentes</p>
      <v-btn flat class="text-primary font-weight-bold">Ver Todos</v-btn>
    </div>
  </div>

  <lista-transacao></lista-transacao>

  <bottom-nav-bar></bottom-nav-bar>
</template>

<script setup>
import Carousel from "@/components/Carousel.vue";
import ListaTransacao from "@/components/ListaTransacao.vue";
import BottomNavBar from "@/layout/components/BottomNavBar.vue";
import TopNavBar from "@/layout/components/TopNavBar.vue";
</script>
