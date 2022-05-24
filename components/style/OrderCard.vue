<template>
  <section class="flex justify-between p-5 bg-white border shadow-sm rounded-3xl border-slate-100">
    <div class="flex">
      <img
        class="inline-block object-contain h-24 p-3 lg:h-36 rounded-3xl bg-slate-100 ltr:mr-5 rtl:ml-5"
        src="~/static/img1.png"
        alt
      />
      <div class="flex flex-col items-start justify-between h-full">
        <h5 class="font-semibold text-slate-700">2 X Penduline Shower Gel</h5>
        <h5 class="text-xs font-semibold text-slate-400">{{$t("order_number")}} 654987</h5>
        <p class="font-semibold text-slate-600" v-if="!gift">
          198
          <span class="text-slate-400">{{$t('egp')}}</span>
        </p>
        <p v-else class="font-semibold text-theme1">760 {{$t('points')}}</p>
        <p class="px-2 py-1 text-xs font-semibold bg-green-500 rounded-md text-green-50">Delivered</p>
        <h5 class="text-sm font-semibold tracking-wider text-slate-400">27-6-2021</h5>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["item", "gift"],
};
</script>

<style>
</style>