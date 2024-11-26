<template>
  <div class="flex w-full">
    <div class="w-full pb-10 xl:w-3/4">
      <ExchangePriceNft />
      <div
        class="flex w-full flex-col items-center justify-around pt-6 sm:flex-row sm:items-start xl:hidden"
      >
        <ExchangeCryptoCalculator
          class="mt-[60px] px-[14px] pb-[19px] xs:w-[80%] sm:w-1/2 sm:max-w-[292px]"
        />
        <ExchangeEthereumMarkets class="xs:w-[80%] sm:max-w-[292px]" />
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <div
          v-for="(item, id) in listMenu"
          :key="id"
          :class="
            item.value === isMenu
              ? 'rounded-[10px] bg-green-600 px-3.5 py-[7px]'
              : 'px-2 py-[7px]'
          "
          class="inline-flex flex-col items-center justify-center gap-1.5"
          @click="onSelectMenu(item.value)"
        >
          <div class="text-sm font-normal">{{ item.name }}</div>
        </div>
        <div class="flex items-center">
          <div id="line" class="mx-[10px] h-[14px] w-px"></div>
          <div class="mr-1 w-6">
            <UIcon name="IconShare2" dynamic filled />
          </div>
          <div class="text-base font-normal text-stone-300">Share</div>
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
        <div class="mr-[26px]">
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
            <LineChart :options="chartOptions" :series="series" :height="267" />
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
      <CommonRecentActivities :option-time="optionTime" />
      <div class="flex flex-wrap justify-center gap-5 sm:justify-between">
        <CommonNewsItem
          v-for="(item, idx) in listNews"
          :key="idx"
          :News="item"
        />
      </div>
    </div>
    <div class="hidden w-1/4 pl-6 pt-6 xl:block">
      <ExchangeCryptoCalculator class="mt-[60px] px-[14px] pb-[19px]" />
      <ExchangeEthereumMarkets />
    </div>
  </div>
</template>
<script setup lang="ts">
const listNews = ref([
  {
    user: 'SoulCurry',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/img-exchange.png',
    title: 'NFT platform wars could be ahead, says new DappRadar report',
  },
  {
    user: 'SoulCurry',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/img-exchange.png',
    title: 'NFT platform wars could be ahead, says new DappRadar report',
  },
  {
    user: 'Meta Boss',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/detail-news-3.png',
    title:
      "Fairfax County highlights the value in the 'short-term nature' of yield farming",
  },
])
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
const listMenu = ref([
  {
    name: 'Overview',
    value: 1,
  },
  {
    name: 'Market',
    value: 2,
  },
  {
    name: 'Historical Data',
    value: 3,
  },
  {
    name: 'Project Info',
    value: 4,
  },
  {
    name: 'Wallets',
    value: 5,
  },
  {
    name: 'News',
    value: 6,
  },
  {
    name: 'Socials',
    value: 7,
  },
  {
    name: 'Ratings',
    value: 8,
  },
  {
    name: 'Analysis',
    value: 9,
  },
])
const isMenu = ref(1)
function onSelectMenu(value: any) {
  isMenu.value = value
}
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
#line {
  background-color: rgba(49, 61, 77, 0.6);
}
.price {
  background-color: rgba(0, 0, 0, 0.38);
  border-radius: 17px;
}
#boder-line {
  border-bottom: 1px solid rgba(49, 61, 77, 0.6);
}
</style>
