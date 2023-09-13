<template>
  <HomePageHeroBanner />
  <div class="bg-black py-8 space-y-16">
    <!-- <span class="text-white">
      {{ trendingSeries[0] }}
    </span> -->
    <HomePageMovieSliderWrapper
      title="Trending Movies"
      :movies="trendingMovies"
    />
    <HomePageMovieSliderWrapper
      title="Trending Tv Shows"
      :movies="trendingSeries"
    />
  </div>
</template>

<script setup>
import axios from "axios";
const config = useRuntimeConfig();
const trendingMovies = ref();
const trendingSeries = ref();

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

axios
  .get(config.public.API_BASE_URL + "trending/tv/day", {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    console.log(response);
    trendingSeries.value = response.data.results;
  });
</script>
