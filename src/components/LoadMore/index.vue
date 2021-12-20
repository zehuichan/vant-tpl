<template>
  <div class="load-more">
    <div class="van-list__loading" v-if="loading && !finished">
      <van-loading size="16">{{ loadingText }}</van-loading>
    </div>
    <div class="van-list__finished-text" v-if="finished">{{ finishedText }}</div>
  </div>
</template>

<script>
export default {
  name: 'LoadMore',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    finishedText: {
      type: String,
      default: '没有更多了'
    }
  }
}
</script>

<style lang="less">

</style>
