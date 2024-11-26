<template>
  <div class="mt-28 flex flex-col items-center justify-between pb-12 sm:flex-row sm:items-start">
    <div class="index-page flex">
      <div
        class="mr-[10px] flex h-[50px] w-[50px] items-center justify-center rounded-[20px] border border-gray-700 bg-gray-900 text-right text-base font-normal">
        1
      </div>
      <div
        class="mr-[10px] flex h-[50px] w-[50px] items-center justify-center rounded-[20px] border border-gray-700 bg-gradient-to-tr from-emerald-400 to-teal-400 text-right text-base font-normal">
        2
      </div>
      <div
        class="mr-[10px] flex h-[50px] w-[50px] items-center justify-center rounded-[20px] border border-gray-700 bg-gray-900 text-right text-base font-normal">
        3
      </div>
      <div
        class="mr-[10px] flex h-[50px] w-[50px] items-center justify-center rounded-[20px] border border-gray-700 bg-gray-900 text-right text-base font-normal">
        ...
      </div>
      <div
        class="mr-[10px] flex h-[50px] w-[50px] items-center justify-center rounded-[20px] border border-gray-700 bg-gray-900 text-right text-base font-normal">
        4
      </div>
    </div>
    <div class="flex h-[45px] w-[149px] origin-top-left rounded-[15px] items-center">
      <div class="mr-[5px] h-6 w-6">
        <UIcon name="i-circum-square-more" dynamic />
      </div>
      <div class="text-center text-base font-normal text-neutral-200 flex-1">
        Load More
      </div>
    </div>
    <div class="total flex self-center items-center justify-end text-base font-semibold h-full">
      <div class="mr-2 h-6 w-6">
        <UIcon name="i-pepicons-pencil-arrows-spin" dynamic />
      </div>
      474<span class="ml-3 text-sm font-normal text-zinc-400">Item</span>
    </div>
  </div>
</template>
