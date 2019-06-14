<template>
  <div class="chosenAddress">
    <van-nav-bar
      left-text="选择收货地址"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">

      <van-button type="primary" size="mini" slot="right">管理</van-button>
    </van-nav-bar>

    <address-list :list="address_list"
                  :disabled="false"
                  :switchable="false"
                  @select="handleSelect"></address-list>

    <code>
      {{default_address}}
    </code>
  </div>
</template>

<script>
  // vuex
  import {mapActions, mapGetters} from 'vuex'
  // components
  import {NavBar, Button} from 'vant'
  import AddressList from '@/components/AddressList'

  export default {
    name: 'chosenAddress',
    data() {
      return {
        list: []
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
    },
    methods: {
      onClickLeft() {
        this.$router.push('/me')
      },
      onClickRight() {
        const {fullPath} = this.$route
        this.$router.push({path: `/myAddress?redirect=${fullPath}`})
      },
      handleSelect(data, idnex) {
        console.log(data)
      },
      ...mapActions([
        'SetTabBarState'
      ])
    },
    components: {
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      AddressList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
