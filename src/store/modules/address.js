import {} from '@/api/address'
import {Toast} from 'vant'

// mock data
const list = [
  {
    id: 1,
    name: '张三',
    phone: '15800066666',
    area: '[{"code":"330000","name":"浙江省"},{"code":"330100","name":"杭州市"},{"code":"330105","name":"拱墅区"}]',
    address: '莫干山路 50 号',
    default: 0
  },
  {
    id: 2,
    name: '李四',
    phone: '15000512312',
    area: '[{"code":"330000","name":"浙江省"},{"code":"330100","name":"杭州市"},{"code":"330105","name":"拱墅区"}]',
    address: '莫干山路 50 号',
    default: 0
  },
  {
    id: 3,
    name: '王五',
    phone: '13923202010',
    area: '[{"code":"330000","name":"浙江省"},{"code":"330100","name":"杭州市"},{"code":"330105","name":"拱墅区"}]',
    address: '莫干山路 50 号',
    default: 1
  },
]

const address = {
  state: {
    address_list: [],
    chosen_address: null
  },
  mutations: {
    SET_ADDRESS_LIST(state, list) {
      state.address_list = list
    },
    SET_CHOSEN_ADDRESS(state, address) {
      state.chosen_address = address
    }
  },
  actions: {
    // 获取地址列表
    GetAddressList({commit, state}) {
      return new Promise((resolve, reject) => {
        commit('SET_ADDRESS_LIST', list)
        resolve()
      })
    },
    ChosenAddress({commit, state}, address) {
      commit('SET_CHOSEN_ADDRESS', address)
    }
  }
}

export default address
