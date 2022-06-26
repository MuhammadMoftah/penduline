<template>
  <section>
    <Modal classes="max-w-lg" :title="$t('scratch_code')">
      <form class="px-5 overflow-auto space-y-3 max-h-[75vh]" @submit.prevent="done()">
        <label for class="relative flex" dir="ltr">
          <input
            class="w-full h-12 px-4 text-lg tracking-[10px] font-semibold border rounded-md text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="'Scratch code'"
            type="text"
            v-model="code"
          />
        </label>

        <p
          v-if="contactUs"
          class="py-2 text-sm font-semibold text-red-500"
        >{{$t('scratch_code_contact_us')}}</p>

        <p
          v-else
          class="py-2 text-sm font-semibold text-red-500"
        >{{$t('you_have')}} {{counter}} {{$t('tries_to_enter_code')}}</p>

        <div class="py-2">
          <button class="block theme-btn btn" :disabled="contactUs">{{$t("submit")}}</button>
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
      counter: 5,
      contactUs: false,
      code: "",
    };
  },
  methods: {
    done() {
      if (this.counter < 2) {
        this.contactUs = true;
        return;
      }

      // todo: send real code to server
      this.counter = this.counter - 1;
      return;
      // if (this.code.endsWith("9")) {
      //   this.$store.commit("global/modal", "PatchCode");
      // } else {
      //   this.counter = this.counter - 1;
      // }
    },
  },
};
</script>

<style>
</style>