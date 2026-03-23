import FeedbackShowcase from './Feedback.vue';

export default {
  tags: ["!dev"],
  title: 'Overview/Feedback & Indicators',
  component: FeedbackShowcase,
  parameters: {

    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => ({
    components: { FeedbackShowcase },
    template: '<FeedbackShowcase />',
  }),
};
