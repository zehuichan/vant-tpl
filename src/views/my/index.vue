<template>
  <div class="my">
    <div class="user-info">
      <div class="avatar">
        <van-image :src="$store.getters.avatar" width="100%" height="100%"/>
      </div>
      <div class="user">
        <div class="name">{{$store.getters.username}}</div>
        <div class="text">{{$store.getters.github}}</div>
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
        github: 'https://github-readme-stats.vercel.app/api?username=zehuichan&show_icons=true&title_color=fff&icon_color=177ddc&text_color=ffffff&bg_color=141414&hide=["contribs"]',
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
      min-height: 140px;

      .van-image {
        display: block;
      }
    }

    .btn-wrapper {
      padding: 24px;
    }
  }
</style>