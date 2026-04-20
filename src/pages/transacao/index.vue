<template>
  <v-stepper v-model="step" class="fill-height" editable="">
    <v-stepper-header>
      <v-stepper-item :value="1"> </v-stepper-item>
      <v-stepper-item :value="2"> </v-stepper-item>
      <v-stepper-item :value="3"> </v-stepper-item>
    </v-stepper-header>

    <v-stepper-window>
      <!-- Step 1 -->
      <v-stepper-window-item :value="1">
        <v-radio-group v-model="form.tipo">
          <stepper-card-tipo
            :tipo="'entrada'"
            @click="
              () => {
                ((form.tipo = 'entrada'), nextStep());
              }
            "
          >
          </stepper-card-tipo>

          <stepper-card-tipo
            :tipo="'saida'"
            @click="
              () => {
                ((form.tipo = 'saida'), nextStep());
              }
            "
          >
          </stepper-card-tipo>
        </v-radio-group>
      </v-stepper-window-item>

      <!-- Step 2 -->
      <v-stepper-window-item :value="2">
        <v-card class="d-flex flex-wrap ga-8 pl-2" elevation="0">
          <v-btn
            v-for="cat in categoriasFiltradas"
            :key="cat"
            @click="selecionarCategoria(cat)"
            class="bg-color1"
            height="180"
            width="180"
          >
            <v-card
              class="d-flex flex-column justify-center align-center bg-transparent text-background"
              elevation="0"
            >
              <v-icon :icon="cat.icone" size="75"></v-icon>
              <p style="font-size: 18pt">
                {{ cat.nome }}
              </p>
            </v-card>
          </v-btn>
        </v-card>
      </v-stepper-window-item>

      <!-- Step 3 -->
      <v-stepper-window-item :value="3">
        <v-text-field v-model="form.infos.nome" label="Nome"></v-text-field>
        <v-text-field v-model="form.infos.valor" label="valor"></v-text-field>
        <v-text-field v-model="form.infos.data" label="data"></v-text-field>
        <v-btn @click="submit">Adicionar</v-btn>
      </v-stepper-window-item>
    </v-stepper-window>
  </v-stepper>
</template>

<script setup>
import StepperCardTipo from "@/components/stepper/StepperCardTipo.vue";
import { ref, computed } from "vue";

const step = ref(1);

const form = ref({
  tipo: null,
  categoria: {
    nome: "",
    icone: "",
  },
  infos: {
    nome: "",
    valor: "",
    data: "",
  },
});

const categorias = {
  entrada: [
    { nome: "Salario", icone: "mdi-cash" },
    { nome: "Investimento", icone: "mdi-cash-clock" },
  ],
  saida: [
    { nome: "Mercado", icone: "mdi-shopping" },
    { nome: "Restaurante", icone: "mdi-food" },
    { nome: "Contas", icone: "mdi-cash-sync" },
  ],
};

const categoriasFiltradas = computed(() => {
  return categorias[form.value.tipo] || [];
});

function nextStep() {
  step.value++;
}
function prevStep() {
  step.value--;
}

function submit() {
  console.log(form.value);
}

function selecionarCategoria(categoria) {
  form.value.categoria = categoria;
  nextStep();
}
</script>
