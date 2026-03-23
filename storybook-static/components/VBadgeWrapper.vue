<template>
  <v-container>
    <div class="d-flex align-center gap-8" style="gap: 48px;">
      <!-- Badge sobre ícone -->
      <v-badge
        v-bind="props"
        :content="props.dot ? undefined : props.content"
      >
        <v-icon icon="mdi-bell" size="x-large" />
      </v-badge>

      <!-- Badge sobre avatar -->
      <v-badge
        v-bind="props"
        :content="props.dot ? undefined : props.content"
      >
        <v-avatar color="primary" size="large">USR</v-avatar>
      </v-badge>

      <!-- Badge sobre botão -->
      <v-badge
        v-bind="props"
        :content="props.dot ? undefined : props.content"
      >
        <v-btn variant="outlined" color="primary">Notificações</v-btn>
      </v-badge>
    </div>
  </v-container>
</template>

<script setup>
const props = defineProps({
  color: String,
  content: String,
  dot: Boolean,
  floating: Boolean,
  overlap: Boolean,
  bordered: Boolean,
  location: String,
});
</script>
