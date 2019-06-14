<template>
  <div class="address-item">
    <div :class="address.disabled ? '' : 'tap-active'" @click="$emit('select')">
      <div class="address-cell">
        <div class="address-cell__title">{{data.name}}</div>
        <div class="address-cell__value">{{data.phone}}</div>
      </div>
      <div class="address-item__address ellipsis-2">{{_address}}</div>
    </div>
    <div class="address-edit van-hairline--top" v-if="address.switchable">
      <div class="address-edit__radio">
        <van-radio :name="data" :checked-color="address.checkedColor">默认地址</van-radio>
      </div>
      <div class="address-edit__handle">
        <span class="edit" @click="$emit('edit')">编辑</span>
        <span class="delete" @click="$emit('delete')">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
  // components
  import {Radio} from 'vant'

  export default {
    name: 'address-item',
    inject: ['address'],
    props: {
      data: Object
    },
    computed: {
      _address() {
        const area = JSON.parse(this.data.area).map(item => item.name).join('')
        return area + this.data.address
      }
    },
    components: {
      [Radio.name]: Radio
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
  @import "~@/assets/less/tap.less";

  .address-item {
    width: 100%;
    background-color: #fff;
    color: #14151a;
    font-weight: 500;
    font-size: 14px;

    & + .address-item {
      margin-top: 8px;
    }

    .address-cell {
      display: flex;
      padding: 16px;

      &__title,
      &__value {
        flex: 1;
      }

      &__title {
        text-align: left;
      }

      &__value {
        text-align: right;
      }
    }

    .address-edit {
      display: flex;
      padding: 12px 16px;
      font-size: 12px;

      &__radio,
      &__handle {
        flex: 1;
      }

      &__handle {
        text-align: right;
      }

      .edit,
      .delete {
        padding: 8px;
        font-weight: 500;
      }

      .edit {
        color: #01c2c3;
      }

      .delete {
        color: #ff4657;
      }
    }

    &__address {
      padding: 0 16px 16px;
    }
  }
</style>
