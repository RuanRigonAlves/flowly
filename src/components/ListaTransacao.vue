<template>
  <div>
    <div class="d-flex justify-space-between align-center px-4">
      <p class="font-weight-bold text-secondary">Transacoes recentes</p>
      <v-btn flat class="text-primary font-weight-bold">Ver Todos</v-btn>
    </div>
  </div>

  <v-list>
    <v-list-item v-for="i in 4">
      <div class="d-flex justify-space-between">
        <div>
          <div class="d-flex align-center">
            <v-avatar
              icon="mdi-cart-check"
              class="text-black bg-white mr-2"
              size="60"
            >
            </v-avatar>
            <div>
              <p class="ma-0 font-weight-medium">Mercado</p>
              <p class="ma-0">Data</p>
            </div>
          </div>
        </div>

        <div class="d-flex align-center justify-center flex-column">
          <p class="ma-0 font-weight-medium">Valor</p>
          <p class="ma-0">Tipo</p>
        </div>
      </div>
    </v-list-item>
  </v-list>
</template>
