<template>
  <v-carousel hide-delimiters show-arrows="hover" height="270px">
    <v-carousel-item class="bg-primary mx-4 rounded-lg" v-for="i in 3">
      <div
        class="fill-height pa-10 text-white d-flex justify-space-between flex-column"
      >
        <div class="d-flex justify-space-between align-center">
          <div>
            <h2 class="ma-0">Entradas</h2>
            <p class="ma-0">Mensal</p>
          </div>

          <div>
            <v-icon icon="mdi-arrow-up-bold" size="40"> </v-icon>
          </div>
        </div>

        <div class="d-flex justify-space-between align-center">
          <div>
            <h2 class="ma-0 font-weight-regular">Valor</h2>
            <p class="ma-0 font-weight-bold" style="font-size: 16pt">
              RS 9999,99
            </p>
          </div>

          <div>
            <v-icon icon="mdi-cog" size="40"></v-icon>
          </div>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
