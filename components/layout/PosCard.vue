<template>
  <section
    class="flex flex-col w-full max-w-xs p-4 duration-300 bg-white border shadow-md cursor-pointer rounded-xl border-slate-100 hover:border-theme1 hover:shadow-none"
  >
    <img class="object-contain mx-auto -mt-28 h-44 w-fit" :src="img" alt />

    <article class="flex items-center justify-between pt-5" v-if="title" :dir="$t('dir')">
      <h5 class="font-semibold truncate">{{title}}</h5>
      <RightChevronIcon class="min-w-[30px] h-8 rtl:rotate-180" />
    </article>
  </section>
</template>

<script>
export default {
  props: ["title", "img"],
};
</script>

<style></style>
