<template>
  <div>
    <div class="mt-[60px] px-[14px] pb-[19px]">
      <div class="flex w-full justify-between pb-[42px]">
        <div class="text-base font-semibold">Ethereum Markets</div>
        <div class="w-6">
          <UIcon name="IconEthereumMarkets" dynamic filled />
        </div>
      </div>
      <table class="w-full text-left rtl:text-right">
        <thead id="boder-line" class="text-xs">
          <tr>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                Icon
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                Name
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                Price
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
            <th scope="col" class="py-3 font-normal">
              <div class="flex w-max items-center">
                Volume
                <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-4 pr-4">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-[50%] bg-zinc-900"
              >
                <img
                  class="h-[22px] w-[22px]"
                  src="assets/images/binance.png"
                  alt=""
                />
              </div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-sm font-normal">Binance</div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-xs font-normal text-stone-300">$1,132.40</div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-right text-xs font-normal text-stone-300">
                9.29%
              </div>
            </td>
          </tr>
          <tr>
            <td class="py-4 pr-4">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-[50%] bg-zinc-900"
              >
                <img
                  class="h-[22px] w-[22px]"
                  src="assets/images/kucoin.png"
                  alt=""
                />
              </div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-sm font-normal">kucoin</div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-xs font-normal text-stone-300">$1,132.40</div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-right text-xs font-normal text-stone-300">
                3.81%
              </div>
            </td>
          </tr>
          <tr>
            <td class="py-4 pr-4">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-[50%] bg-zinc-900"
              >
                <img
                  class="h-[22px] w-[22px]"
                  src="assets/images/CoinBase.png"
                  alt=""
                />
              </div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-sm font-normal">CoinBase</div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-xs font-normal text-stone-300">$1,132.40</div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-right text-xs font-normal text-stone-300">
                2.40%
              </div>
            </td>
          </tr>
          <tr>
            <td class="py-4 pr-4">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-[50%] bg-zinc-900"
              >
                <div class="w-[22px]">
                  <UIcon name="IconFtx" dynamic filled />
                </div>
              </div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-sm font-normal">FTX</div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-xs font-normal text-stone-300">$1,132.40</div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-right text-xs font-normal text-stone-300">
                9.29%
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="line" class="mx-[10px] h-px w-full"></div>
    </div>
    <button class="mx-auto mt-[9px] flex items-center">
      <div
        class="mr-[10px] text-center font-['Vazirmatn'] text-base font-normal"
      >
        See All
      </div>
      <div class="w-[14.69px]">
        <UIcon name="IconToleft" dynamic filled />
      </div>
    </button>
  </div>
</template>
