<template>
  <div class="address-item">
    <div class="tap-active">
      <div class="address-cell">
        <div class="address-cell__title">{{data.name}}</div>
        <div class="address-cell__value">{{data.cellphone}}</div>
      </div>
      <div class="address-item__address ellipsis-2">{{data.address}}</div>
    </div>
    <div class="address-edit van-hairline--top" v-if="switchable">
      <div class="address-edit__radio">
        <van-radio :name="data" checked-color="#01c2c3">默认地址</van-radio>
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
    props: {
      data: Object,
      disabled: Boolean,
      switchable: Boolean
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
      margin-top: 10px;
    }

    .address-cell {
      display: flex;
      padding: 8px 16px;

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
