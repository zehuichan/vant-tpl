<template>
  <div :class="layoutClass" class="app-wrapper">
    <!--    <div>-->
    <app-main/>
    <van-tabbar v-model="active" v-if="tabbar">
      <van-tabbar-item icon="shop" to="/home">{{$t('navbar.home')}}</van-tabbar-item>
      <van-tabbar-item icon="chat" to="/message">{{$t('navbar.message')}}</van-tabbar-item>
      <van-tabbar-item icon="records" to="/me">{{$t('navbar.me')}}</van-tabbar-item>
    </van-tabbar>
    <!--    </div>-->
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
    props: {
      layoutClass: {},
    },
    data() {
      return {}
    },
    computed: {
      active: {
        get() {
          const map = {
            home: 0,
            message: 1,
            me: 2,
          }
          return map[this.$route.name]
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
</style>
