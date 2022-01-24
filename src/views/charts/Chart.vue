<template>
  <div>
    <div v-if="tradesData.length > 0">{{tradesData}}</div>
    <line-chart
      :chart-data="tradesData"
      :options="chartOptions"
      label="Trades"
    ></line-chart>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LineChart from '@/views/charts/LineChart.vue'

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
    }
  },
  computed: {
    ...mapGetters(['trades']),
  },
  created() {
    this.getTrades()
    this.trades.forEach(data => {
      const date = data.trade_time
      const { price } = data

      this.tradesData.push({ date, price })
    })
  },
  methods: {
    ...mapActions(['getTrades']),
  },
}
</script>
