<template>
  <div class="empty">{{ text }}</div>
</template>

<script>
export default {
  name: 'empty',
  props: {
    text: {
      type: String,
      default: () => '没有更多了'
    }
  }
}
</script>

<style lang="less">
.empty {
  color: #969799;
  font-size: 14px;
  line-height: 50px;
  text-align: center;
}
</style>
