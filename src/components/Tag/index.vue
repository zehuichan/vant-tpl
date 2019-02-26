<template>
  <span
    class="tag"
    :class="[type ? `tag--${type}` : '', tagSize && `tag--${tagSize}`]"
    :style="{backgroundColor: color}">

      <slot></slot>
    </span>
</template>

<script>
  export default {
    name: 'tag',
    props: {
      text: String,
      type: String,
      color: String,
      size: {
        type: String,
        default: 'mini'
      }
    },
    computed: {
      tagSize() {
        return this.size
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .tag {
    background-color: rgba(64, 158, 255, .1);
    display: inline-block;
    padding: 0 10px;
    height: 32px;
    line-height: 30px;
    font-size: 12px;
    color: #409eff;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid rgba(64, 158, 255, .2);
    white-space: nowrap;
  }

  .tag--success {
    background-color: rgba(103, 194, 58, .1);
    border-color: rgba(103, 194, 58, .2);
    color: #67c23a;
  }

  .tag--info {
    background-color: hsla(220, 4%, 58%, .1);
    border-color: hsla(220, 4%, 58%, .2);
    color: #909399;
  }

  .tag--warning {
    background-color: rgba(230, 162, 60, .1);
    border-color: rgba(230, 162, 60, .2);
    color: #e6a23c;
  }

  .tag--danger {
    background-color: hsla(0, 87%, 69%, .1);
    border-color: hsla(0, 87%, 69%, .2);
    color: #f56c6c;
  }

  .tag--mini {
    height: 20px;
    padding: 0 5px;
    line-height: 19px;
  }
</style>
