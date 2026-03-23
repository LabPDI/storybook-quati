import Toolbar from './Toolbar.vue';

export default {
  tags: ["!dev"],
  title: 'Componentes/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    pageTitle: { control: 'text' },
    currentPath: {
      control: 'select',
      options: ['/', '/rh', '/rh/setores', '/rh/estatisticas', '/prescricao', '/cdoc', '/login', '/verify-email'],
    },
    environment: { control: 'text' },
    userLoggedIn: { control: 'boolean' },
    activeRhTab: {
      control: 'select',
      options: ['servidores', 'setores', 'estatisticas'],
    },
    onBack: { action: 'back' },
    onRhNavigate: { action: 'rh-navigate' },
  },
};

// ── Stories ──────────────────────────────────────────────

/** Página inicial: mostra o hambúrguer */
export const Home = {
  args: {
    pageTitle: 'Início',
    currentPath: '/',
    environment: '',
    userLoggedIn: true,
  },
};

/** Sub-página genérica: exibe botão voltar */
export const SubPage = {
  args: {
    pageTitle: 'Prescrição Intercorrente',
    currentPath: '/prescricao',
    environment: '',
    userLoggedIn: true,
  },
};

/** Seção RH: exibe a sub-navegação com abas */
export const RhSection = {
  args: {
    pageTitle: 'Quadro de Pessoal',
    currentPath: '/rh',
    environment: '',
    userLoggedIn: true,
    activeRhTab: 'servidores',
  },
};

/** Página de login: sem avatar, sem botão voltar */
export const LoginPage = {
  args: {
    pageTitle: 'Login',
    currentPath: '/login',
    environment: '',
    userLoggedIn: false,
  },
};

/** Badge de ambiente visível */
export const WithEnvironmentBadge = {
  args: {
    pageTitle: 'Início',
    currentPath: '/',
    environment: 'DEV',
    userLoggedIn: true,
  },
};

/** Usuário não logado fora do login */
export const LoggedOut = {
  args: {
    pageTitle: 'Prescrição',
    currentPath: '/prescricao',
    environment: '',
    userLoggedIn: false,
  },
};
