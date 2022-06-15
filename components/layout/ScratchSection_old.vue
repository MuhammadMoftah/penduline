<template>
  <main class="py-40 bg-gradient-to-b from-body to-slate-100">
    <div class="container flex flex-wrap p-3">
      <figure class="w-full px-16 lg:w-1/2">
        <div class="h-[400px] bg-slate-100 rounded-lg relative text-white">
          <img
            src="~/assets/images/penduline2.png"
            class="object-cover w-full h-full rounded-lg"
            alt
          />

          <div
            class="absolute z-10 flex flex-col justify-center w-7/12 px-6 py-16 rounded-md -top-5 -left-5 bg-gradient-to-br from-theme0 to-theme1"
          >
            <span class="mb-2 text-xl font-semibold uppercase">{{$t("scratch_win")}}</span>
            <h5 class="text-3xl font-bold capitalize">Ready For free products?</h5>
          </div>

          <div
            class="absolute z-0 flex items-center justify-center w-8/12 p-8 rounded-lg shadow-xl -bottom-5 -right-5 bg-slate-50"
          >
            <img
              src="https://img.freepik.com/free-vector/scratch-card-vector-mockup-template_1017-13032.jpg"
              class="object-contain w-full max-w-[200px]"
              alt
            />
          </div>
        </div>
      </figure>

      <article
        class="flex flex-col items-center justify-center w-full px-16 lg:mt-0 mt-28 lg:w-1/2"
      >
        <h5 class="mb-4 text-3xl font-semibold text-slate-800">Here Is Some Tips</h5>
        <p class="leading-[27px] text-slate-500">{{$t("lorem")}}</p>

        <div class="flex items-end justify-center w-full gap-4">
          <button
            dir="ltr"
            target="_blank"
            class="flex items-center p-3 mt-24 duration-200 bg-white rounded-full shadow cursor-pointer hover:scale-95"
            @click="$store.commit('global/modal', 'ScratchVideo')"
          >
            <button class="p-2 rounded-full bg-theme1">
              <PlayArrowIcon class="w-6 h-6 text-white" />
            </button>
            <span class="px-5 font-semibold uppercase w-max text-slate-700">{{$t("watch_video")}}</span>
          </button>

          <button
            @click="$router.push(localePath('/scratch-win'))"
            class="h-16 text-lg w-[220px] duration-200 rounded-full theme-btn hover:scale-95"
          >{{$t('explore')}}</button>
        </div>
      </article>
    </div>

    <!-- modals  -->
    <PopupYoutubeModal
      v-if="$store.state.global.modal == 'ScratchVideo'"
      link="https://www.youtube.com/embed/kf4woPY5gxQ"
    />
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>