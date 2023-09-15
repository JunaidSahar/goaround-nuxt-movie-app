<template>
  <HomePageHeroBanner />
  <div class="bg-black py-8 space-y-16">
    <!-- <span class="text-white">
      {{ trendingSeries[0] }}
    </span> -->
    <HomePageMovieSliderWrapper
      title="Trending Movies"
      :movies="trendingMovies"
      :isDayTrending="trending"
      :isLoadedData="isLoadedApi"
      @get-value="(trending = !trending), getTrendingMovies()"
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
const trending = ref(false);
const isLoadedApi = ref(true);

function getTrendingMovies() {
  isLoadedApi.value = false;
  const trendingBy = trending.value ? "day" : "week";
  axios
    .get(config.public.API_BASE_URL + `trending/movie/${trendingBy}`, {
      headers: {
        Authorization: "Bearer " + config.public.API_READ_TOKEN,
      },
    })
    .then((response) => {
      console.log(response);
      trendingMovies.value = response.data.results;
      setTimeout(() => {
        isLoadedApi.value = true;
      }, 1000);
    });
}

getTrendingMovies();

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
