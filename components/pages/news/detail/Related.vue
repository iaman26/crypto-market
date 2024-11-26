<template>
  <div class="flex w-full items-center justify-between px-5">
    <div class="font-['Poppins'] text-base font-semibold text-white">
      Related News
    </div>
    <div class="flex">
      <div
        class="flex h-[45px] w-[45px] items-center justify-center rounded-[14px] bg-zinc-900"
      >
        <div class="h-6">
          <UIcon name="IconLeft" dynamic filled />
        </div>
      </div>
      <div
        class="ml-2 flex h-[45px] w-[45px] -rotate-180 items-center justify-center rounded-[14px] bg-zinc-900"
      >
        <div class="h-6">
          <UIcon name="IconLeft" dynamic filled />
        </div>
      </div>
    </div>
  </div>
  <div class="item mx-[15px] mt-10 w-64">
    <div class="mx-1 flex items-center justify-between">
      <div class="flex items-center">
        <img
          class="h-8 w-8 rounded-[13px] border-gray-900"
          src="assets/images/Avatar.png"
        />
        <div class="mx-[10px] text-justify text-sm font-normal">SoulCurry</div>
        <div class="w-4">
          <UIcon name="IconVerification" dynamic filled />
        </div>
      </div>
      <div class="flex items-center">
        <div class="mr-1 w-4">
          <UIcon name="IconTime" dynamic filled />
        </div>
        <div class="text-sm font-medium">7m ago</div>
      </div>
    </div>
    <div class="relative my-[13px] h-[163px] w-full">
      <img
        class="absolute rounded-[23px]"
        src="assets/images/detail-news-1.png"
      />
      <div
        class="price absolute bottom-[7px] left-2 flex h-[34px] w-[119px] items-center"
      >
        <img
          src="assets/images/Etherium-Icon.png"
          class="ml-[4.5px] mr-[7.5px] h-[27px] w-[27px]"
          alt=""
        />
        <div class="w-[68px] text-justify text-sm font-normal text-slate-50">
          Ethereum
        </div>
      </div>
    </div>
    <div class="mx-1 mb-[38px] w-full text-base font-medium">
      How will NFTs bridge traditional gaming with blockchain?
    </div>
    <div class="mt-8 flex justify-between">
      <div
        class="flex h-[50px] w-[48.72px] items-center justify-center rounded-[20px] border border-gray-700 bg-gray-900 p-3"
      >
        <UIcon name="i-material-symbols-favorite-outline-rounded" dynamic />
      </div>
      <button
        class="relative flex h-[51px] w-[170px] items-center justify-between rounded-[20px] bg-green-600 pl-[27px] pr-2"
      >
        <div class="text-center font-['Vazirmatn'] text-base font-bold">
          Read More
        </div>
        <div
          class="flex h-[36px] w-[36px] items-center justify-center rounded-xl bg-white bg-opacity-20"
        >
          <div class="w-[14.69px]">
            <UIcon name="IconToleft" dynamic filled />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
