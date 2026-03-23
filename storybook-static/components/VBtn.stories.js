import VBtnWrapper from './VBtnWrapper.vue';

const meta = {
  title: 'Componentes/Button',
  component: VBtnWrapper,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Texto do botão' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    variant: {
      control: 'select',
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    rounded: { control: 'boolean' },
    prependIcon: { control: 'text', description: 'Ícone MDI antes do texto (ex: mdi-plus)' },
    appendIcon: { control: 'text', description: 'Ícone MDI após o texto' },
    iconOnly: { control: 'text', description: 'Botão só com ícone (ex: mdi-check)' },
  },
};

export default meta;

export const Default = {
  args: { label: 'Botão', color: 'primary', variant: 'elevated', size: 'default', disabled: false, loading: false, rounded: false },
};

export const Secondary = {
  args: { ...Default.args, color: 'secondary', label: 'Secondary' },
};

export const Outlined = {
  args: { ...Default.args, variant: 'outlined', label: 'Outlined' },
};

export const Tonal = {
  args: { ...Default.args, variant: 'tonal', label: 'Tonal' },
};

export const Small = {
  args: { ...Default.args, size: 'small', label: 'Small' },
};

export const Large = {
  args: { ...Default.args, size: 'large', label: 'Large' },
};

export const WithPrependIcon = {
  args: { ...Default.args, label: 'Adicionar', prependIcon: 'mdi-plus' },
};

export const WithAppendIcon = {
  args: { ...Default.args, label: 'Próximo', appendIcon: 'mdi-arrow-right' },
};

export const IconOnly = {
  args: { ...Default.args, color: 'success', iconOnly: 'mdi-check', label: '' },
};

export const Loading = {
  args: { ...Default.args, loading: true, label: 'Carregando...' },
};

export const Disabled = {
  args: { ...Default.args, disabled: true, label: 'Desabilitado' },
};
