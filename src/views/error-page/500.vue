<template>
  <div class="error-page">
    <div class="inner">
      <div class="title">500</div>
      <div class="info">抱歉，服务器出错了</div>
      <div class="button-wrapper">
        <van-button type="info" size="small" to="/">返回首页</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page500'
  }
</script>
