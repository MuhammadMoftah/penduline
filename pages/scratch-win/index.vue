<template>
  <section>
    <!-- cover  -->
    <section>
      <HomeCover />
    </section>

    <!-- scratch section  -->
    <ScratchSectionPref :title="'test title'" :desc="'Test desc'" />

    <!-- related products section -->
    <section class="mt-32">
      <RelatedProducts />
    </section>

    <!-- join family section -->
    <section class="mt-32">
      <JoinFamilySection />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
  computed: {

  },
};
</script>

<style>
</style>