<template>
  <div class="popup-area-picker van-cell">
    <van-field
      v-bind="$props"
      :value="currentText"
      :right-icon="showIcon"
      readonly
      clickable
      @click.stop="onClick"
      @click-right-icon.stop="onClear">
    </van-field>

    <van-popup v-model="show" position="bottom" get-container="body" style="width: 100%;">
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
      }
    },
    computed: {
      showIcon() {
        return this.clearable && this.value.length ? 'clear' : 'arrow'
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
        show: false,
        currentValue: this.value
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
        this.show = false
        this.currentValue = this.value
      },
      onConfirm(value, index) {
        this.show = false
        this.currentValue = value

        this.$emit('change', value)
      },
      onClick() {
        this.show = true
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
