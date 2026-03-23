import QuatiMascot from '../../components/QuatiMascot.vue';

export default {
  tags: ["!dev"],
  title: 'Componentes/QuatiMascot',
  component: QuatiMascot,
  argTypes: {
    state: {
      control: 'select',
      options: ['idle', 'hover', 'entrance'],
    },
  },
};

export const DefaultIdle = {
  args: {
    state: 'idle',
  },
};

export const HoverState = {
  args: {
    state: 'hover',
  },
};

export const EntranceAnimation = {
  args: {
    state: 'entrance',
  },
};
