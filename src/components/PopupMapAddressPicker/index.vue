<template>
  <div class="popup-map-Address-picker van-cell">
    <van-cell is-link @click.stop="onClick">
      <div slot="title">收货地址</div>
      <div v-if="Object.keys(currentValue).length > 0">
        <div class="tit">{{currentValue && currentValue.name}}</div>
      </div>
      <div v-else>
        <i class="van-icon van-icon-location-o"></i>
        点击选择
      </div>
    </van-cell>

    <van-popup v-model="show" position="right" get-container="body"
               style="width: 100%;height: 100%;background: #f0f2f5;">
      <div class="popup-map-Address-picker__haeder">
        <van-nav-bar
          left-text="选择收货地址"
          left-arrow
          @click-left="show = false">
        </van-nav-bar>
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
            @click="handleClick(item)"
          />
        </van-cell-group>
        <div class="no-more">没有更多记录了~</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  // utils
  import {debounce} from '@/utils'
  // components
  import {NavBar, Popup, Search, Cell, CellGroup} from 'vant'
  import Split from '@/components/Split'

  export default {
    name: 'popup-map-Address-picker',
    props: {
      value: [String, Number, Object, Array]
    },
    watch: {
      value(val) {
        this.currentValue = val
      },
      currentValue(val) {
        this.$emit('input', val)
      },
      show(val) {
        val ? this.getLocalCity() : void (0)
      },
      keyword: 'getResult'
    },
    data() {
      return {
        show: false,
        currentValue: this.value,

        keyword: '',
        city: {},
        result: []
      }
    },
    created() {
    },
    methods: {
      onClick() {
        this.keyword = ''
        this.result = []
        this.show = true
      },
      handleClear() {
        this.result = []
      },
      handleClick(val) {
        this.currentValue = val
        this.show = false
      },
      getLocalCity() {
        const self = this
        this.$amap().then((AMap) => {
          AMap.plugin(['AMap.CitySearch'], function () {
            const citySearch = new AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
              if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                self.city = result
                console.log(result)
              }
            })
          })
        })
      },
      getResult: debounce(function () {
        const self = this
        this.$amap().then((AMap) => {
          AMap.plugin(['AMap.Autocomplete'], function () {
            const autoComplete = new AMap.Autocomplete({
              city: self.city.adcode,
              datatype: 'poi',
              citylimit: false
            })
            autoComplete.search(self.keyword, function (status, result) {
              // 搜索成功时，result即是对应的匹配数据
              if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                self.result = result.tips
                console.log(result.tips)
              }
            })
          })
        })
      }, 300),
    },
    components: {
      [NavBar.name]: NavBar,
      [Popup.name]: Popup,
      [Search.name]: Search,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      Split
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .popup-map-Address-picker.van-cell {
    padding: 0;

    .van-cell__title {
      flex: 0 0 90px;
      max-width: 90px;
    }

    .van-cell__value {
      text-align: left;
    }
  }

  .popup-map-Address-picker__haeder {
    background-color: #fff;
  }
</style>
