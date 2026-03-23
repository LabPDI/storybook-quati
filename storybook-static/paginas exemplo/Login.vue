<template>
  <div>
    <toolbar
      page-title="Login"
      current-path="/login"
      :user-logged-in="false"
      :environment="environment"
    />

    <v-container fluid class="login-container d-flex align-center justify-center">
      <background textPart1="Qua" textPart2="ti" abstract style="
      z-index: 0;
      position: absolute; 
      height: 130%;
    " />

      <!-- Formulário de login sobreposto com transparência -->
      <v-row justify="center" class="w-100 position-relative z-index-front">
        <v-col cols="12" sm="8" md="4">
          <v-card variant="transparent">
            <login-frame />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Background from '../components/Background.vue';
import LoginFrame from '../components/LoginFrame.vue';
import Toolbar from '../components/Toolbar.vue';

export default {
  name: 'Login',
  components: {
    Background,
    LoginFrame,
    Toolbar,
  },
  props: {
    environment: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  position: relative;
  /* Optional: we can hide overflow to prevent scrollbars if the mascot is too big */
  overflow: hidden;
}

.mascot-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  /* Aumentar um pouco o tamanho se quiser que preencha mais o fundo */
  pointer-events: none;
  /* Para não atrapalhar cliques no card */
}

.z-index-front {
  z-index: 1;
}
</style>
