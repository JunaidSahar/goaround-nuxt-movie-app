<template>
  <div
    v-if="movie"
    class="h-[950px] py-24 w-full flex flex-col items-center justify-end text-white"
    :style="`background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
    url('${
      imageSizes?.base_url +
      imageSizes?.backdrop_sizes[3] +
      movie?.backdrop_path
    }'); background-position: top;
    background-size: cover; `"
  >
    <div class="h-full flex gap-6 items-end container mx-auto justify-between">
      <div class="max-w-3xl space-y-4">
        <div class="flex items-center font-medium gap-2 text-sm">
          <span
            class="px-5 py-1 border border-white rounded-full"
            v-for="(item, index) in movie?.genres"
            :key="index"
            >{{ item.name }}</span
          >
        </div>
        <h1 class="text-5xl font-semibold">{{ movie?.title }}</h1>
        <p class="text-lg">{{ movie?.overview }}</p>
        <div class="flex gap-2">
          <p class="">Average Rating:</p>
          <span
            class="bg-secondaryColor flex gap-1 w-fit items-center px-3 rounded-full text-black font-semibold"
          >
            <Icon name="mdi:star" />
            {{ movie.vote_average }}
          </span>
        </div>
        <div class="flex gap-2">
          <p class="">Status:</p>
          <span class="">
            {{ movie.status }}
          </span>
        </div>
        <div class="flex gap-2">
          <p class="">Release Date:</p>
          <span class="">
            {{ movie.release_date }}
          </span>
        </div>
        <div class="flex gap-2">
          <p class="">Duration:</p>
          <span class="">
            {{ useConvertNumberToHours(movie.runtime) }}
          </span>
        </div>
        <div class="flex gap-2">
          <p class="">Director(s):</p>
          <span class="" v-for="(item, index) in directors" :key="index">
            {{ item.name }},
          </span>
        </div>
        <div class="flex gap-2">
          <p class="">Writter(s):</p>
          <span class="" v-for="(item, index) in writters" :key="index">
            {{ item.name }},
          </span>
        </div>
        <div class="flex gap-4">
          <MoviesDetailsModal>
            <vue-plyr>
              <div class="plyr__video-embed">
                <iframe
                  :src="`https://www.youtube.com/watch?v=${media?.results?.[0]?.key}`"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
                ></iframe>
              </div>
            </vue-plyr>
          </MoviesDetailsModal>
          <button
            type="button"
            class="flex items-center justify-center px-3 py-1 border rounded-full text-primaryColor"
            @click="isOpenModal = true"
          >
            <Icon name="ic:round-plus" />
            Add to Watch latter
          </button>
        </div>
        <!-- {{ actors }} -->
      </div>
      <div class="mx-auto">
        <img
          :src="
            imageSizes?.base_url +
            imageSizes?.backdrop_sizes[3] +
            movie?.poster_path
          "
          alt=""
          class="w-72 shadow-lg border-2 rounded-lg"
        />
      </div>
    </div>
  </div>
  <div class="flex gap-2 w-full bg-black">
    <MoviesDetailsCastSlider title="Actors" :cast="actors" />
  </div>
  <div class="py-12 bg-black" v-if="media?.results.length">
    <LazyVideosSlider title="Related Videos" :videos="media?.results" />
  </div>
  <div class="py-12 bg-black" v-if="relatedMovies?.length">
    <MovieSliderWrapper title="You May Also Like" :movies="relatedMovies" />
  </div>
</template>

<script setup>
import axios from "axios";
import { useImageConfig } from "@/stores/ImageConfig";
import MovieSliderWrapper from "~/components/HomePage/MovieSliderWrapper.vue";
const imageSizes = useImageConfig().config;

const movie = ref();
const writters = ref();
const route = useRoute();
const config = useRuntimeConfig();
const directors = ref([]);
const media = ref();
const actors = ref();

axios
  .get(config.public.API_BASE_URL + `movie/${route.params.id}`, {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    movie.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get(config.public.API_BASE_URL + `movie/${route.params.id}/videos`, {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    media.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get(config.public.API_BASE_URL + `movie/${route.params.id}/credits`, {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    const crew = response.data.crew;
    const cast = response.data.cast;
    directors.value = crew.filter((e) => e.job === "Director");
    writters.value = crew.filter(
      (e) => e.job === "Writter" || e.job === "Story" || e.job === "Screenplay"
    );
    actors.value = cast.filter((e) => e.known_for_department === "Acting");
  })
  .catch((error) => {
    console.log(error);
  });

const relatedMovies = ref()

axios
  .get(config.public.API_BASE_URL + `movie/${route.params.id}/similar`, {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    relatedMovies.value = response.data.results;
  })
  .catch((error) => {
    console.log(error);
  });
</script>
