<template>
  <v-btn
    v-bind="props"
    :prepend-icon="props.prependIcon || undefined"
    :append-icon="props.appendIcon || undefined"
    :icon="props.iconOnly || undefined"
  >
    <span v-if="!props.iconOnly">{{ props.label }}</span>
  </v-btn>
</template>

<script setup>
const props = defineProps({
  label: String,
  color: String,
  variant: String,
  size: String,
  disabled: Boolean,
  loading: Boolean,
  rounded: Boolean,
  prependIcon: String,
  appendIcon: String,
  iconOnly: String,
});
</script>
