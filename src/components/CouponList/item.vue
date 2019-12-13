<template>
  <div class="coupon-item">
    <div class="coupon-item__color-bar"></div>
    <div class="coupon-item__content">
      <div class="coupon-item__head">
        <h2><span>￥</span>100</h2>
        <p>满300可用</p>
        <van-tag color="#01c2c3" text-color="#fff">可叠加</van-tag>
      </div>
      <div class="coupon-item__body">
        <h2>优惠券名称</h2>
        <p>优惠券不可用原因优惠券不可用原因优惠券不可用原因优惠券不可用</p>
      </div>
    </div>
    <div class="coupon-item__reason">有效期：2017.03.10 - 2017.12.30</div>
  </div>
</template>

<script>
  // components
  import {Tag} from 'vant'

  export default {
    name: 'coupon-item',
    inject: ['coupon'],
    props: {
      data: Object
    },
    components: {
      [Tag.name]: Tag
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .coupon-item {
    width: 100%;
    background-color: #fff;

    h2,
    p {
      margin: 0;
      font-weight: 400;
    }

    p {
      margin-bottom: 4px;
      font-size: 12px;
    }

    .coupon-item__color-bar {
      height: 8px;
      background-color: #01c2c3;
    }

    .coupon-item__content {
      position: relative;
      display: flex;
    }

    .coupon-item__head {
      padding: 8px 16px;
      min-width: 120px;

      h2 {
        color: #01c2c3;
        font-size: 32px;

        span {
          font-size: 50%;
        }
      }
    }

    .coupon-item__body {
      position: relative;
      flex: 1;
      padding: 16px;

      h2 {
        font-size: 16px;
        margin-top: 8px;
        margin-bottom: 4px;
      }

      p {
        color: #999;
      }
    }

    .coupon-item__reason {
      position: relative;
      padding: 8px 16px;
      border-top: 1px dashed #eee;
      background-color: #fefefe;
      font-size: 12px;

      &:after,
      &:before {
        content: " ";
        position: absolute;
        z-index: 1;
        top: -10px;
        background-color: #f5f5f9;
        width: 10px;
        height: 20px;
      }

      &:before {
        left: 0;
        border-radius: 0 20px 20px 0;
      }

      &:after {
        right: 0;
        border-radius: 20px 0 0 20px;
      }
    }

    & + .coupon-item {
      margin-top: 10px;
    }
  }
</style>
