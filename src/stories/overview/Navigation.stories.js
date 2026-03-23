import NavigationShowcase from './Navigation.vue';

export default {
  tags: ["!dev"],
  title: 'Overview/Navigation',
  component: NavigationShowcase,
  parameters: {

    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => ({
    components: { NavigationShowcase },
    template: '<NavigationShowcase />',
  }),
};
