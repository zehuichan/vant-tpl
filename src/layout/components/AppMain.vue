<template>
  <div class="app-main">
    <!--<transition name="fade-transform" mode="out-in">-->
    <router-view/>
    <!--</transition>-->
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
    data() {
      return {}
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .app-main {
    height: 100%;
    /*position: relative;*/
    /*overflow: hidden;*/
  }
</style>
