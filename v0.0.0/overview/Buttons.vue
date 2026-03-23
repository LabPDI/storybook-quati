<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4 mb-4">Buttons</h2>
        <v-divider class="mb-6"></v-divider>
      </v-col>
    </v-row>

    <!-- Colors -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Colors</h3>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary">Primary</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="secondary">Secondary</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="success">Success</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="error">Error</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="warning">Warning</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="info">Info</v-btn>
      </v-col>
    </v-row>

    <!-- Variants -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Variants</h3>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" variant="elevated">Elevated (Default)</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" variant="flat">Flat</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" variant="tonal">Tonal</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" variant="outlined">Outlined</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" variant="text">Text</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" variant="plain">Plain</v-btn>
      </v-col>
    </v-row>

    <!-- Sizes -->
    <v-row class="mb-8 align-center">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Sizes</h3>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" size="x-small">X-Small</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" size="small">Small</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" size="default">Default</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" size="large">Large</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" size="x-large">X-Large</v-btn>
      </v-col>
    </v-row>

    <!-- Icons -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Icons & FABs</h3>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" prepend-icon="mdi-plus">Prepend</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="secondary" append-icon="mdi-arrow-right">Append</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="success" icon="mdi-check"></v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="error" icon="mdi-close" variant="tonal"></v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="warning" icon="mdi-alert" variant="outlined"></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>
