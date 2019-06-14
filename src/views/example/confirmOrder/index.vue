<template>
  <div class="confirmOrder">
    <van-nav-bar
      left-text="确认订单"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>

    <address-contact></address-contact>
  </div>
</template>

<script>
  // vuex
  import {mapActions} from 'vuex'
  // components
  import {NavBar} from 'vant'
  import AddressContact from './components/AddressContact'
  import Split from '@/components/Split'

  export default {
    name: 'confirmOrder',
    data() {
      return {
        config: {}
      }
    },
    created() {
      this.SetTabBarState(false)
    },
    methods: {
      onClickLeft() {
        this.$router.push('/me')
      },
      getOrderConfig() {

      },
      ...mapActions([
        'SetTabBarState'
      ])
    },
    components: {
      [NavBar.name]: NavBar,
      AddressContact,
      Split,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
