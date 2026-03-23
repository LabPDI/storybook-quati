import FormsShowcase from './Forms.vue';

export default {
  tags: ["!dev"],
  title: 'Overview/Forms',
  component: FormsShowcase,
  parameters: {

    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => ({
    components: { FormsShowcase },
    template: '<FormsShowcase />',
  }),
};
