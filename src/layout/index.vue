<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <app-tabbar/>
  </div>
</template>

<script>
// components
import { AppMain, AppTabbar } from './components'

export default {
  name: 'basic-layout',
  components: {
    AppMain,
    AppTabbar
  }
}
</script>

<style lang="less">
.app-wrapper {
  position: relative;
  height: 100%;
}
</style>
