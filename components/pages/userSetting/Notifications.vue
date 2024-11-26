<template>
  <div class="px-11">
    <div class="flex items-center justify-between">
      <div class="text-base font-semibold">Notifications</div>
      <div
        class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconDetail" dynamic filled />
        </div>
      </div>
    </div>
  </div>
  <div class="mt-7 h-0.5 w-full bg-zinc-900"></div>
  <div class="ml-9 mr-14">
    <div class="flex items-center">
      <div
        class="inline-flex h-[60px] w-[60px] items-start justify-start gap-2.5 rounded-[22px] bg-green-600 p-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconShieldKeyholeLine" dynamic filled />
        </div>
      </div>
      <div
        class="ml-5 flex w-full items-center justify-between border-b border-gray-700 py-7"
      >
        <div>
          <div class="text-base font-semibold">Security Alerts</div>
          <div class="text-sm font-normal text-zinc-400">Profile Settings</div>
        </div>
        <div
          :class="
            isSecurity
              ? 'flex-row-reverse bg-green-600'
              : 'border-[3px] border-slate-400 bg-gray-900'
          "
          class="flex h-6 w-11 items-center rounded-full"
          @click="onSelect(1)"
        >
          <div
            :class="isSecurity ? 'bg-zinc-900' : 'bg-slate-400'"
            class="mx-2 h-3 w-3 rounded-full"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="inline-flex h-[60px] w-[60px] items-start justify-start gap-2.5 rounded-[22px] bg-indigo-500 p-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconChat1Line" dynamic filled />
        </div>
      </div>
      <div
        class="ml-5 flex w-full items-center justify-between border-b border-gray-700 py-7"
      >
        <div>
          <div class="text-base font-semibold">SMS Notification</div>
          <div class="text-sm font-normal text-zinc-400">Profile Settings</div>
        </div>
        <div
          :class="
            isSMSNotification
              ? 'flex-row-reverse bg-green-600'
              : 'border-[3px] border-slate-400 bg-gray-900'
          "
          class="flex h-6 w-11 items-center rounded-full"
          @click="onSelect(2)"
        >
          <div
            :class="isSMSNotification ? 'bg-zinc-900' : 'bg-slate-400'"
            class="mx-2 h-3 w-3 rounded-full"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="inline-flex h-[60px] w-[60px] items-start justify-start gap-2.5 rounded-[22px] bg-red-500 p-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconPriceAlert" dynamic filled />
        </div>
      </div>
      <div
        class="ml-5 flex w-full items-center justify-between border-b border-gray-700 py-7"
      >
        <div>
          <div class="text-base font-semibold">Price Alerts</div>
          <div class="text-sm font-normal text-zinc-400">Profile Settings</div>
        </div>
        <div
          :class="
            isPriceAlerts
              ? 'flex-row-reverse bg-green-600'
              : 'border-[3px] border-slate-400 bg-gray-900'
          "
          class="flex h-6 w-11 items-center rounded-full"
          @click="onSelect(3)"
        >
          <div
            :class="isPriceAlerts ? 'bg-zinc-900' : 'bg-slate-400'"
            class="mx-2 h-3 w-3 rounded-full"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="inline-flex h-[60px] w-[60px] items-start justify-start gap-2.5 rounded-[22px] bg-orange-400 p-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconReferral" dynamic filled />
        </div>
      </div>
      <div
        class="ml-5 flex w-full items-center justify-between border-b border-gray-700 py-7"
      >
        <div>
          <div class="text-base font-semibold">Referral Commission Alerts</div>
          <div class="text-sm font-normal text-zinc-400">Profile Settings</div>
        </div>
        <div
          :class="
            isReferralCommission
              ? 'flex-row-reverse bg-green-600'
              : 'border-[3px] border-slate-400 bg-gray-900'
          "
          class="flex h-6 w-11 items-center rounded-full"
          @click="onSelect(4)"
        >
          <div
            :class="isReferralCommission ? 'bg-zinc-900' : 'bg-slate-400'"
            class="mx-2 h-3 w-3 rounded-full"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="inline-flex h-[60px] w-[60px] items-start justify-start gap-2.5 rounded-[22px] bg-purple-600 p-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconMail2" dynamic filled />
        </div>
      </div>
      <div
        class="ml-5 flex w-full items-center justify-between border-b border-gray-700 py-7"
      >
        <div>
          <div class="text-base font-semibold">Email Notification</div>
          <div class="text-sm font-normal text-zinc-400">Profile Settings</div>
        </div>
        <div
          :class="
            isEmailNotification
              ? 'flex-row-reverse bg-green-600'
              : 'border-[3px] border-slate-400 bg-gray-900'
          "
          class="flex h-6 w-11 items-center rounded-full"
          @click="onSelect(5)"
        >
          <div
            :class="isEmailNotification ? 'bg-zinc-900' : 'bg-slate-400'"
            class="mx-2 h-3 w-3 rounded-full"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="inline-flex h-[60px] w-[60px] items-start justify-start gap-2.5 rounded-[22px] bg-orange-400 p-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconDevice" dynamic filled />
        </div>
      </div>
      <div class="ml-5 flex w-full items-center justify-between py-7">
        <div>
          <div class="text-base font-semibold">Device Login Alerts</div>
          <div class="text-sm font-normal text-zinc-400">Profile Settings</div>
        </div>
        <div
          :class="
            isDeviceLogin
              ? 'flex-row-reverse bg-green-600'
              : 'border-[3px] border-slate-400 bg-gray-900'
          "
          class="flex h-6 w-11 items-center rounded-full"
          @click="onSelect(6)"
        >
          <div
            :class="isDeviceLogin ? 'bg-zinc-900' : 'bg-slate-400'"
            class="mx-2 h-3 w-3 rounded-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-0.5 w-full bg-zinc-900"></div>
  <div class="mt-9 flex items-center justify-end">
    <div
      class="ml-16 mr-5 w-[180px] rounded-[25px] bg-gray-800 py-4 text-center text-sm font-normal"
    >
      Cancel
    </div>
    <div
      class="w-[180px] rounded-[25px] bg-green-600 py-4 text-center text-sm font-normal"
    >
      Save Changes
    </div>
  </div>
</template>
<script setup>
let isSecurity = ref(false)
let isSMSNotification = ref(false)
let isPriceAlerts = ref(false)
let isReferralCommission = ref(false)
let isEmailNotification = ref(false)
let isDeviceLogin = ref(false)
function onSelect(value) {
  switch (value) {
    case 1:
      isSecurity.value = !isSecurity.value
      break
    case 2:
      isSMSNotification.value = !isSMSNotification.value
      break
    case 3:
      isPriceAlerts.value = !isPriceAlerts.value
      break
    case 4:
      isReferralCommission.value = !isReferralCommission.value
      break
    case 5:
      isEmailNotification.value = !isEmailNotification.value
      break
    case 6:
      isDeviceLogin.value = !isDeviceLogin.value
      break
    default:
      break
  }
}
</script>
