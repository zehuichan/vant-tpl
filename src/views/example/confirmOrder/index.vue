<template>
  <div class="confirmOrder">
    <van-nav-bar
      left-text="确认订单"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>

    <div class="order-cell">
      <i class="iconfont icon-dingwei van-cell__left-icon"></i>
      <div class="van-cell__value van-cell__value--alone">
        <div class="clearfix">
          <div class="order-cell__name fl">收货人：陈泽辉</div>
          <div class="order-cell__phone fr">15800000000</div>
        </div>
        <div class="order-cell__address ellipsis-2">
          浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室
        </div>
      </div>
      <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
    </div>
  </div>
</template>

<script>
  // vuex
  import {mapActions} from 'vuex'
  // components
  import {NavBar} from 'vant'

  export default {
    name: 'confirmOrder',
    created() {
      this.SetTabBarState(false)
    },
    methods: {
      onClickLeft() {
        this.$router.push('/me')
      },
      ...mapActions([
        'SetTabBarState'
      ])
    },
    components: {
      [NavBar.name]: NavBar,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .confirmOrder {
    .order-cell {
      position: relative;
      display: flex;
      width: 100%;
      padding: 15px;
      font-size: 14px;
      background-color: #fff;

      &:before {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 2px;
        background: repeating-linear-gradient(-45deg, #db6d66 0, #db6d66 20%, transparent 0, transparent 25%, #6486a4 0, #6486a4 45%, transparent 0, transparent 50%);
        background-size: 80px;
        content: '';
      }

      .van-cell__left-icon {
        font-size: 24px;
        margin-right: 15px;
      }

      .van-cell__right-icon {
        margin-left: 15px;
      }

      .order-cell__name,
      .order-cell__phone {
        font-weight: 700;
      }

      .order-cell__phone {
        font-size: 12px;
      }

      .order-cell__address {
        color: #7f7f8e;
        line-height: 20px;
        margin-top: 8px;
      }
    }
  }
</style>
