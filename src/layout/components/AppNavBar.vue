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
  inheritAttrs: false
}
</script>

<script setup>
import { useRoute, useRouter } from '@/router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const classname = computed(() => route.value.meta.navbar.classname)

const onClickLeft = ()=>{
  router.back()
}
</script>
