<template>
  <div>
    <section
      class="w-full h-screen bg-no-repeat bg-cover rounded-b-[60px] relative pt-32"
      dir="ltr"
      :style="`background-image: url(${require('~/assets/images/bg.png')})`"
    >
      <div class="container grid h-full grid-cols-2">
        <div class="flex flex-col items-center justify-center col-span-2 lg:col-span-1">
          <img class="hidden mb-20 w-52 lg:block" src="~/assets/images/peppers-3.png" alt />
          <div>
            <h5
              class="relative flex ml-16 text-4xl tracking-wide lg:text-5xl text-slate-700 font-manrope"
            >
              <span class="mx-2 font-semibold">Penduline</span> Group
              <img
                class="absolute w-auto -bottom-1 lg:-bottom-10 -left-10"
                src="~/assets/images/peppers-4.png"
                alt
              />
            </h5>
          </div>
        </div>
        <div class="relative col-span-2 lg:pt-20 lg:col-span-1">
          <VueSlickCarousel :arrows="false" :dots="true" :autoplaySpeed="5500" :autoplay="true">
            <img v-for="n in 4" :key="n" :src="require(`~/static/slide${n}.png`)" alt />
          </VueSlickCarousel>
        </div>
      </div>
    </section>

    <!-- min menu  -->
    <nav
      dir="ltr"
      class="w-full capitalize bg-cover -mt-14"
      :style="`background-image: url(${require('~/assets/images/min-menu.png')})`"
    >
      <div
        class="container flex items-center justify-between h-40 pt-16 text-[10px] text-center md:text-sm"
      >
        <NuxtLink
          class="flex items-center justify-center w-full font-semibold text-white bg-right bg-no-repeat click-scale text-opacity-90"
          :style="`background-image: url(${require('~/assets/images/line.svg')})`"
          :to="localePath('/products')"
        >
          <img class="w-5 mx-1 lg:mx-4 md:w-auto" src="~/assets/images/skincare.svg" alt />
          {{$t("baby_care")}}
        </NuxtLink>

        <NuxtLink
          class="flex items-center justify-center w-full font-semibold text-white bg-right bg-no-repeat click-scale text-opacity-90"
          :style="`background-image: url(${require('~/assets/images/line.svg')})`"
          :to="localePath('/products')"
        >
          <img class="w-5 mx-1 lg:mx-4 md:w-auto" src="~/assets/images/skincare.svg" alt />
          {{$t("mom_care")}}
        </NuxtLink>

        <NuxtLink
          class="flex items-center justify-center w-full font-semibold text-white bg-right bg-no-repeat click-scale text-opacity-90"
          :style="`background-image: url(${require('~/assets/images/line.svg')})`"
          :to="localePath('/products')"
        >
          <img class="w-5 mx-1 lg:mx-4 md:w-auto" src="~/assets/images/skincare.svg" alt />
          {{$t("skin_care")}}
        </NuxtLink>

        <NuxtLink
          class="flex items-center justify-center w-full font-semibold text-white bg-right bg-no-repeat click-scale text-opacity-90"
          :style="`background-image: url(${require('~/assets/images/line.svg')})`"
          :to="localePath('/products')"
        >
          <img class="w-5 mx-1 lg:mx-4 md:w-auto" src="~/assets/images/skincare.svg" alt />
          {{$t("hair_care")}}
        </NuxtLink>
        <NuxtLink
          class="flex items-center justify-center w-full font-semibold text-white bg-right bg-no-repeat click-scale text-opacity-90"
          :to="localePath('/products')"
        >
          <img class="w-5 mx-1 lg:mx-4 md:w-auto" src="~/assets/images/skincare.svg" alt />
          {{$t("curly_hair_care")}}
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {};
  },
};
</script>

<style scoped>
>>> .slick-dots {
  @apply flex flex-col absolute top-[30%] right-0 w-auto !important;
}
>>> .slick-dots li {
  @apply mb-6;
}
>>> .slick-dots li button:before {
  @apply w-2 h-2 bg-theme1 opacity-30 rounded-full content-[''];
}
>>> .slick-dots li.slick-active button:before {
  @apply text-theme2 opacity-100;
}
</style>