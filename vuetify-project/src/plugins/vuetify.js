/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify';

const myTheme = {
  dark: false,
  colors: {
    background: '#DDD8D4',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    //defaultTheme: 'dark',
   
  },
})

 /*
// defaultTheme: 'myTheme',
// themes:{
//   myTheme,
// }
*/