<template>
  <div class="collapse collapse-arrow rounded-xl" :class="open ?'collapse-open' :'' ">
    <div
      class="flex items-center px-0 text-xl font-semibold capitalize border-b cursor-pointer text-slate-700 collapse-title border-slate-200"
      @click="open = !open"
    >{{title}}</div>
    <div class="px-0 mt-4 collapse-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style>
</style>