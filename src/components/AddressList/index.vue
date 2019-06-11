<template>
  <div class="address-list">
    <van-radio-group v-model="currentValue" @change="onDefault">
      <item v-for="(item, index) in list"
            :key="item.id"
            :data="item"
            :switchable="switchable"
            @edit="onEdit(item,index)"
            @delete="onDelete(item,index)"></item>
    </van-radio-group>
  </div>
</template>

<script>
  // components
  import {RadioGroup} from 'vant'
  import Item from './item'

  export default {
    name: 'address-list',
    props: {
      value: [String, Object],
      list: {
        type: Array,
        default() {
          return []
        }
      },
      switchable: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      value(val) {
        this.currentValue = val
      },
      currentValue(val) {
        this.$emit('input', val)
      },
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    methods: {
      onDefault(data) {
        this.$emit('default', data)
      },
      onEdit(data, index) {
        this.$emit('edit', data, index)
      },
      onDelete(data, index) {
        this.$emit('delete', data, index)
      },
    },
    components: {
      [RadioGroup.name]: RadioGroup,
      Item
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
