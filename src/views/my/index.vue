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
    <div class="stats">
      <van-image :src="github" width="100%"/>
    </div>
    <van-cell-group>
      <van-field v-model="value" label="昵称" placeholder="昵称"/>
      <van-field v-model="value" label="手机" placeholder="手机"/>
    </van-cell-group>
  </div>
</template>

<script>
  // components
  import Split from '@/components/Split'

  export default {
    name: 'my',
    data() {
      return {
        value: '',
        github: 'https://github-readme-stats.vercel.app/api?username=zehuichan&count_private=true&show_icons=true&icon_color=222&title_color=0366d6&text_color=586069&bg_color=fff&hide=issues&hide_border=true&include_all_commits=true',
      }
    },
    components: {
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