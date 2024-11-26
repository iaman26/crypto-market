<template>
  <div class="mt-[63px] flex">
    <UploadNftContents />
    <UploadNftPreview />
  </div>
</template>
<script setup></script>
<style scoped>
.price {
  background-color: rgba(0, 0, 0, 0.38);
  height: 34px;
  width: 107px;
  border-radius: 34px;
  position: absolute;
  bottom: 15px;
  left: 15px;
  display: flex;
  align-items: center;
}

.time {
  background-color: rgba(0, 0, 0, 0.38);
  height: 45px;
  width: 45px;
  border-radius: 15px;
}

.avatar {
  position: absolute;
  bottom: -20px;
  right: 18px;
}
</style>
