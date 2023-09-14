<template>
  <div class="bg-black relative z-0">
    <div class="container mx-auto py-12 px-5 space-y-12">
      <h1 class="text-white font-medium text-2xl">
        Search results for: "{{ route.query.q }}"
      </h1>
      <div class="flex flex-wrap items-center gap-8">
        <div v-for="(result, index) in searchResults" :key="index">
          <HomePageMovieCard :movie="result" />
        </div>
      </div>
      <!-- <div class="text-white">{{ searchResults }}</div> -->
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const config = useRuntimeConfig();
const route = useRoute();
const searchResults = ref();
axios
  .get(config.public.API_BASE_URL + `search/multi?query=${route.query.q}`, {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    searchResults.value = response.data.results;
  });
</script>
