/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from "vuetify";
// Styles
import "@mdi/font/css/materialdesignicons.css";

import "../styles/layers.css";
import "vuetify/styles";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#1377C9",
          secondary: "#373737",
          lgray: "#d4d4d4",
          background: "#EEEEEE",
          backgroundSecondary: "#D9D9D9",
          surface: "#EEEEEE",
          // background: "#b1b1b1",
        },
      },
    },
  },
});
