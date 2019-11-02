<template>
  <div class="confirmOrder">
    <van-nav-bar
      fixed
      left-text="确认订单"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>

    <address-contact :data="chosen_address || default_address"></address-contact>
    <split></split>
    <div class="page-container">
      <x-card>
        <div slot="header">商品信息</div>
        <div style="width: 100%;">
          <div class="goods-item" v-for="item in goods_data_detail" :key="item.id">
            <div class="goods__thumb">
              <van-image lazy-load width="100%" height="100%" :src="item.image"/>
            </div>
            <div class="goods__body">
              <div class="goods__body-title">{{item.name}}</div>
              <div class="goods__body-toolbar">x {{item.stock}}</div>
            </div>
            <div class="goods__extra">
              <span class="price">￥ {{item[`${level}_price`] | format}}</span>
              <span class="original-price">{{item.v1_price | format}}</span>
            </div>
          </div>
        </div>
      </x-card>
    </div>
    <van-cell title="顺丰速运" value="+￥18.00" :border="false"/>
    <split></split>
    <div class="desc">
      <ul>
        <li>1、若卖家未在36小时内发货，您将获得48元现金及170元优惠券补偿。</li>
        <li>2、每件交易商品均由平台针对实物进行鉴别，鉴于商品价格波动性，同时每个款式每个尺码的商品出售时仅有一件等情况，故不支持退换差价。</li>
        <li>提交订单即表示同意</li>
      </ul>
    </div>
    <split></split>

    <div class="btn-wrapper padded-mini fixed-bottom clearfix">
      <div class="fl">
        <span class="text">实付款：￥</span>
        <span class="price">977.00</span>
      </div>
      <div class="fr">
        <van-button type="primary" loading loading-type="spinner" loading-text="提交订单">提交订单</van-button>
      </div>
    </div>

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
  import {NavBar, Button, Cell, Image} from 'vant'
  import AddressContact from './components/AddressContact'
  import Split from '@/components/Split'
  import XCard from '@/components/Card'

  export default {
    name: 'confirmOrder',
    data() {
      return {
        config: {},
        level: 'v2',
        goods_data_detail: []
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

      this.getOrderConfig()
    },
    methods: {
      onClickLeft() {
        this.$router.push('/me')
      },
      getOrderConfig() {
        this.goods_data_detail = [
          {
            approval_num: '国药准字Z20026714',
            barcode: '6923872200924',
            column_ids: ',3,',
            company: '广西源安堂药业有限公司',
            content: null,
            drug_type: '',
            goods_desc: null,
            goodscode: '1022406',
            id: 714,
            image: '/weixin_manage/drugImage/6923872200924/formservice78B2WO9Z.png',
            merchant: '福济药业',
            name: '银胡感冒散',
            pack_unit: '盒',
            period: '18',
            prescription_type: '',
            producing_area: '',
            properties: '普通药品',
            record_time: 1567869754,
            shortcode: 'YHGMS',
            standard: '2.2g*3袋',
            status: 1,
            stock: 10,
            troche: '外用散剂',
            type_id: 16,
            v1_price: 4000,
            v2_price: 3350,
            v3_price: 3350,
            v4_price: 3350,
            v5_price: 3350,
          }
        ]
      },
      ...mapActions([
        'SetTabBarState'
      ])
    },
    components: {
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      [Cell.name]: Cell,
      [Image.name]: Image,
      AddressContact,
      Split,
      XCard,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  .confirmOrder {
    padding-top: 46px;
    padding-bottom: 60px;

    .original-price {
      font-size: 3.2vw;
      color: #999;
      text-decoration: line-through;
      padding-left: 2.13333vw;
    }

    .desc {
      padding: 8px 16px;
      background-color: #fff;
      line-height: 24px;
      color: #666;
      font-size: 12px;
      font-weight: 500;
    }

    .btn-wrapper {
      /*box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);*/
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);


      .text,
      .price {
        color: #f44;
        font-weight: 600;
      }

      .price {
        line-height: 42px;
        font-size: 22px;
      }
    }

    .goods-item {
      display: flex;
      width: 100%;
      height: 60px;
      min-height: 60px;
      background-color: #fff;
      color: #333;

      & + .goods-item {
        margin-top: 10px;
      }

      .goods__thumb {
        flex: 0 0 60px;
        width: 60px;
        height: 60px;

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
        margin-left: 16px;

        display: flex;
        flex-flow: column;

        &-title {
          margin: 0;
          max-height: 40px;
          font-size: 14px;
          font-weight: 700;
          color: #393939;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        &-toolbar {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          font-size: 12px;
          line-height: 20px;
          color: #999;
        }
      }

      .goods__extra {
        flex-shrink: 0;
        padding-left: 10px;
        text-align: right;
        font-size: 14px;
        font-weight: 700;
        color: #393939;
      }
    }
  }
</style>
