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
    <x-card shadow="never">
      <img class="thumb" v-lazy="'https://img.yzcdn.cn/vant/cat.jpeg'" alt=""/>
    </x-card>
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

    .text,
    .price {
      color: #f44;
      font-weight: 600;
    }

    .price {
      line-height: 42px;
      font-size: 22px;
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
    }
  }
</style>
