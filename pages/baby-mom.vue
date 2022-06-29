<template>
  <main>
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

    <section class="-mt-16">
      <HeroSection
        :title="$t('about_penduline')"
        :desc="$t('penduline_info')"
        :img="'imgSRC'"
        :link="'customLink'"
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
        <CollapseQuestion :title="$t('question1')" v-for="n in 1" :key="n" class="mb-6">
          <p class="text-sm leading-[27px] font-semibold">{{$t('answer1')}}</p>
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