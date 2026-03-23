import ThemeEditor from './ThemeEditor.vue';

export default {
  tags: ["!dev"],
  title: 'Overview/Theme Editor',
  component: ThemeEditor,
  parameters: {

    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Theme Editor — Quati Styles Design System

Esta página permite **editar os design tokens** do Quati Styles Design System em tempo real.

As mudanças afetam **todos os componentes** desta sessão do Storybook via CSS Custom Properties.

### Como funciona?

1. As variáveis SCSS (\`$lg-primary\`, etc.) são exportadas como **CSS Custom Properties** (\`--lg-primary\`) via \`_css-vars.scss\`
2. O editor atualiza as propriedades em \`document.documentElement\`
3. Todos os componentes que referenciem \`var(--lg-*)\` refletem a mudança imediatamente
4. Você pode **copiar o CSS gerado** e adicioná-lo ao \`:root\` do seu projeto

### Como persistir mudanças?

Após editar, clique em **"Copiar CSS"** e aplique as alterações desejadas em \`_variables.scss\`.
        `,
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { ThemeEditor },
    template: '<ThemeEditor />',
  }),
};
