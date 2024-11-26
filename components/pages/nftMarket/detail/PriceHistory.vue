<template>
  <div class="mx-6 w-1/2">
    <div class="my-4 flex w-full flex-col justify-between filter xs:flex-row">
      <div class="font-['Poppins'] text-base font-semibold text-white">
        Price History
      </div>
      <div class="mt-[11px] flex xs:mt-0">
        <UiTag id="main" :title="'All'"></UiTag>
        <UiTag :title="'1M'"></UiTag>
        <UiTag :title="'6M'"></UiTag>
        <UiTag :title="'1Y'"></UiTag>
        <UiTag :title="'YTD'"></UiTag>
      </div>
    </div>
    <div class="flex w-full">
      <div class="price mr-[26px]">
        <div class="mt-5 text-[10px] font-normal text-zinc-400">$840</div>
        <div class="mt-[33px] text-[10px] font-normal text-zinc-400">$830</div>
        <div class="mt-[33px] text-[10px] font-normal text-zinc-400">$820</div>
        <div class="mt-[33px] text-[10px] font-normal text-zinc-400">$810</div>
        <div class="mt-[33px] text-[10px] font-normal text-zinc-400">$800</div>
      </div>
      <div class="w-full">
        <div class="h-[201px]">
          <LineChart :options="chartOptions" :series="series" :height="201" />
        </div>
        <div class="mt-[21px] flex w-full justify-between">
          <div class="text-center text-xs font-semibold text-zinc-400">Mon</div>
          <div class="text-center text-xs font-semibold text-zinc-400">Tue</div>
          <div class="text-center text-xs font-semibold text-zinc-400">Wed</div>
          <div class="text-center text-xs font-semibold text-zinc-400">Thu</div>
          <div class="text-center text-xs font-semibold text-zinc-400">Fri</div>
          <div class="text-center text-xs font-semibold text-zinc-400">Sat</div>
        </div>
      </div>
    </div>
  </div>
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
    width: 3,
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
    categories: [],
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
    min: 800,
    max: 840,
    labels: {
      formatter: function (value) {
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
</script>
<style scoped>
#main {
  background-color: #0caf60;
}
</style>
