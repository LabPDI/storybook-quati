import { ref } from 'vue';

import VTabsWrapper from './VTabsWrapper.vue';

const meta = {
  parameters: {
    docs: {
      source: {
        transform: (code) => code.replace(/VTabsWrapper/g, 'v-tabs'),
      },
    },
  },

  title: 'Componentes/Tabs',
  component: VTabsWrapper,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'text',
      description: 'Nomes das abas separados por vírgula',
    },
    bgColor: {
      control: 'select',
      options: ['surface', 'primary', 'secondary', 'transparent'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error'],
    },
    alignTabs: {
      control: 'select',
      options: ['start', 'center', 'end', 'title'],
    },
    grow: { control: 'boolean', description: 'Abas ocupam toda a largura' },
    showArrows: { control: 'boolean', description: 'Setas quando há overflow' },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
    },
  },
};

export default meta;

export const Default = {
  args: {
    tabs: 'Primeira, Segunda, Terceira',
    bgColor: 'surface',
    color: 'primary',
    alignTabs: 'start',
    grow: false,
    showArrows: false,
    density: 'default',
  },
};

export const Growing = {
  args: { ...Default.args, grow: true },
};

export const Centered = {
  args: { ...Default.args, alignTabs: 'center' },
};

export const PrimaryBackground = {
  args: { ...Default.args, bgColor: 'primary', color: 'secondary' },
};

export const ManyTabs = {
  args: { ...Default.args, tabs: 'Aba 1, Aba 2, Aba 3, Aba 4, Aba 5, Aba 6', showArrows: true },
};
