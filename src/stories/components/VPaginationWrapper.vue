<template>
  <v-container>
    <v-pagination
      v-model="page"
      v-bind="props"
      :show-first-last-page="props.showFirstLast"
    />
    <p class="text-caption text-center mt-2 text-medium-emphasis">Página atual: {{ page }}</p>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  length: Number,
  totalVisible: Number,
  modelValue: Number,
  rounded: String,
  variant: String,
  density: String,
  color: String,
  activeColor: String,
  disabled: Boolean,
  showFirstLast: Boolean,
});

const page = ref(props.modelValue ?? 1);
</script>
