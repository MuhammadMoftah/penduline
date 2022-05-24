<template>
  <section
    class="relative flex flex-col p-5 overflow-hidden bg-white border shadow-sm rounded-3xl border-slate-100"
  >
    <PinIcon class="absolute w-8 h-8 text-slate-400 top-5 rtl:left-3 ltr:right-3" />
    <h5 class="text-sm font-bold text-slate-800">My Home</h5>
    <h5 class="mb-4 text-sm font-bold text-slate-800">Egypt</h5>
    <p class="mb-1 text-sm font-semibold text-slate-400">16, Hassan Elma'amoon St.</p>
    <p class="mb-1 text-sm font-semibold text-slate-400">Macdonalds Resturant</p>
    <p class="mb-1 text-sm font-semibold text-slate-400">Cairo</p>
    <div class="flex items-center justify-around pt-4 mt-4 border-t border-slate-100">
      <button
        type="button"
        class="flex items-center text-xs font-semibold hover:text-theme1 click-scale text-slate-400"
      >
        <TrashIcon class="w-5 h-5 ltr:mr-1 rtl:ml-1" />
        {{$t('remove')}}
      </button>
      <span class="w-[1px] h-6 mx-4 rounded-full bg-slate-200"></span>
      <button
        type="button"
        class="flex items-center text-xs font-semibold hover:text-theme1 click-scale text-slate-400"
      >
        <EditIcon class="w-5 h-5 ltr:mr-1 rtl:ml-1" />
        {{$t('edit')}}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
};
</script>

<style>
</style>