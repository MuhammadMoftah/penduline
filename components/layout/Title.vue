<template>
  <h5 class="text-3xl capitalize ltr:tracking-wide text-slate-700">
    <span class="pb-2 font-bold border-b-2 border-theme1">{{first}}</span>
    {{rest}}
  </h5>
</template>

<script>
export default {
  props: ["first", "rest"],
};
</script>

<style>
</style>