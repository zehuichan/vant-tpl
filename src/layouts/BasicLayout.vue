<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main has-padding/>
    <!--tabbar-->
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" to="/home">
        <i slot="icon" class="iconfont icon-shouye"></i>
        {{$t('navbar.home')}}
      </van-tabbar-item>
      <van-tabbar-item name="message" to="/message">
        <i slot="icon" class="iconfont icon-xiaoxi"></i>
        {{$t('navbar.message')}}
      </van-tabbar-item>
      <van-tabbar-item name="me" to="/me">
        <i slot="icon" class="iconfont icon-wode"></i>
        {{$t('navbar.me')}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // components
  import {Tabbar, TabbarItem} from 'vant'
  import AppMain from './components/AppMain'

  export default {
    name: 'basic-layout',
    data() {
      return {
        active: this.$route.name
      }
    },
    watch: {
      '$route'(to, from) {
        this.active = to.name
      }
    },
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
      AppMain
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .app-wrapper {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .van-tabbar-item__icon {
    .iconfont {
      font-size: inherit;
    }
  }
</style>
