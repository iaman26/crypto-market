<template>
    <Icon :name="name" filled></Icon>
</template>

<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true
    }
})

defineOptions({
  inheritAttrs: true
})
</script>

<style scoped>

</style>