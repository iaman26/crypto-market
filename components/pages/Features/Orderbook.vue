<template>
  <div class="flex w-full justify-around 2xl:w-fit">
    <div class="w-60">
      <div class="text-base font-semibold">Order Book</div>
      <table class="w-full text-left rtl:text-right">
        <thead class="text-xs text-zinc-400">
          <tr>
            <th scope="col" class="pb-3 pt-5 font-normal">
              <div class="flex w-max items-center">Price(USDT)</div>
            </th>
            <th scope="col" class="px-4 pb-3 pt-5 font-normal">
              <div class="flex w-max items-center">Amount</div>
            </th>
            <th scope="col" class="pb-3 pt-5 font-normal">
              <div class="flex w-max items-center">Total</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr :style="setbg(0)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(70)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(25)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(1)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(90)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(2)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(25)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(100)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(10)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(30)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(18)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
          <tr :style="setbg(40)">
            <td class="py-[5px]">
              <div class="text-xs font-normal text-red-400">43.114</div>
            </td>
            <td class="px-4 py-[5px]">
              <div class="text-xs font-normal">3396.4537</div>
            </td>
            <td class="py-[5px] pr-4">
              <div class="text-xs font-normal">3,397.1437</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mb-[22px] mt-[18px] flex items-center justify-between">
        <div class="text-base font-semibold">270.535</div>
        <div class="text-sm font-normal text-zinc-400">≈ 270.56 USD</div>
      </div>
      <div class="w-full">
        <div :style="setbgTeal(70)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(30)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(1)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(80)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(2)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(15)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(100)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(10)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(33)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(10)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(40)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
        <div :style="setbgTeal(3)" class="flex h-[26px] w-60">
          <div class="w-full py-[5px] text-xs font-normal text-emerald-400">
            43.114
          </div>
          <div class="px-4 py-[5px] text-xs font-normal">3396.4537</div>
          <div class="py-[5px] pr-4 text-xs font-normal">3,397.1437</div>
        </div>
      </div>
    </div>
    <div class="w-[241px] 2xl:hidden">
      <div class="mx-4 mb-5 flex items-center justify-between">
        <div class="text-lg font-bold">Buy BTC</div>
        <div class="text-right text-sm font-semibold text-zinc-400">0 USDT</div>
      </div>
      <div class="flex w-max rounded-[15px] border border-gray-800 p-[6px]">
        <div
          class="rounded-[10px] bg-gray-800 px-[18px] py-3 text-xs font-normal"
        >
          Limit
        </div>
        <div
          class="w-fit rounded-[10px] px-[18px] py-3 text-xs font-normal text-zinc-400"
        >
          Stop Limit
        </div>
        <div
          class="rounded-[10px] px-[18px] py-3 text-xs font-normal text-zinc-400"
        >
          Market
        </div>
      </div>
      <div
        class="mt-5 flex h-16 w-[239px] items-center justify-between rounded-[20px] bg-zinc-900 pl-[26px] pr-[15px]"
      >
        <div class="text-sm font-normal text-slate-500">Price (USDT)</div>
        <div
          class="text-right text-[10px] font-normal text-slate-500 underline"
        >
          Best Price
        </div>
      </div>
      <div
        class="mb-4 mt-[10px] flex h-16 w-[239px] items-center justify-between rounded-[20px] bg-zinc-900 pl-[26px] pr-[15px]"
      >
        <div class="text-sm font-normal text-slate-500">Amount</div>
        <div
          class="text-right text-[10px] font-normal text-slate-500 underline"
        >
          Select All
        </div>
      </div>
      <div class="relative mx-auto flex h-px w-[208px]">
        <div id="bg-green" class="h-px w-1/4"></div>
        <div id="bg-green" class="h-px w-1/4"></div>
        <div id="line" class="h-px w-1/4"></div>
        <div id="line" class="h-px w-1/4"></div>
        <div
          id="bg-green"
          class="absolute left-0 top-[50%] -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-[50%]"
        ></div>
        <div
          id="bg-green"
          class="absolute left-[25%] top-[50%] -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-[50%]"
        ></div>
        <div
          id="bg-green"
          class="absolute left-[50%] top-[50%] -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-[50%]"
        ></div>
        <div
          id="line"
          class="absolute left-[75%] top-[50%] -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-[50%]"
        ></div>
        <div
          id="line"
          class="absolute right-0 top-[50%] -mr-[5px] -mt-[5px] h-2.5 w-2.5 rounded-[50%]"
        ></div>
      </div>
      <CommonButton :title="'Buy BTC'" class="mt-[34px] bg-green-600" />
      <div class="mx-4 mb-5 mt-11 flex items-center justify-between">
        <div class="text-lg font-bold">Sell Btc</div>
        <div class="text-right text-sm font-semibold text-zinc-400">0 USDT</div>
      </div>
      <div class="flex w-max rounded-[15px] border border-gray-800 p-[6px]">
        <div
          class="rounded-[10px] bg-gray-800 px-[18px] py-3 text-xs font-normal"
        >
          Limit
        </div>
        <div
          class="w-fit rounded-[10px] px-[18px] py-3 text-xs font-normal text-zinc-400"
        >
          Stop Limit
        </div>
        <div
          class="rounded-[10px] px-[18px] py-3 text-xs font-normal text-zinc-400"
        >
          Market
        </div>
      </div>
      <div
        class="mt-5 flex h-16 w-[239px] items-center justify-between rounded-[20px] bg-zinc-900 pl-[26px] pr-[15px]"
      >
        <div class="text-sm font-normal text-slate-500">Price (USDT)</div>
        <div
          class="text-right text-[10px] font-normal text-slate-500 underline"
        >
          Best Price
        </div>
      </div>
      <div
        class="mb-4 mt-[10px] flex h-16 w-[239px] items-center justify-between rounded-[20px] bg-zinc-900 pl-[26px] pr-[15px]"
      >
        <div class="text-sm font-normal text-slate-500">Amount</div>
        <div
          class="text-right text-[10px] font-normal text-slate-500 underline"
        >
          Select All
        </div>
      </div>
      <div class="relative mx-auto flex h-px w-[208px]">
        <div id="bg-red" class="h-px w-1/4"></div>
        <div id="line" class="h-px w-1/4"></div>
        <div id="line" class="h-px w-1/4"></div>
        <div id="line" class="h-px w-1/4"></div>
        <div
          id="bg-red"
          class="absolute left-0 top-[50%] -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-[50%]"
        ></div>
        <div
          id="bg-red"
          class="absolute left-[25%] top-[50%] -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-[50%]"
        ></div>
        <div
          id="line"
          class="absolute left-[50%] top-[50%] -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-[50%]"
        ></div>
        <div
          id="line"
          class="absolute left-[75%] top-[50%] -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-[50%]"
        ></div>
        <div
          id="line"
          class="absolute right-0 top-[50%] -mr-[5px] -mt-[5px] h-2.5 w-2.5 rounded-[50%]"
        ></div>
      </div>
      <CommonButton :title="'Sell Btc'" class="mt-[34px] bg-red-500" />
    </div>
  </div>
</template>
<script setup>
function setbg(value) {
  return `background: linear-gradient(to left, #EF535024, #EF535024 ${value * 0.71}%, rgb(17, 24, 39) ${value * 0.71}%, rgb(17, 24, 39));`
}
function setbgTeal(value) {
  return `background: linear-gradient(to left, #26A69A24, #26A69A24 ${value * 0.71}%, rgb(17, 24, 39) ${value * 0.71}%, rgb(17, 24, 39));`
}
</script>
