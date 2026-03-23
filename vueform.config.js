import pt_BR from '@vueform/vueform/locales/pt_BR'
import theme from '@vueform/vueform/dist/vueform'
import { defineConfig } from '@vueform/vueform'

export default defineConfig({
  theme,
  validateOn: 'change',
  locales: { pt_BR },
  locale: 'pt_BR',
})