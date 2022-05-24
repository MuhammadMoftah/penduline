<template>
  <div
    class="border collapse collapse-arrow rounded-xl border-slate-100"
    :class="open ?'collapse-open' :'' "
  >
    <div
      class="flex items-center text-sm font-semibold cursor-pointer text-slate-700 collapse-title"
      @click="open = !open"
    >{{title}}</div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style>
</style>