<template>
  <div class="popup-action-sheet">
    <van-field
      v-bind="$attrs"
      :value="text"
      :right-icon="showIcon"
      readonly
      clickable
      @click-input="onClick"
      @click-right-icon="onClear"
    />
    <van-action-sheet
      v-bind="$attrs"
      v-model="show"
      description="请选择"
      :round="false"
      cancel-text="取消"
      close-on-click-action
      @cancel="onCancel"
      @select="onSelect"
    />
  </div>
</template>

<script>
  export default {
    name: 'popup-action-sheet',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: String,
      disabled: Boolean,
      clearable: Boolean,
    },
    computed: {
      showIcon() {
        return this.clearable && this.value ? 'clear' : 'arrow'
      },
      text() {
        return this.value
      },
    },
    data() {
      return {
        show: false
      }
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
      },
      onCancel() {

      },
      onSelect({ name }) {
        console.log(name)
        this.show = false
        this.$emit('input', name)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .popup-action-sheet.van-cell {
    padding: 0;

    .van-field__right-icon {
      color: #969799;
    }
  }
</style>