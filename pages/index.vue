<template>
  <HomePageHeroBanner />
  <div class="bg-black py-8">
    <!-- <span class="text-white">
      {{ trendingMovies }}
    </span> -->
    <HomePageMovieSliderWrapper
      title="Trending Movies"
      :movies="trendingMovies"
    />
  </div>
</template>

<script setup>
import axios from "axios";
import { useImageConfig } from "~/stores/ImageConfig";
const config = useRuntimeConfig();
const trendingMovies = ref();
axios
  .get(config.public.API_BASE_URL + "trending/movie/day", {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    console.log(response);
    trendingMovies.value = response.data.results;
  });
</script>
