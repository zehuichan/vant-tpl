<template>
  <div class="app-main" :class="padded">
    <!--    <transition name="fade-transform" mode="out-in">-->
    <router-view/>
    <!--    </transition>-->
  </div>
</template>

<script>
  // vuex
  import {mapGetters} from 'vuex'

  export default {
    name: 'AppMain',
    computed: {
      padded() {
        return this.tabbar ? 'has-padded' : ''
      },
      ...mapGetters([
        'tabbar'
      ])
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .app-main {
    height: 100%;
    position: relative;
    overflow-x: hidden;
  }

  .has-padded {
    padding-bottom: 50px;
  }
</style>
