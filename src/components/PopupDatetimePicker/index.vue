<template>
  <div class="popup-datetimePicker van-cell">
    <van-field
      v-bind="$props"
      v-model="currentValue"
      :right-icon="showIcon"
      readonly
      clickable
      @click.stop="onClick"
      @click-right-icon.stop="onClear">
    </van-field>

    <van-popup v-model="showValue" position="bottom" get-container="body" style="width: 100%;">
      <van-datetime-picker
        type="date"
        :value="currentDate"
        @confirm="onConfirm"
        @cancel="onCancel">
      </van-datetime-picker>
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

      show: Boolean,
      value: [Array, String, Object],
      placeholder: String,
      clearable: Boolean,
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
        return this.clearable && this.value ? 'clear' : 'clock'
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
        if (!this.clearable) {
          return false
        }
        this.currentValue = null
        this.currentDate = new Date()
      },
      onCancel() {
        this.showValue = false
        this.currentValue = this.value
      },
      onConfirm(value) {
        this.showValue = false
        this.currentValue = parseTime(value, '{y}-{m}-{d}')

        this.$emit('change', parseTime(value, '{y}-{m}-{d}'))
      },
      onClick() {
        this.showValue = true
        if (this.currentValue) {
          this.currentDate = new Date(this.currentValue)
        }
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
