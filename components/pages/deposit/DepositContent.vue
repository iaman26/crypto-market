<template>
  <div class="flex items-center justify-between">
    <div class="text-base font-semibold">Deposit</div>
    <div
      class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
    >
      <div class="h-6 w-6">
        <UIcon name="IconDetail1" dynamic filled />
      </div>
    </div>
  </div>
  <div class="mt-11 flex w-fit rounded-[20px] border border-gray-800 p-[6px]">
    <div class="rounded-[15px] bg-green-600 px-6 py-4 text-xs font-normal">
      Crypto
    </div>
    <div class="px-6 py-4 text-xs font-normal text-zinc-400">Fiat</div>
  </div>
  <div class="mb-4 mt-[30px] text-xs font-normal text-zinc-400">Coin :</div>
  <button
    id="states-button"
    data-dropdown-toggle="dropdown-states"
    class="z-10 flex h-[64px] w-full items-center justify-between rounded-[20px] border-none bg-zinc-900 p-[10px] text-sm font-normal text-stone-300"
    type="button"
  >
    <div class="flex items-center">
      <div
        class="flex h-11 w-fit items-center rounded-[17px] bg-gray-900 px-2 py-[6px]"
      >
        <div class="mr-[10px] h-8 w-8">
          <UIcon name="IconBtc" dynamic filled />
        </div>
        <div class="text-base font-semibold">Bitcoin</div>
      </div>
      <div class="ml-[13px] text-xs font-normal text-zinc-400">BTC</div>
    </div>
    <div
      class="flex h-11 w-11 items-center justify-center rounded-[17px] bg-gray-900"
    >
      <UIcon name="i-heroicons-chevron-down" class="h-6 w-6" />
    </div>
  </button>
  <div class="relative w-full">
    <div
      id="dropdown-states"
      class="z-10 hidden w-full divide-y rounded-[20px] bg-zinc-900"
    >
      <ul class="py-2" aria-labelledby="states-button">
        <li v-for="(item, id) in listCoin" :key="id" :value="item.value">
          <button type="button" class="flex items-center p-2">
            <div
              class="flex h-11 w-fit items-center rounded-[17px] bg-gray-900 px-2 py-[6px]"
            >
              <img :src="item.img" class="mr-[10px] h-8 w-8" alt="" />
              <div class="text-base font-semibold">
                {{ item.name }}
              </div>
            </div>
            <div class="ml-[13px] text-xs font-normal text-zinc-400">
              {{ item.currency }}
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="my-8 text-sm font-semibold">
    Total Balance :
    <span class="ml-[22px] text-base font-semibold">0.0121285425 BTC</span>
  </div>
  <div class="mb-3 text-sm font-normal text-zinc-400">BTC Address</div>
  <div
    class="flex h-16 w-full items-center justify-between rounded-[25px] bg-zinc-900 py-2 pl-[22px] pr-[11px]"
  >
    <div class="text-base font-semibold">bc1qXY2kGdygjrsqtzE2n0yrf2XY3</div>
    <button
      class="flex items-center rounded-[17px] bg-green-600 py-3 pl-6 pr-3 text-base font-semibold"
    >
      Copy
      <img src="~assets/images/copy.png" class="ml-[9px] h-6 w-6" alt="" />
    </button>
  </div>
  <div class="mt-10 text-base font-bold">Tips</div>
  <div class="pr-15 mt-4 w-full rounded-[25px] bg-zinc-900 py-8 pl-[30px]">
    <div class="mb-6 flex">
      <div
        class="mr-[10px] mt-[5px] h-2.5 w-2.5 rounded-[20px] bg-green-600"
      ></div>
      <div class="text-sm font-normal text-zinc-400">
        If you have deposited please pay attention to the text messagesm site
        letters and emails we send to you.
      </div>
    </div>
    <div class="mb-6 flex">
      <div
        class="mr-[10px] mt-[5px] h-2.5 w-2.5 rounded-[20px] bg-green-600"
      ></div>
      <div class="text-sm font-normal text-zinc-400">
        Coins will be deposited after 1 nwtwork confrimations.
      </div>
    </div>
    <div class="mb-6 flex">
      <div
        class="mr-[10px] mt-[5px] h-2.5 w-2.5 rounded-[20px] bg-green-600"
      ></div>
      <div class="text-sm font-normal text-zinc-400">
        Until 2 confrimations are mafe.an equivalent amount of your assets will
        be temporarily unavailable for witdrawals.
      </div>
    </div>
    <div class="flex">
      <div
        class="mr-[10px] mt-[5px] h-2.5 w-2.5 rounded-[20px] bg-green-600"
      ></div>
      <div class="text-sm font-normal text-zinc-400">
        You could check the blockchain records and deposit status at
        <span class="text-green-600">Deposit Records.</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { initDropdowns } from 'flowbite'

onMounted(() => {
  initDropdowns()
})
const listCoin = ref([
  {
    img: '/_nuxt/assets/icons/btc.svg',
    name: 'Bitcoin',
    currency: 'BTC',
    value: 0,
  },
  {
    img: '/_nuxt/assets/icons/usdt.svg',
    name: 'Tether',
    currency: 'USDT',
    value: 1,
  },
])
const coinSelect = ref(0)
</script>
