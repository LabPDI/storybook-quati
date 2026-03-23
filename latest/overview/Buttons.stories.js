import ButtonsShowcase from './Buttons.vue';

export default {
  tags: ["!dev"],
  title: 'Overview/Buttons',
  component: ButtonsShowcase,
  parameters: {
     
    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => ({
    components: { ButtonsShowcase },
    template: '<ButtonsShowcase />',
  }),
};
