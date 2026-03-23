<template>
  <v-text-field
    v-bind="props"
    :persistent-hint="!!props.hint"
    :prepend-inner-icon="props.prependInnerIcon || undefined"
    :append-inner-icon="props.appendInnerIcon || undefined"
    :error-messages="props.errorMessage || []"
  />
</template>

<script setup>
const props = defineProps({
  label: String,
  variant: String,
  placeholder: String,
  hint: String,
  disabled: Boolean,
  readonly: Boolean,
  clearable: Boolean,
  prependInnerIcon: String,
  appendInnerIcon: String,
  errorMessage: [String, Array],
  type: String,
});
</script>
