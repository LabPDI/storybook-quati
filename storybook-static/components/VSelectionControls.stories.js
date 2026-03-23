import { ref } from 'vue';

import VSelectionControlsWrapper from './VSelectionControlsWrapper.vue';

const meta = {
  title: 'Componentes/SelectionControls',
  component: VSelectionControlsWrapper,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['checkbox', 'switch', 'radio'],
    },
    label: { control: 'text' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean', description: 'Apenas para checkbox' },
  },
};

export default meta;

export const Checkbox = {
  args: { type: 'checkbox', label: 'Aceito os termos', color: 'primary', disabled: false, indeterminate: false },
};

export const CheckboxIndeterminate = {
  args: { ...Checkbox.args, indeterminate: true, label: 'Selecionar tudo' },
};

export const Switch = {
  args: { type: 'switch', label: 'Ativar notificações', color: 'primary', disabled: false },
};

export const SwitchSuccess = {
  args: { ...Switch.args, color: 'success', label: 'Modo ativo' },
};

export const Radio = {
  args: { type: 'radio', label: 'Opção', color: 'primary', disabled: true },
};
