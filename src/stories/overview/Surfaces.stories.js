import SurfacesShowcase from './Surfaces.vue';

export default {
  tags: ["!dev"],
  title: 'Overview/Surfaces',
  component: SurfacesShowcase,
  parameters: {

    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => ({
    components: { SurfacesShowcase },
    template: '<SurfacesShowcase />',
  }),
};
