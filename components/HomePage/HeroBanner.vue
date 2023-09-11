<template>
  <!-- <pre class="text-white py-32">
    {{ imageSizes }}
  </pre> -->
  <div
    class="h-[900px] py-24 w-full flex flex-col items-center justify-end"
    :style="`background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
  url('${
    imageSizes.base_url +
    imageSizes.backdrop_sizes[3] +
    upcomingMovies[randomMovie]?.backdrop_path
  }'); background-position: top;
  background-size: cover; `"
  >
    <div class="container mx-auto space-y-2">
      <span class="text-slate-600 bg-white rounded-full px-4 py-1 font-medium"
        >Rating: {{ upcomingMovies[randomMovie]?.vote_average }}</span
      >
      <h2 class="text-white text-5xl max-w-xl">
        {{ upcomingMovies[randomMovie]?.title }}
      </h2>
      <h2 class="font-normal text-slate-300 max-w-3xl">
        {{ upcomingMovies[randomMovie]?.overview }}
      </h2>
      <div class="flex gap-2 items-center pt-6">
        <p
          class="h-12 w-12 border border-white flex items-center justify-center rounded-full text-white"
        >
          <Icon name="ic:sharp-plus" class="w-7 h-7" />
        </p>
        <span class="text-white">Add to Watch later</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useImageConfig } from "@/stores/ImageConfig";
const upcomingMovies = ref([]);
const imageSizes = useImageConfig().config;
const randomMovie = ref(0);
randomMovie.value = Math.floor(Math.random() * 20);
const config = useRuntimeConfig();
axios
  .get(config.public.API_BASE_URL + "movie/upcoming/", {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    upcomingMovies.value = response.data.results;
  });
</script>

:style="`background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
url('${ imageSizes.base_url + imageSizes.backdrop_sizes[3] +
upcomingMovies[randomMovie]?.backdrop_path }'); background-position: top;
background-size: cover; `"
