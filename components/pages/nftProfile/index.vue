<template>
  <div
    @click="onBack()"
    class="z-10 ml-[38px] mt-[25px] flex text-sm font-semibold"
  >
    <UIcon name="IconBack" dynamic filled class="mr-0.5" />
    Back
  </div>
  <UBreadcrumb :links="links" />
  <div class="relative mt-[50px]">
    <img
      src="~assets/images/banner-profile.png"
      class="w-full rounded-[25px]"
      alt=""
    />
    <div class="absolute right-5 top-4 flex">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-2xl bg-black bg-opacity-40 backdrop-blur-[21px]"
      >
        <div class="w-6">
          <UIcon name="IconStar2" dynamic filled />
        </div>
      </div>
      <div
        class="mx-[10px] flex h-12 w-12 items-center justify-center rounded-2xl bg-black bg-opacity-40 backdrop-blur-[21px]"
      >
        <div class="w-6">
          <UIcon name="IconShare" dynamic filled />
        </div>
      </div>
      <div
        class="flex h-12 w-12 items-center justify-center rounded-2xl bg-black bg-opacity-40 backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconDetail" dynamic filled />
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-4 right-5 flex items-center justify-center rounded-[20px] bg-green-600 px-9 py-[18px]"
    >
      <div class="text-right text-base font-normal">Follow</div>
    </div>
    <div class="absolute -bottom-[32px] left-[50%] -ml-[50px]">
      <img
        src="~assets/images/Avatar-profile.png"
        class="h-[99px] w-[99px]"
        alt=""
      />
    </div>
  </div>
  <div class="mt-[38px] flex flex-col items-center">
    <div class="flex items-center">
      <div class="text-justify text-base font-normal">Travis Ragsdale</div>
      <UIcon
        name="i-material-symbols-verified"
        dynamic
        class="h-[15px] w-[15px] text-green-500"
      />
    </div>
    <div class="mt-[30px] flex">
      <div
        class="flex h-[84px] w-[150px] flex-col items-center justify-between rounded-2xl bg-black bg-opacity-40 py-3 backdrop-blur-[21px]"
      >
        <div class="w-6">
          <UIcon name="IconDesign" dynamic filled />
        </div>
        <div class="flex items-center">
          <div class="mr-[5px] text-base font-semibold">474</div>
          <div class="text-sm font-normal text-zinc-400">Item</div>
        </div>
      </div>
      <div
        class="mx-[10px] flex h-[84px] w-[150px] flex-col items-center justify-between rounded-2xl bg-black bg-opacity-40 py-3 backdrop-blur-[21px]"
      >
        <div class="w-6">
          <UIcon name="IconPerson" dynamic filled />
        </div>
        <div class="flex items-center">
          <div class="mr-[5px] text-base font-semibold">48</div>
          <div class="text-sm font-normal text-zinc-400">Owners</div>
        </div>
      </div>
      <div
        class="flex h-[84px] w-[150px] flex-col items-center justify-between rounded-2xl bg-black bg-opacity-40 py-3 backdrop-blur-[21px]"
      >
        <div class="w-6">
          <UIcon name="IconCoin2" dynamic filled />
        </div>
        <div class="flex items-center">
          <div class="mr-[5px] text-base font-semibold">0.00</div>
          <div class="text-sm font-normal text-zinc-400">value</div>
        </div>
      </div>
    </div>
    <div class="mb-3 mt-[22px] h-px w-full" id="line"></div>
    <div class="h-[116px] w-[751px] text-center text-sm font-normal leading-7">
      AlphaBot is the first community-driven “choose your own adventure” style
      PFP project on OpemnSea. Each AlphaBot in this 3333 PFP collection was
      algorithmically generated with over 120 individual traits including head
      unit, body shape, arm type, texture/color, accessories, and more.
    </div>
  </div>
  <div class="mt-10 flex">
    <div class="w-full">
      <div class="featured mt-8 flex justify-between">
        <div class="flex w-[300px] items-center text-base font-semibold">
          <div class="ml-2 h-6 w-6">
            <UIcon name="i-circum-square-more" dynamic />
          </div>
          474<span class="ml-3 text-sm font-normal text-zinc-400">Item</span>
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
          <UiTag :title="'Low'"></UiTag>
          <UiTag :title="'High'"></UiTag>
          <UiTag :title="'Popular'"></UiTag>
        </div>
      </div>
      <div class="grid grid-cols-4 justify-items-center gap-4">
        <CommonNftItem v-for="(item, idx) in listNft" :key="idx" :nft="item" />
      </div>
      <UiPagination />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const listNft = ref([
  {
    image: '/_nuxt/assets/images/NFT-Image7.png',
    name: 'SoulCurry',
    type: 'Illusions of Space',
    design: false,
    time: true,
  },

  {
    image: '/_nuxt/assets/images/NFT-Image3.png',
    name: 'SoulCurry',
    type: 'Illusions of Space',
    design: true,
    time: false,
  },
  {
    image: '/_nuxt/assets/images/NFT-Image4.png',
    name: 'SoulCurry',
    type: 'Illusions of Space',
    design: true,
    time: false,
  },
  {
    image: '/_nuxt/assets/images/NFT-Image.png',
    name: 'SoulCurry',
    type: 'Illusions of Space',
    design: true,
    time: false,
  },
  {
    image: '/_nuxt/assets/images/NFT-Image2.png',
    name: 'SoulCurry',
    type: 'Illusions of Space',
    design: true,
    time: false,
  },
  {
    image: '/_nuxt/assets/images/NFT-Image5.png',
    name: 'SoulCurry',
    type: 'Illusions of Space',
    design: true,
    time: false,
  },
])
function onBack() {
  router.go(-1)
}
const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'NFT Market',
    to: '/nft-market',
  },
  {
    label: 'Travis Ragsdale',
  },
]
</script>

<style scoped>
#main {
  background-color: #0caf60;
}

#line {
  background-color: rgba(49, 61, 77, 0.6);
}
</style>
