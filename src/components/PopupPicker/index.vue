<template>
  <div class="popup-picker van-cell">
    <van-field
        v-bind="$props"
        :value="text"
        :right-icon="showIcon"
        readonly
        clickable
        @click-input="onClick"
        @click-right-icon="onClear">
      <van-popup v-model="show" slot="extra" position="bottom" get-container="body">
        <van-picker
            ref="picker"
            show-toolbar
            :columns="columns"
            @cancel="onCancel"
            @confirm="onConfirm">
        </van-picker>
      </van-popup>
    </van-field>
  </div>
</template>

<script>
  export default {
    name: 'popup-picker',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      columns: {
        type: Array,
        default: () => []
      },
      value: [String, Number, Object, Array],
      disabled: Boolean,
      clearable: Boolean,
    },
    computed: {
      showIcon() {
        return this.clearable && this.value ? 'clear' : 'arrow'
      },
      text() {
        const curr = Array.from(this.columns).find(v => v.value === this.value) || ''
        return curr.text
      },
      index() {
        for (let i = 0; i < this.columns.length; i++) {
          const item = this.columns[i]
          if (item.value === this.value) {
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
        show: false,
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
        console.log(value)
        this.$emit('input', value.value)
        this.$emit('change', value.value, index)
      },
      onClick() {
        this.show = true
        this.$nextTick(() => {
          this.$picker.setIndexes([this.index])
        })
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .popup-picker.van-cell {
    padding: 0;

    .van-field__right-icon {
      color: #969799;
    }
  }
</style>
