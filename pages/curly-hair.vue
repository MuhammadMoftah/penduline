<template>
  <main>
    <section class="w-full overflow-hidden h-[105vh] rounded-b-[60px] relative">
      <VueSlickCarousel :arrows="false" :rtl="false" :fade="false" :dots="true">
        <div class="relative h-[105vh]">
          <img
            class="object-cover w-full h-full"
            :src="require('@/static/home-banners/curly-slider.jpg')"
            alt
          />
        </div>
      </VueSlickCarousel>
    </section>

    <section class="-mt-16">
      <HeroSection
        :title="'Hero Title'"
        :desc="$t('curly_hero_desc')"
        :img="'imgSRC'"
        :link="'customLink'"
      />
    </section>

    <section class="mt-32">
      <ProductsSlider
        :title="$t('products')"
        :seeAllRoute="localePath('/products?filter[categories.id]=5')"
        endpoint="/products?include=ingredients,categories&filter[categories.id]=5"
      />
    </section>

    <section class="container mt-32 font-tajawal" dir="rtl">
      <!-- Q/A section -->
      <h5
        class="mb-16 text-3xl font-semibold text-center capitalize text-slate-800"
      >{{$t("we_answer_questions")}}</h5>
      <section class="p-10 rounded-lg bg-slate-100">
        <CollapseQuestion :title="$t(`curly_qu${n}`)" v-for="n in 8" :key="n" class="mb-6">
          <p
            class="text-sm leading-[27px] font-semibold whitespace-pre-line"
          >{{$t(`curly_ans${n}`)}}</p>
        </CollapseQuestion>
      </section>
    </section>
  </main>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
};
</script>

<style>
</style>