<template>
  <div class="myCoupon">
    <van-nav-bar
      left-text="卡券管理"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">
    </van-nav-bar>
  </div>
</template>

<script>
  // vuex
  import {mapActions} from 'vuex'
  // components
  import {NavBar} from 'vant'

  export default {
    name: 'myCoupon',
    data() {
      return {}
    },
    created() {
      this.SetTabBarState(false)
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: this.redirect || '/me'})
      },
      onClickRight() {

      },
      ...mapActions([
        'SetTabBarState'
      ])
    },
    components: {
      [NavBar.name]: NavBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" type="text/scss">

</style>
