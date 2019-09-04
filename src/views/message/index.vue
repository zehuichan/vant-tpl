<template>
  <div class="message">
    <h3 class="demo-title">高德API-示例页</h3>

    <div class="AMap-box__header">
      <van-search
        v-model="keyword"
        placeholder="请输入搜索关键词"
        :label="city.city || '加载中'"
        @clear="handleClear"/>
      <div class="cell-group-title">搜索结果</div>
    </div>
    <div class="AMap-box__content">
      <van-cell-group>
        <van-cell
          v-for="item in result"
          :key="item.id"
          clickable
          :title="item.name"
          :label="`${item.district} ${item.address}`"
          @click="handleClick(item)"/>
      </van-cell-group>
      <div class="no-more">没有更多记录了~</div>
    </div>
  </div>
</template>

<script>
  // utils
  import {debounce} from '@/utils'
  // components
  import {Search, Cell, CellGroup} from 'vant'
  import Split from '@/components/Split'

  export default {
    name: 'message',
    components: {
      [Search.name]: Search,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      Split
    },
    data() {
      return {
        keyword: '',
        city: {},
        result: []
      }
    },
    watch: {
      keyword: 'getResult'
    },
    created() {
      this.getLocalCity()
    },
    methods: {
      getLocalCity() {
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
      },
      getResult: debounce(function () {
        const self = this
        self.result = []
        this.$amap().then((AMap) => {
          AMap.plugin(['AMap.Autocomplete'], function () {
            const autoComplete = new AMap.Autocomplete({
              city: self.city.city,
              datatype: 'poi',
              citylimit: true
            })
            autoComplete.search(self.keyword, function (status, result) {
              // 搜索成功时，result即是对应的匹配数据
              if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                console.log(result.tips)
                self.result = result.tips
              }
            })
          })
        })
      }, 500),
      handleClear() {
        this.result = []
      },
      handleClick(val) {
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .AMap-box__header {
    background-color: #fff;
  }
</style>
