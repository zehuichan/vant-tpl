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
  export default {
    name: 'VNavBar',
  }
</script>

<style scoped>

</style>