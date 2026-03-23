<template>
  <v-container class="pa-8 pa-md-12 d-flex justify-center" fluid style="min-height: 100vh;">
    <v-card class="w-100" elevation="0">
      <v-card-title class="text-h4 font-weight-bold text-primary mb-2 mt-4 px-6">
        🚀 Guia de Instalação do Tema
      </v-card-title>

      <v-card-text class="px-6 text-body-1">
        <p class="mb-4 text-medium-emphasis">
          O <strong>Quati Styles Design System</strong> é construído sobre o
          <a href="https://vuetifyjs.com/" target="_blank"
            class="text-secondary font-weight-bold text-decoration-none">Vuetify 3</a>
          utilizando design tokens modernos em SASS. Ele fornece uma estética inspirada em Glassmorphism pronta para
          uso.
        </p>

        <p class="mb-8 text-medium-emphasis">
          Siga os passos abaixo para integrar de forma limpa esse pacote de estilos ao seu projeto local.
        </p>

        <v-card icon="mdi-cloud-download" class="mb-8" title="Download dos Assets" color="primary" variant="tonal"
          elevation="0">
          <v-card-text>
            <p class="mb-4 mt-2">Nós empacotamos os estilos globais SASS e os plugins do Vuetify pré-configurados.
              Inicie baixando os arquivos com o botão abaixo.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="flat" prepend-icon="mdi-download" href="./assets/quati-styles-theme.zip"
              download="quati-styles-theme.zip" size="large">
              Baixar Código do Tema (.ZIP)
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-divider class="mb-8"></v-divider>

        <h3 class="text-h6 font-weight-bold text-primary mb-3">
          1. Instale as Dependências Base do Vuetify
        </h3>
        <p class="mb-4 text-medium-emphasis">Certifique-se de que o seu projeto possui o Vuetify e os plugins de
          compilação SASS
          instalados.</p>
        <v-sheet class="bg-surface-variant pa-4 rounded-lg mb-8" elevation="0" border>
          <code class="d-block text-body-2 font-weight-medium">npm install vuetify @mdi/font</code>
          <code class="d-block text-body-2 font-weight-medium mt-1">npm install -D sass vite-plugin-vuetify</code>
        </v-sheet>

        <h3 class="text-h6 font-weight-bold text-primary mb-3">
          2. Estrutura de Arquivos Recomendada
        </h3>
        <p class="mb-4 text-medium-emphasis">Extraia o conteúdo do ZIP na raiz da pasta <code>src/</code> do seu projeto
          para
          seguir a convenção padrão.</p>
        <v-sheet class="bg-surface-variant pa-4 rounded-lg mb-8" elevation="0" border>
          <pre class="text-body-2 font-weight-medium" style="margin: 0;">src/
    ├── plugins/
    │ └── vuetify.js &lt;-- Instância do Vuetify configurada
    ├── styles/
    │ ├── settings.scss &lt;-- Sobrescrita de variáveis (SCSS)
    │ └── quati-styles/ &lt;-- Design System Core
    └── main.js</pre>
        </v-sheet>

        <h3 class="text-h6 font-weight-bold text-primary mb-3">
          3. Inicialização no <code>main.js</code> ou <code>main.ts</code>
        </h3>
        <p class="mb-4 text-medium-emphasis">Faça as importações de estilo ANTES dos outros arquivos, para garantir que
          o CSS do
          Design System prevaleça sobre os defaults do navegador.</p>
        <v-sheet class="bg-surface-variant pa-4 rounded-lg mb-8" elevation="0" border>
          <pre class="text-body-2 font-weight-medium" style="margin: 0;">// 1. SCSS Base do Tema
    import '@/styles/quati-styles/index.scss'

    import { createApp } from 'vue'
    import App from './App.vue'

    // 2. Instância do Vuetify já com a nossa paleta
    import vuetify from './plugins/vuetify'

    const app = createApp(App)
    app.use(vuetify)

    app.mount('#app')</pre>
        </v-sheet>

        <h3 class="text-h6 font-weight-bold text-primary mb-3">
          4. Adicione o Plugin ao Vite
        </h3>
        <p class="mb-4 text-medium-emphasis">O Vuetify requer que informemos a localização do <code>settings.scss</code>
          dentro
          da compilação do Vite para aplicar corretamente as novas fontes de Glassmorphism nos componentes padrão.</p>
        <v-sheet class="bg-surface-variant pa-4 rounded-lg mb-8" elevation="0" border>
          <pre class="text-body-2 font-weight-medium" style="margin: 0;">// vite.config.js
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

    export default defineConfig({
    plugins: [
    vue({ template: { transformAssetUrls } }),

    // Conectando o settings.scss do Quati Styles:
    vuetify({
    autoImport: true,
    styles: { configFile: 'src/styles/settings.scss' },
    }),
    ],
    css: {
    preprocessorOptions: {
    sass: { api: 'modern-compiler' }, // Padrão Dart Sass 2.0+
    },
    },
    })</pre>
        </v-sheet>

        <v-alert type="success" variant="tonal" icon="mdi-check-circle" class="mt-6 font-weight-medium">
          ✨ <strong>Instalação Concluída!</strong> Todos os componentes originários do Vuetify (cards, fields, selects,
          tables)
          passarão a renderizar usando as propriedades de Quati Styles por padrão.
        </v-alert>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
// Sem dependências adicionais
</script>

<style scoped>
/* pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
code {
  color: #c94665;
  background-color: #f1f3f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
} */
</style>
