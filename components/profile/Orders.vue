<template>
  <section>
    <nav class="flex" key="nav">
      <li
        class="w-full py-4 text-sm font-semibold text-center list-none duration-300 cursor-pointer hover:bg-slate-200"
        :class="tab =='all'?'text-theme1':'text-slate-700'"
        @click="tab = 'all'"
      >{{$t('all')}}</li>
      <li
        class="w-full py-4 text-sm font-semibold text-center list-none duration-300 cursor-pointer hover:bg-slate-200"
        :class="tab =='orders'?'text-theme1':'text-slate-700'"
        @click="tab = 'orders'"
      >{{$t('orders')}}</li>

      <li
        class="w-full py-4 text-sm font-semibold text-center list-none duration-300 cursor-pointer hover:bg-slate-200"
        :class="tab =='gifts'?'text-theme1':'text-slate-700'"
        @click="tab = 'gifts'"
      >{{$t('gifts')}}</li>
    </nav>
    <transition-group
      tag="div"
      name="slide-fade"
      key="orders"
      class="grid gap-4"
      v-if="tab == 'orders' || tab == 'all'"
    >
      <StyleOrderCard :item="item" v-for="item in orders" :key="item.id" />
    </transition-group>

    <!-- todo: add real gifts -->
    <transition-group
      tag="div"
      name="slide-fade"
      key="gifts"
      class="grid gap-4 mt-4"
      v-if="tab == 'gifts' || tab == 'all' && false"
    >
      <!-- todo: gifts orders  -->
      <StyleOrderCard :gift="true" v-for="n in 3" :key="'2'+n" v-if="false" />
      <p
        class="p-10 text-sm font-semibold text-center text-slate-500"
        key="noData"
      >{{$t('empty_data')}}</p>
    </transition-group>
  </section>
</template>
   

<script>
export default {
  data() {
    return {
      tab: "all",
      orders: [],
    };
  },
  mounted() {
    this.$axios.get("/orders").then((res) => {
      this.orders = res.data.data;
    });
  },
};
</script>

<style>
</style>