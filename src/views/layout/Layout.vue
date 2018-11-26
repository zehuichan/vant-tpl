<template>
  <div :class="layoutClass" class="app-wrapper">
    <div>
      <app-main/>
      <van-tabbar>
        <van-tabbar-item icon="shop">首页</van-tabbar-item>
        <van-tabbar-item icon="chat">信息</van-tabbar-item>
        <van-tabbar-item icon="records">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <van-loading v-if="loading"></van-loading>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import AppMain from './components/AppMain'
  import {Tabbar, TabbarItem, Loading} from 'vant'

  export default {
    name: 'layout',
    props: {
      layoutClass: {},
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'loading'
      ])
    },
    components: {
      AppMain,
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
      [Loading.name]: Loading
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
