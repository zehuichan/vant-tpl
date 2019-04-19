<template>
  <div class="home">
    <h1>首页</h1>
    <popup-picker v-model="aaa" :data="columns" placeholder="请选择"></popup-picker>
  </div>
</template>

<script>
  import PopupPicker from '@/components/PopupPicker'

  export default {
    name: 'home',
    data() {
      return {
        columns: [
          {text: '杭州', value: 1},
          {text: '宁波', value: 2},
          {text: '温州', value: 3},
          {text: '嘉兴', value: 4},
          {text: '湖州', value: 5},
        ],
        aaa: 2,
      }
    },
    computed: {
      selected() {
        return this.value1 != null || this.value1 != ''
      },
      selected1() {
        return this.value != null || this.value != ''
      },
    },
    components: {
      PopupPicker
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
