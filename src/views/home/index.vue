<template>
  <div class="home">
    <h3 class="demo-title">首页-测试</h3>
    <van-cell-group>
      <van-field v-model="eee" label="用户名" placeholder="请输入用户名"/>
      <popup-picker v-model="aaa" label="奥师多456" :columns="columns1" clearable placeholder="请选择" @change="onChange1"/>
      <popup-picker v-model="bbb" label="奥师多123" :columns="columns2" clearable placeholder="请选择" @change="onChange2"/>
      <popup-datetime-picker v-model="time" label="日期" clearable placeholder="请选择" @change="onChange3"/>
      <popup-timer-picker v-model="fff" label="时间" clearable placeholder="请选择"/>
      <popup-area-picker v-model="ccc" label="城市" clearable placeholder="请选择" separator="-" @change="onChange4"/>
      <popup-map-address-picker v-model="ddd" clearable/>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="Timer组件">
        <timer :time="time2"></timer>
      </van-cell>
    </van-cell-group>
    <h3 class="demo-title">测试</h3>
    <div class="demo-block">
      <code>
        {{fff}}
      </code>
    </div>
  </div>
</template>

<script>
  // utils
  import {parseTime,} from '@/utils'
  // components
  import {Field, Cell, CellGroup} from 'vant'
  import PopupPicker from '@/components/PopupPicker'
  import PopupAreaPicker from '@/components/PopupAreaPicker'
  import PopupDatetimePicker from '@/components/PopupDatetimePicker'
  import PopupTimerPicker from '@/components/PopupTimerPicker'
  import PopupMapAddressPicker from '@/components/PopupMapAddressPicker'
  import Timer from '@/components/Timer'

  export default {
    name: 'home',
    data() {
      return {
        columns1: [
          {text: '杭州', value: 1},
          {text: '宁波', value: 2},
          {text: '温州', value: 3},
          {text: '嘉兴', value: 4},
          {text: '湖州', value: 5},
        ],
        columns2: [
          {text: '杭州1', value: 6},
          {text: '宁波2', value: 7},
          {text: '温州3', value: 8},
          {text: '嘉兴4', value: 9},
          {text: '湖州5', value: 10},
        ],
        aaa: 2,
        bbb: 6,
        eee: 6,
        fff: '',
        ccc: [
          {code: '110000', name: '北京市'},
          {code: '110100', name: '北京市'},
          {code: '110105', name: '朝阳区'}
        ],
        ddd: {},

        time: parseTime(new Date(), '{y}-{m}-{d}'),

        time2: new Date().getTime() - 3 * 86400000
      }
    },
    methods: {
      onChange1(val) {
        if (this.bbb) {
          this.$toast('只能选一个')
          this.bbb = null
        }
      },
      onChange2(val) {
        if (this.aaa) {
          this.$toast('只能选一个')
          this.aaa = null
        }
      },
      onChange3(val) {
        console.log(val)
      },
      onChange4(val) {
        console.log(val)
      },
    },
    components: {
      [Field.name]: Field,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      PopupPicker,
      PopupAreaPicker,
      PopupDatetimePicker,
      PopupTimerPicker,
      PopupMapAddressPicker,
      Timer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
