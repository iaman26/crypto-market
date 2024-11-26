<template>
    <div>
        <div class="featured mt-8 flex justify-between">
            <div class="text-base font-semibold text-white">
                Featured Artwork
            </div>
            <div class="flex text-center items-center font-['Vazirmatn'] text-base font-normal text-white">
                View All Creator
                <UIcon name="i-ooui-arrow-next-ltr" dynamic class="ml-[10px]"/>
            </div>
        </div>
        <div class="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-3">
            <CommonNftItem v-for="(item, idx) in listNft" :key="idx" :nft="item" />
        </div>
    </div>
</template>

<script setup>
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
</script>

<style scoped></style>