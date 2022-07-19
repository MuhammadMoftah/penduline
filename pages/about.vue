<template>
  <main class="container pt-32">
    <header
      class="relative py-16 mb-16 overflow-hidden text-center text-white bg-theme0 rounded-3xl"
    >
      <img
        class="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-10"
        src="~/assets/images/title-bg.png"
        alt
      />
      <h5 class="mb-3 text-4xl font-bold capitalize ltr:tracking-widest">{{$t("about")}}</h5>
      <p class="text-sm font-semibold ltr:tracking-widest">{{$t("info_about_us")}}</p>
    </header>

    <section class="grid grid-cols-1 lg:grid-cols-2">
      <article>
        <h5 class="mb-4 text-2xl font-semibold text-slate-800">SEMAK CO. :</h5>
        <p class="text-slate-500 leading-[27px]">{{$t("penduline_info")}}</p>
      </article>
      <figure class="relative h-[400px] p-5 mt-5 lg:mt-0">
        <img
          class="object-cover w-full h-full rounded-xl brightness-75"
          src="~/static/video-image.png"
          alt
        />
        <div class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <button
            @click="videoModal = true"
            class="p-4 bg-white click-scale rounded-full shadow-2xl after:content-[''] after:h-16 after:animate-ping after:w-16 after:border-8 after:rounded-full after:border-white after:absolute after:top-0 after:left-0 relative text-slate-800"
          >
            <PlayArrowIcon class="w-8 h-8" />
          </button>
        </div>
      </figure>
    </section>

    <!-- Q/A section -->
    <h5
      class="mb-16 text-3xl font-semibold text-center capitalize mt-36 text-slate-800"
    >{{$t("we_answer_questions")}}</h5>
    <section class="p-10 rounded-lg bg-slate-100">
      <CollapseQuestion :title="$t('question1')" v-for="n in 1" :key="n" class="mb-6">
        <p class="text-sm leading-[27px] font-semibold">{{$t('answer1')}}</p>
      </CollapseQuestion>
    </section>

    <!-- do you have question? section -->
    <section class="text-center">
      <h5
        class="mb-5 text-3xl font-semibold text-center capitalize mt-36 text-slate-800"
      >{{$t("you_have_question")}}</h5>

      <p
        class="mb-5 font-semibold text-center capitalize text-slate-500"
      >{{$t("feel_free_to_contact")}}</p>

      <NuxtLink
        class="self-center inline-block px-4 py-2 mx-auto text-sm border rounded-md border-theme1 text-theme1 hover:bg-theme1 hover:bg-opacity-10 click-scale"
        :to="localePath('/contact-us')"
      >{{$t("contact_us")}}</NuxtLink>
    </section>

    <!-- blogs section  -->
    <section class="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2 mt-36">
      <BlogCard2 v-for="n in 3" :key="n" />
    </section>

    <!-- Video Modal -->
    <input type="checkbox" id="my-modal" class="modal-toggle" v-model="videoModal" />
    <div class="modal" v-if="videoModal">
      <div
        @click="videoModal = false"
        class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[-1]"
      ></div>
      <iframe
        class="w-full h-[400px] max-w-3xl"
        src="https://www.youtube.com/embed/uosSV7IeeFA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      videoModal: false,
    };
  },
};
</script>

<style>
</style>