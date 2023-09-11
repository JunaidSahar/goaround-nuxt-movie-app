<template>
  <div
    class="relative h-60 w-full z-50 hover:scale-105 overflow-hidden transition-all"
  >
    <img
      :src="
        imageConfig.base_url +
        imageConfig.poster_sizes[5] +
        props.movie?.poster_path
      "
      alt="image"
      class="absolute h-full w-full top-0 left-0 z-20 overflow-hidden object-cover"
    />
    <div class="overlay p-3 h-full flex justify-end items-end relative z-30">
      <h2 class="text-white text-2xl">{{ props.movie.original_title }}</h2>
    </div>
  </div>
</template>

<script setup>
import { useImageConfig } from "@/stores/ImageConfig";
const imageConfig = useImageConfig().config;
const props = defineProps({
  movie: {
    type: Object,
    default: {},
  },
});
</script>

<style>
/* Custom CSS for the overlay */
.overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ); /* Adjust the gradient colors and opacity as needed */
  z-index: 25; /* Ensure the overlay is positioned above the image */
}
</style>
