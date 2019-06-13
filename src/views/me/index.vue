<template>
  <div class="me">
    <h3 class="demo-title">业务组件-示例页</h3>
    <van-cell-group>
      <van-cell title="地址管理" is-link to="/myAddress"/>
      <van-cell title="确认订单" is-link to="/confirmOrder"/>
      <van-cell title="Language">
        <lang-selector></lang-selector>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
  // vuex
  import {mapActions} from 'vuex'
  // components
  import {Cell, CellGroup} from 'vant'
  import LangSelector from '@/components/LangSelector'

  export default {
    name: 'me',
    created() {
      this.SetTabBarState(true)

    },
    methods: {
      ...mapActions([
        'SetTabBarState'
      ])
    },
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      LangSelector
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
