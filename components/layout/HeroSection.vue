<template>
  <section
    class="bg-right bg-no-repeat bg-cover lg:bg-bottom min-h-[500px]"
    dir="ltr"
    :style="`background-image:url(${require('~/assets/images/bg2.png')})`"
  >
    <div class="container flex flex-col pt-36 lg:flex-row">
      <article
        class="flex flex-col items-center w-full mt-16 lg:items-start lg:min-h-[600px]"
        :dir="$t('dir')"
      >
        <h5
          class="text-5xl font-semibold text-white capitalize drop-shadow-md ltr:tracking-wide"
        >{{$t('hero_product')}}</h5>
        <h5
          class="mt-16 mb-1 text-2xl font-semibold text-white capitalize drop-shadow-md ltr:tracking-wide"
        >Penduline Shower Gel</h5>
        <p class="text-lg leading-9 text-white text-opacity-90">{{desc}}</p>
      </article>

      <figure class="flex flex-col items-center w-full py-5 pb-32 lg:pb-0">
        <img class="object-contain mb-6 h-[400px] mx-auto w-fit" src="~/static/shower.png" alt />
        <NuxtLink
          tag="button"
          type="button"
          :to="localePath('/products/25')"
          class="block h-12 text-lg capitalize duration-300 rounded-full shadow-2xl lg:h-16 lg:text-2xl px-14 shadow-pink-500 w-fit bottom-20 lg:bottom-24 theme-btn click-scale"
        >{{$t('more_details')}}</NuxtLink>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "desc", "img", "link"],
};
</script>

<style>
</style>