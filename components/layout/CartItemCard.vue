<template>
  <section class="flex justify-between p-5 bg-white border shadow-sm rounded-3xl border-slate-100">
    <div class="flex flex-col lg:flex-row">
      <img
        class="inline-block object-contain w-32 h-32 p-4 rounded-3xl bg-slate-100 ltr:mr-5 rtl:ml-5"
        :src="item.images[0]"
        alt
      />
      <div class="flex flex-col justify-between h-full">
        <h5 class="mt-4 mb-6 font-semibold capitalize lg:mt-0 text-slate-700">{{item.name}}</h5>
        <p class="font-semibold text-slate-600">
          {{item.price * item.quantity}}
          <span class="text-slate-400">{{$t('egp')}}</span>
        </p>
        <div class="flex items-center justify-between">
          <button
            @click="removeItem(item)"
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
        @click="$store.commit('cart/itemPlus', item)"
        class="w-12 duration-300 border rounded-full h-7 click-scale border-theme1 hover:bg-theme1 hover:text-white text-theme1"
      >
        <PlusIcon class="w-4 h-4 mx-auto" />
      </button>

      <input
        class="h-8 p-1 text-sm font-semibold text-center rounded-full outline-none w-14 text-slate-600 bg-slate-100"
        v-model="item.quantity"
        disabled
        type="number"
      />

      <button
        @click="$store.commit('cart/itemMinus', item)"
        :disabled="item.quantity <= 1"
        class="w-12 duration-300 border rounded-full disabled:opacity-50 disabled:pointer-events-none h-7 click-scale border-theme1 hover:bg-theme1 hover:text-white text-theme1"
      >
        <MinusIcon class="w-4 h-4 mx-auto" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["item"],

  methods: {
    removeItem(item) {
      this.$store.commit("cart/deleteItem", item);
      const cartItems = this.$store.state.cart.items;
      this.$auth.$storage.setLocalStorage("cartItems", cartItems);
    },
  },

  watch: {
    item: {
      handler() {
        const cartItems = this.$store.state.cart.items;
        this.$auth.$storage.setLocalStorage("cartItems", cartItems);
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>