<template>
  <div class="px-11">
    <div class="flex items-center justify-between">
      <div class="text-base font-semibold">Payment Option</div>
      <div
        class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
      >
        <div class="h-6 w-6">
          <UIcon name="IconDetail" dynamic filled />
        </div>
      </div>
    </div>
  </div>
  <div class="mb-10 mt-9 h-0.5 w-full bg-zinc-900"></div>
  <div class="px-9">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="mr-2.5 w-6">
          <UIcon name="IconBankLine" dynamic filled />
        </div>
        <div class="font-['Poppins'] text-base font-normal text-zinc-400">
          Bank Account
        </div>
      </div>
      <div
        class="flex h-[45px] w-[90px] items-center justify-center rounded-[14px] bg-zinc-900 py-[3px]"
      >
        <div class="w-5">
          <UIcon name="IconAdd" dynamic filled />
        </div>
        <div class="ml-2.5 text-base font-normal">Add</div>
      </div>
    </div>
    <div class="mt-11 flex justify-between">
      <div
        class="relative h-[169px] w-[289.32px] rounded-[30px] bg-gradient-to-b from-zinc-900 to-gray-900"
      >
        <img src="~assets/images/bg-card1.png" alt="" />
        <div
          class="absolute left-[212px] top-[134px] h-3 w-[50px] text-right font-['Poppins'] text-sm font-normal tracking-wide text-white"
        >
          09/25
        </div>
        <div
          class="absolute left-[28px] top-[134px] h-3 w-[166px] font-['Poppins'] text-sm font-normal tracking-wide text-white opacity-90"
        >
          5282 3456 7890 1289
        </div>
        <div
          class="absolute left-[220.43px] top-[22.96px] h-[25.54px] w-[41.33px]"
        >
          <div class="absolute left-0 top-0 h-[25.54px] w-[41.33px]"></div>
        </div>
        <div
          class="absolute left-[27.55px] top-[47.76px] h-[23.88px] w-[133.18px] font-['Poppins'] text-[28px] font-normal text-white"
        >
          $5,750,20
        </div>
        <div
          class="absolute left-[27.55px] top-[27.55px] h-[11.94px] w-[115.73px] font-['Poppins'] text-sm font-normal text-white opacity-50"
        >
          Current Balance
        </div>
        <img
          :src="'/_nuxt/assets/icons/mastercard_logo.svg'"
          class="absolute right-7 top-[23px] h-[25.54px] w-[41.33px]"
          alt=""
        />
      </div>
      <div
        class="relative h-[169px] w-[133.18px] rounded-[30px] bg-gradient-to-b from-pink-600 to-red-500"
      >
        <img
          :src="'/_nuxt/assets/icons/bg-card2.svg'"
          class="h-[169px] w-[133.18px]"
          alt=""
        />
        <div class="absolute left-0 right-0 top-0 px-[15.5px] pt-[19px]">
          <img
            :src="'/_nuxt/assets/icons/mastercard_logo.svg'"
            class="h-[25.54px] w-[41.33px]"
            alt=""
          />
          <div
            class="font-['Cera Pro'] mt-8 text-xs font-medium text-white opacity-50"
          >
            Credit Card
          </div>
          <div class="flex items-center">
            <div
              class="mr-[5.5px] h-[3.67px] w-[3.67px] rounded-full bg-white"
            ></div>
            <div
              class="mr-[5.5px] h-[3.67px] w-[3.67px] rounded-full bg-white"
            ></div>
            <div
              class="mr-[5.5px] h-[3.67px] w-[3.67px] rounded-full bg-white"
            ></div>
            <div class="mr-3 h-[3.67px] w-[3.67px] rounded-full bg-white"></div>
            <div
              class="font-['Cera Pro'] text-[13px] font-medium leading-[21.15px]"
            >
              2468
            </div>
          </div>
          <div
            class="font-['Cera Pro'] mt-4 text-right text-[11px] font-medium leading-[17.90px]"
          >
            12/24
          </div>
        </div>
      </div>
      <div
        class="relative h-[169px] w-[133.18px] rounded-[30px] bg-gradient-to-b from-purple-600 to-indigo-600"
      >
        <img
          :src="'/_nuxt/assets/icons/bg-card2.svg'"
          class="h-[169px] w-[133.18px]"
          alt=""
        />
        <div class="absolute left-0 right-0 top-0 px-[15.5px] pt-[19px]">
          <img
            :src="'/_nuxt/assets/icons/mastercard_logo.svg'"
            class="h-[25.54px] w-[41.33px]"
            alt=""
          />
          <div
            class="font-['Cera Pro'] mt-8 text-xs font-medium text-white opacity-50"
          >
            Credit Card
          </div>
          <div class="flex items-center">
            <div
              class="mr-[5.5px] h-[3.67px] w-[3.67px] rounded-full bg-white"
            ></div>
            <div
              class="mr-[5.5px] h-[3.67px] w-[3.67px] rounded-full bg-white"
            ></div>
            <div
              class="mr-[5.5px] h-[3.67px] w-[3.67px] rounded-full bg-white"
            ></div>
            <div class="mr-3 h-[3.67px] w-[3.67px] rounded-full bg-white"></div>
            <div
              class="font-['Cera Pro'] text-[13px] font-medium leading-[21.15px]"
            >
              1289
            </div>
          </div>
          <div
            class="font-['Cera Pro'] mt-4 text-right text-[11px] font-medium leading-[17.90px]"
          >
            09/25
          </div>
        </div>
      </div>
      <div
        class="relative h-[169px] w-[133.18px] rounded-[30px] bg-gradient-to-b from-emerald-500 to-yellow-300"
      >
        <img
          :src="'/_nuxt/assets/icons/bg-card2.svg'"
          class="h-[169px] w-[133.18px]"
          alt=""
        />
        <div class="absolute left-0 right-0 top-0 px-[15.5px] pt-[19px]">
          <img
            :src="'/_nuxt/assets/icons/mastercard_logo.svg'"
            class="h-[25.54px] w-[41.33px]"
            alt=""
          />
          <div
            class="font-['Cera Pro'] mt-8 text-xs font-medium text-white opacity-50"
          >
            Credit Card
          </div>
          <div class="flex items-center">
            <div
              class="mr-[5.5px] h-[3.67px] w-[3.67px] rounded-full bg-white"
            ></div>
            <div
              class="mr-[5.5px] h-[3.67px] w-[3.67px] rounded-full bg-white"
            ></div>
            <div
              class="mr-[5.5px] h-[3.67px] w-[3.67px] rounded-full bg-white"
            ></div>
            <div class="mr-3 h-[3.67px] w-[3.67px] rounded-full bg-white"></div>
            <div
              class="font-['Cera Pro'] text-[13px] font-medium leading-[21.15px]"
            >
              2468
            </div>
          </div>
          <div
            class="font-['Cera Pro'] mt-4 text-right text-[11px] font-medium leading-[17.90px]"
          >
            12/24
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="inline-flex h-[60px] w-[60px] items-start justify-start gap-2.5 rounded-[22px] bg-green-600 p-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconShieldKeyholeLine" dynamic filled />
        </div>
      </div>
      <div
        class="ml-5 flex w-full items-center justify-between border-b border-gray-700 py-7"
      >
        <div>
          <div class="text-base font-semibold">UPI Payment</div>
          <div class="text-sm font-normal text-zinc-400">
            nified Payments Interface
          </div>
        </div>
        <div
          class="flex h-[45px] w-[90px] items-center justify-center rounded-[14px] bg-zinc-900 py-[3px]"
        >
          <div class="w-5">
            <UIcon name="IconAdd" dynamic filled />
          </div>
          <div class="ml-2.5 text-base font-normal">Add</div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="inline-flex h-[60px] w-[60px] items-start justify-start gap-2.5 rounded-[22px] bg-orange-400 p-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconChat1Line" dynamic filled />
        </div>
      </div>
      <div
        class="ml-5 flex w-full items-center justify-between border-b border-gray-700 py-7"
      >
        <div>
          <div class="text-base font-semibold">Creadit & Debit Card</div>
          <div class="text-sm font-normal text-zinc-400">
            purchases using a line of credit.
          </div>
        </div>
        <div
          class="flex h-[45px] w-[90px] items-center justify-center rounded-[14px] bg-zinc-900 py-[3px]"
        >
          <div class="w-5">
            <UIcon name="IconAdd" dynamic filled />
          </div>
          <div class="ml-2.5 text-base font-normal">Add</div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="inline-flex h-[60px] w-[60px] items-start justify-start gap-2.5 rounded-[22px] bg-red-500 p-[18px]"
      >
        <div class="w-6">
          <UIcon name="IconPriceAlert" dynamic filled />
        </div>
      </div>
      <div
        class="ml-5 flex w-full items-center justify-between border-b border-gray-700 py-7"
      >
        <div>
          <div class="text-base font-semibold">Other payment methods</div>
          <div class="text-sm font-normal text-zinc-400">Profile Settings</div>
        </div>
        <div
          class="flex h-[45px] w-[90px] items-center justify-center rounded-[14px] bg-zinc-900 py-[3px]"
        >
          <div class="w-5">
            <UIcon name="IconAdd" dynamic filled />
          </div>
          <div class="ml-2.5 text-base font-normal">Add</div>
        </div>
      </div>
    </div>
    <div class="h-0.5 w-full bg-zinc-900"></div>
    <div class="mt-9 flex items-center justify-end">
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
