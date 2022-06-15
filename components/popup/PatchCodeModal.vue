<template>
  <section>
    <Modal classes="max-w-lg" :title="$t('patch_code')">
      <form class="px-5 overflow-auto space-y-3 max-h-[75vh]" @submit.prevent="done()">
        <p class="text-sm font-bold text-green-500">{{$t('code_is_right')}}</p>
        <p class="text-sm font-semibold text-slate-500">{{$t('scratch_code_text')}}</p>
        <a :href="require('~/assets/images/bs-code.jpg')" target="_blank" class="block">
          <img
            class="object-contain h-64 mx-auto duration-300 rounded-lg shadow-md cursor-pointer w-fit hover:brightness-110 hover:opacity-90"
            src="~/assets/images/bs-code.jpg"
            alt
          />
        </a>

        <label for class="relative flex" dir="ltr">
          <input
            class="w-full h-12 px-4 text-lg font-semibold tracking-[10px] border rounded-md text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="'BS/***'"
            type="text"
            v-model="code"
          />
        </label>

        <p
          v-if="contactUs"
          class="py-2 text-sm font-semibold text-red-500"
        >{{$t('scratch_code_contact_us')}}</p>

        <div class="py-2">
          <button class="theme-btn btn" :class="loading ? 'loading' :''">{{$t("submit")}}</button>
        </div>
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
      contactUs: false,
      loading: false,
      code: "",
    };
  },
  methods: {
    done() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$successHandler(
          `Congratulations You got the product for free, You have 568 Points left in your balance`,
          5000
        );
      }, 1500);
    },
  },
};
</script>

<style>
</style>