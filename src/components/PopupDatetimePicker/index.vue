<template>
  <div class="popup-datetimePicker van-cell">
    <van-field
      v-bind="$props"
      :value="currentValue"
      :right-icon="showIcon"
      readonly
      @click="onClick"
      @click-right-icon="onClear"/>

    <van-popup v-model="showValue" position="bottom" get-container="body" style="width: 100%;">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @confirm="onConfirm"
        @cancel="onCancel"/>
    </van-popup>
  </div>
</template>

<script>
  // utils
  import {parseTime} from '@/utils'
  // components
  import {Field, DatetimePicker, Popup} from 'vant'

  export default {
    name: 'popup-datetimePicker',
    props: {
      // Field.props
      ...Field.props,

      // DatetimePicker.props
      ...DatetimePicker.props,

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
      },
      show(val) {
        this.showValue = val
      },
    },
    computed: {
      showIcon() {
        console.log(this.value)
        return this.value ? 'clear' : 'clock-o'
      },
    },
    data() {
      return {
        showValue: false,
        currentValue: this.value,
        currentDate: new Date()
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
        this.currentDate = new Date()
      },
      onCancel() {
        this.showValue = false
      },
      onConfirm(value) {
        this.showValue = false
        this.currentValue = parseTime(value, '{y}-{m}-{d}')

        this.$emit('change', parseTime(value, '{y}-{m}-{d}'))
      },
      onClick() {
        this.showValue = true
      },
    },
    components: {
      [Field.name]: Field,
      [DatetimePicker.name]: DatetimePicker,
      [Popup.name]: Popup
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .popup-datetimePicker.van-cell {
    padding: 0;
  }
</style>
