<template>
  <section>
    <PopupModal classes="max-w-lg" :title="$t('reset_password')" :subtitle="$t('welcome_back')">
      <form class="px-5 overflow-auto space-y-3 max-h-[75vh]" @submit.prevent="done()">
        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('your_email')"
            type="email"
            v-model="email"
          />
          <AtIcon
            class="absolute w-5 h-5 -translate-y-1/2 top-1/2 rtl:left-5 ltr:right-5 text-slate-300"
          />
        </label>

        <button
          type="submit"
          class="block theme-btn btn"
          :class="mixLoader ? 'loading' : ''"
        >{{$t("submit")}}</button>

        <button
          @click="$store.commit('global/modal', 'login')"
          class="px-1 text-sm font-semibold normal-case text-slate-500 hover:text-theme1"
        >{{$t("back_to_login")}}</button>
      </form>
    </PopupModal>
  </section>
</template>

<script>
export default {
  data: () => ({
    email: ''
  }),
  methods: {
    done() {
      this.mixLoader = true;
      this.$axios
        .post("/auth/forget-password", {
          email: this.email
        })
        .then(() => {
          this.mixLoader = false;
          this.$store.commit("global/modal", "login");
          // this.$store.commit(this.$t('login_with_new'));
        })
        .catch((err) => {
          this.$errorHandler(err);
        });
    },
  },
};
</script>

<style>
</style>