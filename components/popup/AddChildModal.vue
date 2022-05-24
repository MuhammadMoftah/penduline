<template>
  <section>
    <Modal classes="max-w-lg" :title="$t('add_child')">
      <form class="px-5 overflow-auto space-y-3 max-h-[75vh]" @submit.prevent="done()">
        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('name')"
            type="text"
            v-model="name"
          />
        </label>

        <label for class="relative block mt-6">
          <p class="mb-2 text-sm font-semibold text-slate-600">{{$t('upload_birth_certificate')}}</p>
          <input
            type="file"
            class="text-sm border-none cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-theme1 hover:file:bg-slate-200 file:cursor-pointer"
            @change="file = $event.target.files[0]"
            accept="image/*"
          />
        </label>

        <div class="py-2">
          <button
            class="flex theme-btn btn"
            :disabled="contactUs"
            :class="mixLoading ? 'loading': ''"
          >{{$t("submit")}}</button>
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
      name: "",
      file: "",
    };
  },
  methods: {
    done() {
      this.mixLoading = true;
      setTimeout(() => {
        this.$successHandler("We have added your child successfully", 3000);
        this.mixLoading = false;
      }, 1500);
    },
  },
};
</script>

<style>
</style>