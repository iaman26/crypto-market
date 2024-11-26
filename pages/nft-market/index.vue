<template>
  <main>
    <div class="mt-10 flex">
      <div class="w-3/4">
        <div
          class="xxl:w-[1180px] z-10 ml-[40px] mr-[25px] h-full w-auto lg:ml-[60px] lg:mr-[45px] xl:mx-auto"
        >
          <div class="flex items-center justify-between">
            <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              color="gray"
              variant="none"
              placeholder="Search"
              class="lg:w-[300px] xl:w-[400px]"
            />
            <div class="j ustify-end flex items-center filter">
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
          <NftMarketFeaturedCreators />
          <NftMarketFeaturedArtwork />
          <NftMarketPopularCollection />
          <UiPagination />
        </div>
      </div>
      <div class="w-1/4 pl-10">
        <LazyCommonFilterCollection />
      </div>
    </div>
  </main>
</template>
<script setup>
useHead({
  title: 'nft market',
  meta: [{ name: 'description', content: 'nft market' }],
})
</script>

<style scoped>
#main {
  background-color: #0caf60;
}
</style>
