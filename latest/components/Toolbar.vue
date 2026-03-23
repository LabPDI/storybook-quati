<template>
  <v-app-bar class="fixed-panel pr-2" color="primary">
    <!-- Ícone de menu: só na home -->
    <v-app-bar-nav-icon v-if="isHome" @click="showMenu = !showMenu">
      <v-icon>{{ showMenu ? 'mdi-arrow-left' : 'mdi-menu' }}</v-icon>
    </v-app-bar-nav-icon>

    <div class="d-flex align-center">
      <!-- Botão voltar em sub-páginas não-auth -->
      <v-btn
        v-if="!isHome && !isAuthPage"
        icon
        size="small"
        @click="$emit('back')"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <h3 class="pl-3 ma-auto">{{ pageTitle }}</h3>
      <span v-if="environment" style="align-self: self-end; font-size: 0.7rem">
        {{ environment }}
      </span>
    </div>

    <!-- Sub-navegação RH -->
    <div v-if="isRhSection" class="pl-7">
      <v-btn
        :variant="activeRhTab === 'servidores' ? 'default' : 'outlined'"
        :class="activeRhTab === 'servidores' ? 'active-button-rh' : 'innactive-button-rh'"
        @click="$emit('rh-navigate', 'servidores')"
      >
        Servidores
      </v-btn>
      <v-btn
        class="mx-3"
        :variant="activeRhTab === 'setores' ? 'default' : 'outlined'"
        :class="activeRhTab === 'setores' ? 'active-button-rh' : 'innactive-button-rh'"
        @click="$emit('rh-navigate', 'setores')"
      >
        Setores
      </v-btn>
      <v-btn
        :variant="activeRhTab === 'estatisticas' ? 'default' : 'outlined'"
        :class="activeRhTab === 'estatisticas' ? 'active-button-rh' : 'innactive-button-rh'"
        @click="$emit('rh-navigate', 'estatisticas')"
      >
        Estatísticas
      </v-btn>
    </div>

    <v-spacer />

    <!-- Avatar do usuário -->
    <v-avatar
      v-if="userLoggedIn && !isAuthPage"
      color="secondary"
      size="36"
      class="mr-2"
    >
      <v-icon>mdi-account</v-icon>
    </v-avatar>
  </v-app-bar>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  /** Título exibido na toolbar */
  pageTitle: {
    type: String,
    default: 'Início',
  },
  /** Simula $route.path — controla quais botões aparecem */
  currentPath: {
    type: String,
    default: '/',
  },
  /** Badge de ambiente (ex: "DEV", "HOM") — deixe vazio para esconder */
  environment: {
    type: String,
    default: '',
  },
  /** Simula usuário logado (userStore.user != null) */
  userLoggedIn: {
    type: Boolean,
    default: true,
  },
  /** Aba ativa na sub-nav RH: 'servidores' | 'setores' | 'estatisticas' */
  activeRhTab: {
    type: String,
    default: 'servidores',
  },
})

defineEmits(['back', 'rh-navigate'])

const showMenu = ref(false)

const isHome     = computed(() => props.currentPath === '/')
const isAuthPage = computed(() =>
  ['login', 'verify-email', 'reset-password'].some(p => props.currentPath.includes(p))
)
const isRhSection = computed(() => props.currentPath.includes('rh'))
</script>

<style scoped>
.fixed-panel {
  position: sticky;
  top: 0;
  z-index: 15;
}
.active-button-rh {
  background-color: #bbdefb !important;
  color: #000 !important;
}
.innactive-button-rh {
  color: #fff !important;
}
</style>