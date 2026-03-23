<script setup>
import Background from '@/components/background.vue'
</script>

<template>
  <v-container class="py-10" max-width="1100">

    <!-- Hero -->
    <v-card class="glass-intense mb-8 pa-8" rounded="xl" elevation="0">
      <v-row align="center" no-gutters>
        <v-col cols="12" md="5">
          <Background text-part1="Qua" text-part2="ti" view-box="0 0 360 200" :part2-offset-x="35" />
        </v-col>
        <v-col cols="12" md="7" class="pl-md-8">
          <h1 class="text-h3 font-weight-black">Plataforma Quati</h1>
          <p class="text-subtitle-1 mt-2 text-medium-emphasis">Design System &amp; Core Guidelines</p>
        </v-col>
      </v-row>
    </v-card>

    <!-- Cards -->
    <v-row>
      <!-- Visão Geral -->
      <v-col cols="12" md="6">
        <v-card class="glass glass-hover-lift h-100 pa-6" rounded="xl" elevation="0">
          <v-card-title class="text-h6 pa-0 mb-4">
            <v-icon icon="mdi-information-outline" color="primary" class="mr-2" />
            Visão Geral
          </v-card-title>
          <v-card-text class="pa-0">
            <p>
              Este Storybook centraliza a visualização dos estilos e componentes específicos desenvolvidos
              para os projetos da <strong>Plataforma Quati</strong>.
            </p>
            <p class="mt-3">
              Ele serve como a "Fonte da Verdade" para nossa linguagem visual, garantindo que todos os
              produtos mantenham a mesma identidade e qualidade.
            </p>
            <v-alert type="info" variant="tonal" border="start" rounded="lg" class="mt-6">
              Nossos projetos são construídos sobre o framework <strong>Vuetify</strong>.
              Utilize-o como guia base, estendendo-o com nossos estilos customizados.
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Como Navegar -->
      <v-col cols="12" md="6">
        <v-card class="glass glass-hover-lift h-100 pa-6" rounded="xl" elevation="0">
          <v-card-title class="text-h6 pa-0 mb-2">
            <v-icon icon="mdi-navigation-variant-outline" color="primary" class="mr-2" />
            Como Navegar
          </v-card-title>
          <v-list lines="two" bg-color="transparent">
            <v-list-item v-for="item in navItems" :key="item.title" :prepend-icon="item.icon">
              <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!-- Footer chips -->
    <div class="text-center mt-10">
      <v-chip v-for="tag in tags" :key="tag" class="mx-1" size="small" variant="outlined">
        {{ tag }}
      </v-chip>
    </div>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    navItems: [
      { icon: 'mdi-palette-outline', title: 'Design Tokens', subtitle: 'Paleta de cores, tipografias e elevações.' },
      { icon: 'mdi-view-grid-outline', title: 'Biblioteca de Componentes', subtitle: 'Botões, formulários, superfícies e mais.' },
      { icon: 'mdi-book-open-outline', title: 'Documentação Oficial', subtitle: 'Aba Vuetify / Documentation para consultar a API.' },
      { icon: 'mdi-file-document-outline', title: 'Manual PGE MS', subtitle: 'Acesse em Documentos / Manual PGE MS.' },
      { icon: 'mdi-tune', title: 'Interatividade', subtitle: 'Teste props e estados nos Controls em tempo real.' },
    ],
    tags: ['Vuetify 3', 'Vue.js 3', 'Liquid Glass Standard'],
  }),
}
</script>

<style lang="scss" scoped>
@use '@/styles/liquid-glass/index' as *;
</style>
