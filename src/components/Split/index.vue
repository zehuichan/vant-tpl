<template>
  <div :style="[splitStyle,{height:`${height}px`}]"></div>
</template>

<script>
  export default {
    name: 'split',
    props: {
      splitStyle: {},
      height: {
        type: Number,
        default: 10
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
