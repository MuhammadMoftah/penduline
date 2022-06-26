<template>
  <div
    class="relative flex flex-col w-full max-w-lg p-4 duration-300 bg-white border rounded-3xl border-slate-100 theme-shadow hover:border-theme1 hover:shadow-none"
    :dir="$t('dir')"
  >
    <img
      class="object-contain h-56 mx-auto duration-300 cursor-pointer w-fit hover:brightness-105 hover:opacity-90"
      @click="routerHandler()"
      :src="item.images ? item.images[0] : require('~/static/shower.png')"
      alt
    />

    <article class="flex flex-col justify-between h-36">
      <p class="text-[#B7AC6C] text-sm font-semibold mt-2">{{$t('redem_your_code')}}</p>
      <aside>
        <h5 class="font-semibold">{{item.name}}</h5>
        <p
          class="overflow-hidden text-xs leading-[17px] text-slate-400 h-12"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          "
        >{{item.description? item.description: this.$t('lorem')}}</p>
      </aside>

      <p v-if="!gift" class="font-semibold">
        78 {{$t('egp')}}
        <span
          v-if="discount"
          class="mx-1 text-sm font-semibold line-through text-slate-400"
        >{{item.price ? item.price :'75'}} {{$t('egp')}}</span>
      </p>
      <p v-else class="font-bold text-theme1">798 {{$t('points')}}</p>
    </article>

    <!-- actions -->
    <div class="flex justify-between mt-4">
      <button
        v-if="!gift"
        type="button"
        class="h-10 text-xs font-semibold capitalize border rounded-full w-36 click-scale border-theme1 text-slate-600 hover:bg-theme1 hover:bg-opacity-5"
        @click="$addToCart(item)"
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

      <button
        type="button"
        class="w-10 h-10 text-center rounded-full bg-opacity-10 bg-theme1 hover:bg-opacity-20 click-scale"
      >
        <HeartIcon class="w-5 h-5 mx-auto text-theme1" />
      </button>
    </div>
    <span
      v-if="discount"
      class="absolute h-6 px-2 py-1 text-xs font-semibold text-white rounded-lg top-4 rtl:left-4 rtl:right-[unset] ltr:right-4 bg-theme1"
    >- 10%</span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    gift: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {},
  computed: {},
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
