<template>
  <section class="container">
    <div class="flex justify-between mb-8">
      <Title :first="title" />
      <aside class="flex items-center justify-between gap-4 w-max">
        <NuxtLink
          v-if="seeAllRoute"
          :to="seeAllRoute"
          class="text-sm text-theme1 font-meduim hover:text-theme1/70 hover:underline"
        >{{$t('see_all')}}</NuxtLink>
        <button
          class="border rounded-full h-9 w-9 hover:bg-theme1 hover:border-theme1 hover:text-white click-scale border-slate-300"
          @click="$refs.slider.prev()"
        >
          <LeftChevronIcon class="mx-auto w-7 h-7 rtl:rotate-180" />
        </button>
        <button
          class="border rounded-full h-9 w-9 hover:bg-theme1 hover:border-theme1 hover:text-white click-scale border-slate-300"
          @click="$refs.slider.next()"
        >
          <RightChevronIcon class="mx-auto w-7 h-7 rtl:rotate-180" />
        </button>
      </aside>
    </div>
    <VueSlickCarousel v-bind="sliderSettings" ref="slider" v-if="items.length">
      <div v-for="el in items" :key="el.id">
        <VProductCard :item="el" class="shadow-lg" />
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
  props: {
    title: { default: "" },
    endpoint: { default: "" },
    seeAllRoute: { default: "" },
  },
  components: { VueSlickCarousel },
  created() {
    this.getItems();
  },
  data() {
    return {
      items: [],
      sliderSettings: {
        dots: false,
        arrows: false,
        infinite: true,
        initialSlide: 2,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
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
  methods: {
    getItems() {
      this.$axios
        .get(this.endpoint)
        .then((response) => {
          this.items = response.data.data;
          console.log('items', this.items)
        })
        .catch((err) => this.$errorHandler(err));
    },
  },
};
</script>

<style scoped >
/* the parent */
>>> .slick-list {
  /* @apply -mx-1; */
  @apply pb-7 py-10 -mx-4 px-4 !important;
}

/* the slides */
>>> .slick-slide {
  @apply pr-6 !important;
}
</style>