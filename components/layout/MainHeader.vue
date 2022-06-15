<template>
  <header
    class="fixed top-0 left-0 z-30 w-full duration-500"
    :class="scrolled ? 'bg-white shadow-lg  py-3' : 'bg-transparent py-6'"
  >
    <div class="container flex justify-between">
      <Logo class="w-20 lg:w-[120px] lg:min-w-[120px]" />
      <nav
        class="items-center justify-between hidden w-full text-sm font-semibold capitalize lg:flex lg:px-20 text-slate-600"
      >
        <NuxtLink :to="localePath('/')" class="duration-300">{{$t('penduline_world')}}</NuxtLink>
        <NuxtLink :to="localePath('/baby-mom')" class="duration-300">{{$t('baby_mom')}}</NuxtLink>
        <NuxtLink :to="localePath('/curly-hair')" class="duration-300">{{$t('curly_hair')}}</NuxtLink>
        <NuxtLink :to="localePath('/products')" class="duration-300">{{$t('products')}}</NuxtLink>
        <NuxtLink :to="localePath('/scratch-win')" class="duration-300">{{$t('scratch_win')}}</NuxtLink>
        <NuxtLink :to="localePath('/blogs')" class="duration-300">{{$t('blogs')}}</NuxtLink>
        <button
          type="button"
          class="font-semibold"
          v-if="$i18n.locale !== 'en'"
          @click="switchLang('en')"
        >English</button>
        <button class="font-semibold" v-else @click="switchLang('ar')">Arabic</button>
      </nav>
      <aside class="flex items-center justify-around w-40">
        <button type="button" class="indicator click-scale">
          <span
            class="border-none rounded-full h-4 px-1 badge badge-sm indicator-item bg-theme1 text-[10px] text-white"
          >4</span>
          <CartIcon
            @click.native="$router.push(localePath('/my-cart'))"
            class="w-4 h-4 lg:w-5 lg:h-5 text-slate-600"
          />
        </button>
        <button type="button" class="click-scale" @click="$store.commit('global/modal', 'login')">
          <UserIcon class="w-4 h-4 lg:w-5 lg:h-5 text-slate-600" />
        </button>

        <button
          type="button"
          @click="$store.commit('global/openMobileNav')"
          class="lg:hidden click-scale"
        >
          <MenuIcon class="w-5 h-5 lg:w-6 lg:h-6 text-slate-600" />
        </button>
      </aside>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 80) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    switchLang(code) {
      if (code == "ar") {
        document.documentElement.style.setProperty(
          "--appFont",
          "'Tajawal', sans-serif"
        );
      } else {
        document.documentElement.style.setProperty(
          "--appFont",
          "'Manrope', sans-serif"
        );
      }
      this.$i18n.setLocale(code);
    },
  },
};
</script>

<style scoped>
>>> .nuxt-link-exact-active {
  @apply text-black relative font-bold;
}
>>> .nuxt-link-exact-active::after {
  @apply content-[''] absolute  w-[6px] h-[6px]  rounded-full bg-theme1 -top-3 left-1/2 -translate-x-1/2;
}
</style>