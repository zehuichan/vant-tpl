<template>
  <div>
    <van-cell-group title="jweixin-1.6.0">
      <van-cell
        title="scanQRCode"
        :value="'' + ready"
        is-link
        @click="scanQRCode"
      />
      <van-cell
        title="previewImage"
        :value="'' + ready"
        is-link
        @click="previewImage"
      />
    </van-cell-group>
    <van-cell-group title="jweixin-auth">
      <van-cell title="auth" :label="code" is-link @click="auth" />
    </van-cell-group>
  </div>
</template>

<script setup>
import { useAuth, useWeixin } from '@/hooks'

const [ready, wx] = useWeixin()
const [code, authorize] = useAuth()

const scanQRCode = () => {
  wx.value.scanQRCode({
    needResult: 1,
    scanType: ['qrCode', 'barCode'],
    success: (res) => {
      alert(res.resultStr)
    }
  })
}

const previewImage = () => {
  wx.value.previewImage({
    current: 'https://img.yzcdn.cn/vant/apple-1.jpg',
    urls: [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
      'https://img.yzcdn.cn/vant/apple-3.jpg'
    ]
  })
}

const auth = () => authorize()
</script>

<style lang="less">

</style>
