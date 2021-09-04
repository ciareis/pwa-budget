<template>
  <router-view />
</template>

<script>
import { logVersion } from '@/support/version'

export default {
  name: 'app',
  mounted () {
    logVersion(process.env.version, this.$options.boot_time)
  }
}
</script>
