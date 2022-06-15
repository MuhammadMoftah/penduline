<template>
  <section class="container">
    <div class="flex justify-between mb-8">
      <Title :first="$t('our_products')" />
    </div>
    <section class="grid grid-cols-3 gap-4 mt-12">
      <PartitionCard
        :title="'Penduline Baby'"
        :desc="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas at tenetur similique, doloremque dicta cum veniam quia eligendi excepturi obcaecati harum dolorum iste consequatur ut accusamus culpa. Explicabo, ex voluptate!'"
        :img="'https://cdn.pixabay.com/photo/2018/05/11/07/45/mother-3389671_960_720.jpg'"
        route="/products"
        class="shadow-lg"
      />
      <PartitionCard
        :title="'Penduline Kids'"
        :desc="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas at tenetur similique, doloremque dicta cum veniam quia eligendi excepturi obcaecati harum dolorum iste consequatur ut accusamus culpa. Explicabo, ex voluptate!'"
        :img="'https://cdn.pixabay.com/photo/2015/06/22/08/38/children-817368_960_720.jpg'"
        route="/products"
        class="shadow-lg"
      />

      <PartitionCard
        :title="'Penduline Curly'"
        :desc="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas at tenetur similique, doloremque dicta cum veniam quia eligendi excepturi obcaecati harum dolorum iste consequatur ut accusamus culpa. Explicabo, ex voluptate!'"
        :img="'https://images.pexels.com/photos/1862655/pexels-photo-1862655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
        route="/products"
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