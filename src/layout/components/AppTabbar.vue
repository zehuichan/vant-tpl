<template>
  <van-tabbar route fixed placeholder v-if="$route.meta.tabbar">
    <van-tabbar-item to="/home">
      <v-svg-icon slot="icon" name="icon-earth"/>
      {{ $t('navbar.home') }}
    </van-tabbar-item>
    <van-tabbar-item to="/api">
      <v-svg-icon slot="icon" name="icon-lights"/>
      {{ $t('navbar.api') }}
    </van-tabbar-item>
    <van-tabbar-item to="/my">
      <v-svg-icon slot="icon" name="icon-agriculture"/>
      {{ $t('navbar.my') }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'AppTabbar'
}
</script>