<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4 mb-4">Navigation Elements</h2>
        <v-divider class="mb-6"></v-divider>
      </v-col>
    </v-row>

    <!-- Tabs -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Tabs</h3>
      </v-col>
      <v-col cols="12">
        <v-tabs v-model="tab" bg-color="surface" color="primary">
          <v-tab value="one">First Tab</v-tab>
          <v-tab value="two">Second Tab</v-tab>
          <v-tab value="three">Third Tab</v-tab>
        </v-tabs>

        <v-window v-model="tab" class="mt-4">
          <v-window-item value="one">
            <v-card variant="tonal" class="pa-4">Content for the first tab.</v-card>
          </v-window-item>
          <v-window-item value="two">
            <v-card variant="tonal" class="pa-4">Content for the second tab.</v-card>
          </v-window-item>
          <v-window-item value="three">
            <v-card variant="tonal" class="pa-4">Content for the third tab.</v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>

    <!-- Breadcrumbs -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Breadcrumbs</h3>
      </v-col>
      <v-col cols="12">
        <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
        <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      </v-col>
    </v-row>

    <!-- Pagination -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Pagination</h3>
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="page" :length="5" rounded="circle"></v-pagination>
        <div class="mt-4"></div>
        <v-pagination v-model="page" :length="8" variant="outlined"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('one')
const page = ref(1)
const items = ref([
  { title: 'Home', disabled: false, href: '#' },
  { title: 'Dashboard', disabled: false, href: '#' },
  { title: 'Settings', disabled: true, href: '#' },
])
</script>
