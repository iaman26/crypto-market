<template>
  <div class="h-[2000px]">
    <div class="flex gap-5">
      <div class="relative w-1/3">
        <img
          src="assets/images/bg-assets.png"
          class="w-full rounded-[30px]"
          alt=""
        />
        <div
          class="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center pl-[37px]"
        >
          <div class="text-base font-normal">Current Balance</div>
          <div class="my-3 text-5xl font-semibold">$5,750,20</div>
          <div class="text-xl font-bold">0.27894652 (BTC)</div>
        </div>
      </div>
      <div class="h-[237px] w-1/3">
        <div class="flex justify-between">
          <div class="text-base font-semibold">Balance</div>
          <div class="text-sm font-semibold text-green-600">
            +$2.22<span class="text-[10px] font-normal text-zinc-400"
              >/24h</span
            >
          </div>
        </div>
        <div class="h-[120px]">
          <LineChart :options="chartOptions1" :series="series1" :height="120" />
        </div>
      </div>
      <div class="w-1/3">
        <RadialBarChart
          :options="chartOptions1"
          :series="series1"
          :height="126"
        />
      </div>
    </div>
    <div class="mt-[48px] flex justify-between">
      <div class="w-[171px] py-6">
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
      <div class="w-[171px] py-6">
        <div class="mb-3 text-[26px] font-bold">1,077.3 USD</div>
        <div class="mb-[15px] flex">
          <div
            class="mr-2.5 flex h-[21px] w-[21px] items-center justify-center rounded-lg bg-teal-600"
          >
            <div class="h-[9px] w-[9px] rounded-lg bg-white"></div>
          </div>
          <div class="text-sm font-normal text-stone-300">Trading Account</div>
        </div>
        <div class="h-[3px] w-full rounded-[20px] bg-zinc-900">
          <div class="h-[3px] w-1/2 rounded-[20px] bg-teal-600"></div>
        </div>
      </div>
      <div class="w-[171px] py-6">
        <div class="mb-3 text-[26px] font-bold">077.3 USD</div>
        <div class="mb-[15px] flex">
          <div
            class="mr-2.5 flex h-[21px] w-[21px] items-center justify-center rounded-lg bg-orange-400"
          >
            <div class="h-[9px] w-[9px] rounded-lg bg-white"></div>
          </div>
          <div class="text-sm font-normal text-stone-300">Margin Account</div>
        </div>
        <div class="h-[3px] w-full rounded-[20px] bg-zinc-900">
          <div class="h-[3px] w-1/2 rounded-[20px] bg-orange-400"></div>
        </div>
      </div>
      <div class="w-[171px] py-6">
        <div class="mb-3 text-[26px] font-bold">1,077.3 USD</div>
        <div class="mb-[15px] flex">
          <div
            class="mr-2.5 flex h-[21px] w-[21px] items-center justify-center rounded-lg bg-red-400"
          >
            <div class="h-[9px] w-[9px] rounded-lg bg-white"></div>
          </div>
          <div class="text-sm font-normal text-stone-300">Futures Account</div>
        </div>
        <div class="h-[3px] w-full rounded-[20px] bg-zinc-900">
          <div class="h-[3px] w-1/2 rounded-[20px] bg-red-400"></div>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="mt-[18px] w-full text-left rtl:text-right">
        <thead id="boder-line" class="text-xs">
          <tr>
            <th scope="col" class="min-w-[178px] py-3 font-normal">
              <div class="flex w-max items-center">
                Asset
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="min-w-[91px] py-3 font-normal">
              <div class="flex w-max items-center">
                Earn
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="min-w-[107px] py-3 font-normal">
              <div class="flex w-max items-center">
                On orders
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="min-w-[107px] py-3 font-normal">
              <div class="flex w-max items-center">
                Available balance
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="min-w-[114px] py-3 font-normal">
              <div class="flex w-max items-center">
                Profit/Loss
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="min-w-[127px] py-3 font-normal">
              <div class="flex w-max items-center">
                Operation
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <UIcon name="IconStarTable" dynamic filled class="px-1 py-0.5" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, id) in listAssets" :key="id">
            <td class="py-4 pr-4">
              <div class="flex">
                <img class="h-8 w-8" :src="item.img" alt="" />
                <div class="ml-[10px]">
                  <div class="text-base font-semibold">{{ item.name }}</div>
                  <div class="text-xs font-normal text-zinc-400">
                    {{ item.currency }}
                  </div>
                </div>
              </div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-sm font-normal">${{ item.earn }}</div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-sm font-normal">${{ item.onOrder }}</div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-base font-semibold">
                {{ item.availableBalance[0] }}
              </div>
              <div class="text-xs font-normal text-zinc-400">
                ≈{{ item.availableBalance[1] }}
              </div>
            </td>
            <td class="py-4 pr-4">
              <div
                :class="
                  item.profit.increase
                    ? 'border-emerald-500/40 text-green-600'
                    : 'border-red-500/[42%] text-red-500'
                "
                class="flex h-[32px] w-[66px] items-center justify-center rounded-xl border text-sm font-normal"
              >
                <div>
                  <UIcon
                    name="IconIncrease"
                    v-if="item.profit.increase"
                    dynamic
                    filled
                  />
                  <UIcon name="IconReduce" v-else dynamic filled />
                </div>
                {{ item.profit.value }}%
              </div>
            </td>

            <td class="py-4 pr-4">
              <div class="flex">
                <div
                  class="rounded-[10px] border border-zinc-700 px-[14px] py-[7px] text-sm font-normal text-stone-300"
                >
                  Deposit
                </div>
                <div
                  class="mx-[14px] rounded-[10px] border border-zinc-700 px-[14px] py-[7px] text-sm font-normal text-stone-300"
                >
                  Withdraw
                </div>
                <div
                  class="rounded-[10px] border border-zinc-700 px-[14px] py-[7px] text-sm font-normal text-stone-300"
                >
                  Trade
                </div>
              </div>
            </td>
            <td class="py-4 pr-4">
              <UIcon
                name="IconStarTable"
                v-if="item.star"
                dynamic
                filled
                class="h-4 w-4"
              />
              <UIcon
                name="IconStarSelect"
                v-else
                dynamic
                filled
                class="h-4 w-4"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import RadialBarChart from '~/components/charts/RadialBarChart.vue'

const listAssets = ref([
  {
    img: '/_nuxt/assets/icons/btc.svg',
    name: 'Bitcoin',
    currency: 'BTC',
    earn: '38,755',
    onOrder: '38,755',
    availableBalance: ['2.52976876', '111.63USD'],
    profit: {
      increase: true,
      value: 0.06,
    },
    operation: {
      deposit: false,
      withdraw: false,
      trade: false,
    },
    star: true,
  },
  {
    img: '/_nuxt/assets/icons/usdt.svg',
    name: 'Tether',
    currency: 'USDT',
    earn: '38,755',
    onOrder: '38,755',
    availableBalance: ['2.52976876', '111.63USD'],
    profit: {
      increase: true,
      value: 0.06,
    },
    operation: {
      deposit: false,
      withdraw: false,
      trade: false,
    },
    star: false,
  },

  {
    img: '/_nuxt/assets/icons/uni.svg',
    name: 'Uniswap',
    currency: 'UNI',
    earn: '38,755',
    onOrder: '38,755',
    availableBalance: ['2.52976876', '111.63USD'],
    profit: {
      increase: true,
      value: 0.06,
    },
    operation: {
      deposit: false,
      withdraw: false,
      trade: false,
    },
    star: true,
  },
  {
    img: '/_nuxt/assets/icons/bnb.svg',
    name: 'Binance',
    currency: 'BNB',
    earn: '38,755',
    onOrder: '38,755',
    availableBalance: ['2.52976876', '111.63USD'],
    profit: {
      increase: true,
      value: 0.06,
    },
    operation: {
      deposit: false,
      withdraw: false,
      trade: false,
    },
    star: true,
  },

  {
    img: '/_nuxt/assets/icons/band.svg',
    name: 'Matic',
    currency: 'BAND',
    earn: '38,755',
    onOrder: '38,755',
    availableBalance: ['2.52976876', '111.63USD'],
    profit: {
      increase: true,
      value: 0.06,
    },
    operation: {
      deposit: false,
      withdraw: false,
      trade: false,
    },
    star: true,
  },
  {
    img: '/_nuxt/assets/icons/polygon.svg',
    name: 'Polygon',
    currency: 'MATIC',
    earn: '38,755',
    onOrder: '38,755',
    availableBalance: ['2.52976876', '111.63USD'],
    profit: {
      increase: true,
      value: 0.06,
    },
    operation: {
      deposit: false,
      withdraw: false,
      trade: false,
    },
    star: true,
  },
])
const series = ref([44, 55, 67, 83])
const chartOptions = ref({
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: -180,
      endAngle: 180,
      track: {
        background: '#242D3999',
      },
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function () {
            return 249
          },
        },
      },
    },
  },
  labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
})
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
    min: 10,
    max: 20,
    labels: {
      formatter: function (value) {
        return '$' + value
      },
    },
  },
})
const series1 = ref([
  {
    name: '',
    data: [0, 2, 4, 6, 5, 1, 6, 8, 3, 9, 4, 3],
  },
])
</script>
<style scoped>
#boder-line {
  border-bottom: 1px solid rgba(49, 61, 77, 0.6);
}
</style>
