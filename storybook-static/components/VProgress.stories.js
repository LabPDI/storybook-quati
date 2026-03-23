import { ref } from 'vue';

import VProgressWrapper from './VProgressWrapper.vue';

const meta = {
  title: 'Componentes/Progress',
  component: VProgressWrapper,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    value: { control: { type: 'range', min: 0, max: 100 }, description: 'Valor (0-100)' },
    bufferValue: { control: { type: 'range', min: 0, max: 100 }, description: 'Buffer da barra linear' },
    size: { control: { type: 'range', min: 24, max: 128 }, description: 'Tamanho do circular' },
    width: { control: { type: 'range', min: 1, max: 16 }, description: 'Espessura do circular' },
    linearHeight: { control: { type: 'range', min: 4, max: 32 }, description: 'Altura da barra linear' },
    indeterminate: { control: 'boolean' },
    rounded: { control: 'boolean' },
    striped: { control: 'boolean' },
    stream: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    color: 'primary',
    value: 65,
    bufferValue: 80,
    size: 56,
    width: 5,
    linearHeight: 8,
    indeterminate: false,
    rounded: true,
    striped: false,
    stream: false,
  },
};

export const Indeterminate = {
  args: { ...Default.args, indeterminate: true },
};

export const Success = {
  args: { ...Default.args, color: 'success', value: 100 },
};

export const Striped = {
  args: { ...Default.args, striped: true, value: 72 },
};

export const LargeCircular = {
  args: { ...Default.args, size: 100, width: 10, value: 80, color: 'secondary' },
};
