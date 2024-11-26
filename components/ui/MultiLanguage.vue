<template>
  <button
    @click="onPopupMultiLanguage"
    class="relative mr-[10px] hidden h-[60px] w-[145px] items-center justify-center rounded-[20px] bg-gray-900 sm:flex"
  >
    <div class="h-6 w-6">
      <UIcon name="IconUK" dynamic filled />
    </div>
    <div class="ml-[11px] mr-[9px] text-center text-sm font-normal">
      English
    </div>
    <UIcon
      name="i-heroicons-chevron-down"
      :class="{ 'rotate-180': isPopupMultiLanguage }"
      class="h-6 w-6 duration-300"
    />
    <UiModal
      class="absolute -left-7 top-[80px] z-50 h-[350px] w-[388px] rounded-[38px] bg-gray-900"
      :onModal="isPopupMultiLanguage"
      :title="'Select Language'"
      @close="closePopup()"
    >
      <template v-slot:body
        ><div class="grid grid-cols-3 justify-items-center">
          <div
            @click="onChangeMultiLanguage(1)"
            class="relative p-[3px] text-center"
          >
            <img
              src="~assets/images/flag-eng.png"
              class="h-[64px] w-[64px] rounded-[50%] border-[1px] p-[9px]"
              alt=""
              :class="
                isMultiLanguage === 1 ? 'border-emerald-400' : 'border-gray-900'
              "
            />
            <div
              v-if="isMultiLanguage === 1"
              class="absolute right-0 top-0 flex h-[30px] w-[30px] items-center justify-between rounded-[40px] bg-gray-900"
            >
              <UIcon name="IconSelect" class="p-[3px]" dynamic filled />
            </div>

            <div class="mt-1 text-center text-sm font-normal">English</div>
          </div>
          <div
            @click="onChangeMultiLanguage(2)"
            class="relative p-[3px] text-center"
          >
            <img
              src="~assets/images/flag-german.png"
              class="h-[64px] w-[64px] rounded-[50%] border-[1px] p-[9px]"
              alt=""
              :class="
                isMultiLanguage === 2 ? 'border-emerald-400' : 'border-gray-900'
              "
            />
            <div
              v-if="isMultiLanguage === 2"
              class="absolute right-0 top-0 flex h-[30px] w-[30px] items-center justify-between rounded-[40px] bg-gray-900"
            >
              <UIcon name="IconSelect" class="p-[3px]" dynamic filled />
            </div>

            <div class="mt-1 text-center text-sm font-normal">German</div>
          </div>
          <div
            @click="onChangeMultiLanguage(3)"
            class="relative p-[3px] text-center"
          >
            <img
              src="~assets/images/flag-french.png"
              class="h-[64px] w-[64px] rounded-[50%] border-[1px] p-[9px]"
              alt=""
              :class="
                isMultiLanguage === 3 ? 'border-emerald-400' : 'border-gray-900'
              "
            />
            <div
              v-if="isMultiLanguage === 3"
              class="absolute right-0 top-0 flex h-[30px] w-[30px] items-center justify-between rounded-[40px] bg-gray-900"
            >
              <UIcon name="IconSelect" class="p-[3px]" dynamic filled />
            </div>

            <div class="mt-1 text-center text-sm font-normal">French</div>
          </div>
          <div
            @click="onChangeMultiLanguage(4)"
            class="relative p-[3px] text-center"
          >
            <img
              src="~assets/images/flag-chines.png"
              class="h-[64px] w-[64px] rounded-[50%] border-[1px] p-[9px]"
              alt=""
              :class="
                isMultiLanguage === 4 ? 'border-emerald-400' : 'border-gray-900'
              "
            />
            <div
              v-if="isMultiLanguage === 4"
              class="absolute right-0 top-0 flex h-[30px] w-[30px] items-center justify-between rounded-[40px] bg-gray-900"
            >
              <UIcon name="IconSelect" class="p-[3px]" dynamic filled />
            </div>

            <div class="mt-1 text-center text-sm font-normal">Chinese</div>
          </div>
          <div
            @click="onChangeMultiLanguage(5)"
            class="relative p-[3px] text-center"
          >
            <img
              src="~assets/images/flag-swedish.png"
              class="h-[64px] w-[64px] rounded-[50%] border-[1px] p-[9px]"
              alt=""
              :class="
                isMultiLanguage === 5 ? 'border-emerald-400' : 'border-gray-900'
              "
            />
            <div
              v-if="isMultiLanguage === 5"
              class="absolute right-0 top-0 flex h-[30px] w-[30px] items-center justify-between rounded-[40px] bg-gray-900"
            >
              <UIcon name="IconSelect" class="p-[3px]" dynamic filled />
            </div>

            <div class="mt-1 text-center text-sm font-normal">Swedish</div>
          </div>
          <div
            @click="onChangeMultiLanguage(6)"
            class="relative p-[3px] text-center"
          >
            <img
              src="~assets/images/flag-spanish.png"
              class="h-[64px] w-[64px] rounded-[50%] border-[1px] p-[9px]"
              alt=""
              :class="
                isMultiLanguage === 6 ? 'border-emerald-400' : 'border-gray-900'
              "
            />
            <div
              v-if="isMultiLanguage === 6"
              class="absolute right-0 top-0 flex h-[30px] w-[30px] items-center justify-between rounded-[40px] bg-gray-900"
            >
              <UIcon name="IconSelect" class="p-[3px]" dynamic filled />
            </div>

            <div class="mt-1 text-center text-sm font-normal">Spanish</div>
          </div>
        </div></template
      >
    </UiModal>
  </button>
</template>
<script setup>
let isMultiLanguage = ref(1)
function onChangeMultiLanguage(value) {
  isMultiLanguage.value = value
}
let isPopupMultiLanguage = ref(false)
function onPopupMultiLanguage() {
  isPopupMultiLanguage.value = true
}
function closePopup() {
  isPopupMultiLanguage.value = false
}
</script>
