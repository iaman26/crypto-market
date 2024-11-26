<template>
  <div :class="$attrs?.class" v-if="onModal">
    <div
      class="absolute -top-2.5 left-[91px] h-6 w-6 rotate-45 bg-gray-900"
    ></div>
    <div class="flex items-center justify-between px-[30px] py-5">
      <div
        @click.stop="closeModal()"
        class="flex h-[45px] w-[45px] items-center justify-center rounded-[14px] bg-zinc-900"
      >
        <UIcon name="IconClose3" dynamic filled />
      </div>
      <div class="mr-5 text-center text-lg font-semibold">{{ title }}</div>
      <div class="h-6 w-6 rotate-90">
        <UIcon name="IconDetail" dynamic filled />
      </div>
    </div>
    <div class="mb-[30px] h-0.5 w-full bg-zinc-900"></div>
    <slot name="body" />
  </div>
  <div
    @click.stop="closeModal()"
    v-if="onModal"
    class="fixed bottom-0 left-0 right-0 top-0 z-40 bg-black bg-opacity-60"
  ></div>
</template>
<script setup lang="ts">
import { useAttrs } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  onModal: {
    type: Boolean,
    require: true,
  },
})
const attrs = useAttrs()
const emit = defineEmits({
  close: false,
})
watch(
  () => props.onModal,
  (newValue: Boolean) => {
    if (newValue) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'visible'
    }
  }
)
function closeModal() {
  emit('close')
}
</script>
