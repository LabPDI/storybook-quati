<template>
  <v-container class="py-8">

    <!-- ── Cabeçalho ───────────────────────────────────────────── -->
    <v-row class="mb-2">
      <v-col>
        <h2 class="text-h4 font-weight-bold mb-1">Design Tokens</h2>
        <p class="text-body-1 text-medium-emphasis">
          Quati Styles Design System — todos os tokens disponíveis como variáveis SCSS
          (<code>$lg-*</code>) e CSS Custom Properties (<code>--lg-*</code>).
        </p>
        <v-divider class="mt-4" />
      </v-col>
    </v-row>

    <!-- ── Cores principais ────────────────────────────────────── -->
    <section-title title="Cores Principais" subtitle="Paleta semântica do Vuetify + variáveis $lg-*" />
    <v-row class="mb-10">
      <v-col v-for="c in brandColors" :key="c.name" cols="6" sm="4" md="3" lg="2">
        <color-chip v-bind="c" />
      </v-col>
    </v-row>

    <!-- ── Superfícies líquidas ────────────────────────────────── -->
    <section-title title="Superfícies (Glass)" subtitle="Backgrounds com transparência para efeito glassmorphism" />
    <v-row class="mb-10">
      <v-col v-for="s in surfaces" :key="s.name" cols="6" sm="4" md="3">
        <surface-chip v-bind="s" />
      </v-col>
    </v-row>

    <!-- ── Border Radius ──────────────────────────────────────── -->
    <section-title title="Border Radius" subtitle="Escala de arredondamentos $lg-radius-*" />
    <v-row class="mb-10 align-center">
      <v-col v-for="r in radii" :key="r.name" cols="6" sm="4" md="2">
        <radius-chip v-bind="r" />
      </v-col>
    </v-row>

    <!-- ── Blur / Backdrop ────────────────────────────────────── -->
    <section-title title="Blur (Backdrop Filter)" subtitle="Intensidades de desfoque $lg-blur-*" />
    <v-row class="mb-10">
      <v-col v-for="b in blurs" :key="b.name" cols="6" sm="3">
        <blur-chip v-bind="b" />
      </v-col>
    </v-row>

    <!-- ── Sombras ────────────────────────────────────────────── -->
    <section-title title="Sombras" subtitle="Escala de elevação $lg-shadow-* e glows coloridos" />
    <v-row class="mb-10">
      <v-col v-for="s in shadows" :key="s.name" cols="12" sm="6" md="3">
        <shadow-chip v-bind="s" />
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col v-for="g in glows" :key="g.name" cols="12" sm="6" md="3">
        <shadow-chip v-bind="g" :glow="true" />
      </v-col>
    </v-row>

    <!-- ── Tipografia ─────────────────────────────────────────── -->
    <section-title title="Tipografia" subtitle="Família e pesos $lg-font-*" />
    <v-sheet rounded="lg" class="pa-6 mb-10" border>
      <div v-for="t in typography" :key="t.weight" class="mb-4">
        <p class="text-caption text-medium-emphasis mb-1">
          font-weight: {{ t.weight }} ({{ t.var }})
        </p>
        <p :style="{ fontWeight: t.weight, fontSize: '1.125rem', fontFamily: fontFamily }">
          O Quick brown fox — Nirmala UI / Inter / Roboto
        </p>
      </div>
    </v-sheet>

    <!-- ── Animações ──────────────────────────────────────────── -->
    <section-title title="Duração de Animações" subtitle="Tokens de tempo $lg-duration-*" />
    <v-row class="mb-10">
      <v-col v-for="d in durations" :key="d.name" cols="6" sm="3">
        <duration-chip v-bind="d" />
      </v-col>
    </v-row>

    <!-- ── Z-Index ────────────────────────────────────────────── -->
    <section-title title="Z-Index" subtitle="Camadas de profundidade $lg-z-*" />
    <v-row class="mb-10">
      <v-col v-for="z in zIndex" :key="z.name" cols="6" sm="4" md="2">
        <v-sheet rounded="md" class="pa-4 text-center" border>
          <p class="text-caption text-medium-emphasis">{{ z.var }}</p>
          <p class="text-h5 font-weight-bold">{{ z.value }}</p>
          <p class="text-caption">{{ z.name }}</p>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- ── Gradientes ─────────────────────────────────────────── -->
    <section-title title="Gradientes de Vidro" subtitle="$lg-gradient-*" />
    <v-row class="mb-4">
      <v-col v-for="g in gradients" :key="g.name" cols="12" sm="4">
        <v-sheet rounded="lg" class="pa-6 text-center"
          :style="{ background: g.value, minHeight: '100px', border: '1.5px solid rgba(255,255,255,0.3)' }">
          <p class="text-caption font-weight-medium">{{ g.var }}</p>
          <p class="text-caption text-medium-emphasis">{{ g.name }}</p>
        </v-sheet>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
// ── Sub-componentes inline ─────────────────────────────────────────

const SectionTitle = {
  props: ['title', 'subtitle'],
  template: `
    <v-row class="mb-4 mt-6">
      <v-col>
        <h3 class="text-h6 font-weight-semibold">{{ title }}</h3>
        <p class="text-caption text-medium-emphasis">{{ subtitle }}</p>
        <v-divider class="mt-2 mb-4" />
      </v-col>
    </v-row>
  `,
}

const ColorChip = {
  props: ['name', 'var_name', 'hex', 'on'],
  template: `
    <div class="mb-2">
      <div
        :style="{ background: 'var(' + var_name.replace('$', '--') + ', ' + hex + ')', height: '64px', borderRadius: '12px' }"
        class="mb-2 elevation-1"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      <p class="text-caption text-disabled" style="font-size: 10px;">var({{ var_name.replace('$', '--') }})</p>
    </div>
  `,
}

const SurfaceChip = {
  props: ['name', 'var_name', 'value'],
  template: `
    <div class="mb-2">
      <div
        :style="{ background: 'var(' + var_name.replace('$', '--') + ', ' + value + ')', height: '56px', borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.4)' }"
        class="mb-2"
        style="backdrop-filter: blur(8px);"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      <p class="text-caption text-disabled" style="font-size: 10px; word-break: break-all;">var({{ var_name.replace('$', '--') }})</p>
    </div>
  `,
}

const RadiusChip = {
  props: ['name', 'var_name', 'value'],
  template: `
    <div class="text-center mb-4">
      <div
        :style="{ borderRadius: 'var(' + var_name.replace('$', '--') + ', ' + value + ')', border: '2px solid var(--lg-primary, #294964)', width: '100%', height: '56px' }"
        class="mb-2"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      <p class="text-caption text-disabled" style="font-size: 10px;">var({{ var_name.replace('$', '--') }})</p>
    </div>
  `,
}

const BlurChip = {
  props: ['name', 'var_name', 'value'],
  template: `
    <div class="mb-4">
      <div
        style="position:relative; height: 64px; border-radius:12px; overflow:hidden; border: 1.5px solid rgba(41,73,100,0.3);"
      >
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,#294964 0%,#f58634 100%);opacity:0.4;" />
        <div
          :style="{ backdropFilter: 'blur(var(' + var_name.replace('$', '--') + ', ' + value + '))', position:'absolute', inset:0, background:'rgba(255,255,255,0.25)' }"
        />
        <p class="text-caption font-weight-bold" style="position:relative;padding:8px;color:#294964;">blur(var({{ var_name.replace('$', '--') }}))</p>
      </div>
      <p class="text-caption font-weight-medium mt-2">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
    </div>
  `,
}

const ShadowChip = {
  props: ['name', 'var_name', 'color', 'glow'],
  template: `
    <div class="mb-4">
      <div
        :style="{
          boxShadow: 'var(' + var_name.replace('$', '--') + ', ' + color + ')',
          height: '64px',
          borderRadius: '12px',
          background: '#fff',
          border: '1px solid rgba(0,0,0,0.05)'
        }"
        class="mb-2"
      />
      <p class="text-caption font-weight-medium">{{ name }}</p>
      <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
    </div>
  `,
}

const DurationChip = {
  props: ['name', 'var_name', 'value'],
  template: `
    <div class="text-center mb-4">
      <v-sheet rounded="lg" class="pa-4" border>
        <p class="text-caption text-disabled" style="font-size: 10px;">var({{ var_name.replace('$', '--') }})</p>
        <p class="text-caption font-weight-medium">{{ name }}</p>
        <p class="text-caption text-medium-emphasis">{{ var_name }}</p>
      </v-sheet>
    </div>
  `,
}

// ── Dados dos tokens ───────────────────────────────────────────────

const fontFamily = '"Nirmala UI", "Inter", "Roboto", sans-serif'

const brandColors = [
  { name: 'Primary', var_name: '$lg-primary', hex: '#294964' },
  { name: 'Secondary', var_name: '$lg-secondary', hex: '#f58634' },
  { name: 'Accent', var_name: '$lg-accent', hex: '#51a8b1' },
  { name: 'Success', var_name: '$lg-success', hex: '#34c759' },
  { name: 'Warning', var_name: '$lg-warning', hex: '#ff9f0a' },
  { name: 'Error', var_name: '$lg-error', hex: '#ff3b30' },
  { name: 'Info', var_name: '$lg-info', hex: '#64d2ff' },
  { name: 'Primary Light', var_name: '$lg-primary-light', hex: '#5ac8fa' },
  { name: 'Primary Dark', var_name: '$lg-primary-dark', hex: '#0066cc' },
]

const surfaces = [
  { name: 'White', var_name: '$lg-surface-white', value: 'rgba(255,255,255,0.55)' },
  { name: 'Light', var_name: '$lg-surface-light', value: 'rgba(255,255,255,0.35)' },
  { name: 'Subtle', var_name: '$lg-surface-subtle', value: 'rgba(255,255,255,0.18)' },
  { name: 'Hover', var_name: '$lg-surface-hover', value: 'rgba(255,255,255,0.65)' },
  { name: 'Active', var_name: '$lg-surface-active', value: 'rgba(255,255,255,0.75)' },
  { name: 'Dark', var_name: '$lg-surface-dark', value: 'rgba(0,0,0,0.08)' },
]

const radii = [
  { name: 'Small', var_name: '$lg-radius-sm', value: '10px' },
  { name: 'Medium', var_name: '$lg-radius-md', value: '16px' },
  { name: 'Large', var_name: '$lg-radius-lg', value: '22px' },
  { name: 'XLarge', var_name: '$lg-radius-xl', value: '28px' },
  { name: 'Pill', var_name: '$lg-radius-pill', value: '9999px' },
]

const blurs = [
  { name: 'Small', var_name: '$lg-blur-sm', value: '8px' },
  { name: 'Medium', var_name: '$lg-blur-md', value: '16px' },
  { name: 'Large', var_name: '$lg-blur-lg', value: '24px' },
  { name: 'XLarge', var_name: '$lg-blur-xl', value: '40px' },
]

const shadows = [
  {
    name: 'Small', var_name: '$lg-shadow-sm',
    color: '0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
  },
  {
    name: 'Medium', var_name: '$lg-shadow-md',
    color: '0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
  },
  {
    name: 'Large', var_name: '$lg-shadow-lg',
    color: '0 8px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)',
  },
  {
    name: 'XLarge', var_name: '$lg-shadow-xl',
    color: '0 16px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)',
  },
]

const glows = [
  { name: 'Glow Primary', var_name: '$lg-glow-primary', color: '0 4px 20px rgba(41,73,100,0.35)' },
  { name: 'Glow Accent', var_name: '$lg-glow-accent', color: '0 4px 20px rgba(81,168,177,0.30)' },
  { name: 'Glow Success', var_name: '$lg-glow-success', color: '0 4px 20px rgba(52,199,89,0.30)' },
  { name: 'Glow Error', var_name: '$lg-glow-error', color: '0 4px 20px rgba(255,59,48,0.30)' },
]

const typography = [
  { weight: 300, var: '$lg-font-weight-light' },
  { weight: 400, var: '$lg-font-weight-regular' },
  { weight: 500, var: '$lg-font-weight-medium' },
  { weight: 600, var: '$lg-font-weight-semibold' },
  { weight: 700, var: '$lg-font-weight-bold' },
]

const durations = [
  { name: 'Fast', var_name: '$lg-duration-fast', value: '150ms' },
  { name: 'Normal', var_name: '$lg-duration-normal', value: '250ms' },
  { name: 'Slow', var_name: '$lg-duration-slow', value: '400ms' },
  { name: 'Slower', var_name: '$lg-duration-slower', value: '600ms' },
]

const zIndex = [
  { name: 'Dropdown', var: '$lg-z-dropdown', value: 100 },
  { name: 'Sticky', var: '$lg-z-sticky', value: 200 },
  { name: 'Overlay', var: '$lg-z-overlay', value: 300 },
  { name: 'Modal', var: '$lg-z-modal', value: 400 },
  { name: 'Toast', var: '$lg-z-toast', value: 500 },
]

const gradients = [
  {
    name: 'Glass',
    var: '$lg-gradient-glass',
    value: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
  },
  {
    name: 'Shimmer',
    var: '$lg-gradient-shimmer',
    value: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
  },
  {
    name: 'Border',
    var: '$lg-gradient-border',
    value: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)',
  },
]
</script>
