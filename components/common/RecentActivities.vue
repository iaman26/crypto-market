<template>
  <commonFilter :title="'Recent Activities'" />
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
              ID
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="py-3 font-normal">
            <div class="flex min-w-[120px] items-center">
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
            <div class="flex min-w-[72px] items-center">
              Fees
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-4 pr-4">
            <div class="w-10">
              <UIcon name="IconBtc" dynamic filled />
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-base font-semibold">$659.10</div>
            <div class="text-xs font-normal text-zinc-400">Withdraw USDT</div>
          </td>
          <td class="py-4 pr-4">
            <div class="w-max">
              <div class="text-sm font-normal">#14525156</div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-sm font-normal">Mar 21, 2022</div>
          </td>
          <td class="py-4 pr-4">
            <div
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-green-600/[15%] px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-green-500">
                Complited
              </div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-xs font-normal">0.12000 BTC</div>
          </td>
        </tr>
        <tr>
          <td class="py-4 pr-4">
            <div class="w-10">
              <UIcon name="IconBtc" dynamic filled />
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-base font-semibold">$659.10</div>
            <div class="text-xs font-normal text-zinc-400">Deposit BTC</div>
          </td>
          <td class="py-4 pr-4">
            <div class="w-max">
              <div class="text-sm font-normal">#14525156</div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-sm font-normal">Mar 21, 2022</div>
          </td>
          <td class="py-4 pr-4">
            <div
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-red-600/[15%] px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-red-500">
                Declined
              </div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-xs font-normal">0.12000 BTC</div>
          </td>
        </tr>
        <tr>
          <td class="py-4 pr-4">
            <div class="w-10">
              <UIcon name="IconBtc" dynamic filled />
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-base font-semibold">$659.10</div>
            <div class="text-xs font-normal text-zinc-400">Withdraw USDT</div>
          </td>
          <td class="py-4 pr-4">
            <div class="w-max">
              <div class="text-sm font-normal">#14525156</div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-sm font-normal">Mar 21, 2022</div>
          </td>
          <td class="py-4 pr-4">
            <div
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-orange-400/[15%] px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-orange-400">
                Complited
              </div>
            </div>
          </td>
          <td class="w-[87px] py-4 pr-4">
            <div class="text-xs font-normal">0.12000 BTC</div>
          </td>
        </tr>
        <tr>
          <td class="py-4 pr-4">
            <div class="w-10">
              <UIcon name="IconBtc" dynamic filled />
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-base font-semibold">$659.10</div>
            <div class="text-xs font-normal text-zinc-400">Withdraw USDT</div>
          </td>
          <td class="py-4 pr-4">
            <div class="w-max">
              <div class="text-sm font-normal">#14525156</div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-sm font-normal">Mar 21, 2022</div>
          </td>
          <td class="py-4 pr-4">
            <div
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-green-600/[15%] px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-green-500">
                Complited
              </div>
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-xs font-normal">0.12000 BTC</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const props = defineProps({
  optionTime: {
    type: Array,
    required: true,
  },
})
const timeSelect = ref(4)
</script>
<style scoped>
#boder-line {
  border-bottom: 1px solid rgba(49, 61, 77, 0.6);
}
</style>
