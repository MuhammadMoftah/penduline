<template>
  <section class="container">
    <div class="relative flex justify-between mb-5">
      <img
        class="absolute -translate-x-1/2 top-20 left-1/2"
        src="~/assets/images/quote-icon.svg"
        alt
      />
      <Title
        :first="$t('dir') == 'ltr' ? $t('clients') : $t('reviews')"
        :rest="$t('dir') == 'ltr' ? $t('reviews') : $t('clients')"
      />
      <aside class="flex justify-between w-24 rtl:flex-row-reverse">
        <button
          class="border rounded-full h-9 w-9 hover:bg-theme1 hover:border-theme1 hover:text-white click-scale border-slate-300"
          @click="$refs.slider.prev()"
        >
          <LeftChevronIcon class="mx-auto w-7 h-7" />
        </button>
        <button
          class="border rounded-full h-9 w-9 hover:bg-theme1 hover:border-theme1 hover:text-white click-scale border-slate-300"
          @click="$refs.slider.next()"
        >
          <RightChevronIcon class="mx-auto w-7 h-7" />
        </button>
      </aside>
    </div>
    <VueSlickCarousel v-bind="sliderSettings" ref="slider">
      <div v-for="n in 10" :key="n">
        <ReviewCard class="shadow-lg" />
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      sliderSettings: {
        dots: false,
        arrows: false,
        infinite: true,
        initialSlide: 2,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped >

</style>