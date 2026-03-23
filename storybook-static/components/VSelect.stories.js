import VSelectWrapper from './VSelectWrapper.vue';

const meta = {
  title: 'Componentes/Select',
  component: VSelectWrapper,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['select', 'autocomplete'],
      description: 'Tipo de seletor',
    },
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'underlined', 'solo'],
    },
    items: {
      control: 'text',
      description: 'Itens separados por vírgula',
    },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    multiple: { control: 'boolean' },
    chips: { control: 'boolean', description: 'Exibe itens selecionados como chips' },
    prependInnerIcon: { control: 'text' },
  },
};

export default meta;

export const Default = {
  args: {
    type: 'select',
    label: 'Selecione uma opção',
    variant: 'outlined',
    items: 'Opção 1, Opção 2, Opção 3',
    disabled: false,
    clearable: false,
    multiple: false,
    chips: false,
  },
};

export const Autocomplete = {
  args: { ...Default.args, type: 'autocomplete', label: 'Buscar Fruta', items: 'Maçã, Banana, Cereja, Uva, Laranja' },
};

export const MultipleWithChips = {
  args: { ...Default.args, multiple: true, chips: true, label: 'Múltipla escolha' },
};

export const Clearable = {
  args: { ...Default.args, clearable: true },
};

export const Disabled = {
  args: { ...Default.args, disabled: true },
};
