<template>
  <section>
    <Modal classes="max-w-lg" :title="$t('add_new_location')" :subtitle="$t('add_new_location')">
      <form class="px-5 overflow-auto space-y-3 max-h-[75vh]" @submit.prevent="done()">
        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('address_name')"
            type="text"
          />
        </label>

        <label for class="relative flex">
          <select
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md appearance-none ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
          >
            <option value>{{$t('choose_city')}}</option>
            <option value>One</option>
            <option value>Two</option>
            <option value>Three</option>
          </select>
          <DownChevronIcon
            class="absolute w-6 h-6 -translate-y-1/2 top-1/2 rtl:left-3 ltr:right-3 text-slate-400"
          />
        </label>

        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('street_name')"
            type="text"
          />
        </label>

        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('building_number')"
            type="text"
          />
        </label>

        <label for class="relative flex">
          <select
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md appearance-none ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
          >
            <option value>{{$t('select_neighborhood')}}</option>
            <option value>One</option>
            <option value>Two</option>
            <option value>Three</option>
          </select>
          <DownChevronIcon
            class="absolute w-6 h-6 -translate-y-1/2 top-1/2 rtl:left-3 ltr:right-3 text-slate-400"
          />
        </label>

        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('postal_code')"
            type="text"
          />
        </label>

        <label
          class="flex items-center gap-2 py-4 text-sm font-semibold cursor-pointer text-slate-500"
        >
          {{$t('set_default')}}
          <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
        </label>

        <div class="py-2">
          <button class="block theme-btn btn">{{$t("submit")}}</button>
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
  methods: {
    done() {},
  },
};
</script>

<style>
</style>