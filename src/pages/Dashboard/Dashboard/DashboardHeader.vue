<template>
  <div class="panel-header panel-header-lg">
    <header-chart
      :height="255"
      :data="chartData"
      :labels="chartLabels"/>
  </div>
</template>

<script>
import HeaderChart from './HeaderChart'

export default {
  name: 'OverviewHeader',
  components: {
    HeaderChart,
  },
  data() {
    return {
      chartData: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
      chartLabels: [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ],
    }
  },
}
</script>
