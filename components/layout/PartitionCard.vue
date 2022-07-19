<template>
  <div
    class="relative flex flex-col w-full max-w-lg overflow-hidden duration-300 bg-white border rounded-3xl border-slate-100 theme-shadow hover:border-theme1 hover:shadow-none"
    :dir="$t('dir')"
  >
    <img
      class="object-cover w-full h-56 mx-auto duration-300 cursor-pointer hover:brightness-105 hover:opacity-90"
      :src="img"
      alt
    />

    <article class="flex flex-col justify-between px-4 my-3">
      <aside>
        <h5 class="font-semibold">{{title}}</h5>
        <p
          class="overflow-hidden text-sm leading-[20px] text-slate-500"
          style="display: -webkit-box;-webkit-line-clamp: 4;-webkit-box-orient: vertical;"
          :title="desc"
        >{{desc}}</p>
      </aside>
    </article>

    <!-- actions -->
    <div class="flex justify-between">
      <button
        type="button"
        class="rounded-none theme-btn"
        @click="$router.push(localePath(route))"
      >{{$t("explore")}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "desc", "img", "route"],
  mounted() { },
  methods: {},
};
</script>

<style></style>
