<template>
  <div class="tpl">
    <van-cell-group>
      <van-cell title="确认订单" is-link to="/confirm"/>
      <van-cell title="收银台" is-link to="/checkout"/>
      <van-cell title="购物袋" is-link to="/bag"/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Tpl'
}
</script>

<style lang="less">

</style>
