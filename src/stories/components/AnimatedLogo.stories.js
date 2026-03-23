import AnimatedLogo from '../../components/AnimatedLogo.vue';

export default {
  tags: ["!dev"],
  title: 'Componentes/AnimatedLogo',
  component: AnimatedLogo,
  argTypes: {
    abstract: { control: 'boolean' },
    textPart1: { control: 'text' },
    textPart2: { control: 'text' },
    viewBox: { control: 'text' },
    part2OffsetX: { control: 'number' },
  },
};

export const Default = {
  args: {
    textPart1: 'Qua',
    textPart2: 'ti',
    abstract: false,
    viewBox: '0 0 360 200',
    part2OffsetX: 30,
  },
  render: (args) => ({
    components: { Background },
    setup() {
      return { args };
    },
    template: '<Background v-bind="args" />',
  }),
};

export const AbstractMode = {
  args: {
    ...Default.args,
    abstract: true,
  },
  render: (args) => ({
    components: { Background },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 100vw; height: 100vh; background: #294964;">
        <Background v-bind="args" />
        <div style="position: relative; z-index: 10; padding: 2rem; color: white;">
          <h1>Modo Abstrato Ativo</h1>
          <p>Este fundo deve estar borrado e animado.</p>
        </div>
      </div>
    `,
  }),
};
