<template>
  <div class="popup-area-picker van-cell">
    <van-field
      v-bind="$attrs"
      :value="text"
      :right-icon="showIcon"
      readonly
      clickable
      @click-input="onClick"
      @click-right-icon="onClear"
    />
    <van-popup v-model="show" position="bottom" get-container="body">
      <van-area
        ref="area"
        title="请选择"
        :loading="loading"
        :area-list="area"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
  // data 可后端拿数据
  import area from './area'

  export default {
    name: 'VAreaPicker',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: {
        type: Array,
        default: () => []
      },
      separator: {
        type: String,
        default: ' '
      }
    },
    computed: {
      showIcon() {
        return this.$attrs.clearable && this.value.length ? 'clear' : 'arrow'
      },
      text() {
        const curr = Array.from(this.value).map(v => v.name)
        return curr.join(this.separator)
      },
      code() {
        const curr = Array.from(this.value).pop()
        return curr && curr.code
      },
      $area() {
        return this.$refs.area
      }
    },
    data() {
      return {
        area,
        show: false,
        loading: false,
      }
    },
    methods: {
      onClear() {
        if (!this.$attrs.clearable) {
          return false
        }
        this.$emit('input', [])
      },
      onCancel() {
        this.show = false
      },
      onConfirm(value, index) {
        this.show = false
        this.$emit('input', value)
        this.$emit('change', value, index)
      },
      onClick() {
        this.show = true
        this.$nextTick(() => {
          this.$area.reset(this.code)
        })
      }
    }
  }
</script>


<style lang="less">
  .popup-area-picker.van-cell {
    padding: 0;

    .van-field__right-icon {
      color: #c8c9cc;
    }
  }
</style>
