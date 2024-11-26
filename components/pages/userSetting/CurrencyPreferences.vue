<template>
  <div class="px-11">
    <div class="flex items-center justify-between">
      <div class="text-base font-semibold">Currency Preferences</div>
      <div
        class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconDetail" dynamic filled />
        </div>
      </div>
    </div>
  </div>
  <div class="mb-11 mt-7 h-0.5 w-full bg-zinc-900"></div>
  <div class="mb-2.5 ml-[52px] mt-11 text-base font-normal text-zinc-400">
    Popular Currencies
  </div>
  <div class="grid grid-cols-3 gap-1 px-8">
    <div
      class="flex items-center rounded-[20px] bg-stone-300 bg-opacity-10 p-5"
    >
      <div class="w-6">
        <UIcon name="IconUsd" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">United States Dollar</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">USD - $</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconEuro" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">Euro</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">EUR - €</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconGbp" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">Pound Sterling</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">GBP - £</div>
      </div>
    </div>
  </div>
  <div class="mb-2.5 ml-[52px] mt-7 text-base font-normal text-zinc-400">
    Crypto Units
  </div>
  <div class="grid grid-cols-3 gap-1 px-8">
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconBtc" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">Bits</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">BITS</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconBtc" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">Satoshi</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">SATS</div>
      </div>
    </div>
  </div>
  <div class="mb-2.5 ml-[52px] mt-7 text-base font-normal text-zinc-400">
    Fiat Currencies
  </div>
  <div class="grid grid-cols-3 gap-1 px-8">
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconUsd" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">United States Dollar</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">USD - $</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconEuro" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">Euro</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">EUR - €</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconGbp" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">Pound Sterling</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">GBP - £</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconBtc" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">Bitcoin</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">BTC</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconUsd" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">United States Dollar</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">USD - $</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconEuro" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">Euro</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">EUR - €</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconGbp" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">Pound Sterling</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">GBP - £</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconBtc" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">Bitcoin</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">BTC</div>
      </div>
    </div>
    <div class="flex items-center rounded-[20px] p-5">
      <div class="w-6">
        <UIcon name="IconUsd" dynamic filled />
      </div>
      <div class="ml-3">
        <div class="text-base font-semibold">United States Dollar</div>
        <div class="mt-[6px] text-sm font-normal text-zinc-400">USD - $</div>
      </div>
    </div>
  </div>
  <div
    class="mt-9 flex h-[45px] w-[149px] items-center justify-center rounded-[15px]"
  >
    <div class="mr-[5px] h-6 w-6">
      <UIcon name="i-circum-square-more" dynamic />
    </div>
    <div class="text-center text-base font-normal text-neutral-200">
      Load More
    </div>
  </div>
</template>
