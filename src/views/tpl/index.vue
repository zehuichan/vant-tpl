<template>
  <div class="tpl">
    <van-cell-group title="模板 tpl">
      <van-cell title="确认订单" is-link to="/confirm"/>
      <van-cell title="收银台" is-link to="/checkout"/>
      <van-cell title="购物袋" is-link to="/bag"/>
      <van-cell title="Mockjs" is-link to="/mockjs"/>
    </van-cell-group>
    <van-cell-group title="装饰器 decorator">
      <van-cell title="@alert" @click="onAlert"/>
      <van-cell title="@confirm" @click="onConfirm"/>
      <van-cell title="@toggle" center>
        <van-button size="mini" type="primary" :loading="loading" @click="onToggle">按钮</van-button>
      </van-cell>
    </van-cell-group>
    <div v-for="i in 20" :key="i" class="box-card">
      <div class="text">placeholder</div>
    </div>
  </div>
</template>

<script>
// api
import { get } from '@/api/dict'
// decorator
import { loading, alert, confirm, toggle } from '@/decorator'

export default {
  name: 'Tpl',
  data() {
    return {
      loading: false
    }
  },
  created() {
    this.getData()
  },
  methods: {
    @loading()
    getData() {
      get('order_status').then((res) => {
        console.log(res)
      })
    },
    @alert('这是通过装饰器添加的确认信息', '提示')
    onAlert() {

    },
    @confirm('这是通过装饰器添加的确认信息', '提示')
    onConfirm() {

    },
    @toggle('loading')
    async onToggle() {
      const res = await userInfo()
      console.log(res)
    }
  }
}
</script>

<style lang="less">
.box-card {
  padding: 16px;
}

.sms {
  .van-field__button {
    line-height: 1;
  }
}
</style>
