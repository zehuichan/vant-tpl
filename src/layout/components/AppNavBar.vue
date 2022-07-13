<template>
  <van-nav-bar
    class="v-nav-bar"
    :class="classname"
    v-bind="$attrs"
    @click-left="onClickLeft"
  />
</template>

<script>
export default {
  name: 'AppNavBar',
  inheritAttrs: false,
  computed: {
    classname() {
      return this.$route.meta.navbar.classname
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>
