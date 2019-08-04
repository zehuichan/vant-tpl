<template>
  <van-popup :value="showValue" position="right" style="width: 100%; height: 100%; background-color: #f0f2f5;">
    <van-nav-bar
      :left-text="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onDelete">

      <van-button type="danger" size="mini" slot="right" v-if="data">删除</van-button>
    </van-nav-bar>

    <van-cell-group>
      <van-field v-model="dataForm.name" label="收货人" placeholder="填写姓名" clearable/>
      <van-field v-model="dataForm.phone" label="联系电话" placeholder="填写手机号" clearable/>
      <popup-area-picker v-model="dataForm.area" label="所在区域" placeholder="请选择" clearable separator="-"/>
      <van-field v-model="dataForm.address" type="textarea" rows="4" placeholder="请填写详细地址" clearable/>
    </van-cell-group>

    <div class="demo-block">
      <code>{{data}}</code>
    </div>

    <div class="btn-wrapper fixed-bottom">
      <van-button type="info" block @click="onSave">保存</van-button>
    </div>
  </van-popup>
</template>

<script>
  // utils
  import {validatePhone} from '@/utils/validate'
  // components
  import {NavBar, Popup, Button, Field, CellGroup} from 'vant'
  import PopupAreaPicker from '@/components/PopupAreaPicker'

  export default {
    name: 'handle',
    props: {
      value: Boolean,
      data: Object
    },
    data() {
      return {
        showValue: false,
        dataForm: {
          id: '',
          name: '',
          phone: '',
          area: [],
          address: '',
        },
      }
    },
    watch: {
      value(val) {
        this.showValue = val
      },
      showValue(val) {
        this.$emit('input', val)
      },
    },
    computed: {
      title() {
        return this.data ? '编辑收货地址' : '添加收货地址'
      },
    },
    created() {
      if (typeof this.value !== 'undefined') {
        this.showValue = this.value
      }
    },
    methods: {
      onClickLeft() {
        this.showValue = false
      },
      onDelete() {
        this.showValue = false
      },
      onSave() {
        if (!this.dataForm.name) {
          this.$toast('请填写收货人姓名')
          return false
        }

        if (!this.dataForm.phone) {
          this.$toast('请填写手机号')
          return false
        }

        if (!validatePhone(this.dataForm.phone)) {
          this.$toast('请填写正确的手机号')
          return false
        }

        if (!this.dataForm.area) {
          this.$toast('请选择所在地区')
          return false
        }

        if (!this.dataForm.address) {
          this.$toast('请填写详细的收货地址')
          return false
        }

        console.log(this.data)
        console.log(this.dataForm)
        this.$toast({
          message: '保存',
          onClose: () => {
            this.showValue = false
            this.$emit('update')
          }
        })
      },
    },
    components: {
      [NavBar.name]: NavBar,
      [Popup.name]: Popup,
      [Button.name]: Button,
      [Field.name]: Field,
      [CellGroup.name]: CellGroup,
      PopupAreaPicker,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
