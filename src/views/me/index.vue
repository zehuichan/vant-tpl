<template>
  <div class="me">
    <h3>业务组件-示例页</h3>
    <van-cell-group>
      <van-cell title="地址管理" is-link to="/myAddress"/>
      <van-cell title="Language">
        <lang-selector></lang-selector>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
  import {Cell, CellGroup} from 'vant'
  import LangSelector from '@/components/LangSelector'


  export default {
    name: 'me',
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      LangSelector
    },
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
