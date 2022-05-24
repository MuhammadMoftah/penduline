<template>
  <section
    class="h-[550px] px-8 max-w-lg bg-black bg-no-repeat bg-cover rounded-xl flex items-end"
    :style="`background-image: url(${require('~/static/blog1.jpg')})`"
    :dir="$t('dir')"
  >
    <div
      class="mb-20 w-full p-8 mx-auto group rounded-tr-lg rounded-bl-lg rounded-br-[60px] shadow-lg bg-white rounded-tl-[60px] duration-500 bg-gradient-to-r hover:from-theme0 hover:to-theme1"
    >
      <h5
        class="text-lg font-semibold duration-500 text-slate-800 group-hover:text-white"
      >Children Skin Spots Treatment</h5>
      <a class="flex items-center justify-between mt-5 text-sm font-semibold text-white" href>
        {{$t('read_now')}}
        <RightChevronIcon class="w-6 h-6 rtl:rotate-180" />
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>