<template>
  <div class="hidden w-[241px] 2xl:block">
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
      <div class="text-right text-[10px] font-normal text-slate-500 underline">
        Best Price
      </div>
    </div>
    <div
      class="mb-4 mt-[10px] flex h-16 w-[239px] items-center justify-between rounded-[20px] bg-zinc-900 pl-[26px] pr-[15px]"
    >
      <div class="text-sm font-normal text-slate-500">Amount</div>
      <div class="text-right text-[10px] font-normal text-slate-500 underline">
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
      <div class="text-right text-[10px] font-normal text-slate-500 underline">
        Best Price
      </div>
    </div>
    <div
      class="mb-4 mt-[10px] flex h-16 w-[239px] items-center justify-between rounded-[20px] bg-zinc-900 pl-[26px] pr-[15px]"
    >
      <div class="text-sm font-normal text-slate-500">Amount</div>
      <div class="text-right text-[10px] font-normal text-slate-500 underline">
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
</template>
