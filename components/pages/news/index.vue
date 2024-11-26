<template>
  <div class="mt-6 flex items-center justify-between">
    <form>
      <div class="relative ml-7 hidden lg:block">
        <div
          class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-[26px]"
        >
          <div class="h-5 w-5">
            <UIcon name="IconSearch" dynamic filled />
          </div>
        </div>
        <input
          id="default-search"
          type="search"
          class="mr-6 inline-flex h-[70px] w-[583px] items-start justify-start gap-2 rounded-[20px] border-none bg-gray-900 py-5 pl-[60px] text-base font-normal leading-normal placeholder-slate-500"
          placeholder="Search in dashboard..."
        />
      </div>
    </form>
    <div class="flex items-center">
      <div class="mr-14 flex items-center">
        <div class="ml-1 w-7">
          <UIcon name="IconEth" dynamic filled />
        </div>
        <div
          class="ml-[14px] mr-[11px] w-[68px] text-justify font-['Poppins'] text-sm font-normal text-slate-50"
        >
          Ethereum
        </div>
        <UIcon name="i-heroicons-chevron-down" class="h-4 w-4 rotate-180" />
      </div>
      <div class="flex items-center justify-end filter">
        <UIcon
          name="i-material-symbols-filter-list"
          class="mr-[10px] h-4 w-[17.75px]"
          dynamic
        />
        <div class="mr-11 text-right text-base font-normal text-neutral-400">
          Sort
        </div>
        <UiTag id="main" :title="'All'"></UiTag>
        <UiTag :title="'New'"></UiTag>
        <UiTag :title="'View'"></UiTag>
        <UiTag :title="'Popular'"></UiTag>
      </div>
    </div>
  </div>
  <NewsLiveChannels :ListLive="ListLive" />
  <div class="mb-7 mt-16 flex">
    <div class="h-6 w-6">
      <UIcon name="IconNews" dynamic filled />
    </div>
    <div class="font-['Poppins'] text-lg font-semibold text-white">News</div>
  </div>
  <div class="grid grid-cols-4 justify-items-center gap-[22px]">
    <CommonNewsItem v-for="(item, idx) in listNews" :key="idx" :News="item" />
    <div class="mt-12 flex justify-center pb-10">
      <div class="mr-[5px] h-6 w-6">
        <UIcon name="i-circum-square-more" dynamic />
      </div>
      <div class="text-center text-base font-normal text-neutral-200">
        Load More
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const listNews = ref([
  {
    user: 'SoulCurry',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/img-exchange.png',
    title: 'NFT platform wars could be ahead, says new DappRadar report',
  },
  {
    user: 'SoulCurry',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/img-exchange.png',
    title: 'NFT platform wars could be ahead, says new DappRadar report',
  },
  {
    user: 'Meta Boss',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/detail-news-3.png',
    title:
      "Fairfax County highlights the value in the 'short-term nature' of yield farming",
  },
  {
    user: 'SoulCurry',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/img-exchange.png',
    title: 'NFT platform wars could be ahead, says new DappRadar report',
  },
  {
    user: 'SoulCurry',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/img-exchange.png',
    title: 'NFT platform wars could be ahead, says new DappRadar report',
  },
  {
    user: 'Meta Boss',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/detail-news-3.png',
    title:
      "Fairfax County highlights the value in the 'short-term nature' of yield farming",
  },
  {
    user: 'SoulCurry',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/img-exchange.png',
    title: 'NFT platform wars could be ahead, says new DappRadar report',
  },
  {
    user: 'SoulCurry',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/img-exchange.png',
    title: 'NFT platform wars could be ahead, says new DappRadar report',
  },
])
const ListLive = ref([
  {
    title:
      "FBI & DeFi, Difficult Bitcoin Mining, Saylor's Battles, Ethereum's Merge Risks",
    img: '/_nuxt/assets/images/news1.png',
  },
  {
    title:
      'Is It Time To Begin Talking Seriously About Bitcoin Tail Emissions?',
    img: '/_nuxt/assets/images/news2.png',
  },
  {
    title:
      'Crypto Lender Celsius Faces Group of Customers Who Want Their Money Back',
    img: '/_nuxt/assets/images/news3.png',
  },
  {
    title: '3 Cryptos to Buy as Bitcoin Gets Bashed',
    img: '/_nuxt/assets/images/news4.png',
  },
])
</script>
<style scoped>
#main {
  background-color: #0caf60;
}
</style>
