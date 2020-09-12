<template>
  <div class="popup-action-sheet">
    <van-field
        v-bind="$props"
        :value="text"
        :right-icon="showIcon"
        readonly
        clickable
        @click-input="onClick"
        @click-right-icon="onClear"
    >
      <van-action-sheet
          slot="extra"
          v-bind="$props"
          v-model="show"
          description="请选择"
          :actions="actions"
          :round="false"
          cancel-text="取消"
          close-on-click-action
          @cancel="onCancel"
          @select="onSelect"
      />
    </van-field>
  </div>
</template>

<script>
  // components
  import {Field, ActionSheet} from 'vant'

  export default {
    name: 'popup-action-sheet',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      // Field.props
      ...Field.props,
      // ActionSheet.props
      ...ActionSheet.props,

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
      onSelect({name}) {
        console.log(name)
        this.show = false
        this.$emit('input', name)
      },
    },
    components: {
      [Field.name]: Field,
      [ActionSheet.name]: ActionSheet
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