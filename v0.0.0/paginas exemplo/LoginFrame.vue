<template>
  <v-container class="custom-container">
    <v-container class="pt-0">
      <animated-logo textPart1="Qua" textPart2="ti" />
    </v-container>

    <div class="pb-5">
      <h2>Faça seu login</h2>
    </div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="9">
        <v-text-field v-model="email" :rules="[rules.required, rules.email]" label="E-mail" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="9">
        <v-text-field v-model="password" :append-inner-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]" label="Senha" class="input-group--focused" :type="show3 ? 'text' : 'password'"
          name="input-10-2" @click:append-inner="show3 = !show3" @keydown.enter="login" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="9">
        <v-btn block color="primary" @click="login">
          Continuar
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" style="justify-content: unset; text-decoration: underline" class="pa-0 ma-0 pt-1">
      <v-btn variant="text" size="x-small" color="primary" @click="showForgotPassword = true">
        Esqueci minha senha
      </v-btn>
    </v-row>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="error">
      {{ errorMessage }}

      <template #actions="{ attrs }">
        <v-btn variant="text" v-bind="attrs" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
    <!-- Modal de Esqueci minha senha -->
    <v-dialog v-model="showForgotPassword" max-width="500px">
      <v-card>
        <v-card-title style="justify-content: center;">
          Redefinição de senha!
        </v-card-title>
        <v-card-text>
          <span>
            <h3>
              Informe um email<strong> válido </strong>que enviaremos instruções para a recuperação de sua senha.
            </h3>
          </span>
          <v-form ref="textFieldresetPassEmail" class="pt-4">
            <v-text-field v-model="forgotPasswordEmail" label="E-mail" :rules="[rules.required, rules.email]"
              @update:model-value="validate" />
          </v-form>
        </v-card-text>
        <v-card-actions style="justify-content: end;">
          <v-btn variant="text" color="error" @click="showForgotPassword = false">
            Fechar
          </v-btn>
          <v-btn color="primary" :disabled="!isValid" @click="sendForgotPasswordEmail(); showForgotPassword = false;">
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar2" :timeout="timeout" :color="snackbarColor">
      {{ forgotPasswordMessage }}
      <template #actions="{ attrs }">
        <v-btn variant="text" v-bind="attrs" @click="snackbar2 = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from "axios"
const urlbackend = import.meta.env.VITE_APP_API_URL
import { userStore } from "@/stores/userStore";
import AnimatedLogo from "@/components/AnimatedLogo.vue";
export default {
  components: {
    AnimatedLogo
  },
  setup() {
    const user = userStore();
    return { user };
  },
  data() {
    return {
      snackbar: false,
      snackbar2: false,
      isValid: false,
      timeout: 2000,
      errorMessage: '',
      email: "",
      password: "",
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      showForgotPassword: false,
      forgotPasswordEmail: '',
      snackbarColor: '',
      forgotPasswordMessage: '',
      rules: {
        required: (value) => !!value || "Incompleto.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail inválido.";
        }
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(urlbackend + '/auth/login', {
          email: this.email,
          password: this.password
        })
        if (response.data.tokens.access.token) {
          localStorage.setItem('user', JSON.stringify(response.data))
          this.user.setUserFromComponent(response.data)
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.tokens.access.token}`
          this.$router.push('/')
        } else {
          alert(response.data.message)
        }
      } catch (error) {
        this.errorMessage = error.response.data.message
        this.snackbar = true
        console.error(error)
      }
    },
    sendForgotPasswordEmail() {

      axios.post(urlbackend + '/auth/forgot-password', {
        email: this.forgotPasswordEmail
      }).then((res) => {
        if (res != undefined) {
          this.forgotPasswordMessage = 'Um e-mail com instruções foi enviado para ' + this.forgotPasswordEmail;
          this.snackbarColor = "success"
          this.snackbar2 = true
        }
        else {
          this.snackbar2 = false
        }
      })
    },
    validate() {
      this.isValid = this.$refs.textFieldresetPassEmail.validate()
    }
  }
}
</script>

<style>
.custom-container {
  align-items: self-start;
  text-align-last: center;
}
</style>
