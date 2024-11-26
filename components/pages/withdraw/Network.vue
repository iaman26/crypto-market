import { ClientOnly } from '#build/components';

<template>
  <div class="mx-auto mb-5 flex w-[350px] text-lg font-bold">
    Withdraw Network
    <div class="ml-[7px] w-6">
      <UIcon name="IconErrorWarningLine" dynamic filled />
    </div>
  </div>
  <div
    class="mx-auto flex w-fit rounded-[20px] border border-gray-800 p-[6px] backdrop-blur-[42px]"
  >
    <div
      class="rounded-[15px] bg-gray-800 px-[26px] py-3 text-xs font-normal text-zinc-400"
    >
      BTC
    </div>
    <div
      class="rounded-[15px] px-[26px] py-3 text-xs font-normal text-zinc-400"
    >
      BEP2
    </div>
    <div
      class="rounded-[15px] px-[26px] py-3 text-xs font-normal text-zinc-400"
    >
      BEP20 (BSC)
    </div>
    <div
      class="rounded-[15px] px-[26px] py-3 text-xs font-normal text-zinc-400"
    >
      RRC20
    </div>
  </div>
  <div class="mb-8 mt-[22px] flex justify-center">
    <span class="text-base font-normal text-zinc-400"
      >Average Arrival Time : </span
    ><span class="text-base font-normal"> 3 Minutes</span>
  </div>
  <div class="mb-8 text-center text-lg font-bold">BTC Address</div>
  <div class="text-center">
    <!-- <UiQrCode
      background="#999999"
      backgroundColor="#999999"
      backgroundDimming="#999999"
      logoBackgroundColor="#999999"
      autoColor="true"
      colorDark="red"
      colorLight="white"
      :logo-src="'/_nuxt/assets/icons/btc-qr.svg'"
      text="Hello world!"
      :size="260"
    /> -->
    <ClientOnly>
      <UiQrCode2 data="'https://fliqr.codes'" />
      <template #fallback>
        <div class="flex h-full w-full items-center justify-center">
          <p>Loading QR...</p>
        </div>
      </template>
    </ClientOnly>
  </div>
  <div class="flex justify-center">
    <div>
      <div class="mb-[18px] mt-[67px] h-10 w-10">
        <UIcon name="IconWarning2" dynamic filled />
      </div>
      <div class="text-lg font-bold">Send Only BTC to this Address !</div>
      <div class="w-[314px] text-base font-normal text-zinc-400">
        Sending coin or token other than BTC to this Address may reault in the
        los of your deposit.
      </div>
    </div>
  </div>
</template>
