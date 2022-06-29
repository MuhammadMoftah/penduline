<template>
  <main :dir="$t('dir')">
    <MainHeader />
    <nuxt />
    <MainFooter class="lg:mb-0 mb-14" />
    <MobileNav />

    <MobileBottomBar class="lg:hidden" />

    <!-- modals  -->
    <AuthRegisterModal v-if="modal== 'register'" />
    <AuthLoginModal v-if="modal == 'login'" />
    <AuthForgetPasswordModal v-if="modal == 'forgetPassword'" />
    <PopupScratchCodeModal v-if="modal == 'ScratchCode'" />
    <PopupPatchCodeModal v-if="modal == 'PatchCode'" />
  </main>
</template>

<script>
export default {
  beforeMount() {
    this.setFont();

    //syncCart with localStorage
    this.$syncCart();
  },
  created() {
    this.setAxios();
  },
  methods: {
    setAxios() {
      const code = this.$i18n.locale;
      // for headers also
      this.$axios.setHeader("Application-Lang", code);
    },
    setFont() {
      const code = this.$i18n.locale;
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
    },
  },
  computed: {
    modal() {
      return this.$store.state.global.modal;
    },
  },
};
</script>

<style>
</style>