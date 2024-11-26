<template>
  <div class="px-11">
    <div class="flex items-center justify-between">
      <div class="text-base font-semibold">Security</div>
      <div
        class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconDetail" dynamic filled />
        </div>
      </div>
    </div>
  </div>
  <div class="mb-12 mt-7 h-0.5 w-full bg-zinc-900"></div>
  <div class="px-16">
    <div class="mb-[26px] ml-2 text-base font-semibold text-zinc-400">
      Password Management
    </div>
    <div class="mb-[30px] flex items-end justify-between">
      <div class="flex">
        <div class="mr-2.5 w-6">
          <UIcon name="IconLock" dynamic filled />
        </div>
        <div>
          <div class="h-[26px] w-[205px] text-base font-semibold">
            Login 2-Step Verification
          </div>
          <div class="w-[542px] text-sm font-normal text-zinc-400">
            The Login 2step Verification adds an extra layer of security to your
            account.
          </div>
        </div>
      </div>
      <div
        class="w-[100px] rounded-2xl bg-orange-400 py-[9px] text-center text-sm font-normal"
      >
        Enable
      </div>
    </div>
    <div class="mb-[30px] flex items-end justify-between">
      <div class="flex">
        <div class="mr-2.5 w-6">
          <UIcon name="IconMailOpenLine" dynamic filled />
        </div>
        <div>
          <div class="h-[26px] w-[205px] text-base font-semibold">
            Email Setup
          </div>
          <div class="w-[542px] text-sm font-normal text-zinc-400">
            Please enter your email correctly
          </div>
        </div>
      </div>
      <div
        class="w-[100px] rounded-2xl bg-orange-400 py-[9px] text-center text-sm font-normal"
      >
        Enable
      </div>
    </div>
    <div class="flex items-end justify-between">
      <div class="flex">
        <div class="mr-2.5 w-6">
          <UIcon name="IconSmartphone" dynamic filled />
        </div>
        <div>
          <div class="h-[26px] w-[205px] text-base font-semibold">
            SMS Setup
          </div>
          <div class="w-[542px] text-sm font-normal text-zinc-400">
            For your security
          </div>
        </div>
      </div>
      <div
        class="w-[100px] rounded-2xl bg-gray-800 py-[9px] text-center text-sm font-normal"
      >
        Enable
      </div>
    </div>
    <div class="mb-[26px] ml-2 mt-16 text-base font-semibold text-zinc-400">
      Password Management
    </div>
    <div class="mb-[30px] flex items-end justify-between">
      <div class="flex">
        <div class="mr-2.5 w-6">
          <UIcon name="IconGoogle" dynamic filled />
        </div>
        <div>
          <div class="h-[26px] w-[205px] text-base font-semibold">Password</div>
          <div class="w-[542px] text-sm font-normal text-zinc-400">
            When resetting your password, you will be logged out automatically
          </div>
        </div>
      </div>
      <div
        class="w-[100px] rounded-2xl bg-gray-800 py-[9px] text-center text-sm font-normal"
      >
        Change
      </div>
    </div>
    <div class="flex items-end justify-between">
      <div class="flex">
        <div class="mr-2.5 w-6">
          <UIcon name="IconGoogle" dynamic filled />
        </div>
        <div>
          <div class="h-[26px] w-[205px] text-base font-semibold">
            Trade Password
          </div>
          <div class="w-[542px] text-sm font-normal text-zinc-400">
            To protect your assets.
          </div>
        </div>
      </div>
      <div
        class="w-[100px] rounded-2xl bg-orange-400 py-[9px] text-center text-sm font-normal"
      >
        Enable
      </div>
    </div>
  </div>
  <div class="mb-8 mt-12 h-0.5 w-full bg-zinc-900"></div>
  <div class="flex items-center justify-center">
    <div class="flex items-center">
      <div class="w-16">
        <UIcon name="IconDashboard" dynamic filled />
      </div>
      <div class="ml-9">
        <div class="flex">
          <div class="text-base font-normal">Security Level</div>
          <UIcon name="i-ic-round-help-outline" dynamic class="ml-1 h-5 w-5" />
        </div>
        <div class="my-[3px] h-[0px] w-[105px] border border-zinc-400"></div>
        <div class="h-6 w-[108px] text-base font-semibold text-red-500">
          Too Low!
        </div>
      </div>
    </div>
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
</template>
