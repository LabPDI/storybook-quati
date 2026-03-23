<template>
  <div class="theme-editor">
    <!-- Header -->
    <div class="editor-header">
      <div class="editor-header__inner">
        <div>
          <h1 class="editor-header__title">Theme Editor</h1>
          <p class="editor-header__subtitle">
            Edite os tokens do Quati Styles Design System em tempo real.
            As mudanças afetam todos os componentes desta sessão.
          </p>
        </div>
        <div class="editor-header__actions">
          <v-btn variant="tonal" color="warning" size="small" @click="resetAll" prepend-icon="mdi-restore">
            Reset
          </v-btn>
          <v-btn variant="tonal" color="success" size="small" @click="copyCSS" prepend-icon="mdi-content-copy">
            Copiar CSS
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="editor-content">
      <!-- Left: Controls -->
      <div class="editor-controls">
        <!-- Colors -->
        <v-card class="control-card" rounded="lg" variant="outlined">
          <v-card-title class="control-card__title">
            <v-icon start>mdi-palette</v-icon>
            Paleta de Cores
          </v-card-title>
          <v-card-text>
            <div class="token-grid">
              <div v-for="token in colorTokens" :key="token.var" class="token-row">
                <div class="token-row__info">
                  <span class="token-row__name">{{ token.label }}</span>
                  <code class="token-row__var">{{ token.var }}</code>
                </div>
                <div class="token-row__control">
                  <input
                    type="color"
                    :value="getVar(token.var)"
                    @input="setVar(token.var, $event.target.value)"
                    class="color-picker"
                    :title="token.label"
                  />
                  <input
                    type="text"
                    :value="getVar(token.var)"
                    @change="setVar(token.var, $event.target.value)"
                    class="text-input"
                  />
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <!-- Border Radius -->
        <v-card class="control-card" rounded="lg" variant="outlined">
          <v-card-title class="control-card__title">
            <v-icon start>mdi-rounded-corner</v-icon>
            Border Radius
          </v-card-title>
          <v-card-text>
            <div v-for="token in radiusTokens" :key="token.var" class="slider-row">
              <div class="slider-row__header">
                <span class="token-row__name">{{ token.label }}</span>
                <span class="slider-row__value">{{ getVar(token.var) }}</span>
              </div>
              <input
                type="range" min="0" max="80"
                :value="parseInt(getVar(token.var))"
                @input="setVar(token.var, $event.target.value + 'px')"
                class="slider"
              />
            </div>
          </v-card-text>
        </v-card>

        <!-- Blur -->
        <v-card class="control-card" rounded="lg" variant="outlined">
          <v-card-title class="control-card__title">
            <v-icon start>mdi-blur</v-icon>
            Backdrop Blur
          </v-card-title>
          <v-card-text>
            <div v-for="token in blurTokens" :key="token.var" class="slider-row">
              <div class="slider-row__header">
                <span class="token-row__name">{{ token.label }}</span>
                <span class="slider-row__value">{{ getVar(token.var) }}</span>
              </div>
              <input
                type="range" min="0" max="60"
                :value="parseInt(getVar(token.var))"
                @input="setVar(token.var, $event.target.value + 'px')"
                class="slider"
              />
            </div>
          </v-card-text>
        </v-card>

        <!-- Animation -->
        <v-card class="control-card" rounded="lg" variant="outlined">
          <v-card-title class="control-card__title">
            <v-icon start>mdi-motion-play</v-icon>
            Animações
          </v-card-title>
          <v-card-text>
            <div v-for="token in durationTokens" :key="token.var" class="slider-row">
              <div class="slider-row__header">
                <span class="token-row__name">{{ token.label }}</span>
                <span class="slider-row__value">{{ getVar(token.var) }}</span>
              </div>
              <input
                type="range" min="50" max="1000" step="50"
                :value="parseInt(getVar(token.var))"
                @input="setVar(token.var, $event.target.value + 'ms')"
                class="slider"
              />
            </div>
          </v-card-text>
        </v-card>
      </div>

      <!-- Right: Preview using real Overview components -->
      <div class="editor-preview">
        <!-- Tabs with the real overview components -->
        <v-card class="preview-card" rounded="lg" variant="outlined">
          <v-tabs v-model="activeTab" color="primary" density="compact" class="preview-tabs">
            <v-tab v-for="tab in previewTabs" :key="tab.value" :value="tab.value" :prepend-icon="tab.icon">
              {{ tab.label }}
            </v-tab>
          </v-tabs>

          <v-divider />

          <div class="preview-tab-content">
            <v-tabs-window v-model="activeTab">
              <v-tabs-window-item value="buttons">
                <ButtonsShowcase />
              </v-tabs-window-item>
              <v-tabs-window-item value="forms">
                <FormsShowcase />
              </v-tabs-window-item>
              <v-tabs-window-item value="feedback">
                <FeedbackShowcase />
              </v-tabs-window-item>
              <v-tabs-window-item value="navigation">
                <NavigationShowcase />
              </v-tabs-window-item>
              <v-tabs-window-item value="surfaces">
                <SurfacesShowcase />
              </v-tabs-window-item>
            </v-tabs-window>
          </div>
        </v-card>

        <!-- CSS Output -->
        <v-card class="css-output" rounded="lg" variant="outlined" v-if="changedVars.length">
          <v-card-title class="control-card__title css-output__title">
            <v-icon start>mdi-code-braces</v-icon>
            Alterações (CSS)
          </v-card-title>
          <v-card-text>
            <pre class="css-output__code">:root {
<span v-for="entry in changedVars" :key="entry.var">  {{ entry.var }}: {{ entry.value }};
</span>}</pre>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <!-- Snackbar copy feedback -->
    <v-snackbar v-model="snackbar" timeout="2500" color="success" location="bottom right">
      <v-icon start>mdi-check-circle</v-icon>
      CSS copiado para a área de transferência!
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useTheme } from 'vuetify'

import ButtonsShowcase from './Buttons.vue'
import FormsShowcase from './Forms.vue'
import FeedbackShowcase from './Feedback.vue'
import NavigationShowcase from './Navigation.vue'
import SurfacesShowcase from './Surfaces.vue'

const theme = useTheme()
const snackbar = ref(false)
const activeTab = ref('buttons')

const previewTabs = [
  { value: 'buttons',    label: 'Buttons',    icon: 'mdi-gesture-tap-button' },
  { value: 'forms',      label: 'Forms',      icon: 'mdi-form-textbox' },
  { value: 'feedback',   label: 'Feedback',   icon: 'mdi-bell-outline' },
  { value: 'navigation', label: 'Navigation', icon: 'mdi-navigation-variant-outline' },
  { value: 'surfaces',   label: 'Surfaces',   icon: 'mdi-card-outline' },
]

// Mapeia cada CSS var do LG → chave no tema Vuetify
// Vuetify usa nomes simples como 'primary', 'secondary', etc.
const vuetifyColorMap = {
  '--lg-primary':       'primary',
  '--lg-primary-light': 'primary-lighten-1',
  '--lg-primary-dark':  'primary-darken-1',
  '--lg-secondary':     'secondary',
  '--lg-accent':        'accent',
  '--lg-success':       'success',
  '--lg-warning':       'warning',
  '--lg-error':         'error',
  '--lg-info':          'info',
}

const defaults = ref({})
const overrides = ref({})

const colorTokens = [
  { var: '--lg-primary',       label: 'Cor Primary' },
  { var: '--lg-primary-light', label: 'Primary Light' },
  { var: '--lg-primary-dark',  label: 'Primary Dark' },
  { var: '--lg-secondary',     label: 'Cor Secondary' },
  { var: '--lg-accent',        label: 'Cor Accent' },
  { var: '--lg-success',       label: 'Cor Success' },
  { var: '--lg-warning',       label: 'Cor Warning' },
  { var: '--lg-error',         label: 'Cor Error' },
  { var: '--lg-info',          label: 'Cor Info' },
]

const radiusTokens = [
  { var: '--lg-radius-sm', label: 'Radius SM' },
  { var: '--lg-radius-md', label: 'Radius MD' },
  { var: '--lg-radius-lg', label: 'Radius LG' },
  { var: '--lg-radius-xl', label: 'Radius XL' },
]

const blurTokens = [
  { var: '--lg-blur-sm', label: 'Blur SM' },
  { var: '--lg-blur-md', label: 'Blur MD' },
  { var: '--lg-blur-lg', label: 'Blur LG' },
  { var: '--lg-blur-xl', label: 'Blur XL' },
]

const durationTokens = [
  { var: '--lg-duration-fast',   label: 'Fast' },
  { var: '--lg-duration-normal', label: 'Normal' },
  { var: '--lg-duration-slow',   label: 'Slow' },
  { var: '--lg-duration-slower', label: 'Slower' },
]

const allTokens = [...colorTokens, ...radiusTokens, ...blurTokens, ...durationTokens]

onMounted(() => {
  const computed = getComputedStyle(document.documentElement)
  allTokens.forEach(token => {
    const fromCss = computed.getPropertyValue(token.var).trim()
    // Para cores, prefere usar o valor do tema Vuetify (mais confiável)
    const vuetifyKey = vuetifyColorMap[token.var]
    if (vuetifyKey && theme.current.value.colors[vuetifyKey]) {
      defaults.value[token.var] = theme.current.value.colors[vuetifyKey]
    } else {
      defaults.value[token.var] = fromCss || '#000000'
    }
  })
})

function getVar(cssVar) {
  if (overrides.value[cssVar] !== undefined) return overrides.value[cssVar]
  return defaults.value[cssVar] || '#000000'
}

function setVar(cssVar, value) {
  overrides.value[cssVar] = value

  // 1. Atualiza CSS Custom Property (para uso direto via var(--lg-*))
  document.documentElement.style.setProperty(cssVar, value)

  // 2. Se for cor: atualiza também o tema Vuetify para que
  //    componentes com color="primary" etc. reflitam a mudança
  const vuetifyKey = vuetifyColorMap[cssVar]
  if (vuetifyKey && theme.current.value.colors) {
    theme.current.value.colors[vuetifyKey] = value
  }
}

function resetAll() {
  allTokens.forEach(token => {
    document.documentElement.style.removeProperty(token.var)
  })
  // Restaura o tema Vuetify para os valores originais
  Object.entries(vuetifyColorMap).forEach(([cssVar, vuetifyKey]) => {
    if (defaults.value[cssVar] && theme.current.value.colors) {
      theme.current.value.colors[vuetifyKey] = defaults.value[cssVar]
    }
  })
  overrides.value = {}
}

const changedVars = ref([])
watch(overrides, (val) => {
  changedVars.value = Object.entries(val).map(([cssVar, value]) => ({ var: cssVar, value }))
}, { deep: true })

function copyCSS() {
  const lines = changedVars.value.map(e => `  ${e.var}: ${e.value};`).join('\n')
  const css = `:root {\n${lines}\n}`
  navigator.clipboard.writeText(css)
  snackbar.value = true
}
</script>

<style scoped lang="scss">
@use '@/styles/quati-styles/variables' as v;

.theme-editor {
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f0f7 0%, #f5e8e0 100%);
  font-family: 'Inter', 'Roboto', sans-serif;
}

// ── Header ───────────────────────────────────────────────────
.editor-header {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.5);
  padding: 20px 32px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.editor-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  max-width: 1400px;
  margin: 0 auto;
}

.editor-header__title {
  font-size: 22px;
  font-weight: 700;
  color: v.$lg-primary;
  margin: 0 0 4px;
}

.editor-header__subtitle {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.55);
  margin: 0;
  max-width: 520px;
}

.editor-header__actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

// ── Layout ───────────────────────────────────────────────────
.editor-content {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 24px;
  padding: 24px 32px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

.editor-controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.editor-preview {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

// ── Cards ────────────────────────────────────────────────────
.control-card {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(12px);
}

.control-card__title {
  font-size: 14px !important;
  font-weight: 600 !important;
  color: v.$lg-primary !important;
  padding: 12px 16px 4px !important;
}

// ── Token rows ───────────────────────────────────────────────
.token-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.token-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.token-row__info {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.token-row__name {
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}

.token-row__var {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4);
  font-family: 'Fira Code', monospace;
}

.token-row__control {
  display: flex;
  align-items: center;
  gap: 6px;
}

.color-picker {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 2px;
  background: transparent;
  flex-shrink: 0;
}

.text-input {
  width: 90px;
  font-size: 11px;
  padding: 4px 6px;
  border: 1.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.7);
  font-family: 'Fira Code', monospace;

  &:focus {
    outline: none;
    border-color: v.$lg-primary;
  }
}

// ── Sliders ──────────────────────────────────────────────────
.slider-row {
  margin-bottom: 12px;
}

.slider-row__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.slider-row__value {
  font-size: 12px;
  font-weight: 600;
  color: v.$lg-primary;
  font-family: 'Fira Code', monospace;
}

.slider {
  width: 100%;
  accent-color: v.$lg-primary;
  cursor: pointer;
}

// ── Preview tabs ─────────────────────────────────────────────
.preview-card {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.preview-tabs {
  background: transparent !important;
}

.preview-tab-content {
  max-height: 70vh;
  overflow-y: auto;
}

// ── CSS Output ───────────────────────────────────────────────
.css-output {
  background: rgba(15, 20, 30, 0.92) !important;
}

.css-output__title {
  color: #a8d8a8 !important;
}

.css-output__code {
  font-family: 'Fira Code', 'Fira Mono', monospace;
  font-size: 12px;
  color: #a8d8a8;
  white-space: pre;
  overflow-x: auto;
  margin: 0;
  padding: 8px 0;
}
</style>
