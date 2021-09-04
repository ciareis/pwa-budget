<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-40 w-auto" src="@/assets/logo_rectangle_with_text.svg" v-bind:alt="$app.name" v-bind:title="$app.name" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Informe seus dados abaixo
        </h2>
      </div>
      <form v-on:submit.prevent="doLogin" class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <TheInput v-model="auth.email" type="email" name="email" id="auth_email" />
          <TheInput v-model="auth.password" type="password" name="password" id="auth_password" />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Lembrar de mim
            </label>
          </div>

          <div class="text-sm">
            <router-link v-bind:to="{ name: 'auth.forgot' }" class="font-medium text-green-600 hover:text-green-500">
              Esqueceu a senha?
            </router-link>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-green-500 group-hover:text-green-400" aria-hidden="true" />
            </span>
            Entrar
          </button>
        </div>
        <div data-testid="message" class="rounded-md bg-red-50 p-4" v-if="message">
          <div class="flex">
            <div class="flex-shrink-0">
              <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">
                Error
              </h3>
              <div class="mt-2 text-sm text-red-700">
                <ul role="list" class="list-disc pl-5 space-y-1">
                  <li>
                    {{ message }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'
import TheInput from '../../../components/TheInput.vue'
import { mapActions } from 'vuex'
import { XCircleIcon } from '@heroicons/vue/solid'
export default {
  components: {
    XCircleIcon,
    TheInput,
    LockClosedIcon,
  },
  data: () => ({
    message: '',
    errors: '',
    auth: {
      email: '',
      password: '',
      remember: false
    }
  }),
  methods: {
    ...mapActions('auth', ['login']),
    doLogin () {
      const { auth } = this
      this.login(auth)
        .then(() => {
          this.message = ''
          this.$router.push({name: 'dashboard.home'})
        })
        .catch((err) => {
          this.message = 'Dados de usuário ou senha inválidos.'
        })
    }
  }
}
</script>
