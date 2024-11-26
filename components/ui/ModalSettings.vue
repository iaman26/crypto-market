<template>
  <button
    @click="onPopupSetting"
    class="relative mr-[10px] flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-gray-900"
  >
    <div class="h-6 w-6">
      <UIcon name="IconSettings" dynamic filled />
    </div>
    <UiModal
      class="absolute -right-24 top-[80px] z-50 w-[388px] rounded-[38px] bg-gray-900"
      :onModal="isPopupSetting"
      :title="'Settings'"
      @close="closePopup()"
    >
      <template v-slot:body>
        <div class="px-9 py-[22px]">
          <div class="flex items-center justify-between">
            <div class="text-base font-semibold">Currency</div>
            <div class="flex">
              <img
                src="~assets/images/flag-america.jpg"
                class="h-6 w-6 rounded-[50%]"
                alt=""
              />
              <div class="px-2 text-base font-semibold">USD</div>
              <div class="h-6 w-6">
                <UIcon name="IconRight" dynamic filled />
              </div>
            </div>
          </div>
          <div class="my-4 h-0.5 w-full bg-gray-800"></div>
          <div class="flex items-center justify-between">
            <div class="text-base font-semibold">Theme</div>
            <div
              class="flex h-[50px] w-[162px] items-center rounded-[20px] bg-gray-900"
            >
              <div class="light flex w-1/2">
                <div class="ml-[8px] mr-[8px] h-6 w-6">
                  <UIcon name="IconLight" dynamic filled />
                </div>
                <div class="text-center text-sm font-normal">Light</div>
              </div>
              <div
                class="dark mr-2 flex h-9 w-1/2 items-center rounded-[14px] bg-green-600"
              >
                <div class="ml-[8px] mr-[8px] h-6 w-6">
                  <UIcon name="IconDark" dynamic filled />
                </div>
                <div class="text-center text-sm font-normal">Dark</div>
              </div>
            </div>
          </div>
          <div class="my-4 h-0.5 w-full bg-gray-800"></div>
          <div class="flex items-center justify-between">
            <div class="text-base font-semibold">Language</div>
            <div class="flex items-center justify-between">
              <div class="text-base font-semibold">English US</div>
              <div class="ml-2 h-6 w-6">
                <UIcon name="IconRight" dynamic filled />
              </div>
            </div>
          </div>
          <div class="my-4 h-0.5 w-full bg-gray-800"></div>
          <div class="flex items-center justify-center">
            <div class="text-base font-semibold">All settings</div>
            <div class="ml-0.5 h-6 w-6">
              <UIcon name="IconRight" dynamic filled />
            </div>
          </div>
        </div>
      </template>
    </UiModal>
  </button>
</template>
<script setup>
let isPopupSetting = ref(false)
function onPopupSetting() {
  isPopupSetting.value = true
}
function closePopup() {
  isPopupSetting.value = false
}
</script>
