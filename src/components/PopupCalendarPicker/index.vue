<template>
  <div class="popup-calendar-picker van-cell">
    <van-field
      v-bind="$props"
      :value="text"
      :right-icon="showIcon"
      readonly
      clickable
      @click.stop="onClick"
      @click-right-icon.stop="onClear"
    />

    <van-calendar v-model="show" get-container="body" @confirm="onConfirm"/>
  </div>
</template>

<script>
  // utils
  import {parseTime} from '@/utils'
  // components
  import {Field, Calendar} from 'vant'

  export default {
    name: 'popup-calendar-picker',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      // Field.props
      ...Field.props,

      value: [String, Array],
      format: {
        type: String,
        default: '{y}-{m}-{d}'
      },
      placeholder: String,
      disabled: Boolean,
      clearable: Boolean,
    },
    data() {
      return {
        show: false
      }
    },
    computed: {
      showIcon() {
        return this.clearable && this.value ? 'clear' : 'arrow'
      },
      text() {
        return this.value
      },
    },
    methods: {
      onClear() {
        if (!this.clearable) {
          return false
        }
        this.$emit('input', '')
      },
      onClick() {
        this.show = true
        if (this.value) {
          this.date = new Date(this.value)
        } else {
          this.date = new Date()
        }
      },
      onConfirm(date) {
        this.show = false
        const d = parseTime(date, this.format)
        this.$emit('input', d)
        this.$emit('change', d)
      }
    },
    components: {
      [Field.name]: Field,
      [Calendar.name]: Calendar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .popup-calendar-picker.van-cell {
    padding: 0;

    .van-field__right-icon {
      color: #c8c9cc;
    }
  }
</style>
