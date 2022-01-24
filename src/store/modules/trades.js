import axios from "axios"

const url = 'http://localhost:3000'

const state = {
  trades: [],
}

const getters = {
  trades: state => state.trades,
}

const actions = {
  async getTrades({ commit }) {
    const trades = await axios.get(url+'/trades_list')
    commit('setTrades', trades.data)
  },
}

const mutations = {
  setTrades: (state, trades) => {
    state.trades = trades
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
