<template>
  <div class="mb-11 mt-20 flex justify-between">
    <div class="text-right font-['Poppins'] text-base font-normal text-white">
      Comments : 18
    </div>
    <div class="flex items-center">
      <div class="flex items-center justify-end filter">
        <UIcon
          name="i-material-symbols-filter-list"
          class="mr-[10px] h-4 w-[17.75px]"
          dynamic
        />
        <div class="mr-11 text-right text-base font-normal text-neutral-400">
          Sort
        </div>
        <UiTag id="main" :title="'All'"></UiTag>
        <UiTag :title="'New'"></UiTag>
        <UiTag :title="'View'"></UiTag>
        <UiTag :title="'Popular'"></UiTag>
      </div>
    </div>
  </div>
  <div class="px-3">
    <div class="flex px-5">
      <img
        class="mr-4 h-10 w-10 rounded-[50px]"
        src="~assets/images/myAvatar.png"
      />
      <div class="text-right font-['Poppins'] text-base font-normal text-white">
        What is your oponion about this event?
      </div>
    </div>
    <input
      placeholder="Write your comments here ..."
      type="text"
      class="mt-6 h-[124px] w-full rounded-2xl border border-zinc-700 bg-gray-900 px-9 pt-6 text-sm placeholder-zinc-400"
    />
    <div
      class="mb-14 ml-5 mt-8 w-fit rounded-2xl bg-green-600 px-8 py-[14px] font-['Vazirmatn'] text-sm font-normal"
    >
      Puplish Review
    </div>
  </div>
  <div class="grid grid-cols-2 gap-[26px]">
    <div class="h-[303px] w-[450px] px-7 py-5">
      <div class="flex items-center justify-between">
        <img
          class="h-[50px] w-[50px] rounded-[49px]"
          src="~assets/images/myAvatar.png"
        />
        <div
          class="w-[142px] text-right font-['Poppins'] text-base font-normal text-white"
        >
          2 days ago
        </div>
      </div>
      <div class="mb-3 mt-5 font-['Poppins'] text-base font-bold text-white">
        Tara S.
      </div>
      <div
        class="h-24 font-['Poppins'] text-base font-normal leading-7 text-zinc-400"
      >
        He is making pressing demands. It's someone from Heartman & Sons. Gary
        Wootten.
      </div>
      <div class="flex items-center justify-between">
        <div class="flex">
          <div
            class="mr-[5px] flex h-[46px] w-[60px] items-center justify-center rounded-bl-[15px] rounded-tl-[15px] bg-black bg-opacity-25"
          >
            <div class="w-[17.65px]">
              <UIcon name="IconDislike" dynamic filled />
            </div>
            <div
              class="mr-2 text-center font-['Poppins'] text-xs font-bold text-neutral-200"
            >
              0
            </div>
          </div>
          <div
            class="flex h-[45.58px] w-[60px] items-center justify-center rounded-br-[15px] rounded-tr-[15px] bg-black bg-opacity-25"
          >
            <div
              class="ml-2 text-center font-['Poppins'] text-xs font-bold text-neutral-200"
            >
              18
            </div>

            <div class="w-[17.65px] -rotate-180">
              <UIcon name="IconDislike" dynamic filled />
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="w-[10.42px] text-right font-['Poppins'] text-lg font-normal text-white"
          >
            5
          </div>
          <div class="ml-[5px] mr-[26px] h-[27.55px] w-[28.71px]">
            <UIcon name="IconChatBox" dynamic filled />
          </div>
          <div
            class="rounded-2xl bg-orange-400 px-[14px] py-2 text-base font-normal"
          >
            Reply
          </div>
        </div>
      </div>
    </div>
    <div class="h-[303px] w-[450px] px-7 py-5">
      <div class="flex items-center justify-between">
        <img
          class="h-[50px] w-[50px] rounded-[49px]"
          src="~assets/images/myAvatar.png"
        />
        <div
          class="w-[142px] text-right font-['Poppins'] text-base font-normal text-white"
        >
          2 days ago
        </div>
      </div>
      <div class="mb-3 mt-5 font-['Poppins'] text-base font-bold text-white">
        Melany W.
      </div>
      <div
        class="h-24 font-['Poppins'] text-base font-normal leading-7 text-zinc-400"
      >
        He is making pressing demands. It's someone from Heartman & Sons. Gary
        Wootten.
      </div>
      <div class="flex items-center justify-between">
        <div class="flex">
          <div
            class="mr-[5px] flex h-[46px] w-[60px] items-center justify-center rounded-bl-[15px] rounded-tl-[15px] bg-black bg-opacity-25"
          >
            <div class="w-[17.65px]">
              <UIcon name="IconDislike" dynamic filled />
            </div>
            <div
              class="mr-2 text-center font-['Poppins'] text-xs font-bold text-neutral-200"
            >
              0
            </div>
          </div>
          <div
            class="flex h-[45.58px] w-[60px] items-center justify-center rounded-br-[15px] rounded-tr-[15px] bg-black bg-opacity-25"
          >
            <div
              class="ml-2 text-center font-['Poppins'] text-xs font-bold text-neutral-200"
            >
              18
            </div>
            <div class="w-[17.65px] -rotate-180">
              <UIcon name="IconDislike" dynamic filled />
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="w-[10.42px] text-right font-['Poppins'] text-lg font-normal text-white"
          >
            5
          </div>
          <div class="ml-[5px] mr-[26px] h-[27.55px] w-[28.71px]">
            <UIcon name="IconChatBox" dynamic filled />
          </div>
          <div
            class="rounded-2xl bg-orange-400 px-[14px] py-2 text-base font-normal"
          >
            Reply
          </div>
        </div>
      </div>
    </div>
    <div class="h-[303px] w-[450px] px-7 py-5">
      <div class="flex items-center justify-between">
        <img
          class="h-[50px] w-[50px] rounded-[49px]"
          src="~assets/images/myAvatar.png"
        />
        <div
          class="w-[142px] text-right font-['Poppins'] text-base font-normal text-white"
        >
          2 days ago
        </div>
      </div>
      <div class="mb-3 mt-5 font-['Poppins'] text-base font-bold text-white">
        Halle Berry
      </div>
      <div
        class="h-24 font-['Poppins'] text-base font-normal leading-7 text-zinc-400"
      >
        In this third installment of the adrenaline fueled action franchise,
        super-assassin
      </div>
      <div class="flex items-center justify-between">
        <div class="flex">
          <div
            class="mr-[5px] flex h-[46px] w-[60px] items-center justify-center rounded-bl-[15px] rounded-tl-[15px] bg-black bg-opacity-25"
          >
            <div class="w-[17.65px]">
              <UIcon name="IconDislike" dynamic filled />
            </div>
            <div
              class="mr-2 text-center font-['Poppins'] text-xs font-bold text-neutral-200"
            >
              0
            </div>
          </div>
          <div
            class="flex h-[45.58px] w-[60px] items-center justify-center rounded-br-[15px] rounded-tr-[15px] bg-black bg-opacity-25"
          >
            <div
              class="ml-2 text-center font-['Poppins'] text-xs font-bold text-neutral-200"
            >
              18
            </div>
            <div class="w-[17.65px] -rotate-180">
              <UIcon name="IconDislike" dynamic filled />
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="w-[10.42px] text-right font-['Poppins'] text-lg font-normal text-white"
          >
            5
          </div>
          <div class="ml-[5px] mr-[26px] h-[27.55px] w-[28.71px]">
            <UIcon name="IconChatBox" dynamic filled />
          </div>
          <div
            class="rounded-2xl bg-orange-400 px-[14px] py-2 text-base font-normal"
          >
            Reply
          </div>
        </div>
      </div>
    </div>
    <div class="h-[303px] w-[450px] px-7 py-5">
      <div class="flex items-center justify-between">
        <img
          class="h-[50px] w-[50px] rounded-[49px]"
          src="~assets/images/myAvatar.png"
        />
        <div
          class="w-[142px] text-right font-['Poppins'] text-base font-normal text-white"
        >
          2 days ago
        </div>
      </div>
      <div class="mb-3 mt-5 font-['Poppins'] text-base font-bold text-white">
        Melany W.
      </div>
      <div
        class="h-24 font-['Poppins'] text-base font-normal leading-7 text-zinc-400"
      >
        He is making pressing demands. It's someone from Heartman & Sons. Gary
        Wootten.
      </div>
      <div class="flex items-center justify-between">
        <div class="flex">
          <div
            class="mr-[5px] flex h-[46px] w-[60px] items-center justify-center rounded-bl-[15px] rounded-tl-[15px] bg-black bg-opacity-25"
          >
            <div class="w-[17.65px]">
              <UIcon name="IconDislike" dynamic filled />
            </div>
            <div
              class="mr-2 text-center font-['Poppins'] text-xs font-bold text-neutral-200"
            >
              0
            </div>
          </div>
          <div
            class="flex h-[45.58px] w-[60px] items-center justify-center rounded-br-[15px] rounded-tr-[15px] bg-black bg-opacity-25"
          >
            <div
              class="ml-2 text-center font-['Poppins'] text-xs font-bold text-neutral-200"
            >
              18
            </div>
            <div class="w-[17.65px] -rotate-180">
              <UIcon name="IconDislike" dynamic filled />
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="w-[10.42px] text-right font-['Poppins'] text-lg font-normal text-white"
          >
            5
          </div>
          <div class="ml-[5px] mr-[26px] h-[27.55px] w-[28.71px]">
            <UIcon name="IconChatBox" dynamic filled />
          </div>
          <div
            class="rounded-2xl bg-orange-400 px-[14px] py-2 text-base font-normal"
          >
            Reply
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
