<template>
  <div class="mt-10 flex">
    <div class="w-3/4">
      <div
        class="xxl:w-[1180px] z-10 ml-[40px] mr-[25px] h-full w-auto lg:ml-[60px] lg:mr-[45px] xl:mx-auto"
      >
        <div class="flex items-center justify-between">
          <form>
            <div class="relative">
              <div
                class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-[8px]"
              >
                <div class="h-5 w-5">
                  <UIcon name="IconSearch" dynamic filled />
                </div>
              </div>
              <input
                id="default-search"
                type="search"
                class="inline-flex items-start justify-start gap-2 border-none bg-gray-900 pl-[45px] text-sm font-normal leading-normal placeholder-slate-500 lg:w-[300px] xl:w-[400px]"
                placeholder="Search"
              />
            </div>

            <div class="mx-2 h-5 w-5 lg:hidden">
              <UIcon name="IconSearch" dynamic filled />
            </div>
          </form>
          <div class="flex items-center justify-end filter">
            <UIcon
              name="i-material-symbols-filter-list"
              class="mr-[10px] h-4 w-[17.75px]"
              dynamic
            />

            <div
              class="mr-11 text-right text-base font-normal text-neutral-400"
            >
              Sort
            </div>

            <UiTag id="main" :title="'All'"></UiTag>
            <UiTag :title="'Low'"></UiTag>
            <UiTag :title="'High'"></UiTag>
            <UiTag :title="'Popular'"></UiTag>
          </div>
        </div>
        <div class="featured mt-8 flex justify-between">
          <div class="text-base font-semibold text-white">
            Popular Collection
          </div>
          <div
            class="flex items-center text-center font-['Vazirmatn'] text-base font-normal text-white"
          >
            Explore More
            <UIcon name="i-ooui-arrow-next-ltr" dynamic class="ml-[10px]" />
          </div>
        </div>
        <div
          class="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          <CommonNftItemCollection
            v-for="(item, id) in listCollection"
            :collection="item"
            :key="id"
          />
        </div>
        <UiPagination />
      </div>
    </div>
    <div class="w-1/4 pl-10">
      <CommonFilterCollection />
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
  {
    name: 'Creative Monkey',
    avatar: '/_nuxt/assets/images/AvatarCreator3.png',
    img1: '/_nuxt/assets/images/Image13.png',
    img2: '/_nuxt/assets/images/Image14.png',
    img3: '/_nuxt/assets/images/Image15.png',
    img4: '/_nuxt/assets/images/Image16.png',
  },
  {
    name: 'The Fantasy illustration',
    avatar: '/_nuxt/assets/images/AvatarCreator4.png',
    img1: '/_nuxt/assets/images/Image17.png',
    img2: '/_nuxt/assets/images/Image18.png',
    img3: '/_nuxt/assets/images/Image19.png',
    img4: '/_nuxt/assets/images/Image20.png',
  },
  {
    name: 'Flow boy',
    avatar: '/_nuxt/assets/images/AvatarCreator5.png',
    img1: '/_nuxt/assets/images/Image21.png',
    img2: '/_nuxt/assets/images/Image22.png',
    img3: '/_nuxt/assets/images/Image23.png',
    img4: '/_nuxt/assets/images/Image24.png',
  },
  {
    name: 'Creative Monkey',
    avatar: '/_nuxt/assets/images/AvatarCreator3.png',
    img1: '/_nuxt/assets/images/Image25.png',
    img2: '/_nuxt/assets/images/Image26.png',
    img3: '/_nuxt/assets/images/Image27.png',
    img4: '/_nuxt/assets/images/Image28.png',
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
    name: 'Flow boy',
    avatar: '/_nuxt/assets/images/AvatarCreator5.png',
    img1: '/_nuxt/assets/images/Image9.png',
    img2: '/_nuxt/assets/images/Image10.png',
    img3: '/_nuxt/assets/images/Image11.png',
    img4: '/_nuxt/assets/images/Image12.png',
  },
])
</script>

<style scoped>
#main {
  background-color: #0caf60;
}
</style>
