<template>
  <div class="myAddress">
    <van-nav-bar
      left-text="管理收货地址"
      left-arrow
      @click-left="onClickLeft"
    >

      <van-button type="primary" size="mini" slot="right" @click="handleAdd">添加新地址</van-button>
    </van-nav-bar>

    <address-list
      :source="address_list"
      :disabled="$route.meta.disabled"
      :switchable="$route.meta.switchable"
      @edit="handleEdit"
      @select="handleSelect"
      @delete="handleDelete"
    />

    <handle
      v-model="show"
      :data="address"
      @update="handleUpdate"
      @delete="handleUpdate"
    />

    <div class="demo-block" style="display: none;">
      <code>{{default_address}}</code>
    </div>
  </div>
</template>

<script>
  // vuex
  import {mapActions, mapGetters} from 'vuex'
  // components
  import {NavBar, Button} from 'vant'
  import Handle from './components/Handle'
  import AddressList from '@/components/AddressList'

  export default {
    name: 'myAddress',
    data() {
      return {
        show: false,
        address: null,
        list: [],
        chosenAddress: null,

        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    computed: {
      ...mapGetters([
        'address_list',
        'default_address'
      ])
    },
    created() {
      this.SetTabBarState(false)

      this.$toast.loading('加载中...')
      this.GetAddressList()
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: this.redirect || '/me'})
      },
      handleUpdate() {
        this.GetAddressList()
      },
      handleAdd() {
        console.log('handleAdd', this.address)
        this.address = null
        this.show = true
      },
      handleSelect(address) {
        this.ChosenAddress(address)
        this.$router.push({path: `/confirmOrder`})
      },
      handleEdit(address, index) {
        console.log('handleEdit', address, index)
        this.address = address
        this.show = true
      },
      handleDelete(address, index) {
        console.log('handleDelete', address, index)
        this.$dialog.confirm({
          message: '确定要删除该地址吗？'
        }).then(() => {
          // on confirm
        }).catch(() => {
          // on cancel
        })
      },
      ...mapActions([
        'SetTabBarState',
        'GetAddressList',
        'ChosenAddress'
      ])
    },
    components: {
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      Handle,
      AddressList
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
