<template>
  <section class="flex justify-between p-5 bg-white border shadow-sm rounded-3xl border-slate-100">
    <div class="flex flex-col lg:flex-row">
      <img
        class="inline-block object-contain h-32 p-4 rounded-3xl bg-slate-100 ltr:mr-5 rtl:ml-5"
        src="~/static/img1.png"
        alt
      />
      <div class="flex flex-col justify-between h-full">
        <h5 class="mt-4 mb-6 font-semibold lg:mt-0 text-slate-700">Penduline Shower Gel</h5>
        <p class="font-semibold text-slate-600">
          40
          <span class="text-slate-400">{{$t('egp')}}</span>
        </p>
        <div class="flex items-center justify-between">
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
            <HeartIcon class="w-5 h-5 ltr:mr-1 rtl:ml-1" />
            {{$t('wishlist')}}
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-between">
      <button
        @click="quantity++"
        class="w-12 duration-300 border rounded-full h-7 click-scale border-theme1 hover:bg-theme1 hover:text-white text-theme1"
      >
        <PlusIcon class="w-4 h-4 mx-auto" />
      </button>

      <input
        class="h-8 p-1 text-sm font-semibold text-center rounded-full outline-none w-14 text-slate-600 bg-slate-100"
        v-model="quantity"
        type="number"
      />

      <button
        @click="quantity--"
        :disabled="quantity <= 1"
        class="w-12 duration-300 border rounded-full disabled:opacity-50 disabled:pointer-events-none h-7 click-scale border-theme1 hover:bg-theme1 hover:text-white text-theme1"
      >
        <MinusIcon class="w-4 h-4 mx-auto" />
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

  watch: {
    quantity(n) {
      if (n < 1) {
        this.quantity = 1;
      }
    },
  },
};
</script>

<style>
</style>