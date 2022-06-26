<template>
  <section>
    <div class="flex items-center justify-between h-10 mb-6 capitalize">
      <span class="text-xl font-semibold text-slate-800">{{$t('filter')}}</span>
      <button
        type="button"
        class="text-sm font-semibold capitalize text-theme1 click-scale"
      >{{$t('clear')}}</button>
    </div>

    <CollapseFilter
      class="my-4 overflow-auto capitalize max-h-72 scrollWidth"
      :title="$t('categories')"
    >
      <FiltersSelect url="/categories" v-model="categories" />
    </CollapseFilter>

    <CollapseFilter class="my-4 capitalize" :title="$t('price')">
      <FiltersRange v-model="priceRange" />
      <div class="flex justify-between">
        <span class="text-xs font-medium text-slate-500 xl:text-sm">{{priceRange[0]}}</span>
        <span class="text-xs font-medium text-slate-500 xl:text-sm">{{priceRange[1]}}</span>
      </div>
    </CollapseFilter>

    <CollapseFilter class="my-4 capitalize" :title="'Filter 3'" v-if="false">
      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 1</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>

      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 2</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>

      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 3</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>
    </CollapseFilter>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      priceRange: [0, 100],
    };
  },
  created() {
    this.initFilters();
  },
  methods: {
    initFilters() {
      if (this.$route.query["filter[categories.id]"]) {
        this.categories = [
          ...this.$route.query["filter[categories.id]"].split(",").map(Number),
        ];
      }

      if (this.$route.query["filter[price_between]"]) {
        this.priceRange = [
          ...this.$route.query["filter[price_between]"].split(",").map(Number),
        ];
      }
    },
    changePriceRange(range) {
      this.$router
        .replace(
          this.localePath({
            query: {
              ...this.$route.query,
              "filter[price_between]": range.join(),
            },
          })
        )
        .then(() => {
          const payload = {
            query: this.$route.query,
          };
          console.log("query", this.$route.query);
          this.$store.dispatch("products/getItems", payload);
        })
        .catch((err) => {});
    },
  },

  watch: {
    priceRange(val) {
      this.changePriceRange(val);
    },
    categories(val) {
      this.$router
        .replace(
          this.localePath({
            query: {
              ...this.$route.query,
              "filter[categories.id]": val.join(),
            },
          })
        )
        .then(() => {
          const payload = {
            query: this.$route.query,
          };
          console.log("query", this.$route.query);
          this.$store.dispatch("products/getItems", payload);
        })
        .catch((err) => {});
    },
  },
};
</script>

<style scoped>
.scrollWidth::-webkit-scrollbar {
  @apply w-[1.5px] xl:w-[2px];
}
</style>