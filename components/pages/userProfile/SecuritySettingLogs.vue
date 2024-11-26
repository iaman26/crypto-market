
<template>
    <div>
        <div class="mx-5 mb-[38px] mt-[93px] flex flex-col items-center justify-between filter xs:flex-row md:mx-[48px]">
            <div class="font-['Poppins'] text-base font-semibold text-white">
                Security setting logs
            </div>
            <div class="mt-[11px] flex xs:mt-0">
                <UiTag title="All" class="px-[14px] py-[7px] text-[10px] font-normal" />
                <UiTag title="1M" class="px-[14px] py-[7px] text-[10px] font-normal" />
                <UiTag title="6M" class="px-[14px] py-[7px] text-[10px] font-normal" />
                <UiTag title="1Y" class="px-[14px] py-[7px] text-[10px] font-normal" />
                <UiTag title="YTD" class="px-[14px] py-[7px] text-[10px] font-normal" />
            </div>
        </div>
        <div class="mt-[38px] px-5 pb-[180px] md:px-[48px]">
            <div class="relative overflow-x-auto sm:rounded-lg">
                <UTable :rows="items" :columns="columns">
                    <template #no-data="{ index }">
                        {{ index + 1 }}
                    </template>
                </UTable>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const columns = [
    {
        key: 'no',
        label: 'No.',
        sortable: true,
    },
    {
        key: 'time',
        label: 'Time',
        sortable: true,
    },
    {
        key: 'ip',
        label: 'Ip',
        sortable: true,
    },
    {
        key: 'action',
        label: 'Action',
        sortable: true,
    },
]

const items = [
    {
        time: '2022/07/19 17:57:59',
        ip: '185.243.*.*',
        action: 'Changed Password'
    },
    {
        time: '2022/07/19 17:57:59',
        ip: '185.243.*.*',
        action: 'Enable authenticator'
    },
    {
        time: '2022/07/19 17:57:59',
        ip: '185.243.*.*',
        action: 'New phone number'
    },
    {
        time: '2022/07/19 17:57:59',
        ip: '185.243.*.*',
        action: 'Reset Password'
    },
    {
        time: '2022/07/19 17:57:59',
        ip: '185.243.*.*',
        action: 'Changed Password'
    },
    {
        time: '2022/07/19 17:57:59',
        ip: '185.243.*.*',
        action: 'Reset Password'
    },
]
</script>

<style scoped></style>