<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="@/assets/logo.png" v-bind:alt="$app.name" v-bind:title="$app.name" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Esqueci minha senha
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <TheInput v-model="email" type="email" name="email" id="auth_email" />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
          </div>

          <div class="text-sm">
            <router-link v-bind:to="{ name: 'auth.login' }" class="font-medium text-green-600 hover:text-green-500">
              Logar
            </router-link>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-green-500 group-hover:text-green-400" aria-hidden="true" />
            </span>
            Enviar email
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TheInput from '../../../components/TheInput.vue'
import { LockClosedIcon } from '@heroicons/vue/solid'

export default {
  components: {
    TheInput,
    LockClosedIcon,
  },
  data: () => ({
    email: ''
  })
}
</script>
