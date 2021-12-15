<template>
  <van-nav-bar
    class="v-nav-bar"
    v-bind="attrs"
    @click-left="onClickLeft"
  />
</template>

<script>
export default {
  name: 'AppNavBar',
  inheritAttrs: false,
  computed: {
    attrs() {
      return Object.assign(
        {},
        { title: this.$route.meta.title },
        { ...this.$route.meta.navbar }
      )
    },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
.v-nav-bar {

}
</style>