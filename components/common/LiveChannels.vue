<template>
  <div class="item pb-[30px]">
    <div class="relative">
      <img class="h-[203px] w-64 rounded-[23px]" :src="liveItem?.img" />
      <div class="absolute left-[50%] top-[50%] -ml-10 -mt-10">
        <div
          class="flex h-20 w-20 items-center justify-center rounded-full bg-black/30"
        >
          <div class="w-12">
            <UIcon name="IconPlay" dynamic filled />
          </div>
        </div>
      </div>
    </div>
    <div
      class="mb-10 mt-[13px] h-[75px] w-[238px] px-[7px] font-['Poppins'] text-base font-medium text-white"
    >
      {{ liveItem?.title }}
    </div>
    <div class="flex items-center justify-between px-[7px]">
      <div
        class="flex h-10 w-[133px] items-center justify-center rounded-2xl bg-orange-400"
      >
        <div class="w-6">
          <UIcon name="IconLiveStream" dynamic filled />
        </div>
        <div
          class="text-center font-['Vazirmatn'] text-sm font-normal text-white"
        >
          Live
        </div>
      </div>
      <div>
        <div class="font-['Poppins'] text-sm font-medium text-white">3.5K</div>
        <div class="font-['Poppins'] text-xs font-normal text-zinc-400">
          Watching
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  liveItem: {
    type: Object,
    required: true,
  },
})
</script>
