<template>
  <div
    class="h-[750px] py-24 w-full flex flex-col items-center justify-end"
    :style="`background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url('${
      test2.base_url + test2.backdrop_sizes[3] + test[11]?.backdrop_path
    }');
    background-position: center; background-size: cover;
    `"
  >
    <div class="container mx-auto space-y-2">
      <h2 class="font-semibold text-white text-5xl max-w-xl">{{ test[11].title }}</h2>
      <h2 class="font-normal text-slate-200 max-w-3xl text-sm">
        {{ test[11].overview }}
      </h2>
    </div>
    <!-- <p class="text-slate-100"> <pre>{{ test2 }}</pre> </p> -->
  </div>
</template>

<script setup>
import axios from "axios";
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
const test = ref([]);
const test2 = ref([]);
const config = useRuntimeConfig();
axios
  .get(config.public.API_BASE_URL + "movie/upcoming/", {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    test.value = response.data.results;
  });

axios
  .get(config.public.API_BASE_URL + "configuration", {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    test2.value = response.data.images;
  });
</script>

<!-- style="background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)),
      url(${imageBaseUrl})" -->
