<template>
  <div class="item mt-3 w-64">
    <div class="mx-1 flex items-center justify-between">
      <div class="flex items-center">
        <img
          class="h-8 w-8 rounded-[13px] border-gray-900"
          :src="News.avatar"
        />
        <div class="mx-[10px] text-justify text-sm font-normal">
          {{ News.user }}
        </div>
        <div class="w-4">
          <UIcon name="IconVerification" dynamic filled />
        </div>
      </div>
      <div class="flex items-center">
        <div class="mr-1 w-4">
          <UIcon name="IconTime" dynamic filled />
        </div>
        <div class="text-sm font-medium">{{ News.time }}</div>
      </div>
    </div>
    <div class="relative my-[13px] h-[163px] w-full" @click="onDetail(1)">
      <img class="absolute rounded-[23px]" :src="News.images" />
      <div
        class="price absolute bottom-[7px] left-2 flex h-[34px] w-[119px] items-center"
      >
        <img
          src="assets/images/Etherium-Icon.png"
          class="ml-[4.5px] mr-[7.5px] h-[27px] w-[27px]"
          alt=""
        />
        <div class="w-[68px] text-justify text-sm font-normal text-slate-50">
          Ethereum
        </div>
      </div>
    </div>
    <div class="mx-1 mb-[38px] w-full text-base font-medium">
      {{ News.title }}
    </div>
    <div class="mt-8 flex justify-between">
      <div
        class="flex h-[50px] w-[48.72px] items-center justify-center rounded-[20px] border border-gray-700 bg-gray-900"
      >
        <div class="w-[23.39px]">
          <UIcon name="i-material-symbols-favorite-outline-rounded" dynamic />
        </div>
      </div>
      <button
        class="relative flex h-[51px] w-[170px] items-center justify-between rounded-[20px] bg-green-600 pl-[27px] pr-2"
        type="button"
        @click="onDetail(1)"
      >
        <div class="text-center font-['Vazirmatn'] text-base font-bold">
          Read More
        </div>
        <div
          class="flex h-[36px] w-[36px] items-center justify-center rounded-xl bg-white bg-opacity-20"
        >
          <div class="w-[14.69px]">
            <UIcon name="IconToleft" dynamic filled />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  News: {
    type: Object,
    required: true,
  },
})
function onDetail(val) {
  router.push(`News/${val}`)
}
</script>
