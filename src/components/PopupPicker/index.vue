<template>
  <div class="popup-picker van-cell">
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
      <van-picker
        ref="picker"
        show-toolbar
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm">
      </van-picker>
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

      columns: Array,
      show: Boolean,
      value: [String, Number, Object, Array],
      placeholder: String,
      disabled: Boolean
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
      }
    },
    computed: {
      showIcon() {
        return this.clearable && this.value ? 'clear' : 'arrow'
      },
      currentText() {
        const curr = Array.from(this.columns).find(v => v.value === this.currentValue) || ''
        return curr.text
      },
      currentIndex() {
        for (let i = 0; i < this.columns.length; i++) {
          const v = this.columns[i]
          if (v.value === this.value) {
            return i
          }
        }
        return 0
      },
      $picker() {
        return this.$refs.picker
      }
    },
    data() {
      return {
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
      },
      onConfirm(value, index) {
        this.showValue = false
        this.currentValue = value.value

        this.$emit('change', value.value)
      },
      onClick() {
        this.showValue = true
        this.$nextTick(() => {
          this.$picker.setIndexes([this.currentIndex])
        })
      }
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
