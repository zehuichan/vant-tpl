<template>
  <div class="popup-picker van-cell">
    <van-field
      v-bind="$props"
      :value="currentText"
      :right-icon="showIcon"
      @click="onClick"
      @click-right-icon="onClear">
    </van-field>

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
      value: [String, Number, Object],
      placeholder: String,
      disabled: Boolean
    },
    watch: {
      value(val) {
        this.currentValue = val
        this.currentText = this.data.find(v => v && v.value === val) && this.data.find(v => v && v.value === val).text
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
        return this.value ? 'clear' : 'arrow'
      },
    },
    data() {
      return {
        showValue: false,
        currentValue: this.value,
        currentText: ''
      }
    },
    created() {
      if (typeof this.show !== 'undefined' && this.disabled) {
        this.showValue = this.show
      }
      this.currentText = this.data.find(v => v && v.value === this.value) && this.data.find(v => v && v.value === this.value).text
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
        this.currentValue = value.value
        this.currentText = value.text

        this.$emit('change', value.value)
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
