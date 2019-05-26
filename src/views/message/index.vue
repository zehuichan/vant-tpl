<template>
  <div class="message">
    <h3>{{city}}</h3>
  </div>
</template>

<script>

  export default {
    name: 'message',
    data() {
      return {
        city: {}
      }
    },
    created() {
      const self = this
      this.$amap().then((AMap) => {
        AMap.plugin(['AMap.CitySearch'], function () {
          const citySearch = new AMap.CitySearch()
          citySearch.getLocalCity((status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
              self.city = result
            }
          })
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
