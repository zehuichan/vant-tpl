<template>
  <div>
    <van-cell-group title="jweixin-1.6.0">
      <van-cell
        title="scanQRCode"
        is-link
        @click="scanQRCode"
      />
      <van-cell
        title="previewImage"
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

const [, wx] = useWeixin()
const [code, authorize] = useAuth()


const columns = [
  {
    label: '姓名',
    key: 'name'
  },
  {
    label: '性别',
    key: 'sex'
  },
  {
    label: '学历',
    key: 'record'
  }
]
const tabledata = [
  {
    name: 'Tom',
    sex: '男',
    record: '小学'
  },
  {
    name: 'Lucy',
    sex: '女',
    record: '本科',
  },
  {
    name: 'Jack',
    sex: '男',
    record: '高中'
  }
]

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
