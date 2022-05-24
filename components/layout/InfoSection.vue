<template>
  <section
    class="bg-right bg-no-repeat bg-cover lg:bg-bottom"
    :style="`background-image:url(${require('~/assets/images/bg2.png')})`"
  >
    <div class="container flex flex-col lg:flex-row">
      <article class="flex flex-col items-center w-full mt-16 lg:items-start">
        <h5 class="text-4xl text-white capitalize ltr:tracking-wide">
          <span class="pb-2 font-bold">{{first}}</span>
          {{rest}}
        </h5>
        <p class="mt-5 text-xl leading-10 text-white text-opacity-90">{{desc}}</p>
      </article>
      <figure class="w-full py-5 text-center">
        <img :src="imgSrc" class="pb-16 mx-auto h-[380px]" alt />
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  props: ["first", "rest", "desc", "imgSrc"],
};
</script>

<style>
</style>