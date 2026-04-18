<template>
  <v-app-bar elevation="0">
    <v-btn>
      <div class="logo-box d-flex align-center justify-center">
        <v-img src="@/assets/nav-logo.png" width="45" contain />
      </div>

      <v-toolbar-title class="d-flex align-center ml-3">
        <span class="text-primary font-weight-medium">Flowly</span>
      </v-toolbar-title>
    </v-btn>

    <v-spacer />

    <v-app-bar-nav-icon />
  </v-app-bar>
</template>
