<template>
  <div
    @click="onBack()"
    class="z-10 ml-[38px] mt-[25px] flex font-['Poppins'] text-sm font-semibold text-white"
  >
    <UIcon name="IconBack" dynamic filled class="mr-[2px]" />
    Back
  </div>
  <UBreadcrumb :links="links" class="ml-[38px] mt-[13px]" />
  <div class="nft mx-[20px] mt-[51px] flex flex-col md:mx-[48px] md:flex-row">
    <img
      class="mx-auto h-[390px] w-[390px] rounded-[35px] md:mx-0 xl:h-[490px] xl:w-[490px]"
      src="~/assets/images/NFT-Image7.png"
      alt=""
    />
    <div class="information w-full">
      <div
        class="ml-0 mt-5 flex items-center justify-between md:ml-[32px] md:mt-0 lg:ml-[62px]"
      >
        <div class="flex flex-col">
          <div class="font-['Poppins'] text-sm font-semibold text-white">
            Edition 1 of 1
          </div>
          <div
            class="text-justify font-['Poppins'] text-2xl font-extrabold text-white"
          >
            AlphaBot #9999
          </div>
        </div>
        <div class="flex pb-[58px]">
          <div
            class="inline-flex h-12 w-[72px] items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
          >
            <UIcon
              name="i-material-symbols-favorite-outline-rounded"
              dynamic
              class="h-6 w-[23.39px]"
            />
            <div class="font-['Poppins'] text-sm font-semibold text-white">
              24
            </div>
          </div>
          <div
            class="ml-[15px] inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
          >
            <div class="w-6">
              <UIcon name="IconDetail" dynamic filled />
            </div>
          </div>
        </div>
      </div>
      <div class="ml-0 flex items-center md:ml-[32px] lg:ml-[62px]">
        <img src="~/assets/images/AvatarCreator3.png" />
        <div class="ml-[14px]">
          <div class="font-['Poppins'] text-sm font-semibold text-white">
            Creator
          </div>
          <div
            class="flex items-center text-justify font-['Poppins'] text-sm font-normal text-white"
          >
            Travis Ragsdale
            <UIcon
              name="i-material-symbols-verified"
              dynamic
              class="h-[15px] w-[15px] text-green-500"
            />
          </div>
        </div>
        <div class="ml-5 mr-7 h-10 w-px" id="line"></div>
        <img src="~/assets/images/AvatarCreator6.png" />
        <div class="ml-[14px]">
          <div class="font-['Poppins'] text-sm font-semibold text-white">
            Collection
          </div>
          <div
            class="text-justify font-['Poppins'] text-sm font-normal text-white"
          >
            AlphaBot Society
          </div>
        </div>
      </div>
      <div
        class="mb-[14px] ml-0 mt-11 flex items-center md:ml-[32px] lg:ml-[62px]"
      >
        <div class="mr-[6px] w-4">
          <UIcon name="IconTime" dynamic filled />
        </div>
        <div class="font-['Poppins'] text-sm font-normal text-white">
          Auction ending in:
        </div>
      </div>
      <div class="ml-0 flex items-center md:ml-[32px] lg:ml-[62px]">
        <div class="w-[75px]">
          <div
            class="text-justify font-['Poppins'] text-[22.79px] font-black text-white"
          >
            06
          </div>
          <div
            class="text-justify font-['Poppins'] text-base font-normal text-zinc-400"
          >
            Days
          </div>
        </div>
        <div
          class="text-justify font-['Poppins'] text-[22.79px] font-semibold text-white"
        >
          :
        </div>

        <div class="ml-5 w-[75px]">
          <div
            class="text-justify font-['Poppins'] text-[22.79px] font-black text-white"
          >
            32
          </div>
          <div
            class="text-justify font-['Poppins'] text-base font-normal text-zinc-400"
          >
            hours
          </div>
        </div>
        <div
          class="text-justify font-['Poppins'] text-[22.79px] font-semibold text-white"
        >
          :
        </div>

        <div class="ml-5 w-[75px]">
          <div
            class="text-justify font-['Poppins'] text-[22.79px] font-black text-white"
          >
            48
          </div>
          <div
            class="text-justify font-['Poppins'] text-base font-normal text-zinc-400"
          >
            minutes
          </div>
        </div>
        <div
          class="text-justify font-['Poppins'] text-[22.79px] font-semibold text-white"
        >
          :
        </div>

        <div class="ml-5 w-[75px]">
          <div
            class="text-justify font-['Poppins'] text-[22.79px] font-black text-white"
          >
            59
          </div>
          <div
            class="text-justify font-['Poppins'] text-base font-normal text-zinc-400"
          >
            seconds
          </div>
        </div>
      </div>
      <div
        class="ml-0 mt-[47px] h-[143px] w-full rounded-[25px] border border-dashed border-zinc-700 md:ml-[23px]"
      >
        <div class="mx-[39px] mt-[23px] flex items-end justify-between">
          <div class="flex flex-col">
            <div class="flex font-['Poppins'] text-sm font-normal text-white">
              <div class="mr-[6px] w-4">
                <UIcon name="IconBuy" dynamic filled />
              </div>
              Current Bid
            </div>
            <div
              class="mt-[12px] text-justify font-['Poppins'] text-2xl font-black text-white"
            >
              1.000 ETH
            </div>
            <div
              class="text-justify font-['Poppins'] text-base font-normal text-white"
            >
              ( ≈ $3,221.22)
            </div>
          </div>
          <button
            @click="onBuy()"
            class="flex h-[50px] w-[170px] items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 font-['Poppins'] text-sm font-normal leading-normal text-white"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="ml-5 flex md:ml-[50px]">
    <NftMarketDetailDescription />
  </div>
  <div class="ml-5 mt-6 flex md:ml-[50px]">
    <NftMarketDetailPriceHistory />
    <NftMarketDetailBidHistory />
  </div>
  <div class="mb-7 ml-5 mt-6 flex justify-between md:ml-[50px]">
    <div class="flex items-center">
      <img
        class="mr-[14px] h-10 w-10"
        src="~/assets/images/AvatarCreator6.png"
      />
      <div class="font-['Poppins'] text-base font-semibold text-white">
        More from this collection
      </div>
    </div>

    <div
      class="flex items-center text-center font-['Vazirmatn'] text-base font-normal text-white"
    >
      View All Creator
      <UIcon name="i-ooui-arrow-next-ltr" dynamic class="ml-[10px]" />
    </div>
  </div>
  <div
    class="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-4"
  >
    <CommonNftItem v-for="(item, idx) in listNft" :key="idx" :nft="item" />
  </div>
  <div
    class="mx-5 mb-[38px] mt-[93px] flex flex-col justify-between filter xs:flex-row md:mx-[48px]"
  >
    <div class="font-['Poppins'] text-base font-semibold text-white">
      Price History
    </div>
    <div class="mt-[11px] flex xs:mt-0">
      <UiTag id="main" :title="'All'"></UiTag>
      <UiTag :title="'1M'"></UiTag>
      <UiTag :title="'6M'"></UiTag>
      <UiTag :title="'1Y'"></UiTag>
      <UiTag :title="'YTD'"></UiTag>
    </div>
  </div>
  <div class="mt-[38px] px-5 pb-[180px] md:px-[48px]">
    <div class="relative overflow-x-auto sm:rounded-lg">
      <NftMarketDetailPriceHistoryTable />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '~/store/app'
const router = useRouter()
const appStore = useAppStore()
const { setIsModal } = appStore
function onBack() {
  router.go(-1)
}
function onBuy() {
  setIsModal(true)
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
    label: 'AlphaBot #9999',
  },
]
const listNft = ref([
  {
    image: '/_nuxt/assets/images/NFT-Image7.png',
    name: 'SoulCurry',
    type: 'Illusions of Space',
    design: true,
    time: false,
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
])
</script>
<style scoped>
#line {
  background-color: rgba(49, 61, 77, 0.6);
}

#main {
  background-color: #0caf60;
}

#boder-line {
  border-bottom: 1px solid rgba(49, 61, 77, 0.6);
}
</style>
