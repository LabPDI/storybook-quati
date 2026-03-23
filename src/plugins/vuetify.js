/**
 * plugins/vuetify.js
 *
 * Quati Styles Design System — Vuetify Theme Configuration
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Pacote de idioma português
import { pt } from 'vuetify/locale'

// Composables
import { createVuetify } from 'vuetify'

// Tema Quati Styles
const quatiStyles = {
  dark: false,
  colors: {
    background: '#f5f7fa',
    surface: '#ffffff',
    'surface-bright': '#ffffff',
    'surface-light': '#f0f2f5',
    'surface-variant': '#e8eaed',
    'on-surface-variant': '#3c4043',
    primary: '#294964',
    'primary-darken-1': '#0066CC',
    secondary: '#51A8B1',
    'secondary-darken-1': '#4240A8',
    accent: '#F58634',
    error: '#FF3B30',
    info: '#64D2FF',
    success: '#34C759',
    warning: '#FF9F0A',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.08,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.06,
    'hover-opacity': 0.08,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'quatiStyles',
    themes: {
      quatiStyles,
    },
    variations: {
      colors: ['primary', 'secondary', 'accent'],
      lighten: 3,
      darken: 3,
    },
  },
  // Configurações de idioma
  locale: {
    locale: 'pt',
    fallback: 'en',
    messages: { pt },
  },
  defaults: {
    VCard: {
      elevation: 0,
    },
    VBtn: {
      elevation: 0,
    },
    VAppBar: {
      elevation: 0,
    },
    VToolbar: {
      elevation: 0,
    },
    VNavigationDrawer: {
      elevation: 0,
    },
  },
})
