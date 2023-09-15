<template>
  <div class="mt-0 lg:container px-4 mx-auto space-y-6 pb-12">
    <div class="flex gap-4 justify-between flex-wrap items-center">
      <h3 class="text-2xl font-semibold text-white">{{ props.title }}</h3>
      <div class="flex flex-col gap-4">
        <nuxt-link
          to="/"
          class="text-white hover:text-secondaryColor hover:underline text-right"
          >View more</nuxt-link
        >
        <div
          class="flex items-center justify-center"
          v-if="movies?.[0]?.media_type === 'movie'"
        >
          <div
            class="relative inline-block w-12 mr-2 align-middle select-none transition-all duration-500"
          >
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              :checked="isDayTrending"
              @input="$emit('getValue', isDayTrending)"
              class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-black border-4 appearance-none cursor-pointer"
            />
            <label
              for="toggle"
              class="toggle-label block overflow-hidden h-6 rounded-full bg-white cursor-pointer"
            ></label>
          </div>
          <label for="toggle" class="text-sm text-white">{{
            isDayTrending ? "Trending Today" : "Trending this week"
          }}</label>
        </div>
      </div>
    </div>
    <Swiper
      v-if="isLoadedData"
      class="courses-slider"
      :modules="[
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperNavigation,
        SwiperPagination,
      ]"
      :slides-per-view="4"
      :navigation="true"
      :space-between="25"
      :loop="true"
      :autoplay="{
        disableOnInteraction: true,
        delay: 2000,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-100%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      :breakpoints="{
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        786: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 25,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }"
    >
      <SwiperSlide v-for="x in props.movies" :key="x">
        <HomePageMovieCard :movie="x" />
      </SwiperSlide>
    </Swiper>
    <div class="flex flex-wrap gap-12 justify-between" v-else>
      <div
        class="h-96 md:w-72 w-full bg-gray-800 animate-pulse"
        v-for="(item, index) in 4"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  movies: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: "Movies",
  },
  isDayTrending: {
    type: Boolean,
    default: false,
  },
  isLoadedData: {
    type: Boolean,
    default: true,
  },
});
</script>

<style>
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #fff;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #fff;
}
</style>
