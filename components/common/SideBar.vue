<template>
  <div
    :class="
      appStore.isSideBar
        ? 'left-0 w-[252px]'
        : '-left-[108px] w-[108px] lg:left-[0]'
    "
    class="fixed z-30 flex flex-col items-center bg-zinc-900 shadow duration-300"
  >
    <div class="relative hidden h-[98px] items-center justify-center lg:flex">
      <a href="/" class="flex items-end justify-center">
        <div class="w-10">
          <UIcon v-if="appStore.isSideBar" name="IconLogo" dynamic filled />
          <UIcon v-else name="IconLogo2" dynamic filled />
        </div>
        <div v-if="appStore.isSideBar" class="ml-[10px] text-xl font-semibold">
          Whale.
        </div>
      </a>
    </div>
    <div
      :class="appStore.isSideBar ? 'w-[252px]' : 'w-[108px]'"
      class="h-[100px] bg-gray-900 lg:h-0.5"
    ></div>
    <NuxtLink to="/user-setting">
      <div class="user flex flex-col items-center">
        <img
          class="mt-[29px] h-[70px] w-[70px] rounded-[25px]"
          src="assets/images/Avatar-Image.png"
        />
        <div
          v-if="appStore.isSideBar"
          class="mt-[14px] text-center text-base font-semibold"
        >
          Erfan Amade
        </div>
        <div class="inline-flex items-center justify-start gap-[3px]">
          <div
            v-if="appStore.isSideBar"
            class="text-center text-sm font-normal text-stone-300"
          >
            verified
          </div>
          <UIcon
            name="i-material-symbols-verified"
            dynamic
            :class="appStore.isSideBar ? '' : 'mx-auto'"
            class="relative h-[15px] w-[15px] text-green-500"
          />
        </div>
      </div>
    </NuxtLink>
    <div class="mx-auto mt-[34px]">
      <NuxtLink
        v-for="(item, id) in listMenu"
        :key="id"
        :to="item.link"
        :class="{
          'mx-auto h-[60px] items-center rounded-[20px]  bg-gradient-to-r from-emerald-400 to-teal-400':
            router.fullPath === item.link,
          'item mb-[25px] flex': true,
          'w-[204px]': appStore.isSideBar,
          'w-[64px]': !appStore.isSideBar,
        }"
      >
        <img
          :class="appStore.isSideBar ? 'ml-[20px] mr-[14px]' : 'mx-auto'"
          class="h-6 w-6"
          :src="item.img"
          alt=""
        />
        <div
          v-if="appStore.isSideBar"
          :class="
            router.fullPath === item.link
              ? 'h-[25px] w-[131px] font-bold'
              : 'font-normal text-stone-300'
          "
          class="text-base"
        >
          {{ item.name }}
        </div>
      </NuxtLink>
      <div
        :class="appStore.isSideBar ? 'ml-[20px]' : 'mx-auto'"
        class="mb-[15px] mt-[58px] w-fit text-sm font-normal text-stone-300"
      >
        Insignts
      </div>
      <div class="item mb-[25px] flex">
        <div
          class="h-6 w-6"
          :class="appStore.isSideBar ? 'ml-[20px] mr-[14px]' : 'mx-auto'"
        >
          <UIcon name="IconChat" dynamic filled />
        </div>
        <a
          v-if="appStore.isSideBar"
          href="#"
          class="flex items-center text-base font-normal text-stone-300"
        >
          Inbox
          <div class="ml-[7px] h-6 w-6 rounded-[8px] bg-red-800 text-center">
            8
          </div>
        </a>
      </div>
      <div
        v-if="appStore.isSideBar"
        class="mx-auto mb-[24px] mt-[54px] flex h-[50px] items-center rounded-[20px] bg-gray-900"
      >
        <div
          class="light flex h-9 w-1/2 items-center px-2"
          :class="
            isDark
              ? ''
              : 'rounded-[14px] bg-gradient-to-r from-emerald-400 to-teal-400'
          "
          @click="isDark = false"
        >
          <div class="ml-[8px] mr-2 h-6 w-6">
            <UIcon name="IconLight" dynamic filled />
          </div>
          <div class="text-center text-sm font-normal">Light</div>
        </div>
        <div
          class="dark flex h-9 w-1/2 items-center px-2"
          :class="
            isDark
              ? 'rounded-[14px] bg-gradient-to-r from-emerald-400 to-teal-400'
              : ''
          "
          @click="isDark = true"
        >
          <div class="ml-[8px] mr-[8px] h-6 w-6">
            <UIcon name="IconDark" dynamic filled />
          </div>
          <div class="text-center text-sm font-normal">Dark</div>
        </div>
      </div>
      <div
        v-else
        class="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-[20px] border-none bg-gray-900"
        :class="isDark ? '' : 'bg-gradient-to-r from-emerald-400 to-teal-400'"
        @click="isDark = !isDark"
      >
        <div class="w-[17px]">
          <UIcon name="IconLight" dynamic filled />
        </div>
      </div>
    </div>
  </div>
  <slot />
</template>
<script setup>
import { useRoute } from 'vue-router'
import { useAppStore } from '~/store/app'
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
const appStore = useAppStore()
const router = useRoute()
const listMenu = ref([
  {
    name: 'Dashboard',
    img: '/_nuxt/assets/icons/Dashboard-Icon.svg',
    link: '/',
  },
  {
    name: 'Exchange',
    img: '/_nuxt/assets/icons/Exchange-Icon.svg',
    link: '/exchange',
  },
  {
    name: 'Live prices',
    img: '/_nuxt/assets/icons/Price-Icon.svg',
    link: '',
  },
  {
    name: 'Wallet',
    img: '/_nuxt/assets/icons/wallet.svg',
    link: '/connect-wallet',
  },
  {
    name: 'NFT Market',
    img: '/_nuxt/assets/icons/Market-Icon.svg',
    link: '/nft-market',
  },
  {
    name: 'Transaction',
    img: '/_nuxt/assets/icons/Transaction-Icon.svg',
    link: '/transaction-history',
  },
  {
    name: 'Settings',
    img: '/_nuxt/assets/icons/settings.svg',
    link: '/user-setting',
  },
  {
    name: 'News',
    img: '/_nuxt/assets/icons/news.svg',
    link: '/news',
  },
])
</script>
<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color: #111;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fa-moon {
  color: #f1c40f;
}

.fa-sun {
  color: #f39c12;
}

.checkbox-label .ball {
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}
</style>
