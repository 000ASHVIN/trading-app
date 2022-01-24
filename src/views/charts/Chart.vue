<template>
  <div>
    <line-chart
      v-if="tradesData.length > 0"
      :chart-data="tradesData"
      :options="chartOptions"
      label="Trades"
    ></line-chart>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import LineChart from '@/views/charts/LineChart.vue'
import axios from "axios"

export default {
  name: 'Chart',
  components: {
    LineChart,
  },
  data() {
    return {
      tradesData: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      showChart: false,
      url: 'http://localhost:3000',
    }
  },
  async mounted() {
    let trades = await axios.get(this.url + '/trades_list')
    trades = trades.data
    trades.forEach(data => {
      const date = data.trade_time
      const { price } = data

      this.tradesData.push({ date, price })
    })
  },
  methods: {},
}
</script>
