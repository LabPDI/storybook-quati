import ConfigureQuati from './ConfigureQuati.vue';

export default {
  tags: ["!dev"],
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
