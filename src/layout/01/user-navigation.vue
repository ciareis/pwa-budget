<script>
import { mapGetters } from 'vuex'

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { mapActions } from 'vuex'

export default {
  name: 'user-navigation',
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async doLogout () {
      try {
        await this.logout()
      } catch (e) {
      }
      this.$router.push({ name: 'auth.login' })
    }
  },
  data: () => ({
    userNavigation: [
      { name: 'Profile', href: '#' },
      { name: 'Configurações', href: '#' },
    ]
  }),
  computed: {
    ...mapGetters('auth', ['userFirstName', 'isAuthenticate'])
  }
}
</script>
<template>
  <!-- Profile dropdown -->
  <Menu as="div" class="ml-3 relative">
    <div>
      <MenuButton data-testid="username" class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span class="sr-only">Open user menu</span>
        {{ userFirstName }} &nbsp;&nbsp; <img class="h-8 w-8 rounded-full" src="@/assets/profile.png" v-bind:alt="userFirstName" v-bind:title="userFirstName" />
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
          <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
        </MenuItem>
        <MenuItem>
          <a v-on:click="doLogout" :class="[active ? 'bg-gray-100' : '', 'cursor-pointer block px-4 py-2 text-sm text-gray-700']">Sair</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
