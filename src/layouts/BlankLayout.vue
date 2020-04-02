<template>
  <div class="blank-layout app-wrapper">
    <app-main/>
  </div>
</template>

<script>
  // components
  import AppMain from './components/AppMain'

  export default {
    name: 'blank-layout',
    components: {
      AppMain
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
