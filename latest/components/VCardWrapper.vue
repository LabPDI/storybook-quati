<template>
  <v-card v-bind="props" :color="props.color || undefined">
    <v-card-actions v-if="props.actions">
      <v-btn color="error" size="small" variant="text">Cancelar</v-btn>
      <v-btn color="primary" variant="text">Ação Primária</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
  variant: String,
  color: String,
  elevation: [Number, String],
  rounded: String,
  width: String,
  loading: Boolean,
  title: String,
  subtitle: String,
  text: String,
  actions: Boolean,
});
</script>
