<template>
  <div class="item mt-[50px] w-[250px]">
    <div
      @click="onDetail"
      class="relative h-[218px] w-[250.57px] rounded-[30px]"
    >
      <img
        class="h-[218px] w-full rounded-[30px]"
        :src="nft.image"
        :alt="nft.name"
      />
      <div
        v-if="nft.time"
        class="absolute left-[50%] top-[50%] z-50 -ml-[78px] -mt-[22.5px] flex items-center text-sm font-bold"
      >
        <div class="time flex items-center justify-center">08</div>
        <div class="mx-[3px]">:</div>
        <div class="time flex items-center justify-center">34</div>
        <div class="mx-[3px]">:</div>
        <div class="time flex items-center justify-center">52</div>
      </div>
      <div class="price">
        <div></div>
        <div class="ml-1 w-7">
          <UIcon name="IconEth" dynamic filled />
        </div>
        <div
          class="ml-[7px] text-justify font-['Poppins'] text-sm font-normal text-slate-50"
        >
          9.04 ETH
        </div>
      </div>
      <div v-if="nft.design" class="avatar">
        <img
          class="h-10 w-[38.98px] rounded-2xl border-gray-900 object-cover"
          src="~assets/images/Avatar.png"
        />
      </div>
    </div>
    <div class="ml-4 flex flex-col flex-wrap">
      <div class="mt-4 inline-flex items-center justify-start gap-[3px]">
        <div
          class="text-center font-['Poppins'] text-sm font-normal text-stone-300"
        >
          {{ nft.name }}
        </div>
        <UIcon
          name="i-material-symbols-verified"
          dynamic
          class="h-[15px] w-[15px] text-green-500"
        />
      </div>
      <div
        class="text-justify font-['Poppins'] text-lg font-semibold text-white"
      >
        {{ nft.type }}
      </div>
      <div class="mt-8 flex justify-between">
        <div
          class="flex h-[50px] w-[48.72px] items-center justify-center rounded-[20px] border border-gray-700 bg-gray-900"
        >
          <div class="w-6">
            <UIcon name="i-material-symbols-favorite-outline-rounded" dynamic />
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
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '~/store/app'
const router = useRouter()
const appStore = useAppStore()
const { setIsModal } = appStore
const props = defineProps({
  nft: Object,
})
function onBuy() {
  setIsModal(true)
}
function onDetail() {
  router.push('nft-market/1')
}
</script>
<style scoped>
.price {
  background-color: rgba(0, 0, 0, 0.38);
  height: 34px;
  width: 107px;
  border-radius: 34px;
  position: absolute;
  bottom: 15px;
  left: 15px;
  display: flex;
  align-items: center;
}
.time {
  background-color: rgba(0, 0, 0, 0.38);
  height: 45px;
  width: 45px;
  border-radius: 15px;
}
.avatar {
  position: absolute;
  bottom: -20px;
  right: 18px;
}
</style>
