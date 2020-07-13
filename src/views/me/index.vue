<template>
  <div class="me">
    <!--业务组件-地址-->
    <van-cell-group title="业务组件-地址" :border="false">
      <van-cell title="地址管理" is-link to="/myAddress"/>
      <van-cell title="确认订单" is-link to="/confirmOrder"/>
    </van-cell-group>
    <!--业务组件-卡券-->
    <van-cell-group title="业务组件-卡券" :border="false">
      <van-cell title="卡券管理" is-link to="/myCoupon"/>
    </van-cell-group>
    <!--业务组件-公共-->
    <van-cell-group title="业务组件-公共" :border="false">
      <van-cell title="购物车" is-link to="/shopCart"/>
      <van-cell title="支付密码" is-link to="/securityCode"/>
      <van-cell title="前端分页" is-link to="/fePage"/>
      <van-cell title="图片转base64" is-link to="/toBase64"/>
      <van-cell title="发现文章详情" is-link to="/discover/detailed"/>
    </van-cell-group>
    <!--业务组件-格式化时间-->
    <van-cell-group title="格式化时间" :border="false">
      <van-cell title="dayjs" :value="$options.filters.formatDayJs(new Date())"/>
      <van-cell title="仿im时间" :value="$options.filters.formatIMTime('2020-07-11 17:23:06')"/>
    </van-cell-group>
    <!--业务组件-国际化-->
    <van-cell-group title="业务组件-国际化" :border="false">
      <van-cell title="Language">
        <lang-selector/>
      </van-cell>
    </van-cell-group>
    <divider>Text</divider>
  </div>
</template>

<script>
  // components
  import {Cell, CellGroup, Button} from 'vant'
  import LangSelector from '@/components/LangSelector'
  import Divider from '@/components/Divider'
  import Split from '@/components/Split'

  export default {
    name: 'me',
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      LangSelector,
      Divider,
      Split,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
