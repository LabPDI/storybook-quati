import ConfigureQuati from './ConfigureQuati.vue';

export default {
  title: 'Interno/Home Page',
  component: ConfigureQuati,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => ({
    components: { ConfigureQuati },
    template: '<ConfigureQuati />',
  }),
};
