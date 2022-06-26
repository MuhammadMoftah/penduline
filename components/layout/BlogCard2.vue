<template>
  <section
    class="h-[550px] py-14 px-8 max-w-lg bg-black bg-no-repeat bg-cover bg-center shadow-md rounded-xl flex items-end group"
    :style="`background-image: url(${require('~/assets/images/kid1.png')})`"
    :dir="$t('dir')"
  >
    <div
      class="w-full p-8 h-40 mx-auto rounded-tr-lg rounded-bl-lg rounded-br-[60px] shadow-lg bg-white rounded-tl-[60px] duration-500 bg-gradient-to-r group-hover:h-full group-hover:from-theme0 group-hover:to-theme1 overflow-hidden"
    >
      <h5
        class="mb-4 text-lg font-semibold duration-500 text-slate-800 group-hover:text-white"
      >Children Skin Spots Treatment</h5>
      <p
        class="leading-[27px] text-sm text-white overflow-hidden mb-4"
        style="display: -webkit-box;-webkit-line-clamp: 10;-webkit-box-orient: vertical;"
      >
        {{$t('lorem')}}
        {{$t('lorem')}}
      </p>
      <NuxtLink
        :to="localePath('/news/1')"
        class="flex items-center justify-between mt-5 text-sm font-semibold text-white"
      >
        {{$t('read_now')}}
        <RightChevronIcon class="w-6 h-6 rtl:rotate-180" />
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>