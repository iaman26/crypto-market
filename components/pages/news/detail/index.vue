<template>
  <div class="mt-12 flex">
    <div class="max-w-full px-7">
      <NewsDetailContent />
      <div
        class="mb-6 mt-20 h-[0px] w-full border border-neutral-400 border-opacity-10"
      ></div>
      <div class="px-5">
        <div class="flex items-center">
          <div class="w-5">
            <UIcon name="IconTags" dynamic filled />
          </div>
          <div
            class="ml-[5px] font-['Poppins'] text-base font-normal leading-7 text-white"
          >
            Tags
          </div>
          <div
            class="ml-5 inline-flex flex-col items-center justify-center gap-1 rounded-[10px] border border-zinc-700 px-2 py-[7px] text-sm font-normal text-stone-300"
          >
            #Cryptocurrencies
          </div>
          <div
            class="ml-2.5 inline-flex flex-col items-center justify-center gap-1 rounded-[10px] border border-zinc-700 px-2 py-[7px] text-sm font-normal text-stone-300"
          >
            #Business
          </div>
          <div
            class="ml-2.5 inline-flex flex-col items-center justify-center gap-1 rounded-[10px] border border-zinc-700 px-2 py-[7px] text-sm font-normal text-stone-300"
          >
            #Investments
          </div>
          <div
            class="ml-2.5 inline-flex flex-col items-center justify-center gap-1 rounded-[10px] border border-zinc-700 px-2 py-[7px] text-sm font-normal text-stone-300"
          >
            #Adoption
          </div>
          <div
            class="ml-2.5 inline-flex flex-col items-center justify-center gap-1 rounded-[10px] border border-zinc-700 px-2 py-[7px] text-sm font-normal text-stone-300"
          >
            #DeFi
          </div>
          <div
            class="ml-2.5 inline-flex flex-col items-center justify-center gap-1 rounded-[10px] border border-zinc-700 px-2 py-[7px] text-sm font-normal text-stone-300"
          >
            #Investment
          </div>
        </div>
      </div>
      <div class="mt-14 flex items-center justify-between">
        <div class="font-['Poppins'] text-base font-semibold text-white">
          You Might also Like
        </div>
        <div class="flex h-6">
          <UIcon name="IconLeft" class="mr-7" dynamic filled />
          <UIcon name="IconRight" dynamic filled />
        </div>
      </div>
      <div class="grid grid-cols-3 justify-items-center gap-[22px]">
        <CommonNewsItem
          v-for="(item, idx) in listNews"
          :key="idx"
          :News="item"
        />
      </div>
      <NewsDetailComments />
    </div>
    <div class="mx-3 w-[286px]">
      <NewsDetailRelated />
      <NewsDetailLastComment />
    </div>
  </div>
</template>
<script setup>
const listNews = ref([
  {
    user: 'SoulCurry',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/detail-news-1.png',
    title: 'Bitcoin-friendly Próspera hits back at controversy in The Guardian',
  },
  {
    user: 'SoulCurry',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/detail-news-2.png',
    title:
      'Social media ‘major Web3 pain point’ as phishing attacks almost doubles: Report',
  },
  {
    user: 'Meta Boss',
    avatar: '/_nuxt/assets/images/Avatar.png',
    time: '7m ago',
    images: '/_nuxt/assets/images/detail-news-3.png',
    title:
      "Fairfax County highlights the value in the 'short-term nature' of yield farming",
  },
])
</script>
<style scoped>
#main {
  background-color: #0caf60;
}
</style>
