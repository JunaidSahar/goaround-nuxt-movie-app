<script setup>
const isOpenModal = ref(false);
</script>

<template>
  <button
    type="button"
    class="flex items-center justify-center px-3 py-1 border rounded-full text-primaryColor"
    @click="isOpenModal = true"
  >
    <Icon name="ic:round-play-arrow" />
    Watch trailer
  </button>

  <div
    v-if="isOpenModal"
    class="w-full h-full fixed top-0 left-0 z-[60] backdrop-brightness-50"
  >
    <div class="max-w-5xl mt-6 mx-auto relative">
      <div class="flex w-full justify-between py-4 px-6 absolute z-20">
        <Icon
          name="gridicons:cross"
          class="cursor-pointer bg-white text-black w-5 h-5"
          @click="isOpenModal = false"
        />
      </div>
      <slot />
    </div>
  </div>
</template>
