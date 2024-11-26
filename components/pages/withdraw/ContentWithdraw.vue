<template>
  <div class="flex items-center justify-between">
    <div class="text-base font-semibold">Withdraw</div>
    <div
      class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
    >
      <div class="w-6">
        <UIcon name="IconDetail1" dynamic filled />
      </div>
    </div>
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
        <div class="mr-2.5 w-8">
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
  <div class="my-8 flex text-sm font-semibold">
    Total Balance :
    <span class="ml-[22px] text-base font-semibold">0.0121285425 BTC</span>
    <div class="ml-[5px] h-6 w-6">
      <UIcon name="i-circum-square-more" dynamic />
    </div>
  </div>
  <div class="relative mt-9">
    <div class="absolute inset-y-0 start-[18px] flex items-center">
      <div class="w-6">
        <UIcon name="IconLink" dynamic filled />
      </div>
      <div id="line" class="ml-[13px] h-[13px] w-px"></div>
    </div>
    <input
      type="text"
      class="inline-flex h-16 w-full items-start justify-start gap-2 rounded-[25px] border-none bg-zinc-900 py-[19px] pl-[74px] text-sm font-normal leading-normal placeholder-slate-500"
      placeholder="Withdraw Address"
    />
    <div
      class="absolute inset-y-0 end-[27px] flex items-center text-base font-normal text-zinc-400 underline"
    >
      Paste
    </div>
  </div>
  <div class="relative mt-[14px]">
    <div class="absolute inset-y-0 start-[18px] flex items-center">
      <div class="w-6">
        <UIcon name="IconCoin3" dynamic filled />
      </div>
      <div id="line" class="ml-[13px] h-[13px] w-px"></div>
    </div>
    <input
      type="text"
      class="inline-flex h-16 w-full items-start justify-start gap-2 rounded-[25px] border-none bg-zinc-900 py-[19px] pl-[74px] text-sm font-normal leading-normal placeholder-slate-500"
      placeholder="Amount"
    />
    <div
      class="absolute inset-y-0 end-[27px] flex items-center text-base font-normal text-zinc-400 underline"
    >
      Select All
    </div>
  </div>
  <div class="mt-10 flex items-center justify-between">
    <div class="flex font-['Vazirmatn'] text-base font-normal text-zinc-400">
      Transaction Fee :
      <span class="text-base font-normal">0.0005 BTC</span>
    </div>
    <CommonButton :title="'Proced Withdrawal'" class="max-w-60 bg-green-600" />
  </div>
  <div class="mt-8 text-base font-bold">Tips</div>
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
</script>

<style scoped>
#line {
  background-color: rgba(49, 61, 77, 0.6);
}
</style>
