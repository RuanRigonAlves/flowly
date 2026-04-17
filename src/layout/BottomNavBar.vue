<template>
  <v-bottom-navigation grow class="elevation-2">
    <v-btn value="home">
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn value="transfer">
      <v-icon>mdi-swap-vertical</v-icon>
    </v-btn>

    <v-btn value="add">
      <div class="center-btn">
        <v-icon>mdi-plus</v-icon>
      </div>
    </v-btn>

    <v-btn value="help">
      <span>??</span>
    </v-btn>

    <v-btn value="profile">
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
