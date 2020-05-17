<template>
  <div class="discover-detailed">
    <div class="article-title">
      <span class="inner">{{ banner.title }}</span>
    </div>
    <div class="article-meta">
      <divider>{{ banner.source }} 发表于 {{ banner.datetime }}</divider>
    </div>
    <div class="banner">
      <img class="banner-img" :src="banner.image_url" alt=""/>
      <div class="banner-overlay"></div>
    </div>
    <div class="article-content" v-html="content"></div>
    <div class="comment-wrap"></div>
  </div>
</template>

<script>
  // components
  import Divider from '@/components/Divider'

  export default {
    name: 'detailed',
    data() {
      return {
        id: '',
        banner: {
          image_url: '',
          title: '',
          source: '',
          datetime: ''
        },
        content: []
      }
    },
    components: {
      Divider
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .discover-detailed {
    position: relative;
    background-color: #fff;
  }

  .article-title {
    padding: 24px 32px 0;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  .banner {
    height: 180px;
    position: relative;
    overflow: hidden;
    margin: 0 15px 7px;

    .banner-img {
      min-width: 100%;
    }

    .banner-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .article-meta {
    padding: 0 15px;
  }

  .article-content {
    font-size: 15px;
    padding: 0 15px;
    margin-bottom: 15px;
    overflow: hidden;
  }
</style>