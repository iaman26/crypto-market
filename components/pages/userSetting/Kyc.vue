<template>
  <div class="px-11">
    <div class="flex items-center justify-between">
      <div class="text-base font-semibold">KYC Verification</div>
      <div
        class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconDetail" dynamic filled />
        </div>
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
          placeholder="ID Number"
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
          placeholder="Full Name on Card"
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
    <div class="mb-9 mt-20 text-base font-normal text-zinc-400">
      Upload ID Card
    </div>
    <div class="grid grid-cols-3 justify-items-center gap-5">
      <div class="flex w-full items-center justify-center">
        <label
          for="dropzone-file"
          class="relative flex h-[213px] w-full cursor-pointer flex-col items-center justify-center rounded-[30px] border border-dashed border-neutral-400 border-opacity-50"
        >
          <div class="flex flex-col items-center justify-center pb-6 pt-5">
            <div class="h-6 w-6">
              <UIcon name="i-ic-outline-cloud-upload" dynamic />
            </div>
            <div
              class="mb-[6px] mt-4 text-center font-['Poppins'] text-base font-normal text-white"
            >
              Drop Your Files Here
            </div>
            <div
              class="mb-6 text-center font-['Poppins'] text-[10px] font-normal text-zinc-400"
            >
              Maximum size of image 1mb
            </div>
            <div
              class="rounded-2xl bg-orange-400 px-6 py-2.5 text-center font-['Poppins'] text-sm font-normal text-white"
            >
              Browse
            </div>
          </div>
          <div
            class="absolute -top-[15px] left-[50%] -ml-[66px] bg-gray-900 px-1 py-1 text-sm font-normal text-zinc-400"
          >
            ID Card Front Side
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>
      <div class="flex w-full items-center justify-center">
        <label
          for="dropzone-file"
          class="relative flex h-[213px] w-full cursor-pointer flex-col items-center justify-center rounded-[30px] border border-dashed border-neutral-400 border-opacity-50"
        >
          <div class="flex flex-col items-center justify-center pb-6 pt-5">
            <div class="h-6 w-6">
              <UIcon name="i-ic-outline-cloud-upload" dynamic />
            </div>
            <div
              class="mb-[6px] mt-4 text-center font-['Poppins'] text-base font-normal text-white"
            >
              Drop Your Files Here
            </div>
            <div
              class="mb-6 text-center font-['Poppins'] text-[10px] font-normal text-zinc-400"
            >
              Maximum size of image 1mb
            </div>
            <div
              class="rounded-2xl bg-orange-400 px-6 py-2.5 text-center font-['Poppins'] text-sm font-normal text-white"
            >
              Browse
            </div>
          </div>
          <div
            class="absolute -top-[15px] left-[50%] -ml-[66px] bg-gray-900 px-1 py-1 text-sm font-normal text-zinc-400"
          >
            ID Card Back Side
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>
      <div class="flex w-full items-center justify-center">
        <label
          for="dropzone-file"
          class="relative flex h-[213px] w-full cursor-pointer flex-col items-center justify-center rounded-[30px] border border-dashed border-neutral-400 border-opacity-50"
        >
          <div class="flex flex-col items-center justify-center pb-6 pt-5">
            <div class="h-6 w-6">
              <UIcon name="i-ic-outline-cloud-upload" dynamic />
            </div>
            <div
              class="mb-[6px] mt-4 text-center font-['Poppins'] text-base font-normal text-white"
            >
              Drop Your Files Here
            </div>
            <div
              class="mb-6 text-center font-['Poppins'] text-[10px] font-normal text-zinc-400"
            >
              please make sure that every detail of<br />
              the ID document is clearly visible.
            </div>
            <div
              class="rounded-2xl bg-orange-400 px-6 py-2.5 text-center font-['Poppins'] text-sm font-normal text-white"
            >
              Browse
            </div>
          </div>
          <div
            class="absolute -top-[15px] left-[50%] -ml-[66px] bg-gray-900 px-1 py-1 text-sm font-normal text-zinc-400"
          >
            Selfie with identity
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
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
