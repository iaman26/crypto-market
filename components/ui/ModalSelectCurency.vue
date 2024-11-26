<template>
  <div
    id="popup-modal"
    tabindex="-1"
    class="fixed left-0 right-0 top-0 z-50 flex h-[1000px] h-full w-full justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-60 md:inset-0"
  >
    <div class="mt-[82px] w-[1021px] rounded-[38px] bg-gray-900 shadow">
      <div class="flex items-center justify-between px-[30px] py-5">
        <div
          class="flex h-[45px] w-[45px] items-center justify-center rounded-[14px] bg-zinc-900"
        >
          <img src="~assets/icons/close3.svg" alt="" />
        </div>
        <div class="mr-5 text-center text-lg font-semibold">
          Select Currency
        </div>
        <div class="h-6 w-6 rotate-90">
          <UIcon name="IconDetail" dynamic filled />
        </div>
      </div>
      <form>
        <div class="relative mx-[34px] mt-14">
          <div class="absolute inset-y-0 left-0 flex items-center pl-5">
            <div class="h-5 w-5">
              <UIcon name="IconSearch" dynamic filled />
            </div>
          </div>
          <input
            id="default-search"
            type="search"
            class="h-[60px] w-full rounded-[20px] border-none bg-zinc-900 pl-[58px] text-base font-normal placeholder-slate-500"
            placeholder="Search"
          />
        </div>
      </form>
      <div class="mb-2.5 ml-[52px] mt-11 text-base font-normal text-zinc-400">
        Popular Currencies
      </div>
      <div class="grid grid-cols-4 gap-1 px-8">
        <div
          class="flex items-center rounded-[20px] bg-stone-300 bg-opacity-10 p-5"
        >
          <img src="~assets/icons/usd.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              United States Dollar
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              USD - $
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/euro.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Euro
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              EUR - €
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/gbp.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Pound Sterling
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              GBP - £
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/btc.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Bitcoin
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">BTC</div>
          </div>
        </div>
      </div>
      <div
        class="mb-2.5 ml-[52px] mt-7 font-['Poppins'] text-base font-normal text-zinc-400"
      >
        Crypto Units
      </div>
      <div class="grid grid-cols-4 gap-1 px-8">
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/btc.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Bits
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">BITS</div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/btc.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Satoshi
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">SATS</div>
          </div>
        </div>
      </div>
      <div
        class="mb-2.5 ml-[52px] mt-7 font-['Poppins'] text-base font-normal text-zinc-400"
      >
        Fiat Currencies
      </div>
      <div class="grid grid-cols-4 gap-1 px-8">
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/usd.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              United States Dollar
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              USD - $
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/euro.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Euro
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              EUR - €
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/gbp.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Pound Sterling
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              GBP - £
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/btc.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Bitcoin
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">BTC</div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/usd.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              United States Dollar
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              USD - $
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/euro.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Euro
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              EUR - €
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/gbp.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Pound Sterling
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              GBP - £
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/btc.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Bitcoin
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">BTC</div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/usd.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              United States Dollar
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              USD - $
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/euro.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Euro
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              EUR - €
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/gbp.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Pound Sterling
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              GBP - £
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/btc.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Bitcoin
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">BTC</div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/usd.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              United States Dollar
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              USD - $
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/euro.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Euro
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              EUR - €
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/gbp.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Pound Sterling
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              GBP - £
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/btc.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Bitcoin
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">BTC</div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/usd.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              United States Dollar
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              USD - $
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/euro.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Euro
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              EUR - €
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/gbp.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Pound Sterling
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">
              GBP - £
            </div>
          </div>
        </div>
        <div class="flex items-center rounded-[20px] p-5">
          <img src="~assets/icons/btc.svg" class="h-6 w-6" alt="" />
          <div class="ml-3">
            <div class="font-['Poppins'] text-base font-semibold text-white">
              Bitcoin
            </div>
            <div class="mt-[6px] text-sm font-normal text-zinc-400">BTC</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  >
</template>
<script setup></script>
