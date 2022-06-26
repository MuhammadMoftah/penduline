<template>
  <main class="container pt-36">
    <section class>
      <header
        class="relative py-16 mb-16 overflow-hidden text-center text-white bg-theme0 rounded-3xl"
      >
        <img
          class="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-10"
          src="~/assets/images/title-bg.png"
          alt
        />
        <h5
          class="mb-3 text-4xl font-bold capitalize ltr:tracking-widest"
        >Children Skin Spots Treatment</h5>
        <p class="text-sm font-semibold ltr:tracking-widest">Children Skin Spots Treatment</p>
      </header>
    </section>

    <section class="flex gap-5 mt-16">
      <img
        src="~/assets/images/kid1.png"
        class="object-cover w-full lg:w-9/12 h-[400px] rounded-xl"
        alt
      />

      <div class="hidden w-3/12 overflow-hidden rounded-xl lg:block">
        <h5
          class="p-4 font-bold text-white uppercase bg-gradient-to-l from-theme1 to-theme0"
        >Related topics</h5>

        <ul class="flex flex-col divide-y bg-slate-100 divide-slate-200 rounded-b-xl">
          <a v-for="n in 4" :key="n" class="px-4 py-3 capitalize text-slate-500 btn-link">Body care</a>
        </ul>
      </div>
    </section>

    <section class="w-full mt-16 lg:w-9/12" v-for="n in 1" :key="n">
      <h5
        class="mb-6 text-2xl font-semibold capitalize text-slate-800"
      >Children Skin Spots Treatment</h5>
      <p class="text-slate-600 leading-[27px]">{{$t('lorem')}}</p>
      <p class="mt-6 text-slate-600 leading-[27px]">{{$t('lorem')}}</p>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>