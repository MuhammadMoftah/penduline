<template>
  <section class="flex justify-between p-5 bg-white border shadow-sm rounded-3xl border-slate-100">
    <div class="flex" v-if="item">
      <img
        class="inline-block object-contain h-24 p-3 lg:h-36 rounded-3xl bg-slate-100 ltr:mr-5 rtl:ml-5"
        src="~/static/img1.png"
        v-if="item.image"
        alt
      />
      <div class="flex flex-col items-start justify-between h-full gap-2">
        <h5 class="font-semibold text-slate-700" v-if="item.title">2 X Penduline Shower Gel</h5>
        <h5 class="font-semibold text-slate-700">{{$t("order_number")}} #{{item.id}}</h5>
        <h5
          class="text-xs font-semibold text-slate-400"
          v-if="false"
        >{{$t("order_number")}} #{{item.id}}</h5>
        <p class="font-semibold text-slate-600" v-if="!gift">
          {{item.grand_total}}
          <span class="text-slate-400">{{$t('egp')}}</span>
        </p>
        <p v-else class="font-semibold text-theme1">760 {{$t('points')}}</p>
        <p
          class="px-2 py-1 text-xs font-semibold capitalize bg-green-500 rounded-md text-green-50"
        >{{item.status}}</p>
        <h5
          class="text-sm font-semibold tracking-wider text-slate-400"
        >{{item.created_at.slice(0,16)}}</h5>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    gift: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style>
</style>