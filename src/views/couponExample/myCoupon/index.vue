<template>
  <div class="myCoupon">
    <van-nav-bar
      fixed
      left-text="卡券管理"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>

    <div class="page-container padded">
      <coupon-list
        :source="coupon_list"
      />
    </div>

  </div>
</template>

<script>
  // vuex
  import {mapActions} from 'vuex'
  // components
  import {NavBar} from 'vant'
  import CouponList from '@/components/CouponList'

  export default {
    name: 'myCoupon',
    data() {
      return {
        coupon_list:[
          {},
          {},
          {},
          {},
          {},
        ]
      }
    },
    created() {
      this.SetTabBarState(false)
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: this.redirect || '/me'})
      },
      ...mapActions([
        'SetTabBarState'
      ])
    },
    components: {
      [NavBar.name]: NavBar,
      CouponList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .myCoupon {
    padding-top: 46px;
  }
</style>
