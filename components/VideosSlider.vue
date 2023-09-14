<template>
  <div class="mt-0 container mx-auto space-y-6">
    <div class="flex gap-4 justify-between items-center">
      <h3 class="text-2xl font-semibold text-white">{{ props.title }}</h3>
    </div>
    <Swiper
      class="courses-slider"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="5"
      :space-between="25"
      :loop="true"
      :autoplay="{
        disableOnInteraction: true,
        delay: 5000,
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
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }"
    >
      <SwiperSlide v-for="x in props.videos" :key="x">
        <div class="space-y-2">
          <vue-plyr>
            <div class="plyr__video-embed">
              <iframe
                :src="`https://www.youtube.com/watch?v=${x.key}`"
                allowfullscreen
                allowtransparency
                allow="autoplay"
              ></iframe>
            </div>
          </vue-plyr>
          <h4 class="text-base font-semibold text-white">{{ x.name }}</h4>
          <p class="text-xs text-white">{{ x.type }}</p>
        </div>
        <!-- {{ x }} -->
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { useImageConfig } from "@/stores/ImageConfig";
const imageSizes = useImageConfig().config;

const props = defineProps({
  videos: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: "Movies",
  },
});
</script>
