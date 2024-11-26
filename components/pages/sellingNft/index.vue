<template>
  <div class="mb-[17px] mt-8 flex items-center justify-between">
    <div class="text-base font-semibold">Top Selling NFTs</div>
    <div
      class="inline-flex h-12 w-12 items-center justify-start gap-1.5 rounded-2xl bg-black bg-opacity-40 p-3 backdrop-blur-[21px]"
    >
      <div class="w-6">
        <UIcon name="IconDetail1" dynamic filled />
      </div>
    </div>
  </div>
  <div class="overflow-x-auto">
    <table class="mt-[18px] w-full text-left rtl:text-right">
      <thead id="boder-line" class="text-xs">
        <tr>
          <th scope="col" class="w-[39px] py-3 font-normal">
            <div class="flex w-max items-center">
              #
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[200px] py-3 font-normal">
            <div class="flex w-max items-center">
              Collections
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[91px] py-3 font-normal">
            <div class="flex w-max items-center">
              Volume
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[107px] py-3 font-normal">
            <div class="flex w-max items-center">
              24h %
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[107px] py-3 font-normal">
            <div class="flex w-max items-center">
              24h %
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[107px] py-3 font-normal">
            <div class="flex w-max items-center">
              7h %
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[114px] py-3 font-normal">
            <div class="flex w-max items-center">
              Floor Price
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="min-w-[127px] py-3 font-normal">
            <div class="flex w-max items-center">
              Owners
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
          <th scope="col" class="w-[75px] py-3 font-normal">
            <div class="flex w-max items-center">
              Items
              <UIcon name="IconSort" dynamic filled class="px-1 py-0.5" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, id) in listCrypto" :key="id">
          <td class="py-4">
            <div class="text-start">{{ id + 1 }}.</div>
          </td>
          <td class="py-4 pr-4">
            <div class="flex items-center">
              <img class="h-10 w-10 rounded-[30px]" :src="item.img" />
              <div class="ml-6 mr-[5px] text-base font-normal">
                {{ item.name }}
              </div>
              <UIcon
                name="i-material-symbols-verified"
                dynamic
                class="ml-[5px] h-[15px] w-[15px] text-green-500"
              />
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-base font-normal">{{ item.volume }}</div>
          </td>
          <td class="py-4 pr-4">
            <div
              :class="
                item.inDay.increase
                  ? 'border-emerald-500/40 text-green-600'
                  : 'border-red-500/[42%] text-red-500'
              "
              class="flex h-[32px] w-[66px] items-center justify-center rounded-xl border text-sm font-normal"
            >
              <div>
                <UIcon
                  v-if="item.inDay.increase"
                  name="IconIncrease"
                  dynamic
                  filled
                />
                <UIcon v-else name="IconReduce" dynamic filled />
              </div>
              {{ item.inDay.value }}%
            </div>
          </td>
          <td class="py-4 pr-4">
            <div
              :class="
                item.inDay.increase
                  ? 'border-emerald-500/40 text-green-600'
                  : 'border-red-500/[42%] text-red-500'
              "
              class="flex h-[32px] w-[66px] items-center justify-center rounded-xl border text-sm font-normal"
            >
              <div>
                <UIcon
                  v-if="item.inDay.increase"
                  name="IconIncrease"
                  dynamic
                  filled
                />
                <UIcon v-else name="IconReduce" dynamic filled />
              </div>
              {{ item.inDay.value }}%
            </div>
          </td>
          <td class="py-4 pr-4">
            <div
              :class="
                item.inWeek.increase
                  ? 'border-emerald-500/40 text-green-600'
                  : 'border-red-500/[42%] text-red-500'
              "
              class="flex h-[32px] w-[66px] items-center justify-center rounded-xl border text-sm font-normal"
            >
              <div>
                <UIcon
                  v-if="item.inWeek.increase"
                  name="IconIncrease"
                  dynamic
                  filled
                />
                <UIcon v-else name="IconReduce" dynamic filled />
              </div>
              {{ item.inWeek.value }}%
            </div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-base font-normal">{{ item.floor }}</div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-base font-normal">{{ item.owners }}</div>
          </td>
          <td class="py-4 pr-4">
            <div class="text-base font-normal">{{ item.item }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <UiPagination />
</template>
<script setup>
const listCrypto = ref([
  {
    img: '/_nuxt/assets/images/nft1.png',
    name: 'Travis Ragsdale',
    volume: '10,450.00',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: false,
      value: 3.36,
    },
    floor: '4,945',
    owners: '4,945',
    item: '10.3k',
  },
  {
    img: '/_nuxt/assets/images/nft2.png',
    name: 'Travis Ragsdale',
    volume: '10,450.00',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: false,
      value: 3.36,
    },
    floor: '4,945',
    owners: '4,945',
    item: '10.3k',
  },
  {
    img: '/_nuxt/assets/images/nft3.png',
    name: 'Travis Ragsdale',
    volume: '10,450.00',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: true,
      value: 3.36,
    },
    floor: '4,945',
    owners: '4,945',
    item: '10.3k',
  },
  {
    img: '/_nuxt/assets/images/nft4.png',
    name: 'Travis Ragsdale',
    volume: '10,450.00',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: false,
      value: 3.36,
    },
    floor: '4,945',
    owners: '4,945',
    item: '10.3k',
  },
  {
    img: '/_nuxt/assets/images/nft5.png',
    name: 'Travis Ragsdale',
    volume: '10,450.00',
    inDay: {
      increase: false,
      value: 3.36,
    },
    inWeek: {
      increase: false,
      value: 3.36,
    },
    floor: '4,945',
    owners: '4,945',
    item: '10.3k',
  },
  {
    img: '/_nuxt/assets/images/nft6.png',
    name: 'Travis Ragsdale',
    volume: '10,450.00',
    inDay: {
      increase: true,
      value: 3.36,
    },
    inWeek: {
      increase: false,
      value: 3.36,
    },
    floor: '4,945',
    owners: '4,945',
    item: '10.3k',
  },
])
</script>
<style scoped>
#boder-line {
  border-bottom: 1px solid rgba(49, 61, 77, 0.6);
}
</style>
