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
          secondary: "#454545",
          lgray: "#d4d4d4",
          background: "#EEEEEE",
          color1: "#2b8ddd",
          color2: "#2B63DD",
          color3: "#562DD2",
          color4: "#4510A2",
          backgroundSecondary: "#D9D9D9",
          surface: "#EEEEEE",
          // background: "#b1b1b1",
        },
      },
    },
  },
});
