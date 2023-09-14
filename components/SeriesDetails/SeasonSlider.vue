<template>
  <div class="mt-0 container mx-auto space-y-6">
    <div class="flex gap-4 justify-between items-center">
      <h3 class="text-2xl font-semibold text-white">{{ props.title }}</h3>
    </div>
    <Swiper
      class="courses-slider"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="7"
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
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }"
    >
      <SwiperSlide v-for="x in props.episodes" :key="x">
        <div class="space-y-2">
          <div class="relative">
            <img
              :src="
                x?.still_path
                  ? imageSizes?.base_url +
                    imageSizes?.still_sizes[3] +
                    x?.still_path
                  : 'https://ojk.go.id/Style%20Library/ojk/img/no-preview-available.png'
              "
              alt="actors"
              class="w-auto h-32 object-cover"
            />
            <Icon
              name="ic:round-play-arrow"
              class="absolute top-1/2 left-1/2 transform bg-black h-7 w-7 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <h4 class="text-base font-semibold">{{ x.name }}</h4>
          <p class="text-xs">{{ x.overview }}</p>
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
  episodes: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: "Movies",
  },
});
</script>
