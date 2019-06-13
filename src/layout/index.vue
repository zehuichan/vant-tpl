<template>
  <div class="app-wrapper">
    <app-main/>
    <van-tabbar v-model="active" v-if="tabbar">
      <van-tabbar-item to="/home">
        <i slot="icon" class="iconfont icon-shouye"></i>
        {{$t('navbar.home')}}
      </van-tabbar-item>
      <van-tabbar-item to="/message">
        <i slot="icon" class="iconfont icon-xiaoxi"></i>
        {{$t('navbar.message')}}
      </van-tabbar-item>
      <van-tabbar-item to="/me">
        <i slot="icon" class="iconfont icon-wode"></i>
        {{$t('navbar.me')}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'
  // components
  import {Tabbar, TabbarItem} from 'vant'
  import AppMain from './components/AppMain'

  export default {
    name: 'layout',
    data() {
      return {}
    },
    computed: {
      active: {
        get() {
          const map = {
            '/home': 0,
            '/message': 1,
            '/me': 2,
          }
          return map[this.$route.path]
        },
        set(val) {
        }
      },
      ...mapGetters([
        'tabbar'
      ])
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
