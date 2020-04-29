<template>
  <div class="security-code">
    <div class="tip-text">输入短信验证码</div>
    <!-- 密码输入框 -->
    <van-password-input
        :value="value"
        :mask="false"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
    />
    <div class="notify-tip">
      验证码已发送至：158 0006 6380 <br>
      验证通过后， 请立即设置支付密码，以保障资金安全。
    </div>
    <!-- 数字键盘 -->
    <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
  // components
  import {PasswordInput, NumberKeyboard} from 'vant'

  export default {
    data() {
      return {
        value: '',
        showKeyboard: true,
      }
    },
    methods: {
      onInput(key) {
        this.value = (this.value + key).slice(0, 6)
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1)
      },
    },
    components: {
      [PasswordInput.name]: PasswordInput,
      [NumberKeyboard.name]: NumberKeyboard
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .security-code {
    padding: 15px;

    .tip-text {
      padding-top: 90px;
      padding-bottom: 30px;
      text-align: center;
      font-size: 15px;
      color: #191a1b;
    }

    .notify-tip {
      text-align: left;
      color: #bdc0c5;
      padding: 30px 15px;
      font-size: 12px;
    }
  }
</style>