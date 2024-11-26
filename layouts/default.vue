<template>
  <div class="h-full bg-gray-900 font-['Poppins'] text-white">
    <CommonSideBar>
      <div
        :class="appStore.isSideBar ? 'lg:pl-[254px]' : 'ml-0 lg:pl-[108px]'"
        class="flex w-full flex-col duration-300"
      >
        <CommonHeader />
        <div
          class="min-h-screen w-full"
          :class="
            appStore.isSideBar
              ? 'px-[10px] xl:mx-auto xl:w-[1024px] xl:px-0 2xl:w-[1180px]'
              : 'px-[10px] xl:mx-auto xl:w-[1180px] xl:px-0 2xl:w-[1320px] '
          "
        >
          <slot />
        </div>
      </div>
    </CommonSideBar>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useAppStore } from '~/store/app'

const appStore = useAppStore()
const { setIsSideBar } = appStore
const width = ref(getWindowWidth())

const updateWidth = () => {
  width.value = getWindowWidth()
}
onMounted(() => {
  window.addEventListener('resize', updateWidth)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth)
})
function getWindowWidth() {
  return typeof window !== 'undefined' ? window.innerWidth : 0
}
watch(width, (val) => {
  if (val < 1024) {
    setIsSideBar(false)
  } else {
    setIsSideBar(true)
  }
})
</script>
