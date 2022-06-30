<template>
  <main class="container pt-32">
    <div class="w-full font-semibold tab-lg tabs flex-nowrap">
      <a
        class="w-full p-0 text-base md:text-lg tab-lg tab tab-bordered click-scale"
        :class="tab == 'profile' ? 'tab-active':''"
        @click="setTab('profile')"
      >{{$t('profile')}}</a>
      <a
        class="w-full p-0 text-base tab-lg md:text-lg tab tab-bordered click-scale"
        :class="tab == 'addresses' ? 'tab-active':''"
        @click="setTab('addresses')"
      >{{$t('addresses')}}</a>
      <a
        class="w-full p-0 text-base tab-lg md:text-lg tab tab-bordered click-scale"
        :class="tab == 'orders' ? 'tab-active':''"
        @click="setTab('orders')"
      >{{$t('orders')}}</a>
      <a
        class="w-full p-0 text-base tab-lg md:text-lg tab tab-bordered click-scale"
        :class="tab == 'wishlist' ? 'tab-active':''"
        @click="setTab('wishlist')"
      >{{$t('wishlist')}}</a>
      <a
        class="w-full p-0 text-base tab-lg md:text-lg tab tab-bordered click-scale"
        :class="tab == 'children' ? 'tab-active':''"
        @click="setTab('children')"
      >{{$t('children')}}</a>
    </div>

    <!-- tabs  -->
    <section class="text-slate-600 min-h-[500px] mt-8">
      <!-- profile -->
      <div v-if="tab == 'profile'" class="grid grid-cols-1 md:grid-cols-2">
        <figure class="flex items-end justify-between p-4 border border-slate-200">
          <div class="flex items-center gap-5">
            <img
              v-if="profileImage"
              class="object-contain w-12 h-12 rounded-full bg-slate-800"
              :src="profileImage"
              alt
            />
            <UserIcon v-else class="object-contain w-12 h-12 rounded-full text-slate-800" />
            <label class="btn btn-sm btn-circle btn-ghost">
              <input id="profileImage" type="file" hidden @change="prevImage($event)" />
              <EditIcon class="w-5 h-5 text-slate-500" />
            </label>
          </div>

          <div class="flex flex-col">
            <p class="mb-1 text-sm font-semibold text-slate-400">{{$t('my_points')}}</p>
            <p class="font-bold text-center text-theme1">{{$auth.user.total_points}}</p>
          </div>
        </figure>

        <div class="flex flex-col justify-center p-4 border border-slate-200">
          <h5 class="mb-1 text-sm font-semibold text-slate-400">{{$t("name")}}</h5>
          <p class="text-sm font-semibold text-slate-800">{{$auth.user.name}}</p>
        </div>

        <div class="flex flex-col justify-center p-4 border border-slate-200">
          <h5 class="mb-1 text-sm font-semibold text-slate-400">{{$t("email")}}</h5>
          <p class="text-sm font-semibold lowercase text-slate-800">{{$auth.user.email}}</p>
        </div>

        <div class="flex flex-col justify-center p-4 border border-slate-200">
          <h5 class="mb-1 text-sm font-semibold text-slate-400">{{$t("mobile")}}</h5>
          <p class="text-sm font-semibold text-slate-800">{{$auth.user.mobile}}</p>
        </div>
      </div>

      <!-- addresses -->
      <!-- todo: put real addresses  -->
      <transition name="slide-fade" appear>
        <KeepAlive>
          <ProfileAddresses v-if="tab == 'addresses'" />
        </KeepAlive>
      </transition>

      <!-- orders -->
      <transition name="slide-fade" appear>
        <KeepAlive>
          <ProfileOrders v-if="tab == 'orders'" />
        </KeepAlive>
      </transition>

      <!-- wishlist -->
      <transition-group
        tag="div"
        name="slide-fade"
        appear
        v-if="tab == 'wishlist'"
        class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <VProductCard :hidePrice="true" :item="el" v-for=" el in wishlistItems" :key="el.id" />
        <p
          v-if="!wishlistItems.length"
          class="w-full col-span-4 p-10 text-sm font-semibold text-center text-slate-500 xl:text-base"
          key="empty"
        >{{$t('empty_data')}}</p>
      </transition-group>

      <!-- children -->
      <div v-if="tab == 'children'">
        <p class="py-1 text-lg font-semibold text-slate-600">{{$t('children_section_brief')}}</p>
        <div class="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3">
          <StyleChildCard v-for="n in 6" :key="n" />
        </div>
        <button
          type="button"
          class="flex flex-col items-center justify-center w-48 p-5 mx-auto mt-10 bg-white border shadow-sm rounded-3xl border-slate-100"
          @click="$store.commit('global/modal', 'AddChild')"
        >
          <span class="w-20 h-20 rounded-full btn bg-slate-100 hover:bg-slate-200">
            <PlusIcon class="w-10 h-10 mx-auto text-theme1" />
          </span>
          <p class="mt-4 text-sm font-semibold text-slate-600">{{$t('add_child')}}</p>
        </button>
      </div>
    </section>

    <!-- modals  -->
    <PopupAddressCreate v-if="modal== 'CreateAddress'" />
    <PopupAddressDelete v-if="modal== 'DeleteAddress'" />
    <PopupAddChildModal v-if="modal == 'AddChild'" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      tab: "profile",
      profileImage: "",
    };
  },
  computed: {
    modal() {
      return this.$store.state.global.modal;
    },
    wishlistItems() {
      return this.$store.state.favorite.items;
    }
  },
  methods: {
    setTab(tab) {
      this.tab = tab;
    },
    prevImage(event) {
      this.profileImage = URL.createObjectURL(event.target.files[0]);
    },
  },
};
</script>

<style>
</style>