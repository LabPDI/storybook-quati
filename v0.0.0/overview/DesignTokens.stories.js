import DesignTokens from './DesignTokens.vue';

export default {
  tags: ["!dev"],
  title: 'Overview/Design Tokens',
  component: DesignTokens,
  parameters: {

    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => ({
    components: { DesignTokens },
    template: '<DesignTokens />',
  }),
};
