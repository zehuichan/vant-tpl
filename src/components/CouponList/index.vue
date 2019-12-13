<template>
  <div class="coupon-list">
    <item
      v-for="(item, index) in source"
      :key="item.id"
      :data="item"
    />
  </div>
</template>

<script>
  // components
  import Item from './item'

  export default {
    name: 'coupon-list',
    props: {
      source: {
        type: Array,
        default: () => []
      }
    },
    provide() {
      return {
        coupon: this
      }
    },
    methods: {
      handleClick(itemValue, itemDisabled) {
        this.$emit('change', itemValue, itemDisabled)
      }
    },
    components: {
      Item
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .coupon-list {

  }
</style>
