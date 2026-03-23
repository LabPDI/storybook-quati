import VTextFieldWrapper from './VTextFieldWrapper.vue';

const meta = {
  title: 'Componentes/TextField',
  component: VTextFieldWrapper,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text', description: 'Texto de ajuda abaixo do campo' },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'underlined', 'solo', 'plain'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    clearable: { control: 'boolean' },
    prependInnerIcon: { control: 'text', description: 'Ícone MDI interno à esquerda' },
    appendInnerIcon: { control: 'text', description: 'Ícone MDI interno à direita' },
    errorMessage: { control: 'text', description: 'Mensagem de erro' },
  },
};

export default meta;

export const Default = {
  args: { label: 'Campo de texto', variant: 'filled', placeholder: 'Digite aqui...', disabled: false, readonly: false, clearable: false },
};

export const Outlined = {
  args: { ...Default.args, variant: 'outlined', label: 'Outlined' },
};

export const Underlined = {
  args: { ...Default.args, variant: 'underlined', label: 'Underlined' },
};

export const WithHint = {
  args: { ...Default.args, variant: 'outlined', hint: 'Este campo é obrigatório', label: 'Email' },
};

export const WithIcon = {
  args: { ...Default.args, variant: 'outlined', prependInnerIcon: 'mdi-email', label: 'Email' },
};

export const WithError = {
  args: { ...Default.args, variant: 'outlined', errorMessage: 'Este campo é obrigatório', label: 'Nome' },
};

export const Disabled = {
  args: { ...Default.args, variant: 'outlined', disabled: true, label: 'Desabilitado' },
};

export const Password = {
  args: { ...Default.args, variant: 'outlined', type: 'password', label: 'Senha', appendInnerIcon: 'mdi-eye' },
};

export const Clearable = {
  args: { ...Default.args, variant: 'outlined', clearable: true, label: 'Pesquisa', prependInnerIcon: 'mdi-magnify' },
};
