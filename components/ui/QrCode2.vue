<template>
  <div ref="qrCode" class="flex justify-center"></div>
</template>

<script setup lang="ts">
import type QRCodeStyling from 'qr-code-styling'

const props = defineProps({
  data: String,
})

const { $qrCodeStyling } = useNuxtApp()
const qrCode = ref<HTMLElement | null>(null)

// Default options
const options = {
  width: 300,
  height: 300,
  type: 'svg',
  data: props.data,
  image: '/_nuxt/assets/icons/btc-qr.svg',
  dotsOptions: {
    color: 'white',
    type: 'rounded',
  },
  cornersSquareOptions: { type: 'extra-rounded', color: 'white' },
  backgroundOptions: {
    color: '#111827',
  },
  imageOptions: {
    crossOrigin: 'anonymous',
    margin: 10,
  },
}

const qrCodeStyling: QRCodeStyling = $qrCodeStyling(options)

onMounted(() => {
  // Append QR code to DOM element
  qrCodeStyling.append(qrCode.value)
  // Add viewbox to make it resizable
  qrCode.value!.firstChild!.setAttribute('viewBox', '0 0 300 300')
})

watch(
  () => props.data,
  (newValue: string) => {
    // Update QR code data when props change
    options.data = newValue
    qrCodeStyling.update(options)
    // Add viewbox to make it resizable
    qrCode.value!.firstChild!.setAttribute('viewBox', '0 0 300 300')
  }
)
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>
