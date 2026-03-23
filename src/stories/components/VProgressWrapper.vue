<template>
  <v-container>
    <!-- Circular -->
    <div class="d-flex align-center gap-6 mb-6" style="gap: 32px;">
      <v-progress-circular
        v-bind="props"
        :model-value="props.value"
      >
        <span v-if="!props.indeterminate" class="text-caption">{{ props.value }}</span>
      </v-progress-circular>
    </div>

    <!-- Linear -->
    <v-progress-linear
      v-bind="props"
      :model-value="props.value"
      :height="props.linearHeight"
    />
  </v-container>
</template>

<script setup>
const props = defineProps({
  color: String,
  value: Number,
  bufferValue: Number,
  size: [Number, String],
  width: [Number, String],
  linearHeight: [Number, String],
  indeterminate: Boolean,
  rounded: Boolean,
  striped: Boolean,
  stream: Boolean,
});
</script>
