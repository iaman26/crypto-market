<template>
  <button
    class="relative flex h-[60px] w-full items-center justify-center rounded-[20px]"
  >
    <div class="pr-5 text-center font-['Vazirmatn'] text-base font-bold">
      {{ title }}
    </div>
    <div
      class="absolute right-3 top-3 flex h-[36px] w-[36px] items-center justify-center rounded-xl bg-white bg-opacity-20"
    >
      <div class="w-[14.69px]">
        <UIcon name="IconToleft" dynamic filled />
      </div>
    </div>
  </button>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
