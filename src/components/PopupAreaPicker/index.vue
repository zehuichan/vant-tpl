<template>
  <div class="popup-area-picker van-cell">
    <van-field
      v-bind="$props"
      :value="currentText"
      :right-icon="showIcon"
      readonly
      clickable
      @click="onClick"
      @click-right-icon="onClear">
    </van-field>

    <van-popup v-model="showValue" position="bottom" get-container="body" style="width: 100%;">
      <van-area
        ref="area"
        :area-list="area"
        @cancel="onCancel"
        @confirm="onConfirm">
      </van-area>
    </van-popup>
  </div>
</template>

<script>
  // data 可后端拿数据
  import area from './area'
  // components
  import {Field, Area, Popup} from 'vant'

  export default {
    name: 'popup-area-picker',
    props: {
      // Field.props
      ...Field.props,

      // Picker.props
      ...Area.props,

      show: Boolean,
      value: [String, Number, Object, Array],
      placeholder: String,
      disabled: Boolean,
      clearable: Boolean,
      separator: {
        type: String,
        default: ' '
      }
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
        return this.clearable && this.value ? 'clear' : 'arrow'
      },
      currentText() {
        const curr = Array.from(this.currentValue).map(v => v.name)
        return curr.join(this.separator)
      },
      currentCode() {
        return Array.from(this.currentValue).pop()
      },
      $area() {
        return this.$refs.area
      }
    },
    data() {
      return {
        area,
        showValue: false,
        currentValue: this.value
      }
    },
    created() {
      if (typeof this.show !== 'undefined' && this.disabled) {
        this.showValue = this.show
      }
    },
    methods: {
      onClear() {
        if (!this.clearable) {
          return false
        }
        this.currentValue = ''
      },
      onCancel() {
        this.showValue = false
        this.currentValue = this.value
      },
      onConfirm(value, index) {
        this.showValue = false
        this.currentValue = value

        this.$emit('change', value)
      },
      onClick() {
        this.showValue = true
        this.$nextTick(() => {
          this.$area.reset(this.currentCode && this.currentCode.code)
        })
      }
    },
    components: {
      [Field.name]: Field,
      [Area.name]: Area,
      [Popup.name]: Popup
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .popup-area-picker.van-cell {
    padding: 0;
  }
</style>
