<template>
  <div @click="onBack()" class="z-10 mt-[25px] flex text-sm font-semibold">
    <UIcon name="IconBack" dynamic filled class="mr-[2px]" />
    Back
  </div>
  <UBreadcrumb class="mt-[13px]" :links="links" />
  <div class="mt-[65px] flex justify-between">
    <div>
      <div class="text-3xl font-bold">Connect your wallet.</div>
      <div class="mt-[5px] text-base font-normal text-slate-300">
        Select What Wallet Your Want To Connect Below.
      </div>
      <br />
      {{ account.shortAddress }}
    </div>
    <div
      class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
    >
      <div class="h-6 w-6">
        <UIcon name="IconDetail1" dynamic filled />
      </div>
    </div>
  </div>
  <div
    class="mt-24 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-11 xl:grid-cols-4"
  >
    <div @click="isConnectMetamask">
      <div class="h-[45px] w-[45px]">
        <UIcon name="IconMetaMask" dynamic filled />
      </div>
      <div class="mb-[9px] mt-[5px] text-base font-semibold">MetaMask</div>
      <div class="w-[247px] text-sm font-normal text-slate-300">
        MetaMask is a global community of developers and designers
      </div>
    </div>
    <div>
      <img
        src="~assets/images/WalletConnect.png"
        class="h-[45px] w-[45px]"
        alt=""
      />
      <div class="mb-[9px] mt-[5px] text-base font-semibold">WalletConnect</div>
      <div class="w-[247px] text-sm font-normal text-slate-300">
        MetaMask is a global community of developers and designers
      </div>
    </div>
    <div>
      <img
        src="~assets/images/coin-base.png"
        class="h-[45px] w-[45px]"
        alt=""
      />
      <div class="mb-[9px] mt-[5px] text-base font-semibold">
        Coinbase Wallet
      </div>
      <div class="w-[247px] text-sm font-normal text-slate-300">
        Coinbase is the easiest place to buy and sell cryptocurrency.
      </div>
    </div>
    <div>
      <img src="~assets/images/dapper.png" class="h-[45px] w-[45px]" alt="" />
      <div class="mb-[9px] mt-[5px] text-base font-semibold">Dapper</div>
      <div class="w-[247px] text-sm font-normal text-slate-300">
        If something doesn’t matter to you, it doesn't matter to us.
      </div>
    </div>
    <div>
      <div class="h-[45px] w-[45px]">
        <UIcon name="IconPhantom" dynamic filled />
      </div>
      <div class="mb-[9px] mt-[5px] text-base font-semibold">Phantom</div>
      <div class="w-[247px] text-sm font-normal text-slate-300">
        MetaMask is a global community of developers and designers
      </div>
    </div>
    <div>
      <div class="h-[45px] w-[45px]">
        <UIcon name="IconCoinHub" dynamic filled />
      </div>
      <div class="mb-[9px] mt-[5px] text-base font-semibold">Coinhub</div>
      <div class="w-[247px] text-sm font-normal text-slate-300">
        MetaMask is a global community of developers and designers
      </div>
    </div>
    <div>
      <img
        src="~assets/images/trust-wallet.png"
        class="h-[45px] w-[45px]"
        alt=""
      />
      <div class="mb-[9px] mt-[5px] text-base font-semibold">Trust Wallet</div>
      <div class="w-[247px] text-sm font-normal text-slate-300">
        Coinbase is the easiest place to buy and sell cryptocurrency.
      </div>
    </div>
    <div>
      <img src="~assets/images/venly.png" class="h-[45px] w-[45px]" alt="" />
      <div class="mb-[9px] mt-[5px] text-base font-semibold">Venly</div>
      <div class="w-[247px] text-sm font-normal text-slate-300">
        Venly wants to make blockchain accessible for everyone.
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import {
  $off,
  $on,
  Events,
  account,
  accountDetails,
  chain,
  getAvailableChains,
  connect,
  disconnect,
  switchChain,
  selectChain,
} from '@kolirt/vue-web3-auth'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getAccount } from '@wagmi/core'
import { useAppStore } from '~/store/app'
const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'NFT Market',
    to: '/nft-market',
  },
  {
    label: 'Travis Ragsdale',
  },
]
const appStore = useAppStore()
const { setAccount } = appStore
const loading = reactive({
  connecting: false,
  connectingTo: {} || any,
  switchingTo: {} || any,
  logouting: false,
})
const router = useRouter()

function onBack() {
  router.go(-1)
}
async function isConnectMetamask(chain) {
  const handler = (state) => {
    if (!state) {
      if (chain) {
        loading.connectingTo[chain.id] = false
      } else {
        loading.connecting = false
      }
      $off(Events.ModalStateChanged, handler)
    }
  }
  $on(Events.ModalStateChanged, handler)
  if (chain) {
    loading.connectingTo[chain.id] = true
  } else {
    loading.connecting = true
  }
  await connect(chain)
}
// async function onLogout() {
//   loading.logouting = true

//   const handler = () => {
//     loading.logouting = false
//     $off(Events.Disconnected, handler)
//   }

//   $on(Events.Disconnected, handler)

//   await disconnect().catch(() => {
//     loading.logouting = false
//     $off(Events.Disconnected, handler)
//   })
// }
</script>

<style scoped></style>
