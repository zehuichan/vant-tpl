<template>
  <van-tabbar route fixed placeholder>
    <van-tabbar-item to="/home">
      <v-svg-icon slot="icon" name="icon-earth"/>
      {{ $t('tabbar.home') }}
    </van-tabbar-item>
    <van-tabbar-item to="/api">
      <v-svg-icon slot="icon" name="icon-lights"/>
      {{ $t('tabbar.api') }}
    </van-tabbar-item>
    <van-tabbar-item to="/center">
      <v-svg-icon slot="icon" name="icon-agriculture"/>
      {{ $t('tabbar.my') }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'AppTabbar'
}
</script>