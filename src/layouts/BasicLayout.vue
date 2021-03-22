<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <van-tabbar route fixed placeholder>
      <van-tabbar-item to="/tabs/home">
        <svg-icon slot="icon" name="icon-earth"/>
        {{$t('navbar.home')}}
      </van-tabbar-item>
      <van-tabbar-item to="/tabs/api">
        <svg-icon slot="icon" name="icon-lights"/>
        {{$t('navbar.api')}}
      </van-tabbar-item>
      <van-tabbar-item to="/tabs/my">
        <svg-icon slot="icon" name="icon-agriculture"/>
        {{$t('navbar.my')}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // components
  import AppMain from './components/AppMain'
  import SvgIcon from '@/components/SvgIcon'

  export default {
    name: 'basic-layout',
    components: {
      AppMain,
      SvgIcon,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .app-wrapper {
    position: relative;
    height: 100%;
  }
</style>
