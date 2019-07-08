<template>
  <div class="confirmOrder">
    <van-nav-bar
      left-text="确认订单"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>

    <address-contact :data="chosen_address || default_address"></address-contact>

    <div class="demo-block">
      <code>
        chosen_address {{chosen_address}}
        default_address {{default_address}}
      </code>
    </div>
  </div>
</template>

<script>
  // vuex
  import {mapActions, mapGetters} from 'vuex'
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
    computed: {
      ...mapGetters([
        'chosen_address',
        'default_address',
      ])
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
