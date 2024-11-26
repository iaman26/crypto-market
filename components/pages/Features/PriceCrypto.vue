<template>
  <div class="mb-[38px] mt-[28px] flex w-full justify-between">
    <div class="mr-24 flex">
      <div class="img relative h-[53px] w-[53px]">
        <div class="absolute left-0 top-0 w-8">
          <UIcon name="IconBtc" dynamic filled />
        </div>
        <div
          class="absolute bottom-0 right-0 flex h-[38px] w-[38px] items-center justify-center rounded-[50%] bg-gray-900"
        >
          <div class="w-8">
            <UIcon name="IconUsdt" dynamic filled />
          </div>
        </div>
      </div>
      <div class="ml-[13px] mr-[7px]">
        <div class="text-2xl font-semibold">BTC/USDT</div>
        <div class="text-base font-normal text-zinc-400">Bitcoin</div>
      </div>
      <div
        class="flex h-[28px] items-center justify-center rounded-xl border border-emerald-500 px-[9px] text-[10px] font-normal text-green-600"
      >
        3.5X
      </div>
    </div>
    <div class="grid w-full grid-cols-3 2xl:grid-cols-6 2xl:justify-items-end">
      <div class="flex">
        <div class="mr-[7px]">
          <div class="text-2xl font-semibold">$1,134.86</div>
          <div class="text-sm font-semibold text-zinc-400">Price</div>
        </div>
        <div
          class="flex h-[28px] items-center justify-center rounded-xl border border-emerald-500 px-2 px-[9px] text-[10px] font-normal text-green-600"
        >
          <div>
            <UIcon v-if="true" name="IconIncrease" dynamic filled />
            <UIcon v-else name="IconReduce" dynamic filled />
          </div>
          <div class="h-3.5 w-[29px] text-[10px] font-normal text-green-600">
            3.36%
          </div>
        </div>
      </div>
      <div>
        <div class="text-lg font-semibold">23653.4</div>
        <div class="flex items-center">
          <div class="mr-1 w-4">
            <UIcon name="IconMark" dynamic filled />
          </div>
          <div class="text-sm font-normal text-zinc-400">Mark</div>
        </div>
      </div>
      <div>
        <div class="text-lg font-semibold">23,662.3</div>
        <div class="flex items-center">
          <div class="mr-1 w-4">
            <UIcon name="IconIdx" dynamic filled />
          </div>
          <div class="text-sm font-normal text-zinc-400">Index</div>
        </div>
      </div>
      <div>
        <div class="text-lg font-semibold">23,662.3</div>
        <div class="flex items-center">
          <div class="mr-1 w-4">
            <UIcon name="IconMark" dynamic filled />
          </div>
          <div class="text-sm font-normal text-zinc-400">24h Change</div>
        </div>
      </div>
      <div>
        <div class="text-lg font-semibold">24,400.0</div>
        <div class="flex items-center">
          <div class="mr-1 w-4">
            <UIcon name="IconArrowUpCircleLine" dynamic filled />
          </div>
          <div class="text-sm font-normal text-zinc-400">24h High</div>
        </div>
      </div>
      <div>
        <div class="text-lg font-semibold">24,400.0</div>
        <div class="flex items-center">
          <div class="mr-1 w-4">
            <UIcon name="IconArrowDownCircleLine" dynamic filled />
          </div>
          <div class="text-sm font-normal text-zinc-400">24h Low</div>
        </div>
      </div>
    </div>
  </div>
</template>
