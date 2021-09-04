<script>
import NavigationDesktop from './navigation-desktop.vue'
import NavigationMobile from './navigation-mobile.vue'
import {
  // CalendarIcon,
  // ChartBarIcon,
  // FolderIcon,
  HomeIcon,
  // InboxIcon,
  // UsersIcon,
} from '@heroicons/vue/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  // { name: 'Team', href: '#', icon: UsersIcon, current: false },
  // { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

export default {
  name: 'navigation',
  components: {
    NavigationDesktop,
    NavigationMobile
  },
  props: {
    type: {
      type: String,
      default: 'desktop'
    }
  },
  computed: {
    menu () {
      const { type } = this
      
      return `navigation-${type}`
    }
  },
  data: () => ({
    navigation
  })
}
</script>

<template>
  <component v-bind:is="menu" v-bind="{ navigation }" />
</template>
