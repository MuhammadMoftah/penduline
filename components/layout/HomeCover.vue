<template>
  <div>
    <section class="w-full overflow-hidden h-[105vh] rounded-b-[60px] relative">
      <VueSlickCarousel
        :arrows="false"
        :rtl="false"
        :fade="false"
        :dots="true"
        :autoplaySpeed="6000"
        :autoplay="true"
      >
        <div class="relative h-[105vh]">
          <img
            class="object-cover w-full h-full"
            src="https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <button
            type="button"
            class="absolute left-0 right-0 h-12 mx-auto text-lg uppercase duration-300 rounded-full shadow-2xl lg:h-16 lg:text-2xl px-14 shadow-pink-500 w-fit bottom-20 lg:bottom-24 theme-btn ltr:tracking-widest click-scale hover:-translate-y-3"
          >{{$t('shop_now')}}</button>
        </div>

        <div class="relative h-[105vh]">
          <img
            class="object-cover w-full h-full"
            src="https://images.pexels.com/photos/34763/baby-sleeping-baby-baby-girl.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <button
            type="button"
            class="absolute left-0 right-0 h-12 mx-auto text-lg uppercase duration-300 rounded-full shadow-2xl lg:h-16 lg:text-2xl px-14 shadow-pink-500 w-fit bottom-20 lg:bottom-24 theme-btn ltr:tracking-widest click-scale hover:-translate-y-3"
          >{{$t('shop_now')}}</button>
        </div>
        <div class="relative h-[105vh]">
          <img
            class="object-cover w-full h-full"
            src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt
          />
          <button
            type="button"
            class="absolute left-0 right-0 h-12 mx-auto text-lg uppercase duration-300 rounded-full shadow-2xl lg:h-16 lg:text-2xl px-14 shadow-pink-500 w-fit bottom-20 lg:bottom-24 theme-btn ltr:tracking-widest click-scale hover:-translate-y-3"
          >{{$t('shop_now')}}</button>
        </div>

        <div class="relative h-[105vh]">
          <img
            class="object-cover w-full h-full"
            src="https://images.pexels.com/photos/3662910/pexels-photo-3662910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt
          />
          <button
            type="button"
            class="absolute left-0 right-0 h-12 mx-auto text-lg uppercase duration-300 rounded-full shadow-2xl lg:h-16 lg:text-2xl px-14 shadow-pink-500 w-fit bottom-20 lg:bottom-24 theme-btn ltr:tracking-widest click-scale hover:-translate-y-3"
          >{{$t('shop_now')}}</button>
        </div>
      </VueSlickCarousel>
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
  @apply w-3 h-3 bg-theme1 opacity-30 shadow-lg shadow-pink-400 rounded-full content-[''];
}
>>> .slick-dots li.slick-active button:before {
  @apply text-theme2 opacity-100;
}
</style>