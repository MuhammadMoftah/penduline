<template>
  <section>
    <!-- cover  -->
    <section>
      <HomeCover />
    </section>

    <!-- products  -->
    <section class="container flex mt-10">
      <aside
        class="p-5 border rounded-md min-w-[280px] hidden lg:block theme-shadow border-slate-100"
      >
        <ProductsFilter />
      </aside>

      <div class="p-5 pt-1">
        <div class="flex items-center justify-between mb-5">
          <h5 class="text-lg font-semibold capitalize text-slate-700">
            {{$t('gifts')}}
            <span class="mx-4 text-xs text-slate-400">23 {{$t('product')}}</span>
          </h5>

          <nav class="flex">
            <button
              @click="view = 'grid'"
              class="duration-300 click-scale active:text-fuchsia-400"
              :class="view == 'grid' ? 'text-theme1 brightness-110' : 'text-slate-300'"
            >
              <GridIcon class="w-6 h-6" />
            </button>
            <div class="mx-4 h-6 w-[1px] bg-slate-300 rounded-lg"></div>
            <button
              @click="view = 'rows'"
              class="duration-300 click-scale active:text-fuchsia-400"
              :class="view == 'rows' ? 'text-theme1 brightness-110' : 'text-slate-300'"
            >
              <RowsIcon class="w-6 h-6" />
            </button>
          </nav>
        </div>
        <!-- grid view  -->
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3" v-if="view == 'grid'">
          <VProductCard :gift="true" v-for="n in 10" :key="n" />
        </div>

        <!-- row view  -->
        <div class="grid grid-cols-1 gap-5" v-if="view == 'rows'">
          <HProductCard :gift="true" v-for="n in 10" :key="n" />
        </div>
      </div>
    </section>

    <!-- mobile filter sidebar  -->
    <button
      type="button"
      class="fixed w-12 h-12 text-center text-white rounded-full lg:hidden right-10 bottom-16 bg-theme1 click-scale"
      @click="$store.commit('products/filterSidebar', true)"
    >
      <FilterIcon class="mx-auto w-7 h-7" />
    </button>

    <div class="drawer">
      <input type="checkbox" class="drawer-toggle" :checked="filterSidebar" />
      <div
        class="fixed top-0 left-0 z-40 overflow-hidden drawer-side"
        :class="filterSidebar ? 'w-full h-full' : 'h-0 w-0'"
      >
        <div class="drawer-overlay" @click="$store.commit('products/filterSidebar', false)"></div>
        <div class="p-5 bg-white menu w-72">
          <ProductsFilter />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      view: "grid",
    };
  },
  methods: {},
  computed: {
    filterSidebar() {
      return this.$store.state.products.filterSidebar;
    },
  },
};
</script>

<style>
</style>