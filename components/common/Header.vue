<template>
  <div
    class="sticky top-0 z-50 flex h-[98px] w-full justify-between bg-zinc-900"
  >
    <div
      class="relative flex items-center justify-center lg:justify-start lg:pl-10"
    >
      <div class="mx-[33px] w-[42px] lg:hidden">
        <UIcon name="IconLogo2" @click="onSideBar()" dynamic filled />
      </div>
      <div @click="onPopupMenu">
        <UIcon name="IconMegaMenue" dynamic filled />
        <div
          v-if="isPopupMenu"
          class="fixed left-4 top-[100px] z-50 h-[422px] w-[1024px] rounded-[38px] bg-gray-900 px-7 py-14"
        >
          <div
            :class="appStore.isSideBar ? 'left-[330px]' : 'left-[130px]'"
            class="absolute -top-2.5 h-6 w-6 rotate-45 bg-gray-900"
          ></div>
          <div class="flex">
            <div class="w-[74%]">
              <div class="grid grid-cols-2 gap-y-8">
                <div class="flex">
                  <div class="h-12 w-12 rounded-2xl bg-indigo-500">
                    <div class="m-3 h-6 w-6">
                      <UIcon name="IconTrading" dynamic filled />
                    </div>
                  </div>
                  <div class="ml-[18px]">
                    <div
                      class="mb-2.5 font-['Poppins'] text-base font-semibold text-white"
                    >
                      Margin Trading
                    </div>
                    <div
                      class="font-['Poppins'] text-sm font-normal text-zinc-400"
                    >
                      Trade digital assets with leverage<br />on Whlae.IO
                      Broker.
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="h-12 w-12 rounded-2xl bg-rose-400">
                    <div class="m-3 h-6 w-6">
                      <UIcon name="IconNews" dynamic filled />
                    </div>
                  </div>
                  <div class="ml-[18px]">
                    <div
                      class="mb-2.5 font-['Poppins'] text-base font-semibold text-white"
                    >
                      News
                    </div>
                    <div
                      class="font-['Poppins'] text-sm font-normal text-zinc-400"
                    >
                      Read the latest crypto news & make<br />beter investing
                      decions.
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="h-12 w-12 rounded-2xl bg-orange-400">
                    <div class="m-3 h-6 w-6">
                      <UIcon name="IconTrading" dynamic filled />
                    </div>
                  </div>
                  <div class="ml-[18px]">
                    <div
                      class="mb-2.5 font-['Poppins'] text-base font-semibold text-white"
                    >
                      Mobile App
                    </div>
                    <div
                      class="font-['Poppins'] text-sm font-normal text-zinc-400"
                    >
                      Buy, Sell, Earn and exchange <br />
                      crypto anywhere and anytime.
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="h-12 w-12 rounded-2xl bg-blue-500">
                    <div class="m-3 h-6 w-6">
                      <UIcon name="IconTrading" dynamic filled />
                    </div>
                  </div>
                  <div class="ml-[18px]">
                    <div
                      class="mb-2.5 font-['Poppins'] text-base font-semibold text-white"
                    >
                      Wedgets
                    </div>
                    <div
                      class="font-['Poppins'] text-sm font-normal text-zinc-400"
                    >
                      Set up and our widgets to your website<br />and attracr
                      visitors.
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="h-12 w-12 rounded-2xl bg-red-500">
                    <div class="m-3 h-6 w-6">
                      <UIcon name="IconTrading" dynamic filled />
                    </div>
                  </div>
                  <div class="ml-[18px]">
                    <div
                      class="mb-2.5 font-['Poppins'] text-base font-semibold text-white"
                    >
                      Trading API
                    </div>
                    <div
                      class="font-['Poppins'] text-sm font-normal text-zinc-400"
                    >
                      Automate your cryptocurrency<br />
                      trading with reliable and stable<br />
                      API.
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="h-12 w-12 rounded-2xl bg-green-600">
                    <div class="m-3 h-6 w-6">
                      <UIcon name="IconTrading" dynamic filled />
                    </div>
                  </div>
                  <div class="ml-[18px]">
                    <div
                      class="mb-2.5 font-['Poppins'] text-base font-semibold text-white"
                    >
                      Walet
                    </div>
                    <div
                      class="font-['Poppins'] text-sm font-normal text-zinc-400"
                    >
                      Buy crypto with your card, trade, and<br />
                      earn on your holdings from our Defi wallet.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[26%]">
              <div class="mb-5 font-['Poppins'] text-sm font-normal text-white">
                Other
              </div>
              <div class="mb-5 font-['Poppins'] text-sm font-normal text-white">
                24h Report
              </div>
              <div class="mb-5 font-['Poppins'] text-sm font-normal text-white">
                Press Kilt
              </div>
              <div class="mb-5 font-['Poppins'] text-sm font-normal text-white">
                API Docs
              </div>
              <div class="h-16 w-[203px] rounded-2xl bg-gray-800 pl-4 pt-3">
                <div class="flex items-center">
                  <div class="h-[30px] w-[30px]">
                    <UIcon name="IconAppStore" dynamic filled />
                  </div>

                  <div class="ml-[9px]">
                    <div
                      class="font-['Poppins'] text-[10px] font-light text-white text-opacity-50"
                    >
                      Download on the
                    </div>
                    <div
                      class="font-['Poppins'] text-xl font-medium tracking-tight text-white"
                    >
                      App Store
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="mt-2.5 h-16 w-[203px] rounded-2xl bg-gray-800 pl-4 pt-3"
              >
                <div class="flex items-center">
                  <div class="h-[30px] w-[30px]">
                    <UIcon name="IconGgPlay" dynamic filled />
                  </div>
                  <div class="ml-[9px]">
                    <div
                      class="font-['Poppins'] text-[10px] font-light text-white text-opacity-50"
                    >
                      Get in on
                    </div>
                    <div
                      class="font-['Poppins'] text-xl font-medium tracking-tight text-white"
                    >
                      Google Play
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div class="relative ml-7 hidden lg:block">
          <div
            class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-[26px]"
          >
            <div class="h-5 w-5">
              <UIcon name="IconSearch" dynamic filled />
            </div>
          </div>
          <input
            id="default-search"
            type="search"
            class="mr-6 inline-flex h-[60px] items-start justify-start gap-2 rounded-[20px] border-none bg-gray-900 py-[19px] pl-[63px] text-sm font-normal leading-normal placeholder-slate-500 lg:w-[300px] xl:w-[400px]"
            placeholder="Search in dashboard..."
          />
        </div>
        <div class="mx-2 h-5 w-5 lg:hidden">
          <UIcon name="IconSearch" dynamic filled />
        </div>
      </form>
      <div
        class="absolute left-[22px] top-[28px] z-50 hidden h-11 w-11 origin-top-left rotate-90 items-center justify-center rounded-[20px] border-2 border-gray-900 bg-zinc-900 lg:flex"
        @click="onSideBar()"
      >
        <div
          :class="appStore.isSideBar ? '-rotate-90' : 'rotate-90'"
          class="h-6 w-6"
        >
          <UIcon name="IconArrowLeft" dynamic filled />
        </div>
      </div>
    </div>

    <div class="mr-0 flex items-center sm:mr-[47px]">
      <UiMultiLanguage />
      <NuxtLink
        to="/connect-wallet"
        class="mr-[10px] flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-gray-900"
      >
        <div class="h-6 w-6">
          <UIcon name="IconWallet" dynamic filled />
        </div>
      </NuxtLink>
      <UiModalSettings />
      <UiModalNotification />
    </div>
    <div
      @click="closePopup"
      v-if="isPopupSetting || isPopupNotification || isPopupMenu"
      class="fixed bottom-0 left-0 right-0 top-0 z-40 bg-black bg-opacity-60"
    ></div>
  </div>
</template>
<script setup>
import { useAppStore } from '~/store/app'
import { onMounted } from 'vue'
import { initDropdowns } from 'flowbite'

onMounted(() => {
  initDropdowns()
})
const appStore = useAppStore()
const { setIsSideBar } = appStore

function onSideBar() {
  setIsSideBar(!appStore.isSideBar)
}
let isPopupMenu = ref(false)

function onPopupMenu() {
  isPopupMenu.value = true
}
function closePopup() {
  isPopupMenu.value = false
}
</script>
