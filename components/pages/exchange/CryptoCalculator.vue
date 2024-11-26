<template>
  <div>
    <div class="flex w-full justify-between">
      <div class="text-base font-semibold">Crypto Calculator</div>
      <div class="w-6">
        <UIcon name="IconClc" dynamic filled />
      </div>
    </div>
    <div class="relative z-20 mt-[31px] w-full">
      <div
        class="mb-[11px] flex h-[101px] w-full items-center rounded-[20px] bg-zinc-900 p-5"
      >
        <img class="h-8 w-8" src="assets/images/Etherium-Icon.png" alt="" />
        <div class="ml-[15px] w-full">
          <div class="flex items-center justify-between">
            <div class="text-[13px] font-normal text-zinc-400">ETH</div>
            <div class="text-right text-xs font-normal">0.12000 BTC</div>
          </div>
          <div class="mt-1 flex items-center justify-between">
            <div class="flex items-center gap-[10px]">
              <div class="pb-[6px] text-base font-bold">Ethereum</div>
            </div>
            <div class="text-right text-lg font-bold">0.01</div>
          </div>
        </div>
      </div>
      <div
        class="mb-[11px] flex h-[101px] w-full items-center rounded-[20px] bg-zinc-900 p-5"
      >
        <div class="w-8">
          <UIcon name="IconUsdt" dynamic filled />
        </div>
        <div class="ml-[15px] w-full">
          <div class="flex items-center justify-between">
            <div class="pt-[6px] text-[13px] font-normal text-zinc-400">
              USDT
            </div>
            <div class="text-right text-xs font-normal">12000 USDT</div>
          </div>
          <div class="mt-1 flex items-center justify-between">
            <div class="flex items-center gap-[10px]">
              <div class="text-base font-bold">USDT</div>
            </div>
            <div class="text-right text-lg font-bold">$403</div>
          </div>
        </div>
      </div>

      <div
        class="absolute left-[50%] top-[50%] z-50 -ml-[27px] -mt-[27px] flex h-[54px] w-[54px] items-center justify-center rounded-[50%] border-[14px] border-gray-900 bg-zinc-900"
      >
        <div class="w-4 rounded-[50%] object-none">
          <UIcon name="IconExchange" dynamic filled />
        </div>
      </div>
    </div>
    <CommonButton
      :title="'Buy Ethereum'"
      class="mx-auto mt-[21px] max-w-[292px] bg-green-600"
    />
  </div>
</template>
