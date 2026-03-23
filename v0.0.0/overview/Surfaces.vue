<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4 mb-4">Surfaces</h2>
        <v-divider class="mb-6"></v-divider>
      </v-col>
    </v-row>

    <!-- Cards -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Cards</h3>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Elevated Card</v-card-title>
          <v-card-subtitle>Default variant</v-card-subtitle>
          <v-card-text>
            This is a standard elevated Vuetify card. It displays the default surface color and shadow.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="text">Action</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card variant="outlined">
          <v-card-title>Outlined Card</v-card-title>
          <v-card-subtitle>Bordered variant</v-card-subtitle>
          <v-card-text>
            This card has an outline to separate it from the background instead of a shadow.
          </v-card-text>
          <v-card-actions>
            <v-btn color="secondary" variant="text">Action</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card variant="tonal" color="primary">
          <v-card-title>Tonal Card</v-card-title>
          <v-card-subtitle>Colored variant</v-card-subtitle>
          <v-card-text>
            This card uses the tonal variant for a soft, transparent background based on the primary color.
          </v-card-text>
          <v-card-actions>
            <v-btn variant="text">Action</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Sheets -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Sheets</h3>
      </v-col>
      <v-col cols="12" md="6">
        <v-sheet elevation="4" class="pa-6 rounded-lg text-center" color="surface">
          <h4 class="text-h5">Elevated Sheet</h4>
          <p>Useful for constructing custom panels.</p>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="6">
        <v-sheet border class="pa-6 rounded-lg text-center bg-grey-lighten-4">
          <h4 class="text-h5">Bordered Sheet</h4>
          <p>With custom background color.</p>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Interactive Surfaces (Dialog / Menu) mockup -->
    <v-row class="mb-8">
      <v-col cols="12">
        <h3 class="text-h6 mb-3">Interactive Surfaces</h3>
      </v-col>
      <v-col cols="auto">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="primary" text="Open Dialog"></v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card title="Dialog Title">
              <v-card-text>
                This is a dialog component overlay. Notice how it interacts with the background and displays the surface
                properties according to the theme.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Close" @click="isActive.value = false"></v-btn>
                <v-btn text="Confirm" color="primary" variant="flat" @click="isActive.value = false"></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>

      <v-col cols="auto">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="secondary" v-bind="props">
              Dropdown Menu
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in 3" :key="item" :value="item">
              <v-list-item-title>Option {{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

      <v-col cols="auto" class="d-flex align-center">
        <v-tooltip text="This is a tooltip">
          <template v-slot:activator="{ props }">
            <span v-bind="props" class="text-decoration-underline cursor-pointer">Hover over me</span>
          </template>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>
