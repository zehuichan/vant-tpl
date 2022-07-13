<template>
  <div class="app-main">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="key" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="key" />
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    },
  },
}
</script>

<style lang="less">
.app-main {
  position: relative;
  -webkit-overflow-scrolling: touch;
  flex: 1;
  overflow-y: auto; // 关键， 超出部分滚动
}
</style>
