<template>
  <div class="w-full">
    <div class="flex items-center justify-between">
      <div class="flex items-end">
        <img
          class="h-10 w-10 rounded-[17px] border-2 border-gray-900"
          src="~assets/images/Avatar.png"
        />
        <div class="ml-5">
          <div class="font-['Poppins'] text-base font-semibold">
            Tom Gravesen
          </div>
          <div
            class="font-['Poppins'] text-xs font-normal tracking-tight text-zinc-400"
          >
            Online
          </div>
        </div>
      </div>
      <div class="flex">
        <div
          class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
        >
          <div class="h-6 w-6">
            <UIcon name="IconVideoCall" dynamic filled />
          </div>
        </div>
        <div
          class="mx-3 inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
        >
          <div class="h-6 w-6">
            <UIcon name="IconCall" dynamic filled />
          </div>
        </div>
        <div
          class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
        >
          <div class="h-6 w-6">
            <UIcon name="IconDetail" dynamic filled />
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3 mt-6 h-0.5 w-full bg-zinc-900"></div>
    <div
      class="mx-auto flex h-[46px] w-[90px] items-center justify-center gap-3.5 rounded-[15px] bg-zinc-900 p-2.5"
    >
      <div
        class="font-['Roboto'] text-[10px] font-normal leading-relaxed tracking-tight text-white"
      >
        Today, 8:26 AM
      </div>
    </div>
    <div
      class="mt-11 flex w-fit max-w-[60%] items-center justify-center rounded-bl-[20px] rounded-br-[20px] rounded-tl-md rounded-tr-[20px] bg-zinc-900 p-5"
    >
      <div class="text-sm font-normal leading-normal tracking-tight">
        Hello Linh!
      </div>
    </div>
    <div
      class="mt-2.5 flex w-fit max-w-[60%] items-center justify-center rounded-bl-[20px] rounded-br-[20px] rounded-tl-md rounded-tr-[20px] bg-zinc-900 p-5"
    >
      <div class="text-sm font-normal leading-normal tracking-tight">
        I really love your work great job 👌
      </div>
    </div>
    <div class="ml-5 mt-2.5 text-xs font-normal leading-snug text-zinc-400">
      03:49PM
    </div>
    <div class="flex justify-end">
      <div
        class="mt-2.5 flex w-fit max-w-[60%] items-center justify-center rounded-bl-[20px] rounded-br-md rounded-tl-[20px] rounded-tr-[20px] rounded-tr-[20px] bg-green-600 p-5"
      >
        <div class="text-sm font-normal leading-normal tracking-tight">
          Hello Linh!
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <div
        class="mt-2.5 flex w-fit max-w-[60%] items-center justify-center rounded-bl-[20px] rounded-br-md rounded-tl-[20px] rounded-tr-[20px] rounded-tr-[20px] bg-green-600 p-5"
      >
        <div class="text-sm font-normal leading-normal tracking-tight">
          Thank you, I also love it
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <div class="mr-5 mt-2.5 text-xs font-normal leading-snug text-zinc-400">
        03:49PM
      </div>
    </div>
    <div class="flex justify-end">
      <div
        class="mt-2.5 flex w-fit max-w-[60%] items-center justify-center rounded-bl-[20px] rounded-br-md rounded-tl-[20px] rounded-tr-[20px] rounded-tr-[20px] bg-green-600 p-5"
      >
        <div class="text-sm font-normal leading-normal tracking-tight">
          Ok, thank you so much for the speed
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <div class="mr-5 mt-2.5 text-xs font-normal leading-snug text-zinc-400">
        03:50PM
      </div>
    </div>
    <div class="mb-6 mt-5 h-px w-full bg-zinc-900"></div>
    <div class="flex items-center justify-center">
      <div
        class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconEmotionHappy" dynamic filled />
        </div>
      </div>
      <div
        class="ml-2 inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconPlus" dynamic filled />
        </div>
      </div>
      <div class="mx-4 h-6 w-px bg-white bg-opacity-[12]"></div>
      <input
        type="text"
        class="w-64 border-none bg-gray-900 text-sm font-normal placeholder-slate-500 outline-none"
        placeholder="Type Something ..."
      />
      <div
        class="ml-9 inline-flex h-[46px] w-[46px] items-center justify-start gap-1.5 rounded-2xl bg-green-600 p-[11px] backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconSend2" dynamic filled />
        </div>
      </div>
    </div>
  </div>
</template>
