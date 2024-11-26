<template>
  <div class="overflow-x-auto">
    <table class="mt-[18px] w-full text-left rtl:text-right">
      <thead id="boder-line" class="text-xs">
        <tr>
          <th scope="col" class="w-[39px] py-3 font-normal">
            <div class="text-center">#</div>
          </th>
          <th scope="col" class="min-w-[178px] py-3 font-normal">
            <div class="flex w-max items-center">
              Coin
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[91px] py-3 font-normal">
            <div class="flex w-max items-center">
              Price
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[107px] py-3 font-normal">
            <div class="flex w-max items-center">
              24h %
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[107px] py-3 font-normal">
            <div class="flex w-max items-center">
              7d %
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[114px] py-3 font-normal">
            <div class="flex w-max items-center">
              Market Cap
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[127px] py-3 font-normal">
            <div class="flex w-max items-center">
              Volume(24h)
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[177px] py-3 font-normal">
            <div class="flex w-max items-center">
              Circulating Supply
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[121px] py-3 font-normal">
            <div class="flex w-max items-center">
              Last 90 Days
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[132px] py-3 font-normal">
            <div class="flex w-max items-center">
              VLast 90 Days
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="py-3 font-normal">
            <div
              class="inline-flex h-[30px] w-[30px] items-center justify-center rounded-xl bg-zinc-900 p-[3px]"
            >
              <div class="h-6 w-6">
                <UIcon name="IconAdd" dynamic filled />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, id) in props.listCrypto" :key="id">
          <td class="py-4">
            <div class="flex items-center justify-center">
              {{ id + 1 }}
            </div>
          </td>
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
            <div class="text-sm font-normal">${{ item.Price }}</div>
          </td>
          <td class="py-4 pr-4">
            <div
              :class="
                item.inDay.increase
                  ? 'border-emerald-500/40 text-green-600'
                  : 'border-red-500/[42%] text-red-500'
              "
              class="flex h-[32px] w-[66px] items-center justify-center rounded-xl border text-sm font-normal"
            >
              <div>
                <UIcon
                  v-if="item.inDay.increase"
                  name="IconIncrease"
                  dynamic
                  filled
                />
                <UIcon v-else name="IconReduce" dynamic filled />
              </div>
              {{ item.inDay.value }}%
            </div>
          </td>
          <td class="py-4 pr-4">
            <div
              :class="
                item.inWeek.increase
                  ? 'border-emerald-500/40 text-green-600'
                  : 'border-red-500/[42%] text-red-500'
              "
              class="flex h-[32px] w-[66px] items-center justify-center rounded-xl border text-sm font-normal"
            >
              <div>
                <UIcon
                  v-if="item.inWeek.increase"
                  name="IconIncrease"
                  dynamic
                  filled
                />
                <UIcon v-else name="IconReduce" dynamic filled />
              </div>
              {{ item.inWeek.value }}%
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-sm font-normal">${{ item.marketCap }}</div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-sm font-normal">${{ item.volume24h }}</div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-xs font-normal">{{ item.Circulating }}</div>
            <div class="mt-2 h-1 w-[120px] rounded-[9px] bg-gray-700/60">
              <div
                class="h-1 w-[52px] rounded-[9px] bg-white bg-opacity-60"
              ></div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <LineChart :options="chartOptions" :series="series" :height="45" />
          </td>
          <td class="py-4 pr-4">
            <div
              class="inline-flex h-[35px] w-[69px] flex-col items-center justify-center gap-1.5 rounded-[10px] border border-zinc-700 px-3.5 py-[7px]"
            >
              <div class="text-sm font-normal text-stone-300">Trade</div>
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
</template>
<script setup>
const props = defineProps({
  listCrypto: {
    type: Array,
    required: true,
  },
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
    width: 1,
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
      307.0, 320.0, 339.0, 320.0, 603.0, 830.0, 622.0, 319.0, 303.0, 303.0,
      323.0, 302.0, 304.0, 322.0, 331.0, 305.0, 323.0,
    ],
  },
])
</script>
<style scoped>
#boder-line {
  border-bottom: 1px solid rgba(49, 61, 77, 0.6);
}
</style>
