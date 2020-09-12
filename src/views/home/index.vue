<template>
  <div class="home">
    <van-cell-group :border="false" title="field扩展">
      <van-field
          v-model="phone"
          label="手机号"
          placeholder="ex: xxx xxxx xxxx"
          :formatter="formatterPhone"
          clearable
          input-align="right"
      />
      <van-field
          v-model="bankCard"
          label="银行卡"
          placeholder="ex: xxxx xxxx xxxx xxxx xxx"
          :formatter="formatterBankCard"
          clearable
          input-align="right"
          @blur="inputBlur"
      />
      <van-field
          :value="bankName"
          label="银行"
          placeholder="ex: xxx银行"
          readonly
          input-align="right"
      />
      <van-field
          v-model="money"
          label="金额"
          placeholder="ex: xxx,xxx,xxx,xxx"
          :formatter="formatterMoney"
          clearable
          input-align="right"
      />
    </van-cell-group>
    <van-cell-group :border="false" title="picker相关">
      <popup-picker
          v-model="picker1"
          label="picker1"
          :columns="columns1"
          clearable
          placeholder="请选择"
          @change="onChange1"
      />
      <popup-picker
          v-model="picker2"
          label="picker2"
          :columns="columns2"
          clearable
          placeholder="请选择"
          @change="onChange2"
      />
      <popup-area-picker v-model="area" label="省市区" clearable placeholder="请选择" separator="-"/>
      <popup-action-sheet v-model="action" :actions="actions" label="动作面板" placeholder="动作面板"/>
      <popup-map-address-picker v-model="address" clearable/>
    </van-cell-group>
    <van-cell-group :border="false" title="时间日期相关">
      <popup-datetime-picker v-model="date" label="日期" clearable placeholder="请选择"/>
      <popup-timer-picker v-model="time" label="时间" clearable placeholder="请选择"/>
    </van-cell-group>
    <van-cell-group :border="false" title="日历相关">
      <popup-calendar-picker v-model="calendar" label="单个日期" clearable placeholder="请选择"/>
      <popup-calendar-picker v-model="calendar_multiple" label="多个日期" type="multiple" clearable placeholder="请选择"/>
      <popup-calendar-picker v-model="calendar_range" label="日期区间" type="range" clearable placeholder="请选择"/>
    </van-cell-group>
    <van-cell-group :border="false" title="个性组件相关">
      <van-cell title="Timer组件">
        <timer :time="time2"/>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
  // utils
  import {parseTime} from '@/utils'
  import {$_formatValue, trimValue} from '@/utils/formate-value'
  import BIN from '@/utils/bankcardinfo'
  // components
  import {Field, Cell, CellGroup} from 'vant'
  import PopupPicker from '@/components/PopupPicker'
  import PopupAreaPicker from '@/components/PopupAreaPicker'
  import PopupActionSheet from '@/components/PopupActionSheet'
  import PopupDatetimePicker from '@/components/PopupDatetimePicker'
  import PopupTimerPicker from '@/components/PopupTimerPicker'
  import PopupMapAddressPicker from '@/components/PopupMapAddressPicker'
  import PopupCalendarPicker from '@/components/PopupCalendarPicker'
  import Timer from '@/components/Timer'

  export default {
    name: 'home',
    data() {
      return {
        phone: '',
        bankCard: '',
        bankName: '',
        money: '',
        columns1: [
          {text: '杭州', value: 1},
          {text: '宁波', value: 2},
          {text: '温州', value: 3},
          {text: '嘉兴', value: 4},
          {text: '湖州', value: 5},
        ],
        columns2: [
          {text: '杭州1', value: 6},
          {text: '宁波2', value: 7},
          {text: '温州3', value: 8},
          {text: '嘉兴4', value: 9},
          {text: '湖州5', value: 10},
        ],
        picker1: 2,
        picker2: 6,

        area: [
          {code: '110000', name: '北京市'},
          {code: '110100', name: '北京市'},
          {code: '110105', name: '朝阳区'}
        ],

        actions: [{name: '选项一'}, {name: '选项二'}, {name: '选项三'}],
        action:'',

        address: {},

        date: parseTime(new Date(), '{y}-{m}-{d}'),
        time: '',

        time2: (new Date()).getTime() - 86400 * 3 * 1000,

        calendar: parseTime(new Date(Date.now() + 3 * 1000 * 3600 * 24), '{y}-{m}-{d}'),
        calendar_multiple: [parseTime(new Date(), '{y}-{m}-{d}'), parseTime(new Date(Date.now() + 2 * 1000 * 3600 * 24), '{y}-{m}-{d}')],
        calendar_range: [parseTime(new Date(), '{y}-{m}-{d}'), parseTime(new Date(Date.now() + 3 * 1000 * 3600 * 24), '{y}-{m}-{d}')]
      }
    },
    methods: {
      formatterPhone(n) {
        let o = this.phone
        return $_formatValue(n, o, 'phone').value
      },
      formatterBankCard(n) {
        let o = this.bankCard
        return $_formatValue(n, o, 'bankCard').value
      },
      formatterMoney(n) {
        let o = this.money
        return $_formatValue(n, o, 'money').value
      },
      async inputBlur() {
        try {
          const {bankName} = await BIN.getBankBin(trimValue(this.bankCard))
          this.bankName = bankName
        } catch (e) {
          this.bankName = ''
        }
      },
      onChange1(val) {
        if (this.bbb) {
          this.$toast('只能选一个')
          this.bbb = null
        }
      },
      onChange2(val) {
        if (this.aaa) {
          this.$toast('只能选一个')
          this.aaa = null
        }
      },
    },
    components: {
      [Field.name]: Field,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      PopupPicker,
      PopupAreaPicker,
      PopupActionSheet,
      PopupDatetimePicker,
      PopupTimerPicker,
      PopupMapAddressPicker,
      PopupCalendarPicker,
      Timer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
