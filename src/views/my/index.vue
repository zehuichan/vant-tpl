<template>
  <div class="my">
    <div class="user-info">
      <div class="avatar">
        <van-image :src="$store.getters.avatar" width="100%" height="100%"/>
      </div>
      <div class="user">
        <div class="name">{{ $store.getters.username }}</div>
        <div class="text">{{ $store.getters.github }}</div>
      </div>
    </div>
    <van-cell-group inset>
      <van-field v-model="value" label="昵称" placeholder="昵称"/>
      <van-field v-model="value" label="手机" placeholder="手机"/>
      <van-cell title="Language">
        <lang-selector/>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
// components
import LangSelector from '@/components/LangSelector'
import Split from '@/components/Split'

export default {
  name: 'my',
  data() {
    return {
      value: '',
    }
  },
  components: {
    LangSelector,
    Split
  }
}
</script>

<style lang="less">
.my {

  .user-info {
    display: flex;
    background-color: #fff;
    padding: 16px;
    margin-bottom: 16px;
  }

  .avatar {
    width: 54px;
    height: 54px;

    img {
      border-radius: 4px;
    }
  }

  .user {
    margin-left: 10px;

    .name {
      font-size: @font16;
      font-weight: @fw-600;
    }

    .text {
      color: @text-l;
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