<template>
  <div class="relative bg-black h-screen">
    <Navbar />
    <div class="-mt-24">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import axios from "axios";
import { useImageConfig } from "@/stores/ImageConfig";
const config = useRuntimeConfig();
const ImagesData = ref();
axios
  .get(config.public.API_BASE_URL + "configuration", {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    ImagesData.value = response.data.images;
    useImageConfig().config = ImagesData.value;
  });
</script>
