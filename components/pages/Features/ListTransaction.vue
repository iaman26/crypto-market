<template>
  <div class="pb-[37px]">
    <div class="my-14 flex w-max rounded-[20px] border border-gray-800 p-[6px]">
      <div class="rounded-[10px] bg-gray-800 px-6 py-3 text-xs font-normal">
        Open Orders
      </div>
      <div
        class="w-fit rounded-[10px] px-6 py-3 text-xs font-normal text-zinc-400"
      >
        Order History
      </div>
      <div class="rounded-[10px] px-6 py-3 text-xs font-normal text-zinc-400">
        Market trades
      </div>
    </div>
    <div class="relative overflow-x-auto">
      <table class="ml-[26px] mr-7 mt-[18px] w-full text-left rtl:text-right">
        <thead id="boder-line" class="text-xs">
          <tr>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                Time
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                All Pairs
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                All Types
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                Buy/Sell
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                Price(USDT)
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                Amount (BTC)
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                Filled
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                Unfilled
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="w-20 py-3 font-normal">
              <div class="flex w-max items-center">
                Action
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, id) in listTransaction" :key="id">
            <td class="py-[7px] pr-5">
              <div class="text-sm font-normal">
                {{ item.time }}
              </div>
            </td>
            <td class="py-[7px] pr-5">
              <div class="flex items-center">
                <div class="img relative h-[18px] w-[18px]">
                  <div class="absolute left-0 top-0 w-[11px]">
                    <UIcon name="IconBtc" dynamic filled />
                  </div>
                  <div
                    class="absolute bottom-0 right-0 flex h-[12px] w-[12px] items-center justify-center rounded-[50%] bg-gray-900"
                  >
                    <div class="w-[11px]">
                      <UIcon name="IconUsdt" dynamic filled />
                    </div>
                  </div>
                </div>
                <div class="ml-[7px] text-xs font-normal text-green-600">
                  {{ item.pairs }}
                </div>
              </div>
            </td>
            <td class="py-[7px] pr-5">
              <div class="text-xs font-normal">
                {{ item.type }}
              </div>
            </td>
            <td class="py-[7px] pr-5">
              <div class="text-xs font-normal">
                {{ item.transaction ? 'Buy' : 'Sell' }}
              </div>
            </td>
            <td class="py-[7px] pr-5">
              <div class="text-xs font-normal">
                {{ item.price }}
              </div>
            </td>
            <td class="py-[7px] pr-5">
              <div class="text-xs font-normal">
                {{ item.amount }}
              </div>
            </td>
            <td class="py-[7px] pr-5">
              <div class="text-xs font-normal">{{ item.filled }}%</div>
            </td>
            <td class="py-[7px] pr-5">
              <div class="text-xs font-normal">{{ item.unfilled }}%</div>
            </td>
            <td class="py-[7px] pr-5">
              <div class="flex items-center">
                <div class="mr-1 text-xs font-normal">Cancel</div>
                <div class="w-4">
                  <UIcon name="IconClose" dynamic filled />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  listTransaction: {
    type: Array,
    required: true,
  },
})
</script>
