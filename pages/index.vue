<template>
  <main>
    <div class="flex w-full">
      <div class="w-full 2xl:w-3/4">
        <div
          class="mt-[33px] grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5 2xl:gap-[53px]"
        >
          <div class="item py-6">
            <div class="mb-3 text-[26px] font-bold">1,077.3 USD</div>
            <div class="mb-[15px] flex">
              <div
                class="mr-2.5 flex h-[21px] w-[21px] items-center justify-center rounded-lg bg-green-600"
              >
                <div class="h-[9px] w-[9px] rounded-lg bg-white"></div>
              </div>
              <div class="text-sm font-normal text-stone-300">Main Account</div>
            </div>
            <div class="h-[3px] w-full rounded-[20px] bg-zinc-900">
              <div class="h-[3px] w-1/2 rounded-[20px] bg-green-600"></div>
            </div>
          </div>
          <div class="item py-6">
            <div class="mb-3 text-[26px] font-bold">1,077.3 USD</div>
            <div class="mb-[15px] flex">
              <div
                class="mr-2.5 flex h-[21px] w-[21px] items-center justify-center rounded-lg bg-teal-600"
              >
                <div class="h-[9px] w-[9px] rounded-lg bg-white"></div>
              </div>
              <div class="text-sm font-normal text-stone-300">
                Trading Account
              </div>
            </div>
            <div class="h-[3px] w-full rounded-[20px] bg-zinc-900">
              <div class="h-[3px] w-1/2 rounded-[20px] bg-teal-600"></div>
            </div>
          </div>
          <div class="item py-6">
            <div class="mb-3 text-[26px] font-bold">077.3 USD</div>
            <div class="mb-[15px] flex">
              <div
                class="mr-2.5 flex h-[21px] w-[21px] items-center justify-center rounded-lg bg-orange-400"
              >
                <div class="h-[9px] w-[9px] rounded-lg bg-white"></div>
              </div>
              <div class="text-sm font-normal text-stone-300">
                Margin Account
              </div>
            </div>
            <div class="h-[3px] w-full rounded-[20px] bg-zinc-900">
              <div class="h-[3px] w-1/2 rounded-[20px] bg-orange-400"></div>
            </div>
          </div>
          <div class="item py-6">
            <div class="mb-3 text-[26px] font-bold">1,077.3 USD</div>
            <div class="mb-[15px] flex">
              <div
                class="mr-2.5 flex h-[21px] w-[21px] items-center justify-center rounded-lg bg-red-400"
              >
                <div class="h-[9px] w-[9px] rounded-lg bg-white"></div>
              </div>
              <div class="text-sm font-normal text-stone-300">
                Futures Account
              </div>
            </div>
            <div class="h-[3px] w-full rounded-[20px] bg-zinc-900">
              <div class="h-[3px] w-1/2 rounded-[20px] bg-red-400"></div>
            </div>
          </div>
        </div>
        <div class="mt-[23px] flex w-full justify-between">
          <div class="text-base font-semibold">Portflio Stats</div>
          <div class="mt-[11px] flex xs:mt-0">
            <button
              :id="TimeChart === 1 ? 'main' : ''"
              class="item mr-[13px] flex h-[28px] w-10 items-center justify-center rounded-[12px] text-[10px] font-normal text-stone-300"
              @click="onSelectTime(1)"
            >
              All
            </button>
            <button
              :id="TimeChart === 2 ? 'main' : ''"
              class="item mr-[13px] flex h-[28px] w-10 items-center justify-center rounded-[12px] border border-solid border-slate-500 text-[10px] font-normal text-stone-300"
              @click="onSelectTime(2)"
            >
              1M
            </button>
            <button
              :id="TimeChart === 3 ? 'main' : ''"
              class="item mr-[13px] flex h-[28px] w-10 items-center justify-center rounded-[12px] border border-solid border-slate-500 text-[10px] font-normal text-stone-300"
              @click="onSelectTime(3)"
            >
              6M
            </button>
            <button
              :id="TimeChart === 4 ? 'main' : ''"
              class="item mr-[13px] flex h-[28px] w-10 items-center justify-center rounded-[12px] border border-solid border-slate-500 text-[10px] font-normal text-stone-300"
              @click="onSelectTime(4)"
            >
              1Y
            </button>
            <button
              :id="TimeChart === 5 ? 'main' : ''"
              class="item flex h-[28px] w-10 items-center justify-center rounded-[12px] border border-solid border-slate-500 text-[10px] font-normal text-stone-300"
              @click="onSelectTime(5)"
            >
              YTD
            </button>
          </div>
        </div>
        <div class="flex pb-6">
          <div class="price mr-[26px]">
            <div class="mt-11 text-[10px] font-normal text-zinc-400">$840</div>
            <div class="mt-[37px] text-[10px] font-normal text-zinc-400">
              $830
            </div>
            <div class="mt-[37px] text-[10px] font-normal text-zinc-400">
              $820
            </div>
            <div class="mt-[37px] text-[10px] font-normal text-zinc-400">
              $810
            </div>
            <div class="mt-[37px] text-[10px] font-normal text-zinc-400">
              $800
            </div>
          </div>
          <div class="w-full">
            <div class="h-[267px]">
              <LineChart
                :options="chartOptions"
                :series="series"
                :height="267"
              />
            </div>
            <div class="mt-[21px] flex w-full justify-between">
              <div class="text-center text-xs font-semibold text-zinc-400">
                Mon
              </div>
              <div class="text-center text-xs font-semibold text-zinc-400">
                Tue
              </div>
              <div class="text-center text-xs font-semibold text-zinc-400">
                Wed
              </div>
              <div class="text-center text-xs font-semibold text-zinc-400">
                Thu
              </div>
              <div class="text-center text-xs font-semibold text-zinc-400">
                Fri
              </div>
              <div class="text-center text-xs font-semibold text-zinc-400">
                Sat
              </div>
              <div class="text-center text-xs font-semibold text-zinc-400">
                Sun
              </div>
              <div class="text-center text-xs font-semibold text-zinc-400">
                Mon
              </div>
            </div>
          </div>
        </div>
        <div class="block 2xl:hidden">
          <CommonBalance :bitcoin="bitcoin" />
        </div>
        <CommonRecentActivities :option-time="optionTime" />
      </div>
      <div class="hidden w-1/4 pl-6 pt-6 2xl:block">
        <CommonBalance :bitcoin="bitcoin" />
      </div>
    </div>
    <div class="mt-[39px] flex items-center justify-between">
      <div class="text-base font-semibold">Market Prices</div>
      <div class="flex items-center">
        <div class="mr-[28px] h-6 w-6">
          <UIcon name="IconPreviousPage" dynamic filled />
        </div>
        <div class="mr-[28px] h-6 w-6">
          <UIcon name="IconNextPage" dynamic filled />
        </div>
      </div>
    </div>
    <div
      class="mt-[29px] grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 md:gap-10 xl:grid-cols-4"
    >
      <div
        class="w-[287px] rounded-[30px] pb-[15px] pl-[24px] pr-[17px] pt-[19px]"
      >
        <div class="flex items-start justify-between">
          <div class="flex">
            <div
              class="boder-btc flex h-[44.70px] w-[44.70px] items-center justify-center rounded-[100px]"
            >
              <div class="w-8">
                <UIcon name="IconBtc" dynamic filled />
              </div>
            </div>
            <div class="ml-[10px]">
              <div class="text-base font-semibold">Bitcoin</div>
              <div class="text-xs font-normal text-slate-400">BTC</div>
            </div>
          </div>
          <div
            class="flex items-center justify-center rounded-xl border border-slate-500 px-3 py-[7px] text-[10px] font-normal"
          >
            24h
            <div class="ml-1">
              <UIcon name="IconDown2" dynamic filled />
            </div>
          </div>
        </div>
        <div class="w-full">
          <LineChart :options="chartOptions1" :series="series1" :height="83" />
        </div>
      </div>
      <div
        class="w-[287px] rounded-[30px] pb-[15px] pl-[24px] pr-[17px] pt-[19px]"
      >
        <div class="flex items-start justify-between">
          <div class="flex">
            <div
              class="boder-theter flex h-[44.70px] w-[44.70px] items-center justify-center rounded-[100px]"
            >
              <div class="w-8">
                <UIcon name="IconUsdt" dynamic filled />
              </div>
            </div>
            <div class="ml-[10px]">
              <div class="text-base font-semibold">Theter</div>
              <div class="text-xs font-normal text-slate-400">USD</div>
            </div>
          </div>
          <div
            class="flex items-center justify-center rounded-xl border border-slate-500 px-3 py-[7px] text-[10px] font-normal"
          >
            24h
            <UIcon name="IconDown2" class="ml-1" dynamic filled />
          </div>
        </div>
        <div class="w-full">
          <LineChart :options="chartOptions1" :series="series1" :height="83" />
        </div>
      </div>
      <div
        class="w-[287px] rounded-[30px] pb-[15px] pl-[24px] pr-[17px] pt-[19px]"
      >
        <div class="flex items-start justify-between">
          <div class="flex">
            <div
              class="boder-uniSwap flex h-[44.70px] w-[44.70px] items-center justify-center rounded-[100px]"
            >
              <div class="w-8">
                <UIcon name="IconUniSwap" dynamic filled />
              </div>
            </div>
            <div class="ml-[10px]">
              <div class="text-base font-semibold">UniSwap</div>
              <div class="text-xs font-normal text-slate-400">BTC</div>
            </div>
          </div>
          <div
            class="flex items-center justify-center rounded-xl border border-slate-500 px-3 py-[7px] text-[10px] font-normal"
          >
            24h
            <UIcon name="IconDown2" class="ml-1" dynamic filled />
          </div>
        </div>
        <div class="w-full">
          <LineChart :options="chartOptions1" :series="series1" :height="83" />
        </div>
      </div>
      <div
        class="w-[287px] rounded-[30px] pb-[15px] pl-[24px] pr-[17px] pt-[19px]"
      >
        <div class="flex items-start justify-between">
          <div class="flex">
            <div
              class="boder-btc2 flex h-[44.70px] w-[44.70px] items-center justify-center rounded-[100px]"
            >
              <div class="w-8">
                <UIcon name="IconBtc2" dynamic filled />
              </div>
            </div>
            <div class="ml-[10px]">
              <div class="text-base font-semibold">Bitcoin</div>
              <div class="text-xs font-normal text-slate-400">BTC</div>
            </div>
          </div>
          <div
            class="flex items-center justify-center rounded-xl border border-slate-500 px-3 py-[7px] text-[10px] font-normal"
          >
            24h
            <UIcon name="IconDown2" class="ml-1" dynamic filled />
          </div>
        </div>
        <div class="w-full">
          <LineChart :options="chartOptions1" :series="series1" :height="83" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
useHead({
  title: 'Crypto Market',
  meta: [{ name: 'description', content: 'Crypto Market' }],
})

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
const chartOptions1 = ref({
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
    width: 2,
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
    min: 300,
    max: 900,
    labels: {
      formatter: function (value: any) {
        return '$' + value
      },
    },
  },
})
const series1 = ref([
  {
    name: '',
    data: [
      300.0, 310.0, 312.0, 307.0, 320.0, 339.0, 320.0, 603.0, 830.0, 622.0,
      319.0, 303.0, 303.0, 323.0, 302.0, 304.0, 322.0, 331.0, 305.0, 323.0,
    ],
  },
])
const optionTime = ref([
  {
    name: 'Today',
    value: 1,
  },
  {
    name: 'Yesterday',
    value: 2,
  },
  {
    name: 'Last 7 Days',
    value: 3,
  },
  {
    name: 'Last 30 Days',
    value: 4,
  },
  {
    name: 'This Month',
    value: 5,
  },
  {
    name: 'Last Month',
    value: 6,
  },
])
const bitcoin = ref([
  {
    name: 'Bitcoin',
    value: 35,
  },
  {
    name: 'Waves',
    value: 5,
  },
  {
    name: 'Avax',
    value: 50,
  },
  {
    name: 'Bitcoin',
    value: 10,
  },
])
const TimeChart = ref(1)
function onSelectTime(value: any) {
  TimeChart.value = value
}
</script>
<style scoped>
#main {
  background-color: #0caf60;
}
.boder-btc {
  border: 1.7px solid transparent;
  background:
    linear-gradient(rgb(17 24 39), rgb(17 24 39)) padding-box,
    linear-gradient(#f7931a, #f7931a00) border-box;
}
.boder-theter {
  border: 1.7px solid transparent;
  background:
    linear-gradient(rgb(17 24 39), rgb(17 24 39)) padding-box,
    linear-gradient(#26a17b, #26a17b00) border-box;
}
.boder-uniSwap {
  border: 1.7px solid transparent;
  background:
    linear-gradient(rgb(17 24 39), rgb(17 24 39)) padding-box,
    linear-gradient(#ff007a, #ff007a00) border-box;
}
.boder-btc2 {
  border: 1.7px solid transparent;
  background:
    linear-gradient(rgb(17 24 39), rgb(17 24 39)) padding-box,
    linear-gradient(#516aff, #516aff00) border-box;
}
</style>
