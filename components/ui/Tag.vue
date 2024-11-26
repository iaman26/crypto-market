<template>
  <UButton
    :label="title"
    class="mr-4 rounded-[12px] border border-solid border-slate-500 bg-gray-900 px-[18px]"
    variant="solid"
  />
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: true,
})
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
