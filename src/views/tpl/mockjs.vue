<template>
  <div class="mockjs">
    <van-cell-group>
      <van-cell title="mock 400" is-link @click="fetchData('mock400')" />
      <van-cell title="mock 401" is-link @click="fetchData('mock401')" />
      <van-cell title="mock 404" is-link @click="fetchData('mock404')" />
      <van-cell title="mock 500" is-link @click="fetchData('mock500')" />
    </van-cell-group>
  </div>
</template>

<script>
// api
import { mockData } from '@/api/test'

export default {
  name: 'Mockjs',
  computed: {
    errorLogs() {
      return this.$store.getters.errorLogs
    }
  },
  methods: {
    fetchData(url) {
      mockData(url).then((res) => {
      })
    }
  }
}
</script>

<style lang="less">

</style>