<template>
  <div class="app-main">
    <keep-alive>
      <router-view v-if="route.meta.keepAlive" :key="key" />
    </keep-alive>
    <router-view v-if="!route.meta.keepAlive" :key="key" />
  </div>
</template>

<script setup>
import { useRoute } from '@/router'
import { computed } from 'vue'

const route = useRoute()
const key = computed(() => route.value.path)
</script>

<style lang="less">
.app-main {
  position: relative;
  -webkit-overflow-scrolling: touch;
}
</style>
