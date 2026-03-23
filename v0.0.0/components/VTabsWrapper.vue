<template>
  <div>
    <v-tabs
      v-model="tab"
      v-bind="props"
    >
      <v-tab v-for="(t, i) in parsedTabs" :key="i" :value="t">
        {{ t }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab" class="mt-4">
      <v-window-item v-for="(t, i) in parsedTabs" :key="i" :value="t">
        <v-card variant="tonal" class="pa-4">
          Conteúdo da aba <strong>{{ t }}</strong>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  tabs: String,
  bgColor: String,
  color: String,
  alignTabs: String,
  grow: Boolean,
  showArrows: Boolean,
  density: String,
});

const tab = ref(null);
const parsedTabs = computed(() => 
  typeof props.tabs === 'string'
    ? props.tabs.split(',').map(s => s.trim())
    : props.tabs
);
</script>
