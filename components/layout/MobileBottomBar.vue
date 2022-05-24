<template>
  <ul
    class="fixed bottom-0 left-0 z-30 flex items-center justify-between w-full text-center bg-white border-t shadow-xl text-slate-700"
  >
    <NuxtLink
      :to="localePath('/')"
      class="flex flex-col items-center justify-center w-full py-2 font-semibold capitalize duration-300 cursor-pointer"
    >
      <HomeIcon class="w-5 h-5" />
      <span class="text-xs">{{$t('home')}}</span>
    </NuxtLink>

    <NuxtLink
      :to="localePath('/products')"
      class="flex flex-col items-center justify-center w-full py-2 font-semibold capitalize duration-300 cursor-pointer"
    >
      <GridIcon class="w-5 h-5" />
      <span class="text-xs">{{$t('products')}}</span>
    </NuxtLink>

    <NuxtLink
      :to="localePath('/gifts')"
      class="flex flex-col items-center justify-center w-full py-2 font-semibold capitalize duration-300 cursor-pointer"
    >
      <GiftIcon class="w-5 h-5" />
      <span class="text-xs">{{$t('gifts')}}</span>
    </NuxtLink>

    <NuxtLink
      :to="localePath('/my-cart')"
      class="flex flex-col items-center justify-center w-full py-2 font-semibold capitalize duration-300 cursor-pointer"
    >
      <CartIcon class="w-5 h-5" />
      <span class="text-xs">{{$t('my_cart')}}</span>
    </NuxtLink>

    <NuxtLink
      :to="localePath('/contact-us')"
      class="flex flex-col items-center justify-center w-full py-2 font-semibold capitalize duration-300 cursor-pointer"
    >
      <HeadphoneIcon class="w-5 h-5" />
      <span class="text-xs">{{$t('contact_us')}}</span>
    </NuxtLink>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
>>> .nuxt-link-exact-active {
  @apply text-theme1 font-bold !important;
}
</style>