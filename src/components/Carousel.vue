<template>
  <v-carousel hide-delimiters show-arrows="hover" height="270px">
    <v-carousel-item
      v-for="(card, index) in cards"
      :key="index"
      :class="[card.bg, 'mx-4', 'rounded-lg']"
    >
      <div
        class="fill-height pa-10 text-white d-flex justify-space-between flex-column"
      >
        <div class="d-flex justify-space-between align-center">
          <div>
            <h2 class="ma-0">{{ card.title }}</h2>
            <p class="ma-0">{{ card.subtitle }}</p>
          </div>

          <v-icon :class="card.iconColor" :icon="card.icon" size="40" />
        </div>

        <div class="d-flex justify-space-between align-center">
          <div>
            <h2 class="ma-0 font-weight-regular">Valor</h2>
            <p class="ma-0 font-weight-bold" style="font-size: 16pt">
              {{ card.value }}
            </p>
          </div>

          <v-icon icon="mdi-cog" size="40" />
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const cards = [
  {
    title: "Entradas",
    subtitle: "Mensal",
    value: "R$ 9999,99",
    icon: "mdi-arrow-up-bold",
    iconColor: "text-green",
    bg: "bg-color1",
  },
  {
    title: "Saidas",
    subtitle: "Mensal",
    value: "R$ -9999,99",
    icon: "mdi-arrow-down-bold",
    iconColor: "text-red",
    bg: "bg-color2",
  },
  {
    title: "Planejamento",
    subtitle: "Mensal",
    value: "R$ 9999,99",
    icon: "mdi-notebook-multiple",
    iconColor: "",
    bg: "bg-color3",
  },
];
</script>
