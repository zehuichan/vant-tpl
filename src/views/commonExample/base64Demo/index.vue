<template>
  <div class="base64-demo">
    <van-nav-bar
      left-text="图片转base64"
      left-arrow
      fixed
      @click-left="onClickLeft">
    </van-nav-bar>
    <div class="block"></div>

    <div class="page-container padded">
      <div class="uploader" v-if="!content">
        <i class="van-icon van-icon-plus van-uploader__upload-icon"></i>
        <input type="file" accept="image/*" multiple class="van-uploader__input" @change="onChange">
      </div>
      <div class="upload-preview" v-else>
        <van-image class="upload-preview__image" fit="cover" :src="content"/>
        <i class="van-icon van-icon-delete van-uploader__delete" @click="onDelete"></i>
      </div>
    </div>

    <div class="demo-block">
      <code>
        {{content}}
      </code>
    </div>
  </div>
</template>

<script>
  // vuex
  import {mapActions} from 'vuex'
  // utils
  import {readFile} from '@/utils'
  // components
  import {NavBar, Image} from 'vant'

  export default {
    name: 'base64-demo',
    components: {
      [NavBar.name]: NavBar,
      [Image.name]: Image
    },
    data() {
      return {
        content: ''
      }
    },
    created() {
      this.SetTabBarState(false)
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: this.redirect || '/me'})
      },
      onChange(event) {
        let {files} = event.target

        files = files.length === 1 ? files[0] : [].slice.call(files)

        readFile(files).then(content => {
          this.content = content
        })
      },
      onDelete(){
        this.content = ''
      },
      ...mapActions([
        'SetTabBarState'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less" scoped>
  .uploader {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 140px;
    background-color: #fff;
    border: 1px dashed #e5e5e5;

    .van-uploader__upload-icon {
      color: #969799;
      font-size: 24px;
    }

    .van-uploader__input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      cursor: pointer;
      opacity: 0;
    }
  }

  .upload-preview {
    position: relative;

    .upload-preview__image {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 140px;
    }

    .van-uploader__delete {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 2px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
    }
  }
</style>
