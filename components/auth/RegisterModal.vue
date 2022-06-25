<template>
  <section>
    <Modal classes="max-w-lg" :title="$t('register')" :subtitle="$t('join_family')">
      <form class="px-5 overflow-auto space-y-3 max-h-[75vh]" @submit.prevent="done()">
        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('name')"
            type="text"
            v-model="form.name"
          />
          <UserIcon
            class="absolute w-5 h-5 -translate-y-1/2 top-1/2 rtl:left-5 ltr:right-5 text-slate-300"
          />
        </label>

        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('your_email')"
            type="email"
            v-model="form.email"
          />
          <AtIcon
            class="absolute w-5 h-5 -translate-y-1/2 top-1/2 rtl:left-5 ltr:right-5 text-slate-300"
          />
        </label>

        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('mobile')"
            type="number"
            v-model="form.mobile"
          />
          <PhoneIcon
            class="absolute w-5 h-5 -translate-y-1/2 top-1/2 rtl:left-5 ltr:right-5 text-slate-300"
          />
        </label>

        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('password')"
            type="password"
            v-model="form.password"
          />
          <LockIcon
            class="absolute w-5 h-5 -translate-y-1/2 top-1/2 rtl:left-5 ltr:right-5 text-slate-300"
          />
        </label>

        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('confirm_password')"
            type="password"
            v-model="form.password_confirmation"
          />
          <LockIcon
            class="absolute w-5 h-5 -translate-y-1/2 top-1/2 rtl:left-5 ltr:right-5 text-slate-300"
          />
        </label>

        <button class="theme-btn btn" :class="mixLoader ? 'loading' : ''">{{$t("submit")}}</button>

        <div class="flex items-center justify-between">
          <hr class="w-full" />
          <span class="p-2 mb-1 text-gray-400">OR</span>
          <hr class="w-full" />
        </div>

        <div class="grid grid-cols-2 gap-10">
          <button type="button" class="text-white bg-blue-600 rounded-lg click-scale h-14">
            <FacebookIcon class="w-8 h-8 mx-auto" />
          </button>

          <button
            type="button"
            class="text-center text-white rounded-lg click-scale h-14 bg-rose-700"
          >
            <GoogleIcon class="w-8 h-8 mx-auto" />
          </button>
        </div>

        <p class="mt-4 text-sm text-center text-slate-500">
          {{$t("already_have_account")}}
          <button
            @click="$store.commit('global/modal', 'login')"
            class="px-1 font-semibold btn-link"
            type="button"
          >{{$t("login")}}</button>
        </p>
      </form>
    </Modal>
  </section>
</template>

<script>
import Modal from "~/components/popup/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        mobile: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    done() {
      this.mixLoader = true;
      this.$axios
        .post("/auth/register", { ...this.form })
        .then((res) => {
          this.$store.commit("global/modal", "ConfirmModal");
          this.$auth.setUserToken(res.data.meta.token);
        })
        .catch((err) => {
          this.mixLoader = false;
          this.$errorHandler(err);
        });
    },
  },
};
</script>

<style>
</style>