<template>
  <div class="w-[386px] pl-10 pr-[18px] pt-6">
    <div class="mb-10 flex w-[328px] items-center justify-between">
      <div
        class="text-justify font-['Poppins'] text-base font-semibold text-white"
      >
        Messages
      </div>
      <div
        class="flex h-[45px] w-[45px] items-center justify-center rounded-[14px] bg-zinc-900"
      >
        <div class="h-6 w-6">
          <UIcon name="IconSearch" dynamic filled />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-5">
      <div
        class="flex h-[132px] w-full rounded-[20px] bg-opacity-25 pl-[18px] pr-6 pt-5"
      >
        <img
          class="h-10 w-10 rounded-[17px] border-2 border-gray-900"
          src="~assets/images/Avatar3.png"
        />
        <div class="ml-3 w-fit">
          <div class="flex w-full justify-between">
            <div>
              <div
                class="text-justify font-['Poppins'] text-sm font-semibold tracking-tight text-white"
              >
                Jaroslav Brabe
              </div>
              <div
                class="text-justify font-['Poppins'] text-sm font-normal tracking-tight text-zinc-400"
              >
                Support Admin
              </div>
            </div>
            <div class="flex">
              <div
                class="mr-[9px] h-5 w-5 rounded-md bg-red-500 text-center text-sm font-normal"
              >
                6
              </div>
              <div
                class="mt-2 text-justify text-xs font-normal leading-snug text-zinc-400"
              >
                Now
              </div>
            </div>
          </div>
          <div
            class="mt-2 h-12 text-sm font-normal leading-normal tracking-tight"
          >
            Hey Cak, Could you free now? Can you look and read the brief first…
          </div>
        </div>
      </div>
      <div
        class="flex h-[132px] w-full rounded-[20px] bg-opacity-25 pl-[18px] pr-6 pt-5"
      >
        <img
          class="h-10 w-10 rounded-[17px] border-2 border-gray-900"
          src="~assets/images/Avatar.png"
        />
        <div class="ml-3 w-fit">
          <div class="flex w-full justify-between">
            <div>
              <div
                class="text-justify font-['Poppins'] text-sm font-semibold tracking-tight text-white"
              >
                Tom Gravesen
              </div>
              <div
                class="text-justify font-['Poppins'] text-sm font-normal tracking-tight text-zinc-400"
              >
                Support Admin
              </div>
            </div>
            <div class="flex">
              <div
                v-if="false"
                class="mr-[9px] h-5 w-5 rounded-md bg-red-500 text-center text-sm font-normal"
              >
                6
              </div>
              <div
                class="mt-2 text-justify text-xs font-normal leading-snug text-zinc-400"
              >
                Now
              </div>
            </div>
          </div>
          <div
            class="mt-2 h-12 text-sm font-normal leading-normal tracking-tight"
          >
            Hey Cak, Could you free now? Can you look and read the brief first…
          </div>
        </div>
      </div>
      <div
        class="flex h-[132px] w-full rounded-[20px] bg-opacity-25 pl-[18px] pr-6 pt-5"
      >
        <img
          class="h-10 w-10 rounded-[17px] border-2 border-gray-900"
          src="~assets/images/Avatar5.png"
        />
        <div class="ml-3 w-fit">
          <div class="flex w-full justify-between">
            <div>
              <div
                class="text-justify font-['Poppins'] text-sm font-semibold tracking-tight text-white"
              >
                Jaroslav
              </div>
              <div
                class="text-justify font-['Poppins'] text-sm font-normal tracking-tight text-zinc-400"
              >
                Support Admin
              </div>
            </div>
            <div class="flex">
              <div
                class="mr-[9px] h-5 w-5 rounded-md bg-red-500 text-center text-sm font-normal"
              >
                2
              </div>
              <div
                class="mt-2 text-justify text-xs font-normal leading-snug text-zinc-400"
              >
                Today
              </div>
            </div>
          </div>
          <div
            class="mt-2 h-12 text-sm font-normal leading-normal tracking-tight"
          >
            Hey Cak, Could you free now? Can you look and read the brief first…
          </div>
        </div>
      </div>
      <div
        class="flex h-[132px] w-full rounded-[20px] bg-opacity-25 pl-[18px] pr-6 pt-5"
      >
        <img
          class="h-10 w-10 rounded-[17px] border-2 border-gray-900"
          src="~assets/images/Avatar4.png"
        />
        <div class="ml-3 w-fit">
          <div class="flex w-full justify-between">
            <div>
              <div
                class="text-justify font-['Poppins'] text-sm font-semibold tracking-tight text-white"
              >
                Jaroslav Brabe
              </div>
              <div
                class="text-justify font-['Poppins'] text-sm font-normal tracking-tight text-zinc-400"
              >
                Support Admin
              </div>
            </div>
            <div class="flex">
              <div
                v-if="false"
                class="mr-[9px] h-5 w-5 rounded-md bg-red-500 text-center text-sm font-normal"
              >
                6
              </div>
              <div
                class="mt-2 text-justify text-xs font-normal leading-snug text-zinc-400"
              >
                wed
              </div>
            </div>
          </div>
          <div
            class="mt-2 h-12 text-sm font-normal leading-normal tracking-tight"
          >
            Hey Cak, Could you free now? Can you look and read the brief first…
          </div>
        </div>
      </div>
      <div
        class="flex h-[132px] w-full rounded-[20px] bg-opacity-25 pl-[18px] pr-6 pt-5"
      >
        <img
          class="h-10 w-10 rounded-[17px] border-2 border-gray-900"
          src="~assets/images/avatar.jpg"
        />
        <div class="ml-3 w-fit">
          <div class="flex w-full justify-between">
            <div>
              <div
                class="text-justify font-['Poppins'] text-sm font-semibold tracking-tight text-white"
              >
                Jaroslav Brabe
              </div>
              <div
                class="text-justify font-['Poppins'] text-sm font-normal tracking-tight text-zinc-400"
              >
                Support Admin
              </div>
            </div>
            <div class="flex">
              <div
                v-if="false"
                class="mr-[9px] h-5 w-5 rounded-md bg-red-500 text-center text-sm font-normal"
              >
                6
              </div>
              <div
                class="mt-2 text-justify text-xs font-normal leading-snug text-zinc-400"
              >
                Now
              </div>
            </div>
          </div>
          <div
            class="mt-2 h-12 text-sm font-normal leading-normal tracking-tight"
          >
            Hey Cak, Could you free now? Can you look and read the brief first…
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
