/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'lucide-static/font/lucide.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { h } from 'vue'

const myLightTheme = {
  dark: false,
  colors: {
    primary: '#6366f1',
    secondary: '#6b7280',
    datastore: '#E74694'
    /*    error: '',
    info: '',
    success: '',
    warning: ''*/
  },
  variables: {}
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const customAliases = aliases
//customAliases.checkboxOn = 'lucide:check'
export default createVuetify({
  theme: {
    defaultTheme: 'myLight',
    themes: {
      myLight: myLightTheme
    },
    variations: {
      colors: ['primary', 'secondary', 'datastore'],
      lighten: 5,
      darken: 5
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      lucide: {
        component: (props) => h(props.tag, { class: [`icon-${props.icon}`] })
      }
    }
  }
})
