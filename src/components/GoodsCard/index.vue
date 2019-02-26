<template>
  <div class="goods-card clearfix">
    <van-checkbox class="goods-checker" :name="value" v-if="showChecker"/>

    <div class="goods-content" @click="$emit('click')">
      <div class="goods__thumb">
        <img v-lazy="thumb" width="90" height="90" alt="">
      </div>

      <div class="goods__body">
        <div class="goods__body-title">{{title}}</div>
        <div class="goods__body-desc van-ellipsis">{{desc}}</div>
        <div class="goods__body-toolbar clearfix">
          <div class="price fl">￥ {{price | format}}</div>
          <div class="originPrice fl" v-if="originPrice">￥ {{originPrice | format}}</div>
          <div class="num fr" v-if="num">x {{num}}</div>
          <div class="num fr" v-if="stock">库存：{{stock}}</div>
        </div>
      </div>

      <div class="goods__extra" v-if="isDelete">
        <svg slot="icon" class="icon" aria-hidden="true" @click="handleDelete">
          <use xlink:href="#icon-shanchu"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  // components
  import {Checkbox} from 'vant'

  export default {
    name: 'goods-card',

    components: {
      [Checkbox.name]: Checkbox
    },

    props: {
      name: {},
      value: {},
      desc: String,
      thumb: String,
      title: String,
      num: [Number, String],
      stock: [Number, String],
      price: [Number, String],
      originPrice: [Number, String],

      isDelete: Boolean,
      showChecker: Boolean,
    },

    methods: {
      handleDelete(event) {
        event.stopPropagation()
        this.$emit('delete', event)
      }
    },

    filters: {
      format(price) {
        return (price / 100).toFixed(2)
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/var";

  .goods-card {
    display: flex;
    align-items: center; /*垂直居中*/
    justify-content: center; /*水平居中*/

    & + .goods-card {
      margin-top: 10px;
    }

    .goods-checker {
      flex: 0 0 38px;
      width: 38px;
      margin-left: 0;
      text-align: center;
    }
    .goods-content {
      width: 100%;
      display: flex;
      padding: 16px 8px;
      background-color: #fff;
      border: 1px solid #ebeef5;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

      .goods__thumb {
        flex: 0 0 90px;
        width: 90px;
        height: 90px;
        img {
          border: none;
          max-width: 100%;
          max-height: 100%;
          border-radius: 4px;
        }
      }
      .goods__body {
        position: relative;
        flex: 1;
        width: 100%;
        min-width: 0;
        margin-left: 8px;
        font-size: 12px;

        display: flex;
        flex-flow: column;

        &-title,
        &-desc {
          line-height: 20px;
          word-break: break-all;
        }

        &-title {
          margin: 0;
          max-height: 40px;
          overflow: hidden;
          font-weight: 500;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        &-desc {
          color: #666;
          max-height: 20px;
        }

        &-toolbar {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          font-size: 12px;
          line-height: 20px;

          .price {
            font-size: 12px;
            color: #f44;
            font-weight: bold;
          }
          .originPrice {
            margin-left: 5px;
            font-size: 10px;
            color: #7d7e80;
            text-decoration: line-through;
          }

          .num {
            line-height: 20px;
            color: #666;
          }
        }
      }

      .goods__extra {
        flex-shrink: 0;
        line-height: 20px;
        padding-left: 10px;
        text-align: right;
        .icon {
          width: 1.3em;
          height: 1.3em;
        }
      }
    }
  }
</style>
