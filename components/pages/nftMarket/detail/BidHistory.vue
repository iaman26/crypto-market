<template>
  <div class="mx-6 w-1/2">
    <div class="my-4 flex w-full flex-col justify-between filter xs:flex-row">
      <div class="font-['Poppins'] text-base font-semibold text-white">
        <div class="font-['Poppins'] text-base font-semibold text-white">
          Bid History
        </div>
      </div>
      <div class="mt-[11px] flex xs:mt-0">
        <UiTag id="main" :title="'All'"></UiTag>
        <UiTag :title="'1M'"></UiTag>
        <UiTag :title="'6M'"></UiTag>
        <UiTag :title="'1Y'"></UiTag>
        <UiTag :title="'YTD'"></UiTag>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img
          class="mr-[14px] h-10 w-10"
          src="~assets/images/AvatarCreator4.png"
        />
        <div class="text-sm font-normal">
          Offer of $800 by
          <span class="font-semibold">Martoutaa</span>
        </div>
      </div>
      <div
        class="h-[21px] w-[110px] text-justify font-['Poppins'] text-xs font-normal text-zinc-400"
      >
        Jun 14 - 4:12 PM
      </div>
    </div>
    <div class="my-3 h-px w-full" id="line"></div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img
          class="mr-[14px] h-10 w-10"
          src="~assets/images/AvatarCreator3.png"
        />
        <div class="text-sm font-normal">
          Placed a bid $500 by
          <span class="font-semibold">Melany W.</span>
        </div>
      </div>
      <div
        class="h-[21px] w-[110px] text-justify font-['Poppins'] text-xs font-normal text-zinc-400"
      >
        Jun 14 - 4:12 PM
      </div>
    </div>
    <div class="my-3 h-px w-full" id="line"></div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img
          class="mr-[14px] h-10 w-10"
          src="~assets/images/AvatarCreator7.png"
        />
        <div class="text-sm font-normal">
          Placed a bid $500 by
          <span class="font-semibold">Martoutaa</span>
        </div>
      </div>
      <div
        class="h-[21px] w-[110px] text-justify font-['Poppins'] text-xs font-normal text-zinc-400"
      >
        Jun 14 - 4:12 PM
      </div>
    </div>
    <div class="my-3 h-px w-full" id="line"></div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img
          class="mr-[14px] h-10 w-10"
          src="~assets/images/AvatarCreator8.png"
        />
        <div class="text-sm font-normal">
          Offer of $700 by
          <span class="font-semibold">Melany W.</span>
        </div>
      </div>
      <div
        class="h-[21px] w-[110px] text-justify font-['Poppins'] text-xs font-normal text-zinc-400"
      >
        Jun 14 - 4:12 PM
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
#main {
  background-color: #0caf60;
}
</style>
