<template>
  <div class="basic-layout app-wrapper">
    <!--nav-bar-->
    <app-nav-bar v-if="$route.meta.navbar" v-bind="navbar" />
    <!--app-main-->
    <app-main />
    <!--tabbar-->
    <app-tabbar v-if="$route.meta.tabbar" v-bind="tabbar" />
  </div>
</template>

<script>
// components
import { AppMain, AppNavBar, AppTabbar } from './components'
// settings
import defaultSettings from '@/settings'

export default {
  name: 'basic-layout',
  computed: {
    navbar() {
      return Object.assign(
        {},
        { ...defaultSettings.navbar },
        this.$route.meta.navbar?.showTitle && { title: this.$route.meta.title },
        !this.$route.meta.navbar?.showTitle && { leftText: this.$route.meta.title },
        { ...this.$route.meta.navbar }
      )
    },
    tabbar() {
      return Object.assign({}, { ...defaultSettings.tabbar }, { ...this.$route.meta.tabbar })
    }
  },
  components: {
    AppNavBar,
    AppMain,
    AppTabbar
  }
}
</script>

<style lang="less">
.basic-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.app-wrapper {
  position: relative;
}
</style>
