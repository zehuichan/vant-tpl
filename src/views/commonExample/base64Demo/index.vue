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
      <div class="uploader-wrapper">
        <div class="upload-preview" v-for="(item, index) in fileList">
          <van-image class="upload-preview__image" fit="cover" :src="item.content || item.url"/>
          <i class="van-icon van-icon-delete van-uploader__delete" @click="onDelete(item, index)"></i>
        </div>
        <div class="uploader">
          <i class="van-icon van-icon-plus van-uploader__upload-icon"></i>
          <input type="file" accept="image/*" multiple class="van-uploader__input" @change="onChange">
        </div>
      </div>
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
        fileList: []
      }
    },
    created() {
      this.SetTabBarState(false)
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: this.redirect || '/me'})
      },
      readFile(files) {
        if (Array.isArray(files)) {
          Promise.all(files.map(file => readFile(file))).then(contents => {
            const fileList = files.map((file, index) => ({
              file,
              content: contents[index]
            }))

            this.fileList = [...fileList]
          })
        } else {
          readFile(files).then(content => {
            const fileList = {
              file: files,
              content
            }

            this.fileList = [...fileList]
          })
        }
      },
      onChange(event) {
        let {files} = event.target

        files = files.length === 1 ? files[0] : [].slice.call(files)

        this.readFile(files)
      },
      onDelete(file, index) {
        this.fileList.splice(index, 1)
      },
      ...mapActions([
        'SetTabBarState'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less" scoped>
  .uploader-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .uploader {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 80px;
    height: 80px;
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
    width: 80px;
    height: 80px;
    margin-right: 8px;


    .upload-preview__image {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
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
