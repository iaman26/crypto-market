<template>
  <div class="py-[22px]">
    <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-base font-semibold">Cryptocurrency Prices</div>
          <div class="mt-[6px] text-xs font-normal text-neutral-400">
            Updated 1 minute ago
          </div>
        </div>
        <div
          class="flex h-[50px] w-[125px] rounded-[20px] bg-zinc-900 px-[9px] py-[7px] md:hidden"
        >
          <div
            :class="view === 1 ? 'bg-green-600' : ''"
            class="flex h-9 w-9 items-center justify-center rounded-xl"
            @click="onView(1)"
          >
            <div class="h-6 w-6">
              <UIcon name="IconList2" dynamic filled />
            </div>
          </div>
          <div
            :class="view === 2 ? 'bg-green-600' : ''"
            class="flex h-9 w-9 items-center justify-center rounded-xl"
            @click="onView(2)"
          >
            <div class="h-6 w-6">
              <UIcon name="IconHeatmap" dynamic filled />
            </div>
          </div>
          <div
            :class="view === 3 ? 'bg-green-600' : ''"
            class="flex h-9 w-9 items-center justify-center rounded-xl"
            @click="onView(3)"
          >
            <div class="h-6 w-6">
              <UIcon name="IconBuble" dynamic filled />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 flex justify-between gap-[15px] xl:mt-0">
        <select
          v-model="rows"
          class="h-[50px] w-[200px] rounded-[20px] border-none bg-zinc-900 text-sm font-normal text-stone-300"
        >
          <option v-for="(item, id) in optionRows" :key="id" :value="item">
            Show rows : {{ item }}
          </option>
        </select>
        <form>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-5">
              <div class="h-5 w-5">
                <UIcon name="IconSearch" dynamic filled />
              </div>
            </div>
            <input
              id="default-search"
              type="search"
              class="h-[50px] w-full min-w-[200px] rounded-[20px] border-none bg-zinc-900 pl-[58px] placeholder-slate-500"
              placeholder="Search"
            />
          </div>
        </form>
        <div
          class="hidden h-[50px] w-[125px] rounded-[20px] bg-zinc-900 px-[9px] py-[7px] md:flex"
        >
          <div
            :class="view === 1 ? 'bg-green-600' : ''"
            class="flex h-9 w-9 items-center justify-center rounded-xl"
            @click="onView(1)"
          >
            <div class="h-6 w-6">
              <UIcon name="IconList2" dynamic filled />
            </div>
          </div>
          <div
            :class="view === 2 ? 'bg-green-600' : ''"
            class="flex h-9 w-9 items-center justify-center rounded-xl"
            @click="onView(2)"
          >
            <div class="h-6 w-6">
              <UIcon name="IconHeatmap" dynamic filled />
            </div>
          </div>
          <div
            :class="view === 3 ? 'bg-green-600' : ''"
            class="flex h-9 w-9 items-center justify-center rounded-xl"
            @click="onView(3)"
          >
            <div class="h-6 w-6">
              <UIcon name="IconBuble" dynamic filled />
            </div>
          </div>
        </div>
      </div>
    </div>
    <CryptoPriceList v-if="view === 1" :list-crypto="listCrypto" />
    <CryptoHeatmap v-else-if="view === 2" />
    <BubbleChart v-else />
    <UiPagination />
  </div>
</template>
<script setup>
const rows = ref(10)
const optionRows = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const view = ref(1)
function onView(value) {
  view.value = value
}
const listCrypto = ref([
  {
    img: '/_nuxt/assets/icons/btc.svg',
    name: 'Bitcoin',
    currency: 'BTC',
    Price: '38,755',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: true,
      value: 3.36,
    },
    marketCap: '390.6B',
    volume24h: '66.3T',
    Circulating: '19,087,425 BTC',
    star: true,
  },
  {
    img: '/_nuxt/assets/images/Ethereum.png',
    name: 'Ethereum',
    currency: 'ETH',
    Price: '1,128.71',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: true,
      value: 3.36,
    },
    marketCap: '142.4B',
    volume24h: '2.6T',
    Circulating: '121,448,183 ETH',
    star: true,
  },
  {
    img: '/_nuxt/assets/icons/usdt.svg',
    name: 'Tether',
    currency: 'USDT',
    Price: '38,755',
    inDay: {
      increase: true,
      value: 0.06,
    },
    inWeek: {
      increase: false,
      value: 0.08,
    },
    marketCap: '$66.0B',
    volume24h: '999.8M',
    Circulating: '65,994,280,061 USDT',
    star: false,
  },
  {
    img: '/_nuxt/assets/icons/polygon.svg',
    name: 'Polygon',
    currency: 'MATIC',
    Price: '1.09',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: true,
      value: 3.36,
    },
    marketCap: '38.8B',
    volume24h: '66.3T',
    Circulating: '163,276,975 BNB',
    star: true,
  },
  {
    img: '/_nuxt/assets/icons/ada.svg',
    name: 'Cardano',
    currency: 'ADA',
    Price: '38,755',
    inDay: {
      increase: false,
      value: 0.01,
    },
    inWeek: {
      increase: true,
      value: 3.36,
    },
    marketCap: '390.6B',
    volume24h: '66.3T',
    Circulating: '33,934,048,406 ADA',
    star: true,
  },
  {
    img: '/_nuxt/assets/icons/bnb.svg',
    name: 'Binance',
    currency: 'BNB',
    Price: '38,755',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: true,
      value: 3.36,
    },
    marketCap: '390.6B',
    volume24h: '66.3T',
    Circulating: '19,087,425 BTC',
    star: true,
  },
  {
    img: '/_nuxt/assets/icons/uni.svg',
    name: 'Uniswap',
    currency: 'UNI',
    Price: '5.26',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: true,
      value: 3.36,
    },
    marketCap: '390.6B',
    volume24h: '66.3T',
    Circulating: '19,087,425 BTC',
    star: true,
  },
  {
    img: '/_nuxt/assets/icons/trx.svg',
    name: 'Bitcoin',
    currency: 'BTC',
    Price: '38,755',
    inDay: {
      increase: false,
      value: 0.01,
    },
    inWeek: {
      increase: false,
      value: 3.36,
    },
    marketCap: '390.6B',
    volume24h: '66.3T',
    Circulating: '92,483,628,228 TRX',
    star: true,
  },
  {
    img: '/_nuxt/assets/icons/band.svg',
    name: 'Matic',
    currency: 'BAND',
    Price: '1.34',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: true,
      value: 3.36,
    },
    marketCap: '55.9M',
    volume24h: '66.3T',
    Circulating: '19,087,425 BTC',
    star: true,
  },
])
</script>
<style scoped>
#boder-line {
  border-bottom: 1px solid rgba(49, 61, 77, 0.6);
}
</style>
