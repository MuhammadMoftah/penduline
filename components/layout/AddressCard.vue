<template>
  <section
    class="relative flex flex-col p-5 overflow-hidden bg-white border shadow-sm rounded-3xl border-slate-100"
  >
    <PinIcon
      v-if="item.is_default"
      class="absolute w-8 h-8 text-slate-400 top-5 rtl:left-3 ltr:right-3"
    />
    <h5 class="text-sm font-bold capitalize text-slate-800">{{item.name}}</h5>
    <h5 class="mb-4 text-sm font-bold capitalize text-slate-800">{{item.city.name}}</h5>
    <p
      class="mb-1 text-sm font-semibold capitalize text-slate-400"
    >Building {{item.building_number}}, {{item.street_name}}</p>
    <p class="mb-1 text-sm font-semibold capitalize text-slate-400">{{item.district.name}}</p>
    <p class="mb-1 text-sm font-semibold capitalize text-slate-400">{{item.postal_code}}</p>
    <div class="flex items-center justify-around pt-4 mt-4 border-t border-slate-100">
      <button
        type="button"
        class="flex items-center text-xs font-semibold hover:text-theme1 click-scale text-slate-400"
        @click="$store.commit('addresses/item', item),$store.commit('global/modal', 'DeleteAddress')"
      >
        <TrashIcon class="w-5 h-5 ltr:mr-1 rtl:ml-1" />
        {{$t('remove')}}
      </button>
      <span class="w-[1px] h-6 mx-4 rounded-full bg-slate-200 opacity-0"></span>

      <!-- todo: finish edit address  -->
      <button
        type="button"
        class="flex items-center text-xs font-semibold opacity-0 pointer-events-none hover:text-theme1 click-scale text-slate-400"
        @click="$store.commit('addresses/item', item),$store.commit('global/modal', 'CreateAddress')"
      >
        <EditIcon class="w-5 h-5 ltr:mr-1 rtl:ml-1" />
        {{$t('edit')}}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>