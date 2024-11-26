<template>
  <button
    @click="onPopupNotification"
    class="relative flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-gray-900"
  >
    <div class="h-6 w-6">
      <UIcon name="IconNotification" dynamic filled />
    </div>
    <div
      class="absolute right-[10px] top-[11px] h-5 w-5 rounded-md bg-red-500 text-center font-['Roboto'] text-sm font-normal"
    >
      8
    </div>
    <UiModal
      class="absolute -right-[26px] top-[80px] z-50 w-[388px] rounded-[38px] bg-gray-900"
      :onModal="isPopupNotification"
      :title="'Notification'"
      @close="closePopup()"
    >
      <template v-slot:body>
        <div class="flex items-center pl-9 pr-[27px]">
          <div
            class="mb-6 mr-[21px] flex h-10 w-10 items-center justify-center rounded-full bg-green-400 p-2"
          >
            <div class="h-6 w-6">
              <UIcon name="IconWithdraw" dynamic filled />
            </div>
          </div>
          <div
            class="flex w-[262px] items-center justify-between border-b-[2px] border-gray-800 pb-6"
          >
            <div>
              <div class="text-base font-bold">Withdraw USDT</div>
              <div class="mt-[5px] text-base font-normal text-zinc-400">
                $659.10
              </div>
            </div>
            <div
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-green-600/[15%] px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-green-500">
                Complited
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center pl-9 pr-[27px]">
          <div
            class="mr-[21px] flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 p-2"
          >
            <div class="h-6 w-6 -rotate-180">
              <UIcon name="IconWithdraw" dynamic filled />
            </div>
          </div>
          <div
            class="flex w-[262px] items-center justify-between border-b-[2px] border-gray-800 py-6 pt-9"
          >
            <div>
              <div class="text-base font-bold">Diposit USDT</div>
              <div class="mt-[5px] text-base font-normal text-zinc-400">
                $659.10
              </div>
            </div>
            <div
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-green-600/[15%] px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-green-500">
                Complited
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center pl-9 pr-[27px]">
          <div
            class="mr-[21px] flex h-10 w-10 items-center justify-center rounded-full bg-orange-400 p-2"
          >
            <div class="h-6 w-6">
              <UIcon name="IconWarning" dynamic filled />
            </div>
          </div>
          <div
            class="flex w-[262px] items-center justify-between border-b-[2px] border-gray-800 py-6 pt-9"
          >
            <div>
              <div class="text-base font-bold">New Login Activity</div>
              <div class="mt-[5px] text-base font-normal text-zinc-400">
                Ip : 192.168.1.1
              </div>
            </div>
            <div
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-stone-800 px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-amber-500">
                Warning
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center pl-9 pr-[27px]">
          <div
            class="mr-[21px] flex h-10 w-10 items-center justify-center rounded-full bg-green-400 p-2"
          >
            <div class="h-6 w-6">
              <UIcon name="IconWithdraw" dynamic filled />
            </div>
          </div>
          <div
            class="flex w-[262px] items-center justify-between border-b-[2px] border-gray-800 py-6 pt-9"
          >
            <div>
              <div class="text-base font-bold">Withdraw USDT</div>
              <div class="mt-[5px] text-base font-normal text-zinc-400">
                $659.10
              </div>
            </div>
            <div
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-green-600/[15%] px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-green-500">
                Complited
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center pl-9 pr-[27px]">
          <div
            class="mr-[21px] flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 p-2"
          >
            <div class="h-6 w-6 -rotate-180">
              <UIcon name="IconWithdraw" dynamic filled />
            </div>
          </div>
          <div class="flex w-[262px] items-center justify-between py-6 pt-9">
            <div>
              <div class="text-base font-bold">Diposit USDT</div>
              <div class="mt-[5px] text-base font-normal text-zinc-400">
                $659.10
              </div>
            </div>
            <div
              class="inline-flex items-start justify-start gap-2.5 rounded-xl border border-none bg-green-600/[15%] px-[13px] py-[7px]"
            >
              <div class="relative z-40 text-sm font-normal text-green-500">
                Complited
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-center rounded-b-[38px] bg-gray-800 py-[28px]"
        >
          <div class="mr-2 font-['Vazirmatn'] text-base font-normal">
            View All
          </div>
          <UIcon name="IconToleft" dynamic filled />
        </div>
      </template>
    </UiModal>
  </button>
</template>
<script setup>
let isPopupNotification = ref(false)

function onPopupNotification() {
  isPopupNotification.value = true
}
function closePopup() {
  isPopupNotification.value = false
}
</script>
