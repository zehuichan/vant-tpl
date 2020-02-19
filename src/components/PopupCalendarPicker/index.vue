<template>
  <div class="popup-calendar-picker van-cell">
    <van-field
      :value="text"
      :label="label"
      :right-icon="showIcon"
      :placeholder="placeholder"
      readonly
      clickable
      @click.stop="onClick"
      @click-right-icon.stop="onClear"
    />
    <van-calendar v-model="show" :type="type" :default-date="date" get-container="body" @confirm="onConfirm"/>
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
      value: [String, Array],
      label: String,
      type: {
        type: String,
        default: 'single',
      },
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
        return this.range ? this.value.join(' 至 ') : this.value
      },
      range() {
        return this.type === 'range'
      },
      date() {
        if (this.range) {
          const [startDay, endDay] = this.value
          return [new Date(startDay), new Date(endDay)]
        }
        return this.value ? new Date(this.value) : new Date()
      },
    },
    methods: {
      onClear() {
        if (!this.clearable) {
          return false
        }
        this.$emit('input', this.range ? [] : '')
      },
      onClick() {
        this.show = true
      },
      onConfirm(date) {
        this.show = false
        let d
        if (this.range) {
          const [startDay, endDay] = date
          d = [parseTime(startDay, this.format), parseTime(endDay, this.format)]
        } else {
          d = parseTime(date, this.format)
        }
        this.$emit('input', d)
        this.$emit('change', d)
      },
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
