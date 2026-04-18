<template>
  <v-bottom-navigation grow class="bg-backgroundSecondary" elevation="0">
    <v-btn value="home">
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn value="transfer">
      <v-icon>mdi-swap-vertical</v-icon>
    </v-btn>

    <v-btn value="add" icon="mdi-plus">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn value="help">
      <v-icon>mdi-note-multiple</v-icon>
    </v-btn>

    <v-btn value="profile">
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
.v-icon {
  font-size: 30px;
  color: #454545;
}
.v-btn {
  height: 60px;
  width: 70px;
}
</style>
