<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4 mb-4">Feedback & Indicators</h2>
        <v-divider class="mb-6"></v-divider>
      </v-col>
    </v-row>

    <!-- Alerts -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Alerts</h3>
      </v-col>
      <v-col cols="12" md="6">
        <v-alert type="success" title="Success Alert" text="Your action was successful." variant="tonal" class="mb-4"></v-alert>
        <v-alert type="info" title="Info Alert" text="Here is some information." variant="tonal" class="mb-4"></v-alert>
      </v-col>
      <v-col cols="12" md="6">
        <v-alert type="warning" title="Warning Alert" text="Please be careful with this action." variant="outlined" class="mb-4"></v-alert>
        <v-alert type="error" title="Error Alert" text="Something went wrong!" class="mb-4"></v-alert>
      </v-col>
    </v-row>

    <!-- Progress -->
    <v-row class="mb-8 align-center">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Progress Indicators</h3>
      </v-col>
      <v-col cols="auto">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
      <v-col cols="auto">
        <v-progress-circular :model-value="75" color="secondary" size="64" width="6">75</v-progress-circular>
      </v-col>
      <v-col cols="6">
        <v-progress-linear indeterminate color="primary" class="mb-4"></v-progress-linear>
        <v-progress-linear :model-value="40" color="success" height="12"></v-progress-linear>
      </v-col>
    </v-row>

    <!-- Snackbars & Badges -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Badges & Temporary Feedback</h3>
      </v-col>
      <v-col cols="auto" class="d-flex align-center pr-8">
        <v-badge color="error" content="5" overlap>
          <v-icon icon="mdi-bell" size="x-large"></v-icon>
        </v-badge>
      </v-col>
      
      <v-col cols="auto" class="d-flex align-center pr-8">
        <v-badge color="success" dot overlap>
          <v-avatar color="primary" size="large">USR</v-avatar>
        </v-badge>
      </v-col>

      <v-col cols="auto">
        <v-btn color="primary" @click="snackbar = true">Show Snackbar</v-btn>
        
        <v-snackbar v-model="snackbar" :timeout="3000" color="success">
          Action completed successfully!
          <template v-slot:actions>
            <v-btn color="white" variant="text" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const snackbar = ref(false)
</script>
