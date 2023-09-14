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
          slidesPerView: 5,
          spaceBetween: 25,
        },
        1280: {
          slidesPerView: 7,
          spaceBetween: 25,
        },
      }"
    >
      <SwiperSlide v-for="x in props.cast" :key="x">
        <NuxtLink
          :to="'/actors/' + x.id + '/'"
          class="flex flex-col items-center justify-center gap-2 text-center"
        >
          <div>
            <img
              :src="
                x?.profile_path
                  ? imageSizes?.base_url +
                    imageSizes?.profile_sizes[1] +
                    x?.profile_path
                  : 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png'
              "
              alt="actors"
              class="w-28 h-28 object-cover rounded-full"
            />
          </div>
          <div class="w-full text-center">
            <h4 class="text-white font-semibold text-lg">
              {{ x.original_name }}
            </h4>
            <p class="text-white">{{ x.character }}</p>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { useImageConfig } from "@/stores/ImageConfig";
const imageSizes = useImageConfig().config;

const props = defineProps({
  cast: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: "Movies",
  },
});
</script>
