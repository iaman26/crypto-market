<template>
  <div class="w-[304px]">
    <div class="ml-10 mr-5 flex w-[243px] items-center justify-between">
      <div
        class="text-justify font-['Poppins'] text-base font-semibold text-white"
      >
        User Info
      </div>
      <div
        class="flex h-[45px] w-[45px] items-center justify-center rounded-[14px] bg-zinc-900"
      >
        <div class="h-6 w-6">
          <UIcon name="IconClose3" dynamic filled />
        </div>
      </div>
    </div>
    <img
      class="mx-auto mt-12 h-[85.88px] w-[85.88px] rounded-[36.50px] border-8 border-gray-900"
      src="~assets/images/Avatar.png"
    />
    <div
      class="mt-3 text-center font-['Poppins'] text-base font-semibold text-white"
    >
      Tom Gravesen
    </div>
    <div
      class="ml-10 mt-0.5 font-['Poppins'] text-sm font-normal tracking-tight text-zinc-400"
    >
      Online
    </div>
    <div class="h-px w-full bg-zinc-900"></div>
    <div class="mt-8 px-8">
      <div class="flex items-center justify-between">
        <div class="font-['Poppins'] text-base font-semibold">Shared Files</div>
        <div
          class="font-['Poppins'] text-xs font-normal leading-snug text-zinc-400"
        >
          view all
        </div>
      </div>
      <div class="mb-7 flex items-center">
        <div class="h-6 w-6">
          <UIcon name="IconVideo" dynamic filled />
        </div>
        <div class="ml-4">
          <div class="text-sm font-normal tracking-tight text-white">
            What’s Bons..
          </div>
          <div class="text-xs font-normal leading-snug text-neutral-400">
            50.3 Mb
          </div>
        </div>
      </div>
      <div class="mb-7 flex items-center">
        <div class="h-6 w-6">
          <UIcon name="IconFille2" dynamic filled />
        </div>
        <div class="ml-4">
          <div class="text-sm font-normal tracking-tight text-white">
            Project Overview next..
          </div>
          <div class="text-xs font-normal leading-snug text-neutral-400">
            146.5 Kb
          </div>
        </div>
      </div>
      <div class="mb-7 flex items-center">
        <div class="h-6 w-6">
          <UIcon name="IconSound" dynamic filled />
        </div>
        <div class="ml-4">
          <div class="text-sm font-normal tracking-tight text-white">
            Testimonial for users..
          </div>
          <div class="text-xs font-normal leading-snug text-neutral-400">
            50.3 Mb
          </div>
        </div>
      </div>
    </div>
    <div class="h-px w-full bg-zinc-900"></div>
    <div class="mt-8 px-8">
      <div class="flex items-center justify-between">
        <div class="font-['Poppins'] text-base font-semibold">
          Shared Images
        </div>
        <div
          class="font-['Poppins'] text-xs font-normal leading-snug text-zinc-400"
        >
          view all
        </div>
      </div>
      <div class="mt-12 grid grid-cols-3 justify-items-center gap-[14px]">
        <img
          src="~assets/images/bg1.png"
          class="h-[73px] w-[73px] rounded-[20px]"
          alt=""
        />
        <img
          src="~assets/images/bg2.png"
          class="h-[73px] w-[73px] rounded-[20px]"
          alt=""
        />
        <img
          src="~assets/images/bg3.png"
          class="h-[73px] w-[73px] rounded-[20px]"
          alt=""
        />
        <img
          src="~assets/images/bg4.png"
          class="h-[73px] w-[73px] rounded-[20px]"
          alt=""
        />
        <img
          src="~assets/images/bg5.png"
          class="h-[73px] w-[73px] rounded-[20px]"
          alt=""
        />
        <img
          src="~assets/images/bg6.png"
          class="h-[73px] w-[73px] rounded-[20px]"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
