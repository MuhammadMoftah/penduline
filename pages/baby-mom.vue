<template>
  <main>
    <section class="w-full overflow-hidden h-[105vh] rounded-b-[60px] relative">
      <VueSlickCarousel :arrows="false" :rtl="false" :fade="false" :dots="true">
        <div class="relative h-[105vh]">
          <img
            class="object-cover w-full h-full"
            :src="require('@/static/home-banners/baby-slider.jpg')"
            alt
          />
        </div>
      </VueSlickCarousel>
    </section>

    <section class="-mt-16">
      <HeroSection
        :title="$t('water_baby_wipes')"
        :desc="$t('baby_hero_desc')"
        :img="require(`@/static/baby-hero-product.png`)"
        :link="localePath('/products/89')"
      />
    </section>

    <section class="mt-32">
      <ProductsSlider
        :title="$t('products')"
        :seeAllRoute="localePath('/products?filter[categories.id]=15')"
        endpoint="/products?include=ingredients,categories&filter[categories.id]=15"
      />
    </section>

    <section class="container mt-32">
      <!-- Q/A section -->
      <h5
        class="mb-16 text-3xl font-semibold text-center capitalize text-slate-800"
      >{{$t("we_answer_questions")}}</h5>
      <section class="p-10 rounded-lg bg-slate-100">
        <CollapseQuestion :title="$t(`baby_qu${n}`)" v-for="n in 8" :key="n" class="mb-6">
          <p class="text-sm leading-[27px] font-semibold whitespace-pre-line">{{$t(`baby_ans${n}`)}}</p>
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