import VCardWrapper from './VCardWrapper.vue';

const meta = {
  title: 'Componentes/Card',
  component: VCardWrapper,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text'],
    },
    color: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    elevation: { control: { type: 'range', min: 0, max: 24 } },
    rounded: {
      control: 'select',
      options: ['0', 'sm', 'md', 'lg', 'xl', 'pill'],
    },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    text: { control: 'text' },
    width: { control: 'text', description: 'Ex: 400 ou 100%' },
    loading: { control: 'boolean' },
  },
};

export default meta;

const baseArgs = {
  title: 'Título do Card',
  subtitle: 'Subtítulo',
  text: 'Este é o conteúdo principal do card.',
  variant: 'elevated',
  color: '',
  elevation: 2,
  rounded: 'md',
  loading: false,
  width: '380',
};

export const Elevated = { args: { ...baseArgs } };

export const Outlined = {
  args: { ...baseArgs, variant: 'outlined', elevation: 0 },
};

export const Tonal = {
  args: { ...baseArgs, variant: 'tonal', color: 'primary', elevation: 0 },
};

export const Flat = {
  args: { ...baseArgs, variant: 'flat', elevation: 0 },
};

export const Loading = {
  args: { ...baseArgs, loading: true },
};

export const HighElevation = {
  args: { ...baseArgs, elevation: 12 },
};
