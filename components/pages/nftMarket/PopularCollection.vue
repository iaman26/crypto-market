<template>
    <div>
        <div class="featured mt-8 flex justify-between">
            <div class="text-base font-semibold text-white">
                Popular Collection
            </div>
            <div class="flex text-center items-center font-['Vazirmatn'] text-base font-normal text-white">
                Explore More
                <UIcon name="i-ooui-arrow-next-ltr" dynamic class="ml-[10px]"/>
            </div>
        </div>
        <div class="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-3">
            <CommonNftItemCollection v-for="(item, id) in listCollection" :collection="item" :key="id" />
        </div>
    </div>
</template>

<script setup>
const listCollection = ref([
    {
        name: 'Creative Monkey',
        avatar: '/_nuxt/assets/images/AvatarCreator3.png',
        img1: '/_nuxt/assets/images/Image1.png',
        img2: '/_nuxt/assets/images/Image2.png',
        img3: '/_nuxt/assets/images/Image3.png',
        img4: '/_nuxt/assets/images/Image4.png',
    },
    {
        name: 'Creative ALPHABOT',
        avatar: '/_nuxt/assets/images/AvatarCreator4.png',
        img1: '/_nuxt/assets/images/Image5.png',
        img2: '/_nuxt/assets/images/Image6.png',
        img3: '/_nuxt/assets/images/Image7.png',
        img4: '/_nuxt/assets/images/Image8.png',
    },
    {
        name: 'Creative Art Collection',
        avatar: '/_nuxt/assets/images/AvatarCreator5.png',
        img1: '/_nuxt/assets/images/Image9.png',
        img2: '/_nuxt/assets/images/Image10.png',
        img3: '/_nuxt/assets/images/Image11.png',
        img4: '/_nuxt/assets/images/Image12.png',
    },
])
</script>

<style scoped></style>