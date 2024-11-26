<template>
    <ClientOnly>
        <div id="chart">
            <div id="chart-radialBar">
                <apexchart v-if="onViewChart" ref="chart" type="radialBar" :height="props.height"
                    :options="props.options" :series="props.series"></apexchart>
            </div>
        </div>
        <template #fallback>
            <div class="flex h-full w-full items-center justify-center">
                <p>Loading charts...</p>
            </div>
        </template>
    </ClientOnly>
</template>
<script setup lang="ts">
const props = defineProps({
    options: {
        type: Object,
        required: true,
    },
    series: {
        type: Array,
        required: true,
    },
    height: {
        type: Number,
        default: 0,
        required: true,
    },
})
const onViewChart = ref(false)

onMounted(() => {
    setTimeout(() => {
        onViewChart.value = true
    }, 500)
})
</script>