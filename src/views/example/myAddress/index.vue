<template>
  <div class="myAddress">
    <van-nav-bar
      left-text="管理收货地址"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">

      <a slot="right">添加新地址</a>
    </van-nav-bar>

    <address-list v-model="chosenAddress"
                  :list="address_list"
                  :disabled="true"
                  @select="handleSelect"
                  @edit="handleEdit"
                  @delete="handleDelete"></address-list>

    <handle v-model="show" :data="address" @update="handleUpdate"></handle>

    <div class="demo-block" style="display: none;">
      <code>{{default_address}}</code>
    </div>
  </div>
</template>

<script>
  // vuex
  import {mapActions, mapGetters} from 'vuex'
  // components
  import {NavBar} from 'vant'
  import Handle from './components/Handle'
  import AddressList from '@/components/AddressList'

  export default {
    name: 'myAddress',
    data() {
      return {
        show: false,
        address: null,
        list: [],

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
      chosenAddress: {
        get() {
          return this.default_address
        },
        set(val) {
          console.log(val)
        }
      },
      ...mapGetters([
        'address_list',
        'default_address'
      ])
    },
    created() {
      this.SetTabBarState(false)

      if (this.address_list.length === 0) {
        this.GetAddressList()
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: this.redirect || '/me'})
      },
      onClickRight() {
        this.chosenAddress = null
        this.show = true
      },
      handleUpdate() {
        this.getList()
      },
      handleSelect(item) {
        console.log('handleSelect', item)
      },
      handleEdit(item, index) {
        console.log('handleEdit', item, index)
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
        'SetTabBarState',
        'GetAddressList'
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
