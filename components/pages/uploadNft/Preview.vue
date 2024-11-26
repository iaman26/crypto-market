<template>
  <div class="w-[290px]">
    <div class="flex w-[290px] justify-between">
      <div class="font-['Poppins'] text-base font-semibold text-white">
        Preview Item
      </div>
      <UIcon name="i-heroicons-chevron-down" class="h-4 w-4" />
    </div>
    <div class="item mt-[30px] w-[250px]">
      <div class="relative h-[218px] w-[250.57px] rounded-[30px]">
        <div class="h-[218px] w-full rounded-[30px] bg-zinc-900"></div>
        <div
          class="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
        >
          <div class="h-20 w-20">
            <UIcon name="i-ic-outline-cloud-upload" dynamic />
          </div>
        </div>
        <div class="price">
          <div class="ml-1 w-7">
            <UIcon name="IconEth" dynamic filled />
          </div>
          <div
            class="ml-[7px] text-justify font-['Poppins'] text-sm font-normal text-slate-50"
          >
            9.04 ETH
          </div>
        </div>
        <div class="avatar">
          <img class="h-10 w-10" src="~assets/images/AvatarCreator4.png" />
        </div>
      </div>
      <div class="ml-4 flex flex-col flex-wrap">
        <div class="mt-4 inline-flex items-center justify-start gap-[3px]">
          <div
            class="text-center font-['Poppins'] text-sm font-normal text-stone-300"
          >
            OSF Editions
          </div>
          <UIcon
            name="i-material-symbols-verified"
            dynamic
            class="h-[15px] w-[15px] text-green-500"
          />
        </div>
        <div
          class="text-justify font-['Poppins'] text-lg font-semibold text-white"
        >
          Illusions of Space
        </div>
        <div class="mt-8 flex justify-between">
          <div
            class="flex h-[50px] w-[48.72px] items-center justify-center rounded-[20px] border border-gray-700 bg-gray-900"
          >
            <UIcon
              name="i-material-symbols-favorite-outline-rounded"
              dynamic
              class="h-6 w-[23.39px]"
            />
          </div>
          <button
            class="flex h-[50px] w-[170px] items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 font-['Poppins'] text-sm font-normal leading-normal text-white"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.price {
  background-color: rgba(0, 0, 0, 0.38);
  height: 34px;
  width: 107px;
  border-radius: 34px;
  position: absolute;
  bottom: 15px;
  left: 15px;
  display: flex;
  align-items: center;
}

.time {
  background-color: rgba(0, 0, 0, 0.38);
  height: 45px;
  width: 45px;
  border-radius: 15px;
}

.avatar {
  position: absolute;
  bottom: -20px;
  right: 18px;
}
</style>
