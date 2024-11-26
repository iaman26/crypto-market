<template>
  <ClientOnly>
    <div id="chart">
      <div id="chart-timeline">
        <apexchart
          ref="chart"
          type="area"
          height="267"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
    <template #fallback>
      <div class="flex h-full w-full items-center justify-center">
        <p>Loading charts...</p>
      </div>
    </template>
  </ClientOnly>
</template>
<script setup lang="ts">
const chartOptions = ref({
  colors: ['#0CAF60'],
  chart: {
    height: '100%',
    maxWidth: '100%',
    type: 'area',
    fontFamily: 'Inter, sans-serif',
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: '#0CAF60',
      gradientToColors: ['#0CAF60'],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0,
    },
  },
  xaxis: {
    categories: [
      '01 February',
      '02 February',
      '03 February',
      '04 February',
      '05 February',
      '06 February',
      '07 February',
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      formatter: function (value: any) {
        return '$' + value
      },
    },
  },
})
const series = ref([
  {
    name: '',
    data: [
      821.0, 839.0, 812.0, 802.0, 822.0, 839.0, 836.0, 803.0, 830.0, 822.0,
      819.0, 803.0, 808.0, 828.0, 802.0, 804.0, 822.0, 831.0, 805.0, 823.0,
    ],
  },
])
onMounted(() => {})
</script>
