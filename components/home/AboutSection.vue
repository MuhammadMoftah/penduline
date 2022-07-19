<template>
  <section class="container">
    <div class="flex justify-between mb-8">
      <Title :first="$t('awards_we_got')" />
      <aside class="flex justify-between w-24 rtl:flex-row-reverse" v-if="false">
        <button
          class="border rounded-full h-9 w-9 hover:bg-theme1 hover:border-theme1 hover:text-white click-scale border-slate-300"
          @click="$refs.slider.goPrev()"
        >
          <LeftChevronIcon class="mx-auto w-7 h-7" />
        </button>
        <button
          class="border rounded-full h-9 w-9 hover:bg-theme1 hover:border-theme1 hover:text-white click-scale border-slate-300"
          @click="$refs.slider.goNext()"
        >
          <RightChevronIcon class="mx-auto w-7 h-7" />
        </button>
      </aside>
    </div>
    <div class="grid grid-cols-1 mt-16 lg:grid-cols-3">
      <carousel-3d
        ref="slider"
        class="col-span-2"
        :border="0"
        :height="400"
        :width="500"
        :space="250"
        :count="slides.length"
        :display="4"
        :perspective="20"
      >
        <slide v-for="(slide, i) in slides" :index="i" :key="i" @click.native="changeText()">
          <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <img
              :data-index="index"
              :class="isCurrent? '' :'opacity-90 brightness-90'"
              :src="slide.src"
              class="object-cover w-full h-full duration-200 cursor-pointer hover:opacity-100 hover:brightness-100"
            />
          </template>
        </slide>
      </carousel-3d>
      <div class="mt-6">
        <h5 class="text-4xl font-black ltr:text-right rtl:text-left">Award Name Here</h5>
        <h5 class="text-4xl font-black ltr:text-right rtl:text-left">Example Text</h5>

        <div
          class="p-7 mt-6 rounded-sm shadow-lg shadow-slate-200 relative bg-white z-10 lg:w-[450px] lg:rtl:mr-[-90px] lg:ltr:ml-[-90px]"
        >
          <h5 class="mb-2 text-lg font-bold">Main Title</h5>
          <p
            class="font-semibold text-xs text-slate-400 leading-[26px]"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto officia dolore nostrum consequuntur, minima quae illum sint aut provident recusandae eligendi quia nam ipsam ad dolores. Odio, nulla dolorem? Quae?</p>

          <p class="mt-10 text-xs text-slate-500">Newcairo, Egypt</p>
          <div class="flex gap-3 mt-2 text-slate-500">
            <a
              href="https://twitter.com/Penduline_kids"
              target="_blank"
              class="rounded-full hover:bg-opacity-10 click-scale hover:bg-white"
            >
              <TwitterIcon class="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/penduline.kids"
              target="_blank"
              class="rounded-full hover:bg-opacity-10 click-scale hover:bg-white"
            >
              <FacebookIcon class="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/penduline_kids"
              target="_blank"
              class="rounded-full hover:bg-opacity-10 click-scale hover:bg-white"
            >
              <InstaIcon class="w-4 h-4" />
            </a>

            <a
              href="https://www.youtube.com/channel/UC3CluiIbwXWc0iTa_pWaNWw/"
              target="_blank"
              class="rounded-full hover:bg-opacity-10 click-scale hover:bg-white"
            >
              <YoutubeIcon class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data: () => ({
    slides: [
      {
        src: require('~/static/awards/01.jpg'),
      },
      {
        src: require('~/static/awards/02.jpg'),
      }
    ],
  }),

  methods: {
    changeText() {

    },
  },
};
</script>

<style >
</style>