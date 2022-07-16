<template>
  <div class="basic-layout app-wrapper">
    <!--nav-bar-->
    <app-nav-bar v-if="route.meta.navbar" v-bind="navbar" />
    <!--app-main-->
    <app-main />
    <!--tabbar-->
    <app-tabbar v-if="route.meta.tabbar" v-bind="tabbar" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from '@/router'
import defaultSettings from '@/settings'
// components
import { AppMain, AppNavBar, AppTabbar } from './components'

const route = useRoute()

const navbar = computed(() => Object.assign(
  {},
  { ...defaultSettings.navbar },
  route.value.meta.navbar?.showTitle && { title: route.value.meta.title },
  !route.value.meta.navbar?.showTitle && { leftText: route.value.meta.title },
  { ...route.value.meta.navbar }
))
const tabbar = computed(() => Object.assign(
  {},
  { ...defaultSettings.tabbar },
  { ...route.value.meta.tabbar }
))
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
