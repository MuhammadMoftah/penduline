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
        :class="tab == 'locations' ? 'tab-active':''"
        @click="setTab('locations')"
      >{{$t('locations')}}</a>
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
            <p class="font-bold text-center text-theme1">136</p>
          </div>
        </figure>

        <div class="flex flex-col justify-center p-4 border border-slate-200">
          <h5 class="mb-1 text-sm font-semibold text-slate-400">{{$t("name")}}</h5>
          <p class="text-sm font-semibold text-slate-800">Muhammad Moftah</p>
        </div>

        <div class="flex flex-col justify-center p-4 border border-slate-200">
          <h5 class="mb-1 text-sm font-semibold text-slate-400">{{$t("email")}}</h5>
          <p class="text-sm font-semibold lowercase text-slate-800">Muhammad.moftah3787@gmail.com</p>
        </div>

        <div class="flex flex-col justify-center p-4 border border-slate-200">
          <h5 class="mb-1 text-sm font-semibold text-slate-400">{{$t("mobile")}}</h5>
          <p class="text-sm font-semibold text-slate-800">01111564928</p>
        </div>
      </div>

      <!-- Locations -->
      <transition-group
        tag="div"
        name="slide-fade"
        appear
        v-if="tab == 'locations'"
        class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <LocationCard v-for="n in 6" :key="n" />
        <aside
          key="addLocation"
          class="flex flex-col items-center justify-center p-5 bg-white border shadow-sm rounded-3xl border-slate-100"
          @click="$store.commit('global/modal', 'location')"
        >
          <button class="w-20 h-20 rounded-full btn bg-slate-100 hover:bg-slate-200">
            <PlusIcon class="w-10 h-10 mx-auto text-theme1" />
          </button>
          <p class="mt-4 text-sm font-semibold text-slate-600">{{$t('add_new_location')}}</p>
        </aside>
      </transition-group>

      <!-- orders -->
      <transition-group tag="div" name="slide-fade" appear v-if="tab == 'orders'">
        <nav class="flex" key="nav">
          <li
            class="w-full py-4 text-sm font-semibold text-center list-none duration-300 cursor-pointer hover:bg-slate-200"
            :class="ordersTab =='all'?'text-theme1':'text-slate-700'"
            @click="ordersTab = 'all'"
          >{{$t('all')}}</li>
          <li
            class="w-full py-4 text-sm font-semibold text-center list-none duration-300 cursor-pointer hover:bg-slate-200"
            :class="ordersTab =='orders'?'text-theme1':'text-slate-700'"
            @click="ordersTab = 'orders'"
          >{{$t('orders')}}</li>
          <li
            class="w-full py-4 text-sm font-semibold text-center list-none duration-300 cursor-pointer hover:bg-slate-200"
            :class="ordersTab =='gifts'?'text-theme1':'text-slate-700'"
            @click="ordersTab = 'gifts'"
          >{{$t('gifts')}}</li>
        </nav>
        <transition-group
          tag="div"
          name="slide-fade"
          key="orders"
          class="grid gap-4"
          v-if="ordersTab == 'orders' || ordersTab == 'all'"
        >
          <StyleOrderCard v-for="n in 3" :key="n" />
        </transition-group>
        <transition-group
          tag="div"
          name="slide-fade"
          key="gifts"
          class="grid gap-4 mt-4"
          v-if="ordersTab == 'gifts' || ordersTab == 'all'"
        >
          <StyleOrderCard :gift="true" v-for="n in 3" :key="'2'+n" />
        </transition-group>
      </transition-group>

      <!-- wishlist -->
      <transition-group
        tag="div"
        name="slide-fade"
        appear
        v-if="tab == 'wishlist'"
        class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <VProductCard v-for=" n in 5" :key="n" />
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
    <PopupLocationModal v-if="modal== 'location'" />
    <PopupAddChildModal v-if="modal == 'AddChild'" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      tab: "profile",
      ordersTab: "all",
      profileImage: "",
    };
  },
  computed: {
    modal() {
      return this.$store.state.global.modal;
    },
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