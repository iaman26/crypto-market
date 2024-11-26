<template>
  <div class="w-full pr-16">
    <div class="flex items-center justify-between">
      <div class="font-['Poppins'] text-base font-semibold text-white">
        Upload New NFT
      </div>
      <div
        class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconDetail" dynamic filled />
        </div>
      </div>
    </div>
    <div class="mb-7 mt-10 h-px w-full bg-zinc-900"></div>
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
          class="absolute -top-[15px] left-12 bg-gray-900 px-1 py-1 text-sm font-normal text-zinc-400"
        >
          NFT FILE
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
    <input
      class="mt-7 inline-flex h-16 w-full items-start justify-start gap-2 rounded-[25px] bg-zinc-900 py-[21px] pl-[50px] text-sm font-normal leading-normal placeholder-slate-500"
      placeholder="Price (Eth)"
    />
    <input
      class="mt-5 inline-flex h-16 w-full items-start justify-start gap-2 rounded-[25px] bg-zinc-900 py-[21px] pl-[50px] text-sm font-normal leading-normal placeholder-slate-500"
      placeholder="Title"
    />
    <input
      class="mt-5 inline-flex h-16 w-full items-start justify-start gap-2 rounded-[25px] bg-zinc-900 pb-[67px] pl-[50px] pt-[21px] text-sm font-normal leading-normal placeholder-slate-500"
      placeholder="Description"
    />
    <div class="mb-9 mt-12 h-px w-full bg-zinc-900"></div>
    <div class="flex items-center justify-between pb-12">
      <div>
        <div class="font-['Poppins'] text-sm font-normal text-zinc-400">
          NFT Will listef at :
        </div>
        <div class="mt-2 font-['Poppins'] text-base font-normal text-white">
          Tuesday - 2022 30 August
        </div>
      </div>
      <div class="flex">
        <div
          class="mr-5 rounded-[25px] bg-gray-800 px-[28px] py-[18px] text-center font-['Poppins'] text-sm font-normal text-white"
        >
          Cancel
        </div>
        <div
          class="rounded-[25px] bg-green-800 px-[28px] py-[18px] text-center font-['Poppins'] text-sm font-normal text-white"
        >
          Publish
        </div>
      </div>
    </div>
  </div>
</template>
