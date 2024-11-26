<template>
  <div class="mb-[51px] text-base font-semibold">balance</div>
  <div
    class="flex flex-col items-center justify-around sm:flex-row 2xl:flex-col"
  >
    <div class="flex flex-col items-center">
      <div
        class="relative z-10 flex h-[180px] w-[180px] rotate-[240deg] items-center justify-center rounded-[90px]"
        :style="styleDonutChart"
      >
        <div
          class="z-20 flex h-[148px] w-[148px] -rotate-[240deg] items-center justify-center rounded-[50%] bg-gray-900"
        >
          <div
            class="relative z-30 h-[116px] w-[116px] rounded-[50%] bg-zinc-700/20"
          >
            <div
              class="absolute bottom-0 left-0 right-0 z-40 h-[21px] bg-gray-900"
            ></div>
            <div class="mt-[23px] text-center text-2xl font-semibold">
              $69300
            </div>
            <div class="text-center text-sm font-normal">0.0140 BTC</div>
          </div>
        </div>
        <div
          class="absolute top-0 h-4 w-4 rotate-0 rounded-[50%] bg-[#674AFF]"
        ></div>
        <div class="absolute bottom-0 top-0 w-4 rotate-[79.2deg] rounded-[50%]">
          <div class="absolute top-0 h-4 w-4 rounded-[50%] bg-[#674AFF]"></div>
        </div>
        <div class="absolute bottom-0 top-0 w-4 rotate-[126deg] rounded-[50%]">
          <div class="absolute top-0 h-4 w-4 rounded-[50%] bg-[#02C39A]"></div>
        </div>
        <div class="absolute bottom-0 top-0 w-4 rotate-[180deg] rounded-[50%]">
          <div class="absolute top-0 h-4 w-4 rounded-[50%] bg-[#FFAA35]"></div>
        </div>
        <div class="absolute bottom-0 top-0 w-4 rotate-[240deg] rounded-[50%]">
          <div class="absolute top-0 h-4 w-4 rounded-[50%] bg-[#3D3E52]"></div>
        </div>
      </div>
      <div
        class="mt-[13px] grid w-full grid-cols-2 justify-items-center gap-[25px]"
      >
        <div class="flex">
          <div
            class="relative z-10 flex h-[45px] w-[45px] rotate-[240deg] items-center justify-center rounded-[50%]"
            :style="styleBitcoinChart[0]"
          >
            <div
              class="z-20 flex h-[35px] w-[35px] -rotate-[240deg] items-center justify-center rounded-[50%] bg-gray-900"
            >
              <div class="text-center text-xs font-medium text-neutral-400">
                {{ props.bitcoin[0].value }}%
              </div>
            </div>
            <div
              class="absolute top-0 h-[5px] w-[5px] rotate-0 rounded-[50%] bg-[#FFAA35]"
            ></div>
            <div
              class="absolute bottom-0 top-0 w-[5px] rounded-[50%]"
              :style="styleBitcoinChart[1]"
            >
              <div
                class="absolute top-0 h-[5px] w-[5px] rounded-[50%] bg-[#FFAA35]"
              ></div>
            </div>
          </div>
          <div class="ml-[9px]">
            <div class="text-xs font-normal text-stone-300">Bitcoin</div>
            <div class="text-sm font-medium">$1920</div>
          </div>
        </div>
        <div class="flex">
          <div
            class="relative z-10 flex h-[45px] w-[45px] rotate-[240deg] items-center justify-center rounded-[50%]"
            :style="styleWavesChart[0]"
          >
            <div
              class="z-20 flex h-[35px] w-[35px] -rotate-[240deg] items-center justify-center rounded-[50%] bg-gray-900"
            >
              <div class="text-center text-xs font-medium text-neutral-400">
                {{ props.bitcoin[1].value }}%
              </div>
            </div>
            <div
              class="absolute top-0 h-[5px] w-[5px] rotate-0 rounded-[50%] bg-[#4464EE]"
            ></div>
            <div
              class="absolute bottom-0 top-0 w-[5px] rounded-[50%]"
              :style="styleWavesChart[1]"
            >
              <div
                class="absolute top-0 h-[5px] w-[5px] rounded-[50%] bg-[#4464EE]"
              ></div>
            </div>
          </div>
          <div class="ml-[9px]">
            <div class="text-xs font-normal text-stone-300">Bitcoin</div>
            <div class="text-sm font-medium">$250</div>
          </div>
        </div>
        <div class="flex">
          <div
            class="relative z-10 flex h-[45px] w-[45px] rotate-[240deg] items-center justify-center rounded-[50%]"
            :style="styleAvaxChart[0]"
          >
            <div
              class="z-20 flex h-[35px] w-[35px] -rotate-[240deg] items-center justify-center rounded-[50%] bg-gray-900"
            >
              <div class="text-center text-xs font-medium text-neutral-400">
                {{ props.bitcoin[2].value }}%
              </div>
            </div>
            <div
              class="absolute top-0 h-[5px] w-[5px] rotate-0 rounded-[50%] bg-[#FB774A]"
            ></div>
            <div
              class="absolute bottom-0 top-0 w-[5px] rounded-[50%]"
              :style="styleAvaxChart[1]"
            >
              <div
                class="absolute top-0 h-[5px] w-[5px] rounded-[50%] bg-[#FB774A]"
              ></div>
            </div>
          </div>
          <div class="ml-[9px]">
            <div class="text-xs font-normal text-stone-300">Bitcoin</div>
            <div class="text-sm font-medium">$26</div>
          </div>
        </div>
        <div class="flex">
          <div
            class="relative z-10 flex h-[45px] w-[45px] rotate-[240deg] items-center justify-center rounded-[50%]"
            :style="styleBitcoinChart2[0]"
          >
            <div
              class="z-20 flex h-[35px] w-[35px] -rotate-[240deg] items-center justify-center rounded-[50%] bg-gray-900"
            >
              <div class="text-center text-xs font-medium text-neutral-400">
                {{ props.bitcoin[3].value }}%
              </div>
            </div>
            <div
              class="absolute top-0 h-[5px] w-[5px] rotate-0 rounded-[50%] bg-[#26A17B]"
            ></div>
            <div
              class="absolute bottom-0 top-0 w-[5px] rounded-[50%]"
              :style="styleBitcoinChart2[1]"
            >
              <div
                class="absolute top-0 h-[5px] w-[5px] rounded-[50%] bg-[#26A17B]"
              ></div>
            </div>
          </div>
          <div class="ml-[9px]">
            <div class="text-xs font-normal text-stone-300">Bitcoin</div>
            <div class="text-sm font-medium">$920</div>
          </div>
        </div>
      </div>
      <div id="line" class="mt-[30px] h-px w-[286px]"></div>
      <button class="mt-[9px] flex items-center">
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
    <div class="mt-10 px-[14px] pb-[19px] sm:mt-0 2xl:mt-[60px]">
      <div class="flex w-full justify-between">
        <div class="text-base font-semibold">Quick Exchage</div>
        <div class="flex h-6">
          <UIcon name="IconSettings" class="mr-3" dynamic filled />
          <UIcon name="IconHistory" dynamic filled />
        </div>
      </div>
      <div class="relative z-20 mt-[31px] w-full">
        <div
          class="mb-[11px] h-[101px] w-[258px] rounded-[20px] bg-zinc-900 p-5"
        >
          <div class="flex items-center justify-between">
            <div class="text-[13px] font-normal text-zinc-400">I have :</div>
            <div class="text-right text-xs font-normal">0.12000 BTC</div>
          </div>
          <div class="mt-[10px] flex items-center justify-between">
            <div class="flex items-center gap-[10px]">
              <div class="w-8">
                <UIcon name="IconBtc" dynamic filled />
              </div>
              <div class="text-base font-bold">BTC</div>
              <UIcon name="IconDown" dynamic filled />
            </div>
            <div class="text-right text-lg font-bold">0.01</div>
          </div>
        </div>
        <div class="h-[101px] w-[258px] rounded-[20px] bg-zinc-900 p-5">
          <div class="flex items-center justify-between">
            <div class="text-[13px] font-normal text-zinc-400">I want :</div>
            <div class="text-right text-xs font-normal">12000 USDT</div>
          </div>
          <div class="mt-[10px] flex items-center justify-between">
            <div class="flex items-center gap-[10px]">
              <div class="w-8">
                <UIcon name="IconUsdt" dynamic filled />
              </div>
              <div class="text-base font-bold">USDT</div>
              <UIcon name="IconDown" dynamic filled />
            </div>
            <div class="text-right text-lg font-bold">$403</div>
          </div>
        </div>
        <div
          class="absolute left-[50%] top-[50%] z-50 -ml-8 -mt-8 flex h-16 w-16 items-center justify-center rounded-[50%] bg-gray-900"
        >
          <div class="w-12 rounded-[50%] object-none">
            <UIcon name="IconSwap" dynamic filled />
          </div>
        </div>
      </div>
      <CommonButton :title="'Exchage'" class="mt-[21px] bg-green-600" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const styleDonutChart = ref({
  background: `conic-gradient(
          #674AFF 79.2deg,    
          #02C39A 79.2deg 126deg,   
          #FFAA35 126deg 180deg,   
          #3D3E52 180deg 240deg,  
          rgb(17 24 39) 240deg 360deg
        )`,
})
const props = defineProps({
  bitcoin: {
    type: Array,
    required: true,
  },
})
function calculateDeg(idx) {
  const deg = props.bitcoin[idx].value * 2.4
  return deg
}
const styleBitcoinChart = computed(() => {
  return [
    {
      background: `conic-gradient(  
            #FFAA35 ${calculateDeg(0)}deg,    
            #3D3E52 ${calculateDeg(0)}deg 240deg,  
            rgb(17 24 39) 240deg 360deg
          )`,
    },
    {
      transform: `rotate(${calculateDeg(0)}deg)`,
    },
  ]
})
const styleWavesChart = computed(() => {
  return [
    {
      background: `conic-gradient(  
            #4464EE ${calculateDeg(1)}deg,    
            #3D3E52 ${calculateDeg(1)}deg 240deg,  
            rgb(17 24 39) 240deg 360deg
          )`,
    },
    {
      transform: `rotate(${calculateDeg(1)}deg)`,
    },
  ]
})
const styleAvaxChart = computed(() => {
  return [
    {
      background: `conic-gradient(  
            #FB774A ${calculateDeg(2)}deg,    
            #3D3E52 ${calculateDeg(2)}deg 240deg,  
            rgb(17 24 39) 240deg 360deg
          )`,
    },
    {
      transform: `rotate(${calculateDeg(2)}deg)`,
    },
  ]
})
const styleBitcoinChart2 = computed(() => {
  return [
    {
      background: `conic-gradient(  
            #26A17B ${calculateDeg(3)}deg,    
            #3D3E52 ${calculateDeg(3)}deg 240deg,  
            rgb(17 24 39) 240deg 360deg
          )`,
    },
    {
      transform: `rotate(${calculateDeg(3)}deg)`,
    },
  ]
})
onMounted(() => {})
</script>
<style scoped>
#line {
  background-color: rgba(49, 61, 77, 0.6);
}
</style>
