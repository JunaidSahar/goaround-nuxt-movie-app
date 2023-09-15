<template>
  <NuxtLink
    v-if="movie?.id"
    :to="movie.media_type == 'tv' ? `/tv/${movie?.id}` : `/movie/${movie?.id}`"
  >
    <div
      class="relative h-96 md:w-72 w-full z-50 hover:scale-105 overflow-hidden transition-all"
      @mouseover="isDisplayed = true"
      @mouseleave="isDisplayed = false"
    >
      <img
        :src="
          props.movie?.poster_path
            ? imageConfig.base_url +
              imageConfig.poster_sizes[5] +
              props.movie?.poster_path
            : 'https://valleyvintner.com/Merchant2/graphics/img-not-avail.gif'
        "
        alt="image"
        class="absolute h-full w-full top-0 left-0 z-20 overflow-hidden object-cover"
      />
      <div
        v-if="isDisplayed"
        class="overlay flex p-3 bottom-0 relative z-30 h-full flex-col"
      >
        <div class="h-full w-full z-50 flex flex-col justify-end gap-2">
          <h2 class="text-white text-2xl font-semibold">
            {{ props.movie.name || props.movie.title }}
          </h2>
          <span class="text-white text-sm line-clamp-3">
            {{ props.movie.overview }}
          </span>
          <span class="text-black font-semibold text-base bg-white px-3 rounded-full w-fit">
            <Icon :name="props.movie.media_type == 'movie' ? 'mdi:movie-roll' : 'iconoir:tv'" />
            {{ props.movie.media_type }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
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

const isDisplayed = ref(false);
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
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 1)
  ); /* Adjust the gradient colors and opacity as needed */
  z-index: 25; /* Ensure the overlay is positioned above the image */
}
</style>
