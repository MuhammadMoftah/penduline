<template>
  <section
    class="bg-right bg-no-repeat bg-cover lg:bg-bottom min-h-[500px]"
    :style="`background-image:url(${require('~/assets/images/bg2.png')})`"
  >
    <div class="container flex flex-col lg:flex-row">
      <article class="flex flex-col items-center w-full mt-16 lg:items-start">
        <h5 class="text-4xl font-semibold text-white capitalize ltr:tracking-wide">{{title}}</h5>
        <p class="mt-5 text-xl leading-9 text-white text-opacity-90">{{desc}}</p>
      </article>
      <figure class="flex items-center justify-center w-full py-5">
        <slot></slot>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "desc"],
};
</script>

<style>
</style>