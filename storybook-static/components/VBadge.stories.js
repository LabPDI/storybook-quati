import { ref } from 'vue';

import VBadgeWrapper from './VBadgeWrapper.vue';

const meta = {
  title: 'Componentes/Badge',
  component: VBadgeWrapper,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['error', 'success', 'warning', 'info', 'primary', 'secondary'],
    },
    content: { control: 'text', description: 'Texto/número dentro do badge' },
    dot: { control: 'boolean', description: 'Exibe como ponto (sem conteúdo)' },
    floating: { control: 'boolean' },
    overlap: { control: 'boolean' },
    bordered: { control: 'boolean' },
    location: {
      control: 'select',
      options: ['top end', 'top start', 'bottom end', 'bottom start'],
    },
  },
};

export default meta;

export const Default = {
  args: {
    color: 'error',
    content: '5',
    dot: false,
    floating: false,
    overlap: true,
    bordered: false,
    location: 'top end',
  },
};

export const Dot = {
  args: { ...Default.args, dot: true, color: 'success' },
};

export const Large = {
  args: { ...Default.args, content: '99+' },
};

export const Bordered = {
  args: { ...Default.args, bordered: true },
};

export const BottomEnd = {
  args: { ...Default.args, location: 'bottom end', color: 'success', dot: true },
};
