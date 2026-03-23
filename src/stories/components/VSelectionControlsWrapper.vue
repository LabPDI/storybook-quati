<template>
  <v-container>
    <v-row v-if="props.type === 'checkbox'" class="align-center">
      <v-col cols="auto">
        <v-checkbox
          v-model="checked"
          v-bind="props"
        />
      </v-col>
    </v-row>

    <v-row v-else-if="props.type === 'switch'" class="align-center">
      <v-col cols="auto">
        <v-switch
          v-model="checked"
          v-bind="props"
        />
      </v-col>
    </v-row>

    <v-radio-group v-else v-model="radio">
      <v-radio
        v-for="n in 3"
        :key="n"
        :label="props.label + ' ' + n"
        :value="String(n)"
        :color="props.color"
        :disabled="n === 3 && props.disabled"
      />
    </v-radio-group>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  type: String,
  label: String,
  color: String,
  disabled: Boolean,
  indeterminate: Boolean,
});

const checked = ref(true);
const radio = ref('1');
</script>
