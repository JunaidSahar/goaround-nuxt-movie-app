<template>
  <div class="mt-6 container mx-auto">
    <h3 class="text-2xl font-semibold text-white">{{ props.title }}</h3>
    <Swiper
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
});
</script>
