<template>
  <div class="home">
    <div>首页</div>
    <div>aaa:{{aaa}}</div>
    <div>bbb:{{bbb}}</div>
    <van-cell-group>
      <van-field v-model="aaa" label="用户名" placeholder="请输入用户名"/>
      <popup-picker v-model="aaa" label="奥师多456" :data="columns1" clearable placeholder="请选择" @change="onChange1"/>
      <popup-picker v-model="bbb" label="奥师多123" :data="columns2" clearable placeholder="请选择" @change="onChange2"/>
      <popup-datetime-picker v-model="time" label="日期" clearable placeholder="请选择" @change="onChange3"/>
      <popup-area-picker v-model="ccc" label="城市" placeholder="请选择" separator="-" @change="onChange4"/>
    </van-cell-group>
  </div>
</template>

<script>
  import {Field, CellGroup} from 'vant'
  import PopupPicker from '@/components/PopupPicker'
  import PopupAreaPicker from '@/components/PopupAreaPicker'
  import PopupDatetimePicker from '@/components/PopupDatetimePicker'

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
        ccc: [
          {code: '110000', name: '北京市'},
          {code: '110100', name: '北京市'},
          {code: '110102', name: '西城区'}
        ],

        time: null
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
      [CellGroup.name]: CellGroup,
      PopupPicker,
      PopupAreaPicker,
      PopupDatetimePicker,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
