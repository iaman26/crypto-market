<template>
  <div class="mt-5 xl:py-[60px]">
    <div
      class="flex flex-col items-center justify-between sm:flex-row sm:items-start"
    >
      <div class="flex">
        <img
          class="h-[45px] w-[45px]"
          src="assets/images/Etherium-Icon.png"
          alt=""
        />
        <div class="mx-3">
          <div class="mr-[5px] text-lg font-semibold">
            Ethereum Price
            <span class="text-base font-normal text-zinc-400">(ETH)</span>
          </div>
          <div class="flex items-center text-sm font-normal text-zinc-400">
            Rank
            <div
              class="ml-[5px] h-[18px] w-[25px] rounded-[5px] bg-green-600 text-center text-[10px] font-normal"
            >
              #2
            </div>
          </div>
        </div>
        <div class="h-10 w-10">
          <UIcon name="IconStar" dynamic filled />
        </div>
      </div>
      <div class="mt-5 flex sm:mt-0">
        <div class="mr-8 md:mr-16">
          <div class="text-sm font-normal">Ethereum Price (ETH)</div>
          <div class="text-2xl font-bold text-green-600">
            $1,134.86<span class="ml-1 text-xs font-normal">0.05637 BTC</span>
          </div>
        </div>
        <div
          :class="
            true
              ? 'border-emerald-500/40 text-green-600'
              : 'border-red-500/[42%] text-red-500'
          "
          class="flex h-[32px] w-[66px] items-center justify-center rounded-xl border text-sm font-normal"
        >
          <div>
            <UIcon v-if="true" name="IconIncrease" dynamic filled />
            <UIcon v-else name="IconReduce" dynamic filled />
          </div>
          3.36%
        </div>
      </div>
    </div>
    <div class="detail mt-14 flex flex-col justify-between md:flex-row">
      <div class="w-full md:w-1/2">
        <div class="mb-[15px] flex items-center">
          <div class="w-[103px] text-sm font-normal">Website</div>
          <div class="flex items-center">
            <UIcon
              name="i-material-symbols-verified"
              dynamic
              class="h-[15px] w-[15px] text-green-500"
            />
            <div class="mx-[5px] text-base font-normal text-zinc-400">
              ethereum.org
            </div>
            <img src="assets/images/Share.png" class="h-3.5 w-3.5" alt="" />
          </div>
        </div>
        <div class="mb-[15px] flex items-center">
          <div class="w-[103px] text-sm font-normal">Community</div>
          <div class="flex items-center">
            <div class="mr-2 w-4">
              <UIcon name="IconTwitter" dynamic filled />
            </div>
            <div class="mr-[10px] text-sm font-normal">Twitter</div>
            <div class="mr-2 w-4">
              <UIcon name="IconReddit" dynamic filled />
            </div>
            <div class="mr-[10px] text-sm font-normal">Reddit</div>
            <div class="mr-2 w-4">
              <UIcon name="IconTwitch" dynamic filled />
            </div>
            <div class="mr-[10px] text-sm font-normal">Twitch</div>
          </div>
        </div>
        <div class="mb-[15px] flex items-center gap-[5px]">
          <div class="w-[103px] text-sm font-normal">Explorers</div>
          <div class="flex items-center">
            <div
              class="mr-[5px] inline-flex h-[29px] flex-col items-center justify-center gap-1.5 rounded-[10px] border border-zinc-700 px-3.5 py-[7px]"
            >
              <div class="text-[10px] font-normal text-stone-300">Oklink</div>
            </div>
            <div
              class="mr-[5px] inline-flex h-[29px] flex-col items-center justify-center gap-1.5 rounded-[10px] border border-zinc-700 px-3.5 py-[7px]"
            >
              <div class="text-[10px] font-normal text-stone-300">
                Etherscan
              </div>
            </div>
            <div
              class="mr-[5px] inline-flex h-[29px] flex-col items-center justify-center gap-1.5 rounded-[10px] border border-zinc-700 px-3.5 py-[7px]"
            >
              <div class="text-[10px] font-normal text-stone-300">
                Ethplorer
              </div>
            </div>
            <div
              class="mr-[5px] inline-flex h-[29px] flex-col items-center justify-center gap-1.5 rounded-[10px] border border-zinc-700 px-3.5 py-[7px]"
            >
              <div class="text-[10px] font-normal text-stone-300">
                Blockchair
              </div>
            </div>
          </div>
        </div>
        <div class="mb-[15px] flex items-center">
          <div class="w-[103px] text-sm font-normal">Contract</div>
          <div class="flex items-center">
            <div
              class="flex h-7 w-7 items-center justify-center rounded-[10px] bg-zinc-900"
            >
              <img class="h-[22px] w-[22px]" src="assets/images/Shape.png" />
            </div>
            <div class="text-sm font-normal">0x2170d088...bd959933f8</div>
            <div id="line" class="mx-[10px] h-[14px] w-px"></div>
            <div class="w-6">
              <UIcon name="IconCopy" dynamic filled />
            </div>
          </div>
        </div>
      </div>
      <div id="line" class="hidden h-[170px] w-px md:block"></div>
      <div class="hidden md:block">
        <div class="flex items-center text-sm font-normal text-zinc-400">
          Market Cap
          <UIcon name="IconWarning" dynamic filled />
        </div>
        <div class="mt-[5px] text-lg font-semibold">$135.0B</div>
        <div
          class="mt-[30px] flex items-center text-sm font-normal text-zinc-400"
        >
          Volume 24h
          <UIcon name="IconWarning" dynamic filled />
        </div>
        <div class="mt-[5px] text-lg font-semibold">$2.3T</div>
      </div>
      <div id="line" class="hidden h-[170px] w-px md:block"></div>
      <div class="hidden md:block">
        <div class="flex items-center text-sm font-normal text-zinc-400">
          Circulating Supply
          <UIcon name="IconWarning" dynamic filled />
        </div>
        <div class="mt-[5px] text-lg font-semibold">119,572,047</div>
        <div
          class="mt-[30px] flex items-center text-sm font-normal text-zinc-400"
        >
          Total Supply
          <UIcon name="IconWarning" dynamic filled />
        </div>
        <div class="mt-[5px] text-lg font-semibold">119,572,047</div>
      </div>
      <div class="mt-5 flex justify-evenly md:hidden">
        <div>
          <div class="flex items-center text-sm font-normal text-zinc-400">
            Market Cap
            <UIcon name="IconWarning" dynamic filled />
          </div>
          <div class="mt-[5px] text-lg font-semibold">$135.0B</div>
          <div
            class="mt-[30px] flex items-center text-sm font-normal text-zinc-400"
          >
            Volume 24h
            <UIcon name="IconWarning" dynamic filled />
          </div>
          <div class="mt-[5px] text-lg font-semibold">$2.3T</div>
        </div>
        <div id="line" class="h-[170px] w-px"></div>
        <div>
          <div class="flex items-center text-sm font-normal text-zinc-400">
            Circulating Supply
            <UIcon name="IconWarning" dynamic filled />
          </div>
          <div class="mt-[5px] text-lg font-semibold">119,572,047</div>
          <div
            class="mt-[30px] flex items-center text-sm font-normal text-zinc-400"
          >
            Total Supply
            <UIcon name="IconWarning" dynamic filled />
          </div>
          <div class="mt-[5px] text-lg font-semibold">119,572,047</div>
        </div>
      </div>
    </div>
  </div>
</template>
