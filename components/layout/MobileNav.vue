<template>
  <div class="drawer" :class="mobileNav ? '' : 'h-0 w-0'">
    <input type="checkbox" class="drawer-toggle" title="nav" :checked="mobileNav" />
    <div class="fixed top-0 left-0 z-40 overflow-hidden drawer-side">
      <div class="drawer-overlay"></div>
      <div
        class="flex items-center justify-center w-full p-5 overflow-hidden bg-black menu bg-opacity-90"
        :class="mobileNav ? 'w-screen h-screen' : 'h-0 w-0'"
      >
        <CrossIcon
          class="absolute w-10 h-10 text-white cursor-pointer top-5 right-5 click-scale"
          @click.native="$store.commit('global/closeMobileNav')"
        />

        <nav
          class="flex flex-col items-center justify-center w-full space-y-5 font-semibold text-white capitalize"
        >
          <button @click="navigateTo('/')" class="font-semibold">{{$t('penduline_world')}}</button>
          <button @click="navigateTo('/baby-mom')" class="font-semibold">{{$t('baby_mom')}}</button>
          <button @click="navigateTo('/curly-hair')" class="font-semibold">{{$t('curly_hair')}}</button>
          <button @click="navigateTo('/products')" class="font-semibold">{{$t('products')}}</button>
          <button @click="navigateTo('/gifts')" class="font-semibold">{{$t('gifts')}}</button>
          <button @click="navigateTo('/blogs')" class="font-semibold">{{$t('blogs')}}</button>

          <button
            type="button"
            class="font-semibold"
            v-if="$i18n.locale !== 'en'"
            @click="switchLang('en')"
          >English</button>
          <button class="font-semibold" v-else @click="switchLang('ar')">Arabic</button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mobileNav() {
      return this.$store.state.global.mobileNav;
    },
  },
  methods: {
    navigateTo(path) {
      this.$router.push(this.localePath(path));
      this.$store.commit("global/closeMobileNav");
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

<style>
</style>