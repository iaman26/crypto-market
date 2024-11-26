<template>
  <commonFilter :title="'Trade History'" />
  <div class="relative overflow-x-auto pb-[23px] sm:rounded-lg">
    <table class="w-full text-left rtl:text-right">
      <thead id="boder-line" class="text-xs">
        <tr>
          <th scope="col" class="py-3 font-normal">
            <div class="flex w-max items-center">
              Coin
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="py-3 font-normal">
            <div class="flex w-max items-center">
              Transaction
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="py-3 font-normal">
            <div class="flex w-max items-center">
              Type
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="py-3 font-normal">
            <div class="flex w-max items-center">
              ID
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="py-3 font-normal">
            <div class="flex w-max items-center">
              Date
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="py-3 font-normal">
            <div class="flex w-max items-center">
              Status
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="py-3 font-normal">
            <div class="flex w-max items-center">
              Fees
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, id) in listTradeHistory" :key="id">
          <td class="py-4 pr-4">
            <img :src="item.img" alt="" />
          </td>
          <td class="py-4 pr-4">
            <div class="text-base font-semibold">{{ item.transaction[0] }}</div>
            <div class="text-sm font-normal text-zinc-400">
              {{ item.transaction[1] }}
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="flex items-end">
              <div class="w-5">
                <UIcon v-if="item.type" name="IconReciveIcon" dynamic filled />
                <UIcon v-else name="IconSendIcon" dynamic filled />
              </div>
              <div
                :class="item.type ? 'text-green-600' : 'text-red-500'"
                class="ml-[9px] text-xs font-normal"
              >
                {{ item.type ? 'Diposit' : 'Withdraw' }}
              </div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="w-max">
              <div class="text-sm font-normal">{{ item.id }}</div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-sm font-normal">{{ item.time }}</div>
          </td>
          <td class="py-4 pr-4">
            <div
              v-if="item.status === 1"
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-green-600/[15%] px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-green-500">
                Complited
              </div>
            </div>
            <div
              v-else
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-red-600/[15%] px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-red-500">
                Declined
              </div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-xs font-normal">{{ item.fees }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <UiPagination />
</template>
<script setup>
const optionTime = ref([
  {
    label: 'Today',
    value: 1,
  },

  {
    label: 'Yesterday',
    value: 2,
  },

  {
    label: 'Last 7 Days',
    value: 3,
  },

  {
    label: 'Last 30 Days',
    value: 4,
  },

  {
    label: 'This Month',
    value: 5,
  },

  {
    label: 'Last Month',
    value: 6,
  },
])

const listTradeHistory = ref([
  {
    img: '/_nuxt/assets/icons/btc.svg',
    transaction: ['$659.10', '0.15654 BTC'],
    type: false,
    id: '#14525156',
    time: 'Mar 21, 2022 / 3:25:19',
    ip: '192.168.1.1',
    status: 1,
    fees: '0.12000 BTC',
  },
  {
    img: '/_nuxt/assets/icons/polygon.svg',
    transaction: ['$659.10', '54 Matic'],
    type: true,
    id: '#14525156',
    time: 'Mar 21, 2022 / 3:25:19',
    ip: '192.168.1.1',
    status: 1,
    fees: '0.12000 BTC',
  },
  {
    img: '/_nuxt/assets/icons/btc.svg',
    transaction: ['$659.10', '0.15654 BTC'],
    type: true,
    id: '#14525156',
    time: 'Mar 21, 2022 / 3:25:19',
    ip: '192.168.1.1',
    status: 1,
    fees: '0.12000 BTC',
  },
  {
    img: '/_nuxt/assets/icons/usdt.svg',
    transaction: ['$659.10', '650 USDT'],
    type: false,
    id: '#14525156',
    time: 'Mar 21, 2022 / 3:25:19',
    ip: '192.168.1.1',
    status: 1,
    fees: '0.12000 BTC',
  },
  {
    img: '/_nuxt/assets/icons/trx.svg',
    transaction: ['$659.10', '5654 TRX'],
    type: true,
    id: '#14525156',
    time: 'Mar 21, 2022 / 3:25:19',
    ip: '192.168.1.1',
    status: 1,
    fees: '0.12000 BTC',
  },
  {
    img: '/_nuxt/assets/icons/btc.svg',
    transaction: ['$659.10', '0.15654 BTC'],
    type: false,
    id: '#14525156',
    time: 'Mar 21, 2022 / 3:25:19',
    ip: '192.168.1.1',
    status: 1,
    fees: '0.12000 BTC',
  },
  {
    img: '/_nuxt/assets/icons/usdt.svg',
    transaction: ['$659.10', '650 USDT'],
    type: true,
    id: '#14525156',
    time: 'Mar 21, 2022 / 3:25:19',
    ip: '192.168.1.1',
    status: 1,
    fees: '0.12000 BTC',
  },
  {
    img: '/_nuxt/assets/icons/btc.svg',
    transaction: ['$659.10', '0.15654 BTC'],
    type: true,
    id: '#14525156',
    time: 'Mar 21, 2022 / 3:25:19',
    ip: '192.168.1.1',
    status: 1,
    fees: '0.12000 BTC',
  },
  {
    img: '/_nuxt/assets/icons/btc.svg',
    transaction: ['$659.10', '0.15654 BTC'],
    type: false,
    id: '#14525156',
    time: 'Mar 21, 2022 / 3:25:19',
    ip: '192.168.1.1',
    status: 1,
    fees: '0.12000 BTC',
  },
])
const timeSelect = ref(4)
</script>
<style scoped>
#boder-line {
  border-bottom: 1px solid rgba(49, 61, 77, 0.6);
}
</style>
