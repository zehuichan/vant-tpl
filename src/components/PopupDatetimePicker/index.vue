<template>
  <div class="popup-datetimePicker van-cell">
    <van-field
      v-bind="$props"
      :value="value"
      :right-icon="showIcon"
      readonly
      clickable
      @click.stop="onClick"
      @click-right-icon.stop="onClear">
    </van-field>

    <van-popup v-model="show" position="bottom" get-container="body">
      <van-datetime-picker
        type="date"
        :value="date"
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
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      // Field.props
      ...Field.props,

      // DatetimePicker.props
      ...DatetimePicker.props,

      value: [Array, String, Object],
      placeholder: String,
      clearable: Boolean,
    },
    computed: {
      showIcon() {
        return this.clearable && this.value ? 'clear' : 'clock-o'
      },
    },
    data() {
      return {
        show: false,
        date: new Date()
      }
    },
    methods: {
      onClear() {
        if (!this.clearable) {
          return false
        }

        this.date = new Date()
        this.$emit('input', '')
      },
      onCancel() {
        this.show = false
      },
      onConfirm(value) {
        this.show = false
        this.$emit('input', parseTime(value, '{y}-{m}-{d}'))
        this.$emit('change', parseTime(value, '{y}-{m}-{d}'))
      },
      onClick() {
        this.show = true
        if (this.value) {
          this.date = new Date(this.value)
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

    .van-field__right-icon {
      color: #c8c9cc;
    }
  }
</style>
