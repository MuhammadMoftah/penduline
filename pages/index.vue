<template>
  <main>
    <!-- cover  -->
    <section>
      <HomeCover />
    </section>

    <!-- about (awards & usb) -->
    <section class="mt-32">
      <HomeAboutSection />
    </section>

    <section class="mt-32">
      <HomeProductsSection />
    </section>

    <!-- POS section  -->
    <section class="mt-32">
      <HomePosSection />
    </section>

    <!-- scratch  section -->
    <section class="mt-32">
      <ScratchSection></ScratchSection>
    </section>

    <section class="mt-32" v-if="false">
      <BriefAndDetails :title="$t('about_penduline')" :desc="$t('penduline_info')">
        <div class="flex items-center justify-center">
          <NuxtLink
            tag="button"
            type="button"
            :to="localePath('/about')"
            class="block h-12 mt-12 text-lg capitalize duration-300 rounded-full shadow-2xl lg:h-16 lg:text-2xl px-14 shadow-pink-500 w-fit bottom-20 lg:bottom-24 theme-btn ltr:tracking-widest click-scale"
          >{{$t('about_penduline')}}</NuxtLink>
        </div>
      </BriefAndDetails>
    </section>

    <section class="mt-32">
      <HomeNewsSection />
    </section>

    <section class="flex mt-32">
      <HomeBlogsSection />
    </section>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
