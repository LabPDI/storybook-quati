import InstallationPage from './InstallationPage.vue';

export default {
  tags: ["!dev"],
  title: 'Documentos/Guia de Instalação',
  component: InstallationPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const TemplateBase = {
  render: () => ({
    components: { InstallationPage },
    template: '<InstallationPage />',
  }),
};
