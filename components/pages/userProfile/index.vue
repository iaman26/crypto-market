<template>
  <div class="mt-20 flex items-center">
    <div class="mr-10 flex w-[70%] items-center justify-between">
      <img
        class="h-[70px] w-[70px] rounded-[25px]"
        src="~assets/images/Avatar-Image.png"
      />
      <div class="ml-[26px]">
        <div
          class="w-fit w-fit rounded-xl bg-amber-500 bg-opacity-20 px-[13px] py-[7px] text-sm font-normal text-orange-400"
        >
          Unverified
        </div>
        <div class="mt-2.5 font-['Poppins'] text-lg font-semibold text-white">
          UID : 73958136
        </div>
      </div>
      <div class="flex items-center">
        <div class="font-['Poppins'] text-base font-normal text-white">
          (UYC+8 ) Asia/Singapore
        </div>
        <div
          class="ml-10 mr-[10px] font-['Poppins'] text-base font-normal text-white"
        >
          Whale.io Pay fees
        </div>
        <div class="h-[27px] w-[27px]">
          <UIcon name="i-material-symbols-toggle-off-outline" dynamic />
        </div>
      </div>
    </div>
    <div class="ml-9 flex w-[30%] items-center">
      <UIcon name="IconDashboard" dynamic class="h-[66px] w-[66px]" filled />
      <div class="ml-9">
        <div class="flex">
          <div class="font-['Poppins'] text-base font-normal text-white">
            Security Level
          </div>
          <UIcon name="i-ic-round-help-outline" dynamic class="ml-1 h-5 w-5" />
        </div>
        <div class="my-[3px] h-[0px] w-[105px] border border-zinc-400"></div>
        <div
          class="h-6 w-[108px] font-['Poppins'] text-base font-semibold text-red-500"
        >
          Too Low!
        </div>
      </div>
    </div>
  </div>
  <div class="mt-12 grid grid-cols-3 gap-5">
    <div class="flex">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-900 bg-opacity-20"
      >
        <div class="h-8 w-8">
          <UIcon name="IconMailOpenLine" dynamic filled />
        </div>
      </div>
      <div class="ml-[18px]">
        <div class="font-['Poppins'] text-base font-semibold text-white">
          Email Address
        </div>
        <div
          class="mt-[11px] max-w-[300px] font-['Poppins'] text-sm font-normal text-zinc-400"
        >
          erf*****@gmail.com
        </div>
      </div>
    </div>
    <div class="flex">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-900 bg-opacity-20"
      >
        <div class="h-8 w-8">
          <UIcon name="IconSmartphone" dynamic filled />
        </div>
      </div>
      <div class="ml-[18px]">
        <div class="font-['Poppins'] text-base font-semibold text-white">
          Phone
        </div>
        <div
          class="mt-[11px] max-w-[300px] text-sm font-normal text-orange-400"
        >
          Disabled
        </div>
      </div>
    </div>
    <div class="flex">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-900 bg-opacity-20"
      >
        <div class="h-8 w-8">
          <UIcon name="IconGoogle" dynamic filled />
        </div>
      </div>
      <div class="ml-[18px]">
        <div class="font-['Poppins'] text-base font-semibold text-white">
          Google Verification
        </div>
        <div class="mt-[11px] max-w-[300px] text-sm font-normal text-green-600">
          Enable
        </div>
      </div>
    </div>
    <div class="flex">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-900 bg-opacity-20"
      >
        <div class="h-8 w-8">
          <UIcon name="IconTrading2" dynamic filled />
        </div>
      </div>
      <div class="ml-[18px]">
        <div class="font-['Poppins'] text-base font-semibold text-white">
          API Services
        </div>
        <div
          class="mt-[11px] max-w-[300px] font-['Poppins'] text-sm font-normal text-zinc-400"
        >
          Trade digital assets with leverage on Whlae.IO Broker.
        </div>
      </div>
    </div>
    <div class="flex">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-900 bg-opacity-20"
      >
        <div class="h-8 w-8">
          <UIcon name="IconTrading2" dynamic filled />
        </div>
      </div>
      <div class="ml-[18px]">
        <div class="font-['Poppins'] text-base font-semibold text-white">
          Margin Trading
        </div>
        <div
          class="mt-[11px] max-w-[300px] font-['Poppins'] text-sm font-normal text-zinc-400"
        >
          Trade digital assets with leverage on Whlae.IO Broker.
        </div>
      </div>
    </div>
    <div class="flex">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-900 bg-opacity-20"
      >
        <div class="h-8 w-8">
          <UIcon name="IconTrading2" dynamic filled />
        </div>
      </div>
      <div class="ml-[18px]">
        <div class="font-['Poppins'] text-base font-semibold text-white">
          Margin Trading
        </div>
        <div
          class="mt-[11px] max-w-[300px] font-['Poppins'] text-sm font-normal text-zinc-400"
        >
          Margin Trading Trade digital assets with leverage on Whlae.IO Broker.
        </div>
      </div>
    </div>
  </div>
  <div class="flex">
    <div class="w-1/2">
      <UserProfileSecuritySettingLogs />
    </div>
    <div class="w-1/2">
      <UserProfileLoginLogs />
    </div>
  </div>
</template>
<style scoped>
#line {
  background-color: rgba(49, 61, 77, 0.6);
}

#main {
  background-color: #0caf60;
}

#boder-line {
  border-bottom: 1px solid rgba(49, 61, 77, 0.6);
}
</style>
