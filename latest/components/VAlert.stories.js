import VAlertWrapper from './VAlertWrapper.vue';

const meta = {
  title: 'Componentes/Alert',
  component: VAlertWrapper,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    variant: {
      control: 'select',
      options: ['flat', 'tonal', 'outlined', 'text', 'elevated'],
    },
    title: { control: 'text' },
    text: { control: 'text' },
    closable: { control: 'boolean' },
    prominent: { control: 'boolean' },
    border: {
      control: 'select',
      options: ['', 'top', 'bottom', 'start', 'end'],
      description: 'Borda colorida lateral',
    },
  },
  parameters: {
    docs: {
      source: {
        transform: (code) => code.replace(/VAlertWrapper/g, 'v-alert'),
      },
    },
  },
};

export default meta;

export const Success = {
  args: { type: 'success', variant: 'tonal', title: 'Sucesso', text: 'Ação realizada com sucesso.', closable: false, prominent: false },
};

export const Info = {
  args: { ...Success.args, type: 'info', title: 'Informação', text: 'Aqui está uma informação importante.' },
};

export const Warning = {
  args: { ...Success.args, type: 'warning', variant: 'outlined', title: 'Atenção', text: 'Cuidado ao executar esta ação.' },
};

export const Error = {
  args: { ...Success.args, type: 'error', variant: 'flat', title: 'Erro', text: 'Algo deu errado!' },
};

export const Prominent = {
  args: { ...Success.args, prominent: true, title: 'Destaque', text: 'Alert em modo prominent.' },
};

export const WithBorder = {
  args: { ...Success.args, border: 'start', title: 'Com Borda', text: 'Border lateral colorida.' },
};

export const Closable = {
  args: { ...Success.args, closable: true, title: 'Fechável', text: 'Clique no X para fechar.' },
};
