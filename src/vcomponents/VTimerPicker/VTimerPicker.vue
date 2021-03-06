<template>
  <div class="popup-timer-picker van-cell">
    <van-field
        v-bind="$props"
        :value="value"
        :right-icon="showIcon"
        readonly
        clickable
        @click-input="onClick"
        @click-right-icon="onClear">
      <van-popup v-model="show" slot="extra" position="bottom" get-container="body">
        <van-picker
            ref="picker"
            show-toolbar
            :columns="times"
            @cancel="onCancel"
            @confirm="onConfirm">
        </van-picker>
      </van-popup>
    </van-field>
  </div>
</template>

<script>
  // utils
  import {days, hours, minutes} from '@/utils'

  export default {
    name: 'VTimerPicker',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: String,
      placeholder: String,
      disabled: Boolean,
      clearable: Boolean,
    },
    computed: {
      showIcon() {
        return this.clearable && this.value ? 'clear' : 'arrow'
      },
      index() {
        const day = this.value.split(' ')[0]
        const time = this.value.split(' ')[1]
        const hour = time.split(':')[0]
        const minute = time.split(':')[1]
        const a = this.times[0].values.indexOf(day)
        const b = this.times[1].values.indexOf(hour)
        const c = this.times[2].values.indexOf(minute)
        return [a, b, c]
      },
      $picker() {
        return this.$refs.picker
      }
    },
    data() {
      return {
        show: false,
        times: [
          {values: days()},
          {values: hours()},
          {values: minutes()},
        ],
      }
    },
    methods: {
      onClear() {
        if (!this.clearable) {
          return false
        }

        this.$emit('input', '')
      },
      onCancel() {
        this.show = false
      },
      onConfirm(value, index) {
        this.show = false
        const [day, hour, minute] = value
        this.$emit('input', `${day} ${hour}:${minute}`)
        this.$emit('change', `${day} ${hour}:${minute}`, index)
      },
      onClick() {
        this.show = true
        this.$nextTick(() => {
          if (this.value) {
            this.$picker.setIndexes(this.index)
          } else {
            this.$picker.setIndexes([0, 0, 0])
          }
        })
      }
    }
  }
</script>

<style lang="less">
  .popup-timer-picker.van-cell {
    padding: 0;

    .van-field__right-icon {
      color: #c8c9cc;
    }
  }
</style>
