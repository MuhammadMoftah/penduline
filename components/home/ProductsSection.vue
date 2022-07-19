<template>
  <section class="container">
    <div class="flex justify-between mb-8">
      <Title :first="$t('our_products')" />
    </div>
    <section class="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
      <PartitionCard
        :title="this.$t('penduline_baby')"
        :desc="this.$t('penduline_baby_desc')"
        :img="require('@/static/home-banners/baby-slider.jpg')"
        route="/products?filter[categories.id]=2"
        class="shadow-lg"
      />
      <PartitionCard
        :title="this.$t('penduline_kids')"
        :desc="this.$t('penduline_kids_desc')"
        :img="require('@/static/home-banners/kids-slider.jpg')"
        route="/products?filter[categories.id]=7"
        class="shadow-lg"
      />

      <PartitionCard
        :title="this.$t('penduline_curly')"
        :desc="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas at tenetur similique, doloremque dicta cum veniam quia eligendi excepturi obcaecati harum dolorum iste consequatur ut accusamus culpa. Explicabo, ex voluptate!'"
        :img="require('@/static/home-banners/curly-slider.jpg')"
        route="/products?filter[categories.id]=5"
        class="shadow-lg"
      />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style >
</style>