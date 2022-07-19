<template>
  <section>
    <div class="flex items-center justify-between h-10 mb-6 capitalize">
      <span class="text-xl font-semibold text-slate-800">{{$t('filter')}}</span>
      <button
        type="button"
        @click="clearFilters"
        class="text-sm font-semibold capitalize opacity-0 text-theme1 click-scale"
      >{{$t('clear')}}</button>
    </div>

    <CollapseFilter
      class="my-4 overflow-auto capitalize max-h-72 scrollSmaller"
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

    <CollapseFilter
      class="my-4 overflow-auto capitalize max-h-72 scrollSmaller"
      :title="$t('ingredients')"
    >
      <FiltersSelect url="/ingredients" v-model="ingredients" />
    </CollapseFilter>

    <CollapseFilter
      class="my-4 overflow-auto capitalize max-h-72 scrollSmaller"
      :title="$t('hair_type')"
    >
      <FiltersSelect :arrayOfObjects="hairTypeFilters" v-model="hairType" />
    </CollapseFilter>

    <CollapseFilter
      class="my-4 overflow-auto capitalize max-h-72 scrollSmaller"
      :title="$t('hair_porosity')"
    >
      <FiltersSelect :arrayOfObjects="hairProtinFilters" v-model="hairPorosity" />
    </CollapseFilter>

    <CollapseFilter
      class="my-4 overflow-auto capitalize max-h-72 scrollSmaller"
      :title="$t('hair_protein')"
    >
      <FiltersSelect :arrayOfObjects="hairProtinFilters" v-model="hairProtein" />
    </CollapseFilter>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      priceRange: [0, 100],
      ingredients: [],
      hairType: [],
      hairPorosity: [],
      hairProtein: [],
      hairTypeFilters: [
        {
          id: 'silky',
          name: this.$t('silky')
        },
        {
          id: 'wavy',
          name: this.$t('wavy')
        },
        {
          id: 'dry',
          name: this.$t('dry')
        },
        {
          id: 'curly',
          name: this.$t('curly')
        }
      ],
      hairProtinFilters: [
        {
          id: 'low',
          name: this.$t('low'),
        },
        {
          id: 'medium',
          name: this.$t('medium'),
        },
        {
          id: 'high',
          name: this.$t('high'),
        },

      ],
    };
  },
  created() {
    this.initFilters();
  },
  methods: {
    initFilters() {
      let filters = [
        {
          variable: 'categories',
          key: 'filter[categories.id]',
        },
        {
          variable: 'ingredients',
          key: 'filter[ingredients.id]',
        },
        {
          variable: 'priceRange',
          key: 'filter[price_between]',
        },
        {
          variable: 'hairType',
          key: 'filter[hair_type]',
        },
        {
          variable: 'hairPorosity',
          key: 'filter[hair_porosity]',
        },
        {
          variable: 'hairProtein',
          key: 'filter[hair_protein]',
        },

      ]
      for (let i in filters) {
        if (this.$route.query[filters[i]['key']]) {
          this[filters[i]['variable']] = [
            ...this.$route.query[filters[i]['key']].split(","),
          ];
        }
      }
    },
    async clearFilters() {
      //todo: clear filters from url and components
      return;
      await this.$router.replace({
        query: {},
      });
      this.$store.dispatch("products/getItems");
    },

    changeFilters(key, val) {
      let query = {
        ...this.$route.query,
        [key]: val?.join()
      }

      // remove null from query
      if (!query[key]) delete query[key]


      this.$router
        .replace(this.localePath({ query }))
        .then(() => {
          const payload = {
            query: this.$route.query,
          };
          this.$store.dispatch("products/getItems", payload);
        })
        .catch((err) => { });
    },
  },

  watch: {
    priceRange(val) {
      this.changeFilters('filter[price_between]', val);
    },
    categories(val) {
      this.changeFilters('filter[categories.id]', val);
    },
    ingredients(val) {
      this.changeFilters('filter[ingredients.id]', val);
    },
    hairType(val) {
      this.changeFilters('filter[hair_type]', val);
    },
    hairPorosity(val) {
      this.changeFilters('filter[hair_porosity]', val);
    },
    hairProtein(val) {
      this.changeFilters('filter[hair_protein]', val);
    },
  },
};
</script>

<style scoped>
</style>