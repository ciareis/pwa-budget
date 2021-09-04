<script>
export default {
  name: 'navigation-destkop',
  props: {
    navigation: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <nav class="flex-1 px-2 space-y-1">
     <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-green-800 text-white' : 'text-green-100 hover:bg-green-600', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
      <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
      {{ item.name }}
    </a>
  </nav>
</template>
