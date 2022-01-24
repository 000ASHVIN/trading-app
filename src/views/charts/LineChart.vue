<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    lable: {
      type: String,
      default: '',
    },
    chartData: {
      type: Array,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    const dates = this.chartData.map(d => d.date).reverse()
    const prices = this.chartData.map(d => d.price).reverse()
    console.log(prices)
    this.renderChart({
      labels: dates,
      datasets: [{
        lable: this.lable,
        data: prices,
      }],
    }, this.options)
  },
}
</script>
