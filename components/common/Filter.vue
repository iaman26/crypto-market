<template>
  <div class="mb-[17px] mt-8 flex items-center justify-between">
    <div class="text-base font-semibold md:mb-4 xl:mb-0">{{ title }}</div>
    <USelect
      v-model="timeSelect"
      :options="optionTime"
      selectClass="h-[50px]  ring-0 w-[200px] justify-between rounded-[20px] border-none bg-zinc-900 text-sm font-normal text-stone-300"
    />
    <div
      class="flex h-[50px] w-[200px] items-center rounded-[20px] bg-zinc-900 text-sm font-normal text-stone-300"
    >
      <div class="mx-6 flex w-full justify-between">
        <div class="text-sm font-normal text-stone-300">Aug 2022</div>
        <div class="w-3"><UIcon name="IconDown" dynamic filled /></div>
      </div>
    </div>
    <form>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-5">
          <div class="h-5 w-5">
            <UIcon name="IconSearch" dynamic filled />
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-[5px]">
          <div
            class="flex h-[42px] w-[42px] items-center justify-center rounded-[15px] bg-orange-400"
          >
            <div class="w-6">
              <UIcon name="IconFilter" dynamic filled />
            </div>
          </div>
        </div>
        <input
          id="default-search"
          type="search"
          class="h-[50px] w-[247px] rounded-[20px] border-none bg-zinc-900 pl-[58px] placeholder-slate-500"
          placeholder="Search"
        />
      </div>
    </form>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
const optionTime = ref([
  {
    label: 'Today',
    value: 1,
  },

  {
    label: 'Yesterday',
    value: 2,
  },

  {
    label: 'Last 7 Days',
    value: 3,
  },

  {
    label: 'Last 30 Days',
    value: 4,
  },

  {
    label: 'This Month',
    value: 5,
  },

  {
    label: 'Last Month',
    value: 6,
  },
])
const timeSelect = ref(4)
</script>
