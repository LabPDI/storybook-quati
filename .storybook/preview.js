import { setup } from '@storybook/vue3';
import vuetify from '../src/plugins/vuetify';
import pinia from '../src/stores';
import '../src/styles/quati-styles/index.scss';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';

// Registra apenas Vuetify e Pinia — router e matomo usam módulos virtuais
// do Vite (vue-router/auto, virtual:generated-layouts) que não existem no Storybook
setup((app) => {
  app.use(vuetify);
  app.use(pinia);
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  decorators: [withVuetifyTheme],
  parameters: {
    options: {
      storySort: {
        order: ['Documentos', 'Overview', 'Páginas Exemplo', 'Componentes'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;