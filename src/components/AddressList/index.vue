<template>
  <div class="address-list">
    <item
      v-for="(item, index) in source"
      :key="item.id"
      :data="item"
      @select="onSelect(item, index)"
      @edit="onEdit(item, index)"
      @delete="onDelete(item, index)"
    />
  </div>
</template>

<script>
  // components
  import Item from './item'

  export default {
    name: 'address-list',
    props: {
      source: {
        type: Array,
        default: () => []
      },
      disabled: {
        type: Boolean,
        default: true
      },
      switchable: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        address: this
      }
    },
    methods: {
      onSelect(data, index) {
        this.$emit(this.disabled ? 'select-disabled' : 'select', data, index)
      },
      onEdit(data, index) {
        this.$emit('edit', data, index)
      },
      onDelete(data, index) {
        this.$emit('delete', data, index)
      },
    },
    components: {
      Item
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
