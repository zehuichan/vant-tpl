<template>
  <van-nav-bar
    v-bind="$attrs"
    v-on="$listeners"
    fixed
    placeholder
  >
    <template v-if="$slots.left" #left>

    </template>
  </van-nav-bar>
</template>

<script>
  import {NavBar} from 'vant'

  export default {
    name: 'VNavBar',
    components: {
      [NavBar.name]: NavBar
    }
  }
</script>

<style scoped>

</style>