<template>
  <van-tabbar class="v-tabbar" route :fixed="false" placeholder safe-area-inset-bottom>
    <van-tabbar-item to="/home">
      <v-svg-icon slot="icon" name="icon-earth"/>
      {{ $t('tabbar.home') }}
    </van-tabbar-item>
    <van-tabbar-item to="/tpl">
      <v-svg-icon slot="icon" name="icon-lights"/>
      {{ $t('tabbar.tpl') }}
    </van-tabbar-item>
    <van-tabbar-item to="/center">
      <v-svg-icon slot="icon" name="icon-agriculture"/>
      {{ $t('tabbar.center') }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'AppTabbar'
}
</script>