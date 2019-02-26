<template>
  <div class="coupon-list">
    <checker default-item-class="coupon-item-default" selected-item-class="coupon-item-selected">
      <div class="coupon-item" :class="[couponItemClass(item.status)]" v-for="(item, index) in coupons" :key="item.id">
        <checker-item :value="item.id" @on-item-click="handleClick">
          <div class="coupon-item__content">
            <div class="coupon-item__head">
              <h2><span>￥</span> 1.5</h2>
              <p>无使用门槛</p>
            </div>
            <div class="coupon-item__body">
              <h2>优惠券名称</h2>
              <p>有效期：2017.03.10 - 2017.12.30</p>
            </div>
            <div class="coupon-item__extra">
              <i class="iconfont" :class="[extraClass(item.status)]"></i>
            </div>
          </div>
          <p class="coupon-item__reason">优惠券不可用原因</p>
        </checker-item>
      </div>
    </checker>
  </div>
</template>

<script>
  import {Checker, CheckerItem} from '@/components/Checker'

  export default {
    name: 'coupon-list',
    props: {
      coupons: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      handleClick(itemValue, itemDisabled) {
        this.$emit('change', itemValue, itemDisabled)
      },
      couponItemClass(status) {
        const map = {
          0: '',
          1: 'used',
          2: 'overdue'
        }

        return map[status]
      },
      extraClass(status) {
        const map = {
          0: '',
          1: 'icon-zhuangtaituyishiyong100100',
          2: 'icon-zhuangtaituyiguoqi100100'
        }

        return map[status]
      }
    },
    components: {
      Checker,
      CheckerItem
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .coupon-list {

  }

  .coupon-item {
    width: 100%;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

    &.used {
      .coupon-item__head h2 {
        color: #999;
      }
    }

    &.overdue {
      .coupon-item__head h2 {
        color: #999;
      }
    }

    h2 {
      height: 34px;
      font-weight: 500;
      line-height: 34px;
      margin: 0;
    }

    p {
      font-size: 12px;
      line-height: 16px;
      color: #999;
      margin: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .coupon-item-default,
  .coupon-item-selected {
    width: 100%;
  }

  .coupon-item__content {
    position: relative;
    display: flex;
  }

  .coupon-item__head {
    padding: 16px;
    min-width: 90px;

    h2 {
      color: #ff5300;
      font-size: 24px;

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
    }
  }

  .coupon-item__extra {
    position: absolute;
    right: -10px;
    top: -12px;

    .iconfont {
      font-size: 70px;
      color: #999;
      display: block;
      width: 70px;
      height: 70px;
      line-height: 70px;
    }
  }

  .coupon-item__reason {
    margin: 0;
    padding: 7px 15px;
    border-top: 1px dashed #eee;
    background-color: #fefefe;
  }
</style>
