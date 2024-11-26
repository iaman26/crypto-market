<template>
  <div class="mt-12 flex pb-12">
    <div class="w-1/3">
      <div class="flex items-center">
        <div
          @click="onSelectCase(1)"
          :class="isCase === 1 ? 'bg-green-600' : 'bg-zinc-900'"
          class="h-[60px] w-[60px] rounded-[20px] p-[18px]"
        >
          <div class="w-6">
            <UIcon name="IconUser2" dynamic filled />
          </div>
        </div>
        <div class="ml-4">
          <div
            class="mb-[5px] font-['Poppins'] text-base font-semibold text-white"
          >
            Personal Imformations
          </div>
          <div class="font-['Poppins'] text-sm font-normal text-zinc-400">
            Profile Settings
          </div>
        </div>
      </div>
      <div class="mt-12 flex items-center">
        <div
          @click="onSelectCase(2)"
          :class="isCase === 2 ? 'bg-green-600' : 'bg-zinc-900'"
          class="h-[60px] w-[60px] rounded-[20px] p-[18px]"
        >
          <div class="w-6">
            <UIcon name="IconSecurity" dynamic filled />
          </div>
        </div>
        <div class="ml-4">
          <div
            class="mb-[5px] font-['Poppins'] text-base font-semibold text-white"
          >
            Security
          </div>
          <div class="font-['Poppins'] text-sm font-normal text-zinc-400">
            For your account security
          </div>
        </div>
      </div>
      <div class="mt-12 flex items-center">
        <div
          @click="onSelectCase(3)"
          :class="isCase === 3 ? 'bg-green-600' : 'bg-zinc-900'"
          class="h-[60px] w-[60px] rounded-[20px] p-[18px]"
        >
          <div class="w-6">
            <UIcon name="IconCurrency" dynamic filled />
          </div>
        </div>
        <div class="ml-4">
          <div
            class="mb-[5px] font-['Poppins'] text-base font-semibold text-white"
          >
            Currency Preferences
          </div>
          <div class="font-['Poppins'] text-sm font-normal text-zinc-400">
            Choose currency
          </div>
        </div>
      </div>
      <div class="mt-12 flex items-center">
        <div
          @click="onSelectCase(4)"
          :class="isCase === 4 ? 'bg-green-600' : 'bg-zinc-900'"
          class="h-[60px] w-[60px] rounded-[20px] p-[18px]"
        >
          <div class="w-6">
            <UIcon name="IconNotifications2" dynamic filled />
          </div>
        </div>
        <div class="ml-4">
          <div
            class="mb-[5px] font-['Poppins'] text-base font-semibold text-white"
          >
            Notifications
          </div>
          <div class="font-['Poppins'] text-sm font-normal text-zinc-400">
            Application notification settings
          </div>
        </div>
      </div>
      <div class="mt-12 flex items-center">
        <div
          @click="onSelectCase(5)"
          :class="isCase === 5 ? 'bg-green-600' : 'bg-zinc-900'"
          class="h-[60px] w-[60px] rounded-[20px] p-[18px]"
        >
          <div class="w-6">
            <UIcon name="IconPayment" dynamic filled />
          </div>
        </div>
        <div class="ml-4">
          <div
            class="mb-[5px] font-['Poppins'] text-base font-semibold text-white"
          >
            Payment Option
          </div>
          <div class="font-['Poppins'] text-sm font-normal text-zinc-400">
            Methods of buying cryptocurrency
          </div>
        </div>
      </div>
      <div class="mt-12 flex items-center">
        <div
          @click="onSelectCase(6)"
          :class="isCase === 6 ? 'bg-green-600' : 'bg-zinc-900'"
          class="h-[60px] w-[60px] rounded-[20px] p-[18px]"
        >
          <div class="w-6">
            <UIcon name="IconIntegrations" dynamic filled />
          </div>
        </div>
        <div class="ml-4">
          <div
            class="mb-[5px] font-['Poppins'] text-base font-semibold text-white"
          >
            Integrations
          </div>
          <div class="font-['Poppins'] text-sm font-normal text-zinc-400">
            Access to APIs and side programs
          </div>
        </div>
      </div>
      <div class="mt-12 flex items-center">
        <div
          @click="onSelectCase(7)"
          :class="isCase === 7 ? 'bg-green-600' : 'bg-zinc-900'"
          class="h-[60px] w-[60px] rounded-[20px] p-[18px]"
        >
          <div class="w-6">
            <UIcon name="IconUser" dynamic filled />
          </div>
        </div>
        <div class="ml-4">
          <div
            class="mb-[5px] font-['Poppins'] text-base font-semibold text-white"
          >
            KYC Verification
          </div>
          <div class="font-['Poppins'] text-sm font-normal text-zinc-400">
            To authenticate your identity
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/3">
      <UserSettingPersonalInformation v-if="isCase === 1" />
      <UserSettingSecurity v-if="isCase === 2" />
      <UserSettingCurrencyPreferences v-if="isCase === 3" />
      <UserSettingNotifications v-if="isCase === 4" />
      <UserSettingPaymentOption v-if="isCase === 5" />
      <UserSettingIntegrations v-if="isCase === 6" />
      <UserSettingKyc v-if="isCase === 7" />
    </div>
  </div>
</template>
<script setup>
let isCase = ref(1)
function onSelectCase(value) {
  isCase.value = value
}
</script>
