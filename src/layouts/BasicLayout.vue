<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <van-tabbar route fixed placeholder>
      <van-tabbar-item to="/tabs/home">
        <v-svg-icon slot="icon" name="icon-earth"/>
        {{$t('navbar.home')}}
      </van-tabbar-item>
      <van-tabbar-item to="/tabs/api">
        <v-svg-icon slot="icon" name="icon-lights"/>
        {{$t('navbar.api')}}
      </van-tabbar-item>
      <van-tabbar-item to="/tabs/my">
        <v-svg-icon slot="icon" name="icon-agriculture"/>
        {{$t('navbar.my')}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // components
  import AppMain from './components/AppMain'

  export default {
    name: 'basic-layout',
    components: {
      AppMain
    }
  }
</script>

<style lang="less">
  .app-wrapper {
    position: relative;
    height: 100%;
  }
</style>
