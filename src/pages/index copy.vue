<template>
  <v-row class="h-100">
    <v-col cols="6">
      <section class="h-100 d-flex align-center justify-center">
        <div class="layout">
          <div class="d-flex">
            <v-img src="@/assets/logo.png" width="125" height="125"></v-img>
          </div>

          <div class="d-flex flex-column align-center mb-15">
            <div>
              <h1 class="text-secondary">Bem-vindo novamente</h1>
              <p class="text-secondary">Insira suas credencias</p>
            </div>
          </div>

          <div>
            <v-form @submit.prevent>
              <v-text-field
                label="Usuário"
                variant="plain"
                class="border rounded-lg px-1 mb-5"
                density="comfortable"
              ></v-text-field>

              <v-text-field
                label="Senha"
                variant="plain"
                class="border rounded-lg px-1"
                density="comfortable"
              ></v-text-field>

              <v-btn
                class="mt-2 px-0 text-primary d-flex justify-start"
                variant="plain"
                block
              >
                Esqueceu a senha?
              </v-btn>
              <v-btn class="mt-2 px-9 text-white bg-primary" type="submit"
                >Entrar</v-btn
              >
            </v-form>
          </div>
        </div>
      </section>
    </v-col>

    <v-col cols="6" class="bg-primary">
      <v-container class="pa-0 fill-height">
        <v-row class="flex-column fill-height">
          <v-col cols="6">
            <v-img src="@/assets/img-login.png" style="height: 100%"></v-img>
          </v-col>

          <v-col cols="6" class="d-flex justify-center">
            <div
              class="d-flex align-center flex-column ga-12"
              style="font-size: 16pt; max-width: 50%"
            >
              <p>
                Organize seus gastos, acompanhe seus investimentos e tome
                decisões com mais confiança.
              </p>

              <p>
                O <b>Flowly</b> transforma números em clareza para você focar no
                que realmente importa.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup></script>

<style scoped>
h1 {
  font-size: 16pt;
  font-weight: 500;
  margin: 0;
}
p {
  font-family: Inter;
  margin: 0;
}

.layout {
  width: 30%;
}
</style>
