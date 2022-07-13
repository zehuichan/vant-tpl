<template>
  <van-tabbar class="v-tabbar" v-bind="$attrs" route>
    <van-tabbar-item icon="home-o" to="/home">
      {{ $t('tabbar.home') }}
    </van-tabbar-item>
    <van-tabbar-item icon="brush-o" to="/tpl">
      {{ $t('tabbar.tpl') }}
    </van-tabbar-item>
    <van-tabbar-item icon="smile-o" to="/center">
      {{ $t('tabbar.center') }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'AppTabbar',
  inheritAttrs: false
}
</script>