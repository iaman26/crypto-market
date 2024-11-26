<template>
  <div>
    <div class="text-base font-normal text-slate-300">Filters</div>
    <div class="mt-3 text-sm font-semibold text-slate-300">Applied filters</div>
    <div class="mt-5 flex">
      <div
        class="flex items-center rounded-[13px] border border-slate-500 border-opacity-30 px-4 py-2"
      >
        <div class="text-center text-sm font-normal text-white">Art</div>
        <UIcon name="i-heroicons-x-circle" class="ml-[6px] h-4 w-4" />
      </div>
      <div
        class="ml-[13px] flex items-center rounded-[13px] border border-slate-500 border-opacity-30 px-4 py-2"
      >
        <div class="text-center text-sm font-normal text-white">Game</div>
        <UIcon name="i-heroicons-x-circle" class="ml-[6px] h-4 w-4" />
      </div>
    </div>
    <div class="mb-[14px] mt-[38px] flex items-center justify-between">
      <div class="text-sm font-semibold text-slate-300">Categories</div>
      <UIcon name="i-heroicons-chevron-down" class="h-4 w-4 rotate-180" />
    </div>
    <UInput
      variant="outline"
      placeholder="Search"
      icon="i-heroicons-magnifying-glass-20-solid"
      size="lg"
      trailing
      :ui="{
        color: {
          white: 'bg-transparent',
        },
        rounded: 'rounded-[14px]',
      }"
    />
    <div class="mt-[30px] flex items-center justify-between">
      <div class="flex items-center">
        <UIcon name="i-streamline-paint-palette" dynamic />
        <div class="ml-[9px] text-sm font-medium text-white">Art</div>
      </div>
      <div
        class="rounded-xl border border-slate-500/30 px-[10px] py-[7px] text-[10px] font-normal text-stone-300"
      >
        7854
      </div>
    </div>
    <div class="mt-[20px] flex items-center justify-between">
      <div class="flex items-center">
        <UIcon name="i-material-symbols-videogame-asset-outline" dynamic />
        <div class="ml-[9px] text-sm font-medium text-white">Games</div>
      </div>
      <div
        class="rounded-xl border border-slate-500/30 px-[10px] py-[7px] text-[10px] font-normal text-stone-300"
      >
        7854
      </div>
    </div>
    <div class="mt-[20px] flex items-center justify-between">
      <div class="flex items-center">
        <UIcon name="i-mdi-music-circle-outline" dynamic />
        <div class="ml-[9px] text-sm font-medium text-white">Music</div>
      </div>
      <div
        class="rounded-xl border border-slate-500/30 px-[10px] py-[7px] text-[10px] font-normal text-stone-300"
      >
        953
      </div>
    </div>
    <div class="mb-[14px] mt-[12px] flex items-center justify-between">
      <div class="text-sm font-semibold text-slate-300">Chains</div>
      <UIcon name="i-heroicons-chevron-down" class="h-4 w-4 rotate-180" />
    </div>
    <UInput
      variant="outline"
      placeholder="Search"
      icon="i-heroicons-magnifying-glass-20-solid"
      size="lg"
      trailing
      :ui="{
        color: {
          white: 'bg-transparent',
        },
        rounded: 'rounded-[14px]',
      }"
    />
  </div>
  <div class="ml-6 mt-5 flex items-center p-1">
    <div class="h-8 w-8">
      <UIcon name="IconEth" dynamic filled />
    </div>
    <div class="ml-4">
      <div class="font-['Poppins'] text-sm font-semibold text-white">
        Etheruim
      </div>
      <div class="font-['Poppins'] text-[10px] font-normal text-zinc-400">
        ETH
      </div>
    </div>
  </div>
  <div class="ml-6 mt-3 flex items-center p-1">
    <div class="h-8 w-8">
      <UIcon name="IconUsdt" dynamic filled />
    </div>
    <div class="ml-4">
      <div class="font-['Poppins'] text-sm font-semibold text-white">
        Binance
      </div>
      <div class="font-['Poppins'] text-[10px] font-normal text-zinc-400">
        BNB
      </div>
    </div>
  </div>
  <div class="ml-6 mt-3 flex items-center p-1">
    <div class="h-8 w-8">
      <UIcon name="IconPolygon" dynamic filled />
    </div>
    <div class="ml-4">
      <div class="font-['Poppins'] text-sm font-semibold text-white">
        Polygon
      </div>
      <div class="font-['Poppins'] text-[10px] font-normal text-zinc-400">
        MATIC
      </div>
    </div>
  </div>
  <div class="mb-[14px] mt-[12px] flex items-center justify-between">
    <div class="text-sm font-semibold text-slate-300">Price</div>
    <UIcon name="i-heroicons-chevron-down" class="h-4 w-4 rotate-180" />
  </div>
  <div class="mb-3 mt-6 flex items-end justify-between px-[5px]">
    <div class="h-[29px] w-2 origin-top-left rounded-[20px] bg-gray-800"></div>
    <div class="h-[17px] w-2 origin-top-left rounded-[20px] bg-green-600"></div>
    <div class="h-[59px] w-2 origin-top-left rounded-[20px] bg-green-600"></div>
    <div class="h-[19px] w-2 origin-top-left rounded-[20px] bg-gray-800"></div>
    <div class="h-[25px] w-2 origin-top-left rounded-[20px] bg-green-600"></div>
    <div class="h-10 w-2 origin-top-left rounded-[20px] bg-green-600"></div>
    <div class="h-[43px] w-2 origin-top-left rounded-[20px] bg-green-600"></div>
    <div class="h-3.5 w-2 origin-top-left rounded-[20px] bg-gray-800"></div>
    <div class="h-[51px] w-2 origin-top-left rounded-[20px] bg-gray-800"></div>
    <div class="h-[21px] w-2 origin-top-left rounded-[20px] bg-green-600"></div>
    <div class="h-[85px] w-2 origin-top-left rounded-[20px] bg-green-600"></div>
    <div class="h-[46px] w-2 origin-top-left rounded-[20px] bg-green-600"></div>
  </div>
  <URange color="primary" placeholder="Search..." />
</template>

<script setup lang="ts"></script>

<style scoped></style>
