<template>
  <div class="tpl">
    <van-cell-group>
      <van-cell title="确认订单" is-link to="/confirm" />
      <van-cell title="收银台" is-link to="/checkout" />
      <van-cell title="购物袋" is-link to="/bag" />
      <van-cell title="Mockjs" is-link to="/mockjs" />
    </van-cell-group>
    <v-table :columns="columns" :data="tabledata">

    </v-table>
    <v-badge />

  </div>
</template>

<script>
import { VTable, VBadge } from 'vantui-components/lib/index'

console.log(VTable)
export default {
  components: {
    VTable,
    VBadge
  },
  data() {
    return {
      columns: [
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
      ],
      tabledata: [
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
      ],
    }
  }
}
</script>

<style lang="less">

</style>
