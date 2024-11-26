<template>
  <div class="px-11">
    <div class="flex items-center justify-between">
      <div class="text-base font-semibold">My Profile</div>
      <div
        class="flex h-[45px] w-[90px] items-center justify-center rounded-[14px] bg-zinc-900 py-[3px]"
      >
        <div class="w-5">
          <UIcon name="IconEdit" dynamic filled />
        </div>
        <div class="ml-2.5 text-base font-normal">Edit</div>
      </div>
    </div>
  </div>
  <div class="mb-12 mt-7 h-0.5 w-full origin-top-left bg-zinc-900"></div>
  <div class="px-9">
    <div class="mb-[30px] ml-7 text-base font-normal text-zinc-400">
      Personal Imformations
    </div>
    <div class="grid grid-cols-2 justify-items-center gap-5">
      <div
        class="flex h-16 w-full items-center rounded-[25px] bg-zinc-900 px-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconName" dynamic filled />
        </div>
        <div class="ml-[13px] mr-[19px] h-[13px] w-px bg-slate-300"></div>
        <input
          type="name"
          class="w-[90%] bg-zinc-900 text-sm font-normal placeholder-slate-500 outline-none"
          placeholder="Fisrt Name"
        />
      </div>
      <div
        class="flex h-16 w-full items-center rounded-[25px] bg-zinc-900 px-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconLastName" dynamic filled />
        </div>
        <div class="ml-[13px] mr-[19px] h-[13px] w-px bg-slate-300"></div>
        <input
          type="name"
          class="w-[90%] bg-zinc-900 text-sm font-normal placeholder-slate-500 outline-none"
          placeholder="Last Name"
        />
      </div>
      <div
        class="flex h-16 w-full items-center rounded-[25px] bg-zinc-900 px-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconEyeLine" dynamic filled />
        </div>
        <div class="ml-[13px] mr-[19px] h-[13px] w-px bg-slate-300"></div>
        <input
          type="name"
          class="w-[90%] bg-zinc-900 text-sm font-normal placeholder-slate-500 outline-none"
          placeholder="Display Name"
        />
      </div>
      <div
        class="flex h-16 w-full items-center rounded-[25px] bg-zinc-900 px-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconUserName" dynamic filled />
        </div>
        <div class="ml-[13px] mr-[19px] h-[13px] w-px bg-slate-300"></div>
        <input
          type="name"
          class="w-[90%] bg-zinc-900 text-sm font-normal placeholder-slate-500 outline-none"
          placeholder="User Name"
        />
      </div>
    </div>
    <div class="mb-[30px] ml-7 mt-16 text-base font-normal text-zinc-400">
      Contact Info
    </div>
    <div class="grid grid-cols-2 justify-items-center gap-5">
      <div
        class="flex h-16 w-full items-center rounded-[25px] bg-zinc-900 px-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconMailOpenLine" dynamic filled />
        </div>
        <div class="ml-[13px] mr-[19px] h-[13px] w-px bg-slate-300"></div>
        <input
          type="name"
          class="w-[90%] bg-zinc-900 text-sm font-normal placeholder-slate-500 outline-none"
          placeholder="Email Address"
        />
      </div>
      <div
        class="flex h-16 w-full items-center rounded-[25px] bg-zinc-900 px-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconUserName" dynamic filled />
        </div>
        <div class="ml-[13px] mr-[19px] h-[13px] w-px bg-slate-300"></div>
        <input
          type="name"
          class="w-[90%] bg-zinc-900 text-sm font-normal placeholder-slate-500 outline-none"
          placeholder="Currency"
        />
      </div>
      <div
        class="flex h-16 w-full items-center rounded-[25px] bg-zinc-900 px-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconMapPinLine" dynamic filled />
        </div>
        <div class="ml-[13px] mr-[19px] h-[13px] w-px bg-slate-300"></div>
        <input
          type="name"
          class="w-[90%] bg-zinc-900 text-sm font-normal placeholder-slate-500 outline-none"
          placeholder="Location"
        />
      </div>
      <div
        class="flex h-16 w-full items-center rounded-[25px] bg-zinc-900 px-[18px]"
      >
        <div class="flex h-11 rounded-[17px] bg-gray-900 py-2.5">
          <div class="ml-[11px] w-6">
            <UIcon name="IconJokkmokk" dynamic filled />
          </div>
          <div class="mx-1 text-base font-normal">+46</div>
          <UIcon name="i-heroicons-chevron-down" class="mr-[6px] h-6 w-6" />
        </div>
        <div class="ml-[13px] mr-[19px] h-[13px] w-px bg-slate-300"></div>
        <input
          type="name"
          class="w-[70%] bg-zinc-900 text-sm font-normal placeholder-slate-500 outline-none"
          placeholder="Phone Number"
        />
      </div>
    </div>
  </div>
  <div class="mb-8 mt-12 h-0.5 w-full bg-zinc-900"></div>
  <div class="flex items-center justify-between pl-11 pr-14">
    <div>
      <div class="text-sm font-normal text-zinc-400">Account Created at :</div>
      <div class="mt-[7px] text-base font-normal">Tuesday - 2022 30 August</div>
    </div>
    <div class="flex">
      <div
        class="ml-16 mr-5 w-[180px] rounded-[25px] bg-gray-800 py-4 text-center text-sm font-normal"
      >
        Cancel
      </div>
      <div
        class="w-[180px] rounded-[25px] bg-green-600 py-4 text-center text-sm font-normal"
      >
        Save Changes
      </div>
    </div>
  </div>
</template>
