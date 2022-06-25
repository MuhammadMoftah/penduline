<template>
  <section
    class="relative flex w-full max-w-6xl p-4 duration-300 bg-white border rounded-3xl border-slate-100 theme-shadow hover:border-theme1 hover:shadow-none"
    :dir="$t('dir')"
  >
    <img
      @click="routerHandler()"
      class="object-contain h-40 mx-auto duration-300 cursor-pointer w-fit ltr:mr-5 rtl:ml-5 hover:brightness-105 hover:opacity-90"
      :src="item.images ? item.images[0] : require('~/static/shower.png')"
      alt
    />

    <div>
      <article class="flex flex-col justify-between h-36">
        <p class="text-[#B7AC6C] text-sm font-semibold">{{$t('redem_your_code')}}</p>
        <aside>
          <h5 class="font-semibold">{{item.name}}</h5>
          <p
            class="overflow-hidden text-xs leading-[17px] text-slate-400 h-12"
            style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;"
          >{{item.description}}</p>
        </aside>
        <p v-if="!gift" class="font-semibold">
          {{item.price}} {{$t('egp')}}
          <span
            v-if="discount"
            class="mx-1 text-sm font-semibold line-through text-slate-400"
          >115 {{$t('egp')}}</span>
        </p>
        <p v-else class="font-bold text-theme1">768 {{$t('points')}}</p>
      </article>

      <!-- actions -->
      <div class="flex items-center mt-4">
        <button
          type="button"
          class="w-10 h-10 text-center rounded-full ltr:mr-5 rtl:ml-5 bg-opacity-10 bg-theme1 hover:bg-opacity-20 click-scale"
        >
          <HeartIcon class="w-5 h-5 mx-auto text-theme1" />
        </button>

        <button
          v-if="!gift"
          type="button"
          class="h-10 text-xs font-semibold capitalize border rounded-full w-36 click-scale border-theme1 text-slate-800 hover:bg-theme1 hover:bg-opacity-5"
        >
          {{$t("add_to_cart")}}
          <BasketIcon class="inline-block w-4 h-4 mx-2 align-sub text-theme1" />
        </button>
        <button
          v-else
          type="button"
          class="h-10 text-xs font-semibold capitalize border rounded-full w-36 click-scale border-theme1 text-slate-600 hover:bg-theme1 hover:bg-opacity-5"
          @click="$store.commit('global/modal', 'ScratchCode')"
        >
          {{$t("enter_code")}}
          <CodeIcon class="inline-block w-4 h-4 mx-2 align-sub text-theme1" />
        </button>
      </div>
    </div>
    <span
      v-if="discount"
      class="absolute h-6 px-2 py-1 text-xs font-semibold text-white rounded-lg top-4 rtl:right-4 ltr:left-4 bg-theme1"
    >-10%</span>
  </section>
</template>

<script>
export default {
  props: ["gift", "discount", "item"],
  methods: {
    routerHandler(id) {
      if (this.gift) {
        this.$router.push(this.localePath("/scratch-win/23"));
        return;
      }
      this.$router.push(this.localePath("/products/23"));
    },
  },
};
</script>

<style></style>
