<template>
  <section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <AddressCard :item="el" v-for="el in items" :key="el.id" />

    <!-- new address button  -->
    <aside
      key="addLocation"
      class="flex flex-col items-center justify-center p-5 bg-white border shadow-sm rounded-3xl border-slate-100"
      @click="$store.commit('addresses/item', null),$store.commit('global/modal', 'CreateAddress')"
    >
      <button class="w-20 h-20 rounded-full btn bg-slate-100 hover:bg-slate-200">
        <PlusIcon class="w-10 h-10 mx-auto text-theme1" />
      </button>
      <p class="mt-4 text-sm font-semibold text-slate-600">{{$t('add_new_address')}}</p>
    </aside>

    <p
      class="w-full col-span-4 p-10 text-sm font-semibold text-center text-slate-500 xl:text-base"
      key="empty"
      v-if="!items.length"
    >{{$t('empty_data')}}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      addresses: [],
    };
  },
  created() {
    this.$store.dispatch('addresses/getItems')
  },

  computed: {
    items() {
      return this.$store.state.addresses.items
    }
  }
};
</script>

<style>
</style>