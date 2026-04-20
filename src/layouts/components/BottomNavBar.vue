<template>
  <v-bottom-navigation grow class="bg-backgroundSecondary" elevation="0">
    <v-btn value="home" :to="'/'" variant="plain">
      <v-icon :color="rotaAtual('/') ? 'primary' : 'third'">
        mdi-home-outline
      </v-icon>
    </v-btn>

    <v-btn value="transfer" variant="plain">
      <v-icon
        class="color-primary"
        :color="rotaAtual('/??') ? 'primary' : 'third'"
        >mdi-swap-vertical</v-icon
      >
    </v-btn>

    <v-btn value="add" :to="'/transacao'" variant="plain">
      <v-icon :color="rotaAtual('/transacao') ? 'primary' : 'third'"
        >mdi-plus</v-icon
      >
    </v-btn>

    <v-btn value="help" variant="plain">
      <v-icon :color="rotaAtual('/??') ? 'primary' : 'third'"
        >mdi-note-multiple</v-icon
      >
    </v-btn>

    <v-btn value="profile" variant="plain">
      <v-icon :color="rotaAtual('/??') ? 'primary' : 'third'"
        >mdi-account-outline</v-icon
      >
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const rotaAtual = (path) => route.path === path;
</script>

<style scoped>
.v-icon {
  font-size: 30px;
}
</style>
