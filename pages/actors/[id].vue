<template>
  <div class="bg-black h-full" v-if="actor">
    <div class="flex gap-6 container mx-auto justify-between py-12">
      <img
        :src="
          actor?.profile_path
            ? imageSizes?.base_url +
              imageSizes?.profile_sizes[2] +
              actor?.profile_path
            : 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png'
        "
        alt="actors"
        class="w-96 h-96 object-cover"
      />
      <div class="w-full text-white h-full flex flex-col justify-between">
        <div class="space-y-1 pb-10">
          <h1 class="font-semibold text-3xl mb-5">{{ actor.name }}</h1>
          <p class="text-lg font-medium">Biography</p>
          <p>{{ actor.biography }}</p>
        </div>
        <!-- <p>{{ actorMovies }}</p> -->
      </div>
    </div>
    <div class="container mx-auto space-y-4">
      <h3 class="text-white text-xl font-medium">Personal Information</h3>
      <div class="flex gap-6 py-4 border-y justify-around">
        <p class="text-slate-400">
          Known For:
          <span class="font-medium text-white">{{
            actor.known_for_department
          }}</span>
        </p>
        <p class="text-slate-400">
          Date of birth:
          <span class="font-medium text-white"
            >{{ actor.birthday }}, ({{ getYearFromDate(actor.birthday) }} Years
            old)</span
          >
        </p>
        <p class="text-slate-400">
          Place of Birth:
          <span class="font-medium text-white">{{ actor.place_of_birth }}</span>
        </p>
        <p class="text-slate-400">
          Gender:
          <span class="font-medium text-white">{{
            actor.gender == 2 ? "Male" : "Female"
          }}</span>
        </p>
        <p class="text-slate-400">
          Popularity:
          <span class="font-medium text-white">{{ actor.popularity }}</span>
        </p>
      </div>
    </div>
    <div class="container mx-auto space-y-4 py-8">
      <HomePageMovieSliderWrapper title="Known for:" :movies="actorMovies" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useImageConfig } from "@/stores/ImageConfig";
const imageSizes = useImageConfig().config;
const config = useRuntimeConfig();
const route = useRoute();
const actor = ref();
const actorMovies = ref();

axios
  .get(config.public.API_BASE_URL + `person/${route.params.id}`, {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    actor.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get(config.public.API_BASE_URL + `person/${route.params.id}/combined_credits`, {
    headers: {
      Authorization: "Bearer " + config.public.API_READ_TOKEN,
    },
  })
  .then((response) => {
    actorMovies.value = response.data.cast;
  })
  .catch((error) => {
    console.log(error);
  });

function getYearFromDate(dateString) {
  // Split the input date string by the hyphen character
  const currentYear = new Date().getFullYear();
  const parts = dateString?.split("-");

  // Check if the input date string has at least three parts (year, month, day)
  if (parts?.length >= 3) {
    // Extract the year part (first part) and convert it to an integer
    const year = parseInt(parts[0], 10);

    // Check if the year is a valid number
    if (year <= currentYear) {
      return currentYear - year;
    } else {
      // Handle the case where the birth year is in the future
      return "Birth year cannot be in the future.";
    }
  }

  // If the input date string is not in the expected format or the year is not a valid number, return null or an appropriate default value
  return null;
}
</script>
