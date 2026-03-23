<template>
  <v-alert
    v-bind="props"
    :border="props.border || undefined"
  />
</template>

<script setup>
const props = defineProps({
  type: String,
  variant: String,
  title: String,
  text: String,
  closable: Boolean,
  prominent: Boolean,
  border: String,
});
</script>
