<template>
  <div class="me">
    <h3 class="demo-title">业务组件-地址</h3>
    <van-cell-group>
      <van-cell title="地址管理" is-link to="/myAddress"/>
      <van-cell title="选择地址" is-link to="/chosenAddress"/>
      <van-cell title="确认订单" is-link to="/confirmOrder"/>
    </van-cell-group>
    <h3 class="demo-title">业务组件-卡券</h3>
    <van-cell-group>
      <van-cell title="卡券管理" is-link to="/myCoupon"/>
      <van-cell title="选择卡券" is-link to="/chosenAddress"/>
      <van-cell title="确认订单" is-link to="/confirmOrder"/>
    </van-cell-group>
    <h3 class="demo-title">业务组件-公共</h3>
    <van-cell-group>
      <van-cell title="前端分页" is-link to="/fePage"/>
      <van-cell title="图片转base64" is-link to="/toBase64"/>
      <van-cell title="ajax-bar">
        <van-button type="primary" size="mini" @click="trigger">Trigger</van-button>
      </van-cell>
    </van-cell-group>
    <h3 class="demo-title">业务组件-国际化</h3>
    <van-cell-group>
      <van-cell title="Language">
        <lang-selector/>
      </van-cell>
    </van-cell-group>

    <ajax-bar ref="bar" skip-hijack/>
  </div>
</template>

<script>
  // vuex
  import {mapActions} from 'vuex'
  // components
  import {Cell, CellGroup, Button} from 'vant'
  import LangSelector from '@/components/LangSelector'
  import Split from '@/components/Split'
  import AjaxBar from '@/components/AjaxBar'

  export default {
    name: 'me',
    created() {
      this.SetTabBarState(true)
    },
    methods: {
      trigger() {
        const bar = this.$refs.bar
        bar.start()
        setTimeout(() => {
          if (this.$refs.bar) {
            this.$refs.bar.stop()
          }
        }, Math.random() * 30000 + 1000)
      },
      ...mapActions([
        'SetTabBarState'
      ])
    },
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      LangSelector,
      Split,
      AjaxBar,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
