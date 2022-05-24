<template>
  <main>
    <!-- cover  -->
    <section>
      <HomeCover />
    </section>

    <section class="mt-32">
      <HomeArrivalSection />
    </section>

    <section class="mt-32">
      <HomeCollectionSection />
    </section>

    <section class="mt-32">
      <InfoSection
        first="PENDOLIN"
        rest="PLUS"
        :desc="$t('semak_best_choise')"
        :imgSrc="require('~/static/penduline3.png')"
      />
    </section>

    <section class="flex mt-32">
      <HomeBlogsSection />
    </section>

    <section class="mt-32">
      <InfoSection
        first="SEMAK"
        rest="UMMM"
        :desc="$t('semak_best_choise')"
        :imgSrc="require('~/static/penduline.png')"
      />
    </section>

    <section class="mt-32">
      <HomeMostSellsSection />
    </section>
    <section class="mt-32">
      <HomeReviewsSection />
    </section>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
