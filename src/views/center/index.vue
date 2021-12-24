<template>
  <div class="center">
    <div class="user-info">
      <div>ABOUT</div>
      <div class="user-info__bottom">
        <div class="user">
          <div class="name">{{ $store.getters.userinfo.username }}</div>
          <div class="text">{{ $store.getters.userinfo.github }}</div>
        </div>
        <div class="avatar">
          <van-image :src="$store.getters.userinfo.avatar" width="100%" height="100%"/>
        </div>
      </div>
    </div>
    <van-cell-group title="info" inset>
      <van-field :value="$store.getters.userinfo.realname" label="姓名" readonly/>
      <van-field :value="$store.getters.userinfo.cellphone" label="手机" readonly/>
    </van-cell-group>
    <van-cell-group title="setting" inset>
      <van-cell title="language">
        <lang-selector/>
      </van-cell>
    </van-cell-group>
    <van-cell-group title="project" inset>
      <van-field :value="appInfo.name" label="name" readonly/>
      <van-field :value="appInfo.version" label="version" readonly/>
      <van-field :value="appInfo.lastBuildTime" label="lastBuildTime" readonly/>
    </van-cell-group>
  </div>
</template>

<script>
// components
import { LangSelector } from '@/components'

export default {
  name: 'Center',
  data() {
    return {
      appInfo: __APP_INFO__
    }
  },
  components: {
    LangSelector
  }
}
</script>

<style lang="less">
.center {

  .user-info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    height: 268px;
    background: url("./brand.jpg") 0 0 no-repeat;
    background-size: 100% 268px;
    color: @white;
  }

  .user-info__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .avatar {
    width: 54px;
    height: 54px;
    box-shadow: @shadow-1-down;

    img {
      border-radius: 4px;
    }
  }

  .user {

    .name {
      font-size: @font18;
      font-weight: @fw-600;
    }

    .text {
    }
  }

  .stats {
    padding: 10px;

    .van-image {
      display: block;
      height: 140px;
    }
  }

  .btn-wrapper {
    padding: 24px;
  }
}
</style>