<template>
  <div class="mb-8 flex items-center">
    <div class="mr-2 w-6">
      <UIcon name="IconLiveStream" dynamic filled />
    </div>
    <div class="font-['Poppins'] text-lg font-semibold text-white">
      Live Channels
    </div>
  </div>
  <div class="grid grid-cols-4 justify-items-center gap-5">
    <commonLiveChannels
      v-for="(item, idx) in ListLive"
      :key="idx"
      :liveItem="item"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  ListLive: {
    type: Array,
    require: true,
  },
})
</script>
