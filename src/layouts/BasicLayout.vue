<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <van-tabbar route fixed placeholder>
      <van-tabbar-item name="home" to="/home">
        <svg-icon slot="icon" name="icon-shouye"/>
        {{$t('navbar.home')}}
      </van-tabbar-item>
      <van-tabbar-item name="message" to="/message">
        <svg-icon slot="icon" name="icon-xiaoxi"/>
        {{$t('navbar.message')}}
      </van-tabbar-item>
      <van-tabbar-item name="components" to="/components">
        <svg-icon slot="icon" name="icon-partner"/>
        {{$t('navbar.components')}}
      </van-tabbar-item>
      <van-tabbar-item name="me" to="/me">
        <svg-icon slot="icon" name="icon-wode"/>
        {{$t('navbar.me')}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // components
  import {Tabbar, TabbarItem} from 'vant'
  import AppMain from './components/AppMain'
  import SvgIcon from '@/components/SvgIcon'

  export default {
    name: 'basic-layout',
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
      AppMain,
      SvgIcon,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .app-wrapper {
    position: relative;
    height: 100%;
  }
</style>
