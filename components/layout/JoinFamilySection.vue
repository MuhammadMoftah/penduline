<template>
  <section class="bg-theme0 flex flex-col gap-6 py-20 items-center">
    <h6 class="font-semibold text-white text-3xl capitalize">{{$t('join_family')}}</h6>

    <button
      @click="$store.commit('global/modal', 'login')"
      class="bg-white text-slate-800 w-52 hover:bg-slate-50 cursor-pointer rounded-full py-3 uppercase font-medium"
    >{{$t('join_now')}}</button>
  </section>
</template>

<script>
export default {

}
</script>

<style>
</style>