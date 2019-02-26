<template>
  <div class="card" :class="borderRadius ?  `is-${borderRadius}-show`: `is-always-show`" @click="$emit('click')">
    <div class="card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="card__body" :style="bodyStyle">
      <slot></slot>
    </div>
    <div class="card__extra" :style="extraStyle" v-if="$slots.extra || extra">
      <slot name="extra"></slot>
    </div>
    <div class="card__footer" v-if="$slots.footer || footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      header: {},
      bodyStyle: {},
      extraStyle: {},
      extra: {},
      footer: {},
      borderRadius: String
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import '~@/assets/less/1px.less';

  .card {
    position: relative;
    font-size: 12px;
    line-height: 20px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    /*box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);*/
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    &.is-always-show {
      border-radius: 4px;
    }

    &.is-never-show {
      border-radius: 0;
    }

    & + .card {
      margin-top: 10px;
    }

    &:last-child {
      margin-bottom: 10px;
    }
  }

  .card__header {
    padding: 11px 16px;
    .vux-1px-b();
    box-sizing: border-box;
  }

  .card__body {
    display: flex;
    padding: 16px;
  }

  .card__extra,
  .card__footer {
    font-size: 12px;
    padding: 11px 16px;
    border-top: 1px solid #ebeef5;
  }
</style>
