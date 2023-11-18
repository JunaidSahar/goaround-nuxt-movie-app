<template>
  <!-- <pre class="text-white py-32">
    {{ imageSizes }}
  </pre> -->
  <div
    v-if="isMovieLoaded"
    class="md:h-[750px] h-[670px] py-24 w-full flex flex-col items-center justify-end"
    :style="`background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
  url('${
    imageSizes.base_url +
    imageSizes.backdrop_sizes[3] +
    upcomingMovies[randomMovie]?.backdrop_path
  }'); background-position: top;
  background-size: cover; `"
  >
    <div class="container mx-auto space-y-4 px-4">
      <span class="text-white bg-transparent font-semibold border-2 border-white rounded-full p-3 md:text-base text-sm"
        >{{ upcomingMovies[randomMovie]?.vote_average }}</span
      >
      <h2 class="text-white md:text-5xl text-4xl max-w-xl">
        {{ upcomingMovies[randomMovie]?.title }}
      </h2>
      <h2 class="font-normal text-slate-300 md:text-base text-sm max-w-3xl">
        {{ upcomingMovies[randomMovie]?.overview }}
      </h2>
      <div class="flex gap-8 items-center pt-6">
        <div class="flex gap-2 items-center">
          <p
            class="md:h-12 md:w-12 w-8 h-8 border border-white flex items-center justify-center rounded-full text-white"
          >
            <Icon name="ic:sharp-plus" class="md:w-7 md:h-7 h-4 w-4" />
          </p>
          <span class="text-white md:text-base text-sm">Add to Watch later</span>
        </div>
        <div class="text-white border md:text-base text-sm rounded-full md:px-5 px-3 md:py-2 py-1">
          <button @click="getRandomMovie">
            Next
            <Icon name="solar:arrow-right-bold" />
          </button>
        </div>
        <!-- <span class="text-white">
          {{ upcomingMovies }}
        </span> -->
      </div>
    </div>
  </div>
  <div class="h-[750px] w-full flex items-center gap-2 justify-center text-white text-lg" v-else>
    <Icon name="svg-spinners:3-dots-bounce" />
    loading...
  </div>
</template>

<script setup>
import axios from "axios";
import { useImageConfig } from "@/stores/ImageConfig";
const upcomingMovies = ref([]);
const imageSizes = useImageConfig().config;
const randomMovie = ref(0);
const isMovieLoaded = ref(false);

function getRandomMovie() {
  randomMovie.value = Math.floor(Math.random() * 20);
  setTimeout(() => {
    isMovieLoaded.value = true;
  }, 2000);
}

getRandomMovie();

const config = useRuntimeConfig();
axios
  .get(config.public.API_BASE_URL + "movie/upcoming", {
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
