<template>
  <div class="myAddress">
    <van-nav-bar
      left-text="管理收货地址"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">

      <a slot="right">添加新地址</a>
    </van-nav-bar>

    <address-list v-model="currentAddress"
                  :list="list"
                  @default="handleDef"
                  @edit="handleEdit"
                  @delete="handleDelete"></address-list>

    <handle v-model="show" :data="address"></handle>


    <div class="demo-block">
      <code>{{currentAddress}}</code>
    </div>
  </div>
</template>

<script>
  // vuex
  import {mapActions} from 'vuex'
  // components
  import {NavBar} from 'vant'
  import Handle from './components/handle'
  import AddressList from '@/components/AddressList'

  export default {
    name: 'myAddress',
    data() {
      return {
        show: false,
        currentAddress: null,
        address: null,
        list: []
      }
    },
    created() {
      this.SetTabBarState(false)

      this.getList()
    },
    methods: {
      getList() {
        this.$toast.loading('加载中...')
        setTimeout(() => {
          this.list = [
            {id: 1, name: 'aaa', phone: '15811123456', address: '浙江省杭州市拱墅区莫干山路 50 号', default: 0},
            {id: 2, name: 'bbb', phone: '15000512312', address: '浙江省杭州市拱墅区莫干山路 50 号', default: 0},
            {id: 3, name: 'ccc', phone: '15xxx1234gd', address: '浙江省杭州市拱墅区莫干山路 50 号', default: 1},
          ]
          this.currentAddress = this.list.find(v => v.default === 1)
          this.$toast.clear()
        }, 300)
      },
      onClickLeft() {
        this.$router.push('/me')
      },
      onClickRight() {
        this.currentAddress = null
        this.show = true
      },
      handleDef(item) {
        console.log(item)
      },
      handleEdit(item, index) {
        console.log(item, index)
        this.address = item
        this.show = true
      },
      handleDelete(item, index) {
        console.log(item, index)
        this.$dialog.confirm({
          message: '确定要删除该地址吗？'
        }).then(() => {
          // on confirm
        }).catch(() => {
          // on cancel
        })
      },
      ...mapActions([
        'SetTabBarState'
      ])
    },
    components: {
      [NavBar.name]: NavBar,
      Handle,
      AddressList
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
