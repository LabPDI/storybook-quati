<template>
  <v-card
    v-bind="props"
    :color="props.color || undefined"
  >
    <v-card-title>{{ props.title }}</v-card-title>
    <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
    <v-card-text>{{ props.text }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" variant="text">Ação Primária</v-btn>
      <v-btn variant="text">Cancelar</v-btn>
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
});
</script>
