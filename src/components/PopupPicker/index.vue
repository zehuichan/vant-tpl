<template>
  <div class="popup-picker van-cell">
    <van-field
      v-bind="$props"
      :value="currentValue && currentValue.text"
      clearable
      right-icon="arrow"
      @click="onClick"
      @clear="onClear"/>

    <van-popup v-model="showValue" position="bottom" get-container="body" style="width: 100%;">
      <van-picker
        show-toolbar
        :columns="data"
        @cancel="onCancel"
        @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>

<script>
  // components
  import {Field, Picker, Popup} from 'vant'

  export default {
    name: 'popup-picker',
    props: {
      // Field.props
      ...Field.props,

      // Picker.props
      ...Picker.props,

      data: Array,
      show: Boolean,
      value: [Array, String, Object],
      placeholder: String
    },
    watch: {
      value(val) {
        this.currentValue = val
      },
      currentValue(val) {
        this.$emit('input', val)
        this.$emit('change', val)
      },
      show(val) {
        this.showValue = val
      },
    },
    data() {
      return {
        showValue: false,
        currentValue: this.value
      }
    },
    created() {
      if (typeof this.show !== 'undefined') {
        this.showValue = this.show
      }
    },
    methods: {
      onClear() {
        this.currentValue = ''
      },
      onCancel() {
        this.showValue = false
      },
      onConfirm(value, index) {
        this.showValue = false
        this.currentValue = value
        console.log(value)
      },
      onClick() {
        this.showValue = true
      },
    },
    components: {
      [Field.name]: Field,
      [Picker.name]: Picker,
      [Popup.name]: Popup
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .popup-picker.van-cell {
    padding: 0;
  }
</style>
