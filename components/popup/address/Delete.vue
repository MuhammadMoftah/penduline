<template>
  <section>
    <PopupModal classes="max-w-lg" :title="$t('delete_address')">
      <form class="px-5 overflow-auto space-y-3 max-h-[75vh]" @submit.prevent="done()">
        <p class="py-5 text-lg font-medium text-slate-600">
          {{$t('delete_address_p')}}
          <span class="text-red-600">{{oldData.name}}</span>
          <br />
          {{$t('are_you_sure')}}
        </p>

        <div class="py-2">
          <button
            class="px-8 bg-red-600 hover:bg-red-700 btn"
            :class="mixLoader ? 'loading':''"
          >{{$t("submit")}}</button>
        </div>
      </form>
    </PopupModal>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    oldData() {
      return this.$store.state.addresses.item
    }
  },

  methods: {
    done() {
      this.mixLoader = true
      this.$axios.post(`/addresses/${this.oldData.id}?_method=DELETE`)
        .then(() => {
          this.$store.commit('global/closeModal');
          this.$store.dispatch('addresses/getItems')
        })
        .catch((err) => { this.$errorHandler(err) })
    },
  },
};
</script>

<style>
</style>