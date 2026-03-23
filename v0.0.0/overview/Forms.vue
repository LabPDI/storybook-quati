<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4 mb-4">Forms & Inputs</h2>
        <v-divider class="mb-6"></v-divider>
      </v-col>
    </v-row>

    <!-- Text Fields -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Text Fields (Variants)</h3>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field label="Filled (Default)" placeholder="Enter text"></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field label="Outlined" variant="outlined" placeholder="Enter text"></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field label="Underlined" variant="underlined" placeholder="Enter text"></v-text-field>
      </v-col>
    </v-row>

    <!-- States & Feedback -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">States & Feedback</h3>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field label="Disabled" disabled variant="outlined"></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field label="Error State" variant="outlined" error-messages="This field is required"></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field label="With Icon" variant="outlined" prepend-inner-icon="mdi-email" hint="Enter your email" persistent-hint></v-text-field>
      </v-col>
    </v-row>

    <!-- Selects -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Selects</h3>
      </v-col>
      <v-col cols="12" md="4">
        <v-select label="Standard Select" :items="['Option 1', 'Option 2', 'Option 3']" variant="outlined"></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-autocomplete label="Autocomplete" :items="['Apple', 'Banana', 'Cherry']" variant="outlined"></v-autocomplete>
      </v-col>
    </v-row>

    <!-- Selection Controls -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Selection Controls (Checkboxes, Switches, Radios)</h3>
      </v-col>
      <v-col cols="12" md="4">
        <v-checkbox label="Primary Checkbox" color="primary" model-value></v-checkbox>
        <v-checkbox label="Secondary Checkbox" color="secondary" model-value></v-checkbox>
        <v-checkbox label="Indeterminate" indeterminate></v-checkbox>
      </v-col>
      
      <v-col cols="12" md="4">
        <v-switch label="Primary Switch" color="primary" model-value></v-switch>
        <v-switch label="Success Switch" color="success" model-value></v-switch>
      </v-col>

      <v-col cols="12" md="4">
        <v-radio-group model-value="1">
          <v-radio label="Option 1" value="1" color="primary"></v-radio>
          <v-radio label="Option 2" value="2" color="primary"></v-radio>
          <v-radio label="Option 3 (Disabled)" value="3" disabled></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>
