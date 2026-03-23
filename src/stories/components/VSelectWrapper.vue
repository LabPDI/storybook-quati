<template>
  <div>
    <v-select
      v-if="props.type === 'select'"
      v-bind="props"
      :items="parsedItems"
      :prepend-inner-icon="props.prependInnerIcon || undefined"
    />
    <v-autocomplete
      v-else
      v-bind="props"
      :items="parsedItems"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: String,
  label: String,
  variant: String,
  items: [String, Array],
  disabled: Boolean,
  clearable: Boolean,
  multiple: Boolean,
  chips: Boolean,
  prependInnerIcon: String,
});

const parsedItems = computed(() =>
  typeof props.items === 'string'
    ? props.items.split(',').map(s => s.trim())
    : props.items
);
</script>
