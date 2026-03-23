import { ref } from 'vue';

import VPaginationWrapper from './VPaginationWrapper.vue';

const meta = {
  parameters: {
    docs: {
      source: {
        transform: (code) => code.replace(/VPaginationWrapper/g, 'v-pagination'),
      },
    },
  },

  title: 'Componentes/Pagination',
  component: VPaginationWrapper,
  tags: ['autodocs'],
  argTypes: {
    length: { control: { type: 'range', min: 1, max: 20 } },
    totalVisible: { control: { type: 'range', min: 1, max: 10 } },
    modelValue: { control: { type: 'range', min: 1, max: 20 } },
    rounded: {
      control: 'select',
      options: ['0', 'sm', 'md', 'lg', 'circle', 'pill'],
    },
    variant: {
      control: 'select',
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined'],
    },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
    },
    color: { control: 'color' },
    activeColor: { control: 'color' },
    disabled: { control: 'boolean' },
    showFirstLast: { control: 'boolean', description: 'Exibe botões de primeira/última página' },
  },
};

export default meta;

export const Default = {
  args: {
    length: 10,
    modelValue: 1,
    rounded: 'md',
    variant: 'text',
    density: 'default',
    totalVisible: 7,
    disabled: false,
    showFirstLast: false,
  },
};

export const Circular = {
  args: { ...Default.args, rounded: 'circle' },
};

export const Outlined = {
  args: { ...Default.args, variant: 'outlined' },
};

export const WithFirstLast = {
  args: { ...Default.args, showFirstLast: true, length: 20 },
};

export const Compact = {
  args: { ...Default.args, density: 'compact' },
};
