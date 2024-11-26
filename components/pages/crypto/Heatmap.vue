<template>
  <div class="mt-12 flex flex-col gap-[21.5px] md:flex-row">
    <div class="w-full md:w-5/12">
      <div class="mb-4 ml-3 text-sm font-semibold md:text-base">
        Store Of Value
      </div>
      <button
        type="button"
        class="centered h-[500px] w-full rounded-[10px] bg-red-500 md:h-[634.69px]"
      >
        <div class="h-[88px] w-[88px]">
          <UIcon
            name="IconBtc"
            dynamic
            filled
            class="rounded-[89px] border border-white"
          />
        </div>
        <div class="mb-5 mt-10 text-center text-7xl font-normal">BTC</div>
        <div class="text-[52.90px] font-semibold">$19,851.31</div>
        <div class="text-[52.90px] font-normal">+10.9%</div>
      </button>
    </div>
    <div class="w-full md:w-7/12">
      <div class="mb-4 ml-3 text-sm font-semibold md:text-base">
        Smart Contracts
      </div>
      <div class="flex w-full gap-[13.41px]">
        <div
          class="centered h-[479.64px] w-[56%] gap-5 rounded-[10px] bg-green-600"
        >
          <div class="h-[53.82px] w-[53.82px]">
            <UIcon
              name="IconEth"
              dynamic
              filled
              class="rounded-[26.91px] border border-white"
            />
          </div>

          <div class="text-[40.37px] font-normal">ETH</div>
          <div class="text-3xl font-semibold">$19,851.31</div>
          <div class="text-3xl font-normal">+10.9%</div>
        </div>
        <div class="w-[44%]">
          <div
            class="centered mb-3 h-[211.91px] w-full gap-1 rounded-[10px] bg-red-500"
          >
            <div class="h-[25.67px] w-[25.67px]">
              <UIcon
                name="IconBnb"
                dynamic
                filled
                class="rounded-[12.83px] border border-white"
              />
            </div>
            <div class="text-xl font-normal">BNB</div>
            <div class="text-sm font-semibold">$19,851.31</div>
            <div class="text-sm font-normal">+10.9%</div>
          </div>
          <div class="w-full">
            <div class="flex gap-3">
              <div
                class="centered h-[144.72px] w-3/4 gap-0.5 rounded-[10px] bg-red-500"
              >
                <div class="h-[25.67px] w-[25.67px]">
                  <UIcon
                    name="IconAda"
                    dynamic
                    filled
                    class="rounded-[12.83px] border border-white"
                  />
                </div>

                <div class="text-center text-xl font-normal">ADA</div>
                <div class="text-sm font-semibold">$19,851.31</div>
                <div class="text-sm font-normal">+10.9%</div>
              </div>
              <div
                class="centered h-[144.72px] w-1/4 rounded-[10px] bg-red-500"
              >
                <img
                  class="h-[14.07px] w-[14.07px] rounded-[7.04px] border border-white"
                  src="assets/images/avax.png"
                />
                <div class="text-center text-[10.56px] font-normal">AVAX</div>
                <div class="text-[7.68px] font-semibold">$19,851.31</div>
                <div class="text-[7.68px] font-normal">+10.9%</div>
              </div>
            </div>
          </div>
          <div class="mt-[10px] flex w-full gap-[7px]">
            <div
              class="centered h-[46.52px] w-1/2 rounded-[10px] bg-green-600 opacity-90"
            >
              <div class="text-center text-[10.56px] font-normal">ETC</div>
              <div class="text-[7.68px] font-semibold">$19,851.31</div>
              <div class="text-[7.68px] font-normal">+10.9%</div>
            </div>
            <div class="centered h-[46.52px] w-1/4 rounded-[10px] bg-red-500">
              <div class="text-center text-[6.83px] font-normal">XLM</div>
              <div class="text-[4.97px] font-semibold">$19,851.31</div>
              <div class="text-[4.97px] font-normal">+10.9%</div>
            </div>
            <div class="centered h-[46.52px] w-1/4 rounded-[10px] bg-red-500">
              <div class="text-center text-[6.83px] font-normal">ALGO</div>
              <div class="text-[4.97px] font-semibold">$19,851.31</div>
              <div class="text-[4.97px] font-normal">+10.9%</div>
            </div>
          </div>
          <div class="mt-[7px] flex w-full gap-[7px]">
            <div
              class="centered h-[46.52px] w-1/2 rounded-[10px] bg-green-600 opacity-90"
            >
              <div class="text-center text-[10.56px] font-normal">Link</div>
              <div class="text-[7.68px] font-semibold">$19,851.31</div>
              <div class="text-[7.68px] font-normal">+10.9%</div>
            </div>
            <div class="centered h-[46.52px] w-1/4 rounded-[10px] bg-red-500">
              <div class="text-center text-[6.83px] font-normal">EOS</div>
              <div class="text-[4.97px] font-semibold">$19,851.31</div>
              <div class="text-[4.97px] font-normal">+10.9%</div>
            </div>
            <div class="centered h-[46.52px] w-1/4 rounded-[10px] bg-red-500">
              <div class="text-center text-[6.83px] font-normal">VET</div>
              <div class="text-[4.97px] font-semibold">$19,851.31</div>
              <div class="text-[4.97px] font-normal">+10.9%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full gap-[9.85px]">
        <div class="w-[42%] md:w-[45.5%]">
          <div class="mb-[11px] mt-[14.5px] text-sm font-semibold md:text-base">
            Defi
          </div>
          <div class="flex gap-1">
            <div class="w-1/2">
              <div
                class="centered mb-[3px] h-[58.92px] w-full rounded-sm bg-green-600"
              >
                <div class="text-[10.56px] font-normal">DAI</div>
                <div class="text-[7.68px] font-normal">+10.9%</div>
                <div class="text-[7.68px] font-semibold">$19,851.31</div>
              </div>
              <div class="centered h-[42.38px] w-full rounded-sm bg-red-500">
                <div class="text-[10.56px] font-normal">WBTC</div>
                <div class="text-[7.68px] font-semibold">$19,851.31</div>
                <div class="text-[7.68px] font-normal">+10.9%</div>
              </div>
            </div>
            <div class="flex w-1/2 gap-1">
              <div class="w-[62%]">
                <div
                  class="centered mb-[3px] h-[58.92px] w-full rounded-sm bg-red-500"
                >
                  <div class="text-[10.56px] font-normal">WBTC</div>
                  <div class="text-[7.68px] font-semibold">$19,851.31</div>
                  <div class="text-[7.68px] font-normal">+10.9%</div>
                </div>
                <div
                  class="centered mb-[3px] h-[19.64px] w-full rounded-sm bg-red-500"
                >
                  <div class="text-[2.15px] font-normal">UNI</div>
                  <div class="text-[1.57px] font-semibold">$19,851.31</div>
                  <div class="text-[1.57px] font-normal">+10.9%</div>
                </div>
                <div class="centered h-[19.64px] w-full rounded-sm bg-red-500">
                  <div class="text-[2.15px] font-normal">UNI</div>
                  <div class="text-[1.57px] font-semibold">$19,851.31</div>
                  <div class="text-[1.57px] font-normal">+10.9%</div>
                </div>
              </div>
              <div class="w-[38%]">
                <div class="mb-[3px] flex w-full gap-[3px]">
                  <div class="w-1/2">
                    <div
                      class="centered h-[58.92px] w-full rounded-sm bg-green-600"
                    >
                      <div class="text-[2.15px] font-normal">UNI</div>
                      <div class="text-[1.57px] font-semibold">$19,851.31</div>
                      <div class="text-[1.57px] font-normal">+10.9%</div>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div
                      class="centered mb-0.5 h-[30px] w-full rounded-sm bg-green-600"
                    >
                      <div class="text-[2.15px] font-normal">UNI</div>
                      <div class="text-[1.57px] font-semibold">$19,851.31</div>
                      <div class="text-[1.57px] font-normal">+10.9%</div>
                    </div>
                    <div class="centered h-[27px] w-full rounded-sm bg-red-500">
                      <div class="text-[2.15px] font-normal">UNI</div>
                      <div class="text-[1.57px] font-semibold">$19,851.31</div>
                      <div class="text-[1.57px] font-normal">+10.9%</div>
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <div
                    class="mb-[3px] h-[19.64px] w-full rounded-sm bg-green-600"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div
                    class="centered h-[19.64px] w-full rounded-sm bg-red-500"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[24.5%]">
          <div class="mb-[11px] mt-[14.5px] text-sm font-semibold md:text-base">
            Exchanges
          </div>
          <div class="flex gap-[2px]">
            <div class="w-[55%]">
              <div
                class="centered mb-[3px] h-[58.92px] w-full rounded-sm bg-red-500"
              >
                <div class="text-[10.56px] font-normal">UNI</div>
                <div class="text-[7.68px] font-semibold">$19,851.31</div>
                <div class="text-[7.68px] font-normal">+10.9%</div>
              </div>
              <div class="centered h-[40.31px] w-full rounded-sm bg-green-600">
                <div class="text-[10.56px] font-normal">UNI</div>
                <div class="text-[7.68px] font-semibold">$19,851.31</div>
                <div class="text-[7.68px] font-normal">+10.9%</div>
              </div>
            </div>
            <div class="w-[45%]">
              <div
                class="centered mb-[3px] h-[48.58px] w-full rounded-sm bg-green-600"
              >
                <div class="text-[10.56px] font-normal">UNI</div>
                <div class="text-[7.68px] font-semibold">$19,851.31</div>
                <div class="text-[7.68px] font-normal">+10.9%</div>
              </div>
              <div class="flex gap-[2px]">
                <div class="w-[55%]">
                  <div
                    class="centered mb-0.5 h-6 w-full rounded-sm bg-green-600"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div class="centered h-6 w-full rounded-sm bg-red-500">
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                </div>
                <div class="w-[45%]">
                  <div
                    class="centered mb-0.5 h-[27px] w-full rounded-sm bg-red-500"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div class="flex gap-[2px]">
                    <div class="w-[65%]">
                      <div
                        class="centered mb-0.5 h-[13px] w-full rounded-sm bg-red-500"
                      >
                        <div class="text-[2.15px] font-normal">UNI</div>
                        <div class="text-[1.57px] font-semibold">
                          $19,851.31
                        </div>
                        <div class="text-[1.57px] font-normal">+10.9%</div>
                      </div>
                      <div
                        class="centered h-[7px] w-full rounded-sm bg-red-500"
                      >
                        <div class="text-[2.15px] font-normal">UNI</div>
                        <div class="text-[1.57px] font-semibold">
                          $19,851.31
                        </div>
                        <div class="text-[1.57px] font-normal">+10.9%</div>
                      </div>
                    </div>
                    <div class="w-[35%]">
                      <div
                        class="centered mb-[1px] h-2.5 w-full rounded-sm bg-red-500"
                      >
                        <div class="text-[2.15px] font-normal">UNI</div>
                        <div class="text-[1.57px] font-semibold">
                          $19,851.31
                        </div>
                        <div class="text-[1.57px] font-normal">+10.9%</div>
                      </div>
                      <div class="centered h-3 w-full rounded-sm bg-red-500">
                        <div class="text-[2.15px] font-normal">UNI</div>
                        <div class="text-[1.57px] font-semibold">
                          $19,851.31
                        </div>
                        <div class="text-[1.57px] font-normal">+10.9%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[17.5%]">
          <div class="mb-[11px] mt-[14.5px] text-sm font-semibold md:text-base">
            Smart C
          </div>
          <div class="flex gap-[2px]">
            <div class="w-[75%]">
              <div class="centered h-[103px] w-full rounded-sm bg-green-600">
                <div class="text-[10.56px] font-normal">UNI</div>
                <div class="text-[7.68px] font-semibold">$19,851.31</div>
                <div class="text-[7.68px] font-normal">+10.9%</div>
              </div>
            </div>
            <div class="w-[25%] gap-[2px]">
              <div
                class="centered mb-0.5 h-[15px] w-full rounded-sm bg-green-600"
              >
                <div class="text-[2.15px] font-normal">UNI</div>
                <div class="text-[1.57px] font-semibold">$19,851.31</div>
                <div class="text-[1.57px] font-normal">+10.9%</div>
              </div>
              <div
                class="centered mb-0.5 h-[20.67px] w-full rounded-sm bg-red-500"
              >
                <div class="text-[2.15px] font-normal">UNI</div>
                <div class="text-[1.57px] font-semibold">$19,851.31</div>
                <div class="text-[1.57px] font-normal">+10.9%</div>
              </div>
              <div class="flex gap-[2px]">
                <div class="w-1/2">
                  <div
                    class="centered mb-0.5 h-3.5 w-full rounded-sm bg-red-500"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div
                    class="centered mb-0.5 h-[22.74px] w-full rounded-sm bg-red-500"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div
                    class="centered mb-0.5 h-[10.34px] w-full rounded-sm bg-red-500"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div class="centered h-2.5 w-full rounded-sm bg-red-500">
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                </div>
                <div class="w-1/2">
                  <div
                    class="centered mb-0.5 h-2.5 w-full rounded-sm bg-green-600"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div class="centered mb-0.5 h-2 w-full rounded-sm bg-red-500">
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div
                    class="centered mb-0.5 h-[10.34px] w-full rounded-sm bg-red-500"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div
                    class="centered mb-0.5 h-[13px] w-full rounded-sm bg-red-500"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div class="centered h-3.5 w-full rounded-sm bg-green-600">
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[16%]">
          <div class="mb-[11px] mt-[14.5px] text-sm font-semibold md:text-base">
            Meme
          </div>
          <div class="flex gap-0.5">
            <div class="w-[47%]">
              <div
                class="centered mb-0.5 h-[42px] w-full rounded-sm bg-red-500"
              >
                <div class="text-[9.63px] font-normal">UNI</div>
                <div class="text-[7.01px] font-semibold">$19,851.31</div>
                <div class="text-[7.01px] font-normal">+10.9%</div>
              </div>
              <div
                class="centered mb-0.5 h-[28px] w-full rounded-sm bg-red-500"
              >
                <div class="text-[2.15px] font-normal">UNI</div>
                <div class="text-[1.57px] font-semibold">$19,851.31</div>
                <div class="text-[1.57px] font-normal">+10.9%</div>
              </div>
              <div class="centered h-[28px] w-full rounded-sm bg-red-500">
                <div class="text-[2.15px] font-normal">UNI</div>
                <div class="text-[1.57px] font-semibold">$19,851.31</div>
                <div class="text-[1.57px] font-normal">+10.9%</div>
              </div>
            </div>
            <div class="w-[53%]">
              <div class="mb-0.5 flex">
                <div
                  class="centered mr-0.5 h-[55.82px] w-1/2 rounded-sm bg-red-500"
                >
                  <div class="text-[2.15px] font-normal">UNI</div>
                  <div class="text-[1.57px] font-semibold">$19,851.31</div>
                  <div class="text-[1.57px] font-normal">+10.9%</div>
                </div>
                <div class="centered h-[55.82px] w-1/2 rounded-sm bg-red-500">
                  <div class="text-[2.15px] font-normal">UNI</div>
                  <div class="text-[1.57px] font-semibold">$19,851.31</div>
                  <div class="text-[1.57px] font-normal">+10.9%</div>
                </div>
              </div>
              <div class="flex gap-[2px]">
                <div class="w-[65%]">
                  <div
                    class="centered mb-0.5 h-[26.88px] w-full rounded-sm bg-red-500"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div
                    class="centered h-[15.51px] w-full rounded-sm bg-green-600"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                </div>
                <div class="w-[35%]">
                  <div
                    class="centered mb-[1px] h-[25.5px] w-full rounded-sm bg-red-500"
                  >
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                  <div class="centered h-[19px] w-full rounded-sm bg-red-500">
                    <div class="text-[2.15px] font-normal">UNI</div>
                    <div class="text-[1.57px] font-semibold">$19,851.31</div>
                    <div class="text-[1.57px] font-normal">+10.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { initTooltips } from 'flowbite'

onMounted(() => {
  initTooltips()
})
</script>
<style scoped>
.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
