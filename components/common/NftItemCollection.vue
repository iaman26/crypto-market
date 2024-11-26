<template>
  <div class="item mt-[50px] w-[250px]">
    <div class="mb-[26px] flex items-center">
      <img
        :src="collection.avatar"
        class="h-10 w-10 rounded-2xl object-cover"
        alt=""
      />
      <div class="ml-[11px]">
        <div
          class="font-['Poppins'] text-base font-bold tracking-tight text-white"
        >
          {{ collection.name }}
        </div>
        <div class="flex items-center">
          <div
            class="font-['Poppins'] text-sm font-medium tracking-tight text-zinc-400"
          >
            by
          </div>
          <div
            class="mx-[5px] text-justify font-['Poppins'] text-sm font-normal text-white"
          >
            SoulCurry
          </div>
          <UIcon
            name="i-material-symbols-verified"
            dynamic
            class="h-[15px] w-[15px] text-green-500"
          />
        </div>
      </div>
    </div>
    <div class="flex h-[210px] w-[250px] justify-between">
      <img
        class="h-[210px] w-[104px] rounded-[15px] shadow-inner"
        :src="collection.img1"
      />
      <div class="flex flex-col justify-between">
        <div class="flex justify-between">
          <img
            class="h-[61px] w-[61px] rounded-[15px] shadow-inner"
            :src="collection.img2"
          />
          <img
            class="h-[61px] w-[61px] rounded-[15px] shadow-inner"
            :src="collection.img3"
          />
        </div>
        <img
          class="h-[134px] w-[130px] rounded-[15px] shadow-inner"
          :src="collection.img4"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  collection: Object,
})
</script>
<style scoped></style>
