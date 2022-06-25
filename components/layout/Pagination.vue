<template>
  <section
    v-if="Object.keys(meta).length !== 0"
    class="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold"
  >
    <a
      :class="meta.current_page === 1 || !meta.current_page? 'disable' : ''"
      @click="goTo(meta.current_page - 1)"
      class="flex items-center justify-center w-10 h-10 border-[1px] border-main-3 cursor-pointer rounded-lg bg-white theme-shadow transition-all duration-500 hover:bg-theme1 hover:text-white"
    >
      <RightChevronIcon v-if="$t('dir') == 'rtl'" class="w-4 h-4" />
      <LeftChevronIcon v-if="$t('dir') == 'ltr'" class="w-4 h-4" />
    </a>
    <a
      v-if="meta.current_page"
      class="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg cursor-pointer theme-shadow hover:bg-theme1 hover:text-white"
      :class="meta.current_page === 1 ? 'bg-theme1 text-white' : 'bg-white ' "
      @click="goTo(1)"
    >1</a>
    <a
      v-if="meta.current_page >= 5"
      class="flex items-center justify-center w-10 h-10 text-sm rounded-lg theme-shadow"
    >
      <span class="relative top-[-3px]">.....</span>
    </a>
    <a
      v-for="n in paginations"
      :key="n"
      class="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg cursor-pointer theme-shadow hover:bg-theme1 hover:text-white"
      :class="meta.current_page === n ? 'bg-theme1 text-white' : 'bg-white text-slate-500' "
      @click="goTo(n)"
    >{{n}}</a>
    <a
      v-if="meta.current_page !== meta.last_page && meta.current_page < meta.last_page-2 && meta.last_page > 5 "
      class="flex items-center justify-center w-10 h-10 text-sm rounded-lg theme-shadow"
    >
      <span class="relative top-[-3px]">.....</span>
    </a>
    <a
      v-if="meta.last_page !== 1 && meta.last_page"
      class="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg cursor-pointer theme-shadow hover:bg-theme1 hover:text-white"
      :class="meta.current_page === meta.last_page ? 'bg-theme1 text-white' : 'bg-white ' "
      @click="goTo(meta.last_page)"
    >{{meta.last_page}}</a>
    <a
      :class="meta.current_page === meta.last_page ? 'disable' : ''"
      @click="goTo(meta.current_page + 1)"
      class="flex items-center justify-center w-10 h-10 border-[1px] border-main-3 cursor-pointer rounded-lg bg-white theme-shadow transition-all duration-300 hover:bg-theme1 hover:text-white"
    >
      <RightChevronIcon v-if="$t('dir') == 'ltr'" class="w-4 h-4" />
      <LeftChevronIcon v-if="$t('dir') == 'rtl'" class="w-4 h-4" />
    </a>
  </section>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    meta: Object,
  },
  data() {
    return {
      paginations: [],
    };
  },
  methods: {
    goTo(val) {
      this.$emit("goTo", val);
    },
  },
  created() {
    let newPag = [];
    for (let i = 2; i < this.meta.last_page; i++) {
      if (i === 6) break;
      newPag.push(i);
    }
    this.paginations = newPag;
  },
  watch: {
    meta() {
      let current = this.meta.current_page;
      if (current < 5) {
        let newPag = [];
        for (let i = 2; i < this.meta.last_page; i++) {
          if (i === 6) break;
          newPag.push(i);
        }
        this.paginations = newPag;
      } else if (current >= 5 && current < this.meta.last_page - 1) {
        this.paginations = [current - 2, current - 1, current, current + 1];
      } else if (current === this.meta.last_page) {
        this.paginations = [current - 4, current - 3, current - 2, current - 1];
      } else if (current >= this.meta.last_page - 1) {
        this.paginations = [current - 3, current - 2, current - 1, current];
      } else return;
    },
  },
};
</script>
<style scoped>
.disable {
  @apply !border-gray-300 !text-gray-400 cursor-not-allowed !bg-white pointer-events-none;
}
</style>
