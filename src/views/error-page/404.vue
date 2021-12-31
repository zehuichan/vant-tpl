<template>
  <div class="error-page">
    <div class="title">404</div>
    <div class="info">抱歉，你访问的页面不存在</div>
    <div class="button-wrapper">
      <van-button type="info" to="/">返回首页</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page404'
}
</script>

<style lang="less">
@import './index.less';
</style>