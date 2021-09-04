<template>
  <main class="flex-1 relative overflow-y-auto focus:outline-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 class="text-2xl font-semibold text-gray-900" v-if="title">{{ title }}</h1>
    </div>
    <div data-test-id="content" class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Page',
  props: {
    title: {
      type: String
    }
  }
}
</script>
