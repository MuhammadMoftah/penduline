<template>
  <section>
    <label class="cursor-pointer label" v-for="el in filters" :key="el.id">
      <span class="label-text text-slate-600">{{el.name}}</span>
      <input
        type="checkbox"
        v-model="selected"
        :value="el.id"
        class="checkbox checkbox-primary checkbox-xs border-slate-200"
      />
    </label>
  </section>
</template>

<script>
export default {
  props: ["url", "value"],
  data() {
    return {
      filters: [],
      selected: [...this.value],
    };
  },
  mounted() {
    this.getFilters();
  },
  methods: {
    getFilters() {
      this.$axios.get(this.url).then((response) => {
        this.filters = response.data.data;
      });
    },
  },

  watch: {
    selected(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style>
</style>