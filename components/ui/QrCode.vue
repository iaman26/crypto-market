<script setup lang="ts">
const attrs = useAttrs()
</script>

<template>
  <div>
    <ClientOnly>
      <vueQr v-bind="attrs"></vueQr>
      <template #fallback>
        <div class="flex h-full w-full items-center justify-center">
          <p>Loading QR...</p>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
