<template>
  <section class="container pt-32 mb-16">
    <h5 class="mb-8 text-lg font-semibold capitalize text-slate-800">
      {{$t('my_cart')}}
      <span class="mx-3 text-sm text-slate-400">(4 {{$t('items')}})</span>
    </h5>

    <div class="grid grid-cols-1 gap-5 lg:grid-cols-7">
      <article
        class="max-h-[500px] space-y-5 overflow-y-auto ltr:pr-2 rtl:pl-2 col-span-7 lg:col-span-5"
      >
        <CartItemCard v-for="n in 4" :key="n" />
      </article>

      <aside class="self-start col-span-7 lg:col-span-2">
        <div class="p-5 bg-white shadow-sm rounded-xl">
          <div class="rounded-full input-group rtl:flex-row-reverse">
            <input
              type="text"
              placeholder="Coupon code"
              class="w-full p-3 text-sm border-2 border-r-0 focus:outline-none"
            />
            <button
              type="button"
              class="text-white capitalize border-0 btn no-animation click-scale bg-theme1 hover:bg-theme0"
            >{{$t('apply')}}</button>
          </div>

          <div class="px-1 py-2 capitalize border-b border-slate-100">
            <p class="flex items-center justify-between py-2 text-xs font-semibold text-slate-500">
              <span>{{$t('subtotal')}} (7 {{$t('items')}})</span>
              <span>120 {{$t('egp')}}</span>
            </p>
            <p class="flex items-center justify-between py-2 text-xs font-semibold text-slate-500">
              <span>{{$t('delivery_within')}}</span>
              <span>3 {{$t('days')}}</span>
            </p>
            <p class="flex items-center justify-between py-2 text-xs font-semibold text-slate-500">
              <span>{{$t('shipping')}}</span>
              <span>20 {{$t('egp')}}</span>
            </p>

            <p class="flex items-center justify-between py-2 text-xs font-semibold text-slate-500">
              <span>{{$t('discount')}}</span>
              <span>20 {{$t('egp')}}</span>
            </p>
          </div>
          <p
            class="flex items-center justify-between px-1 py-2 text-xs font-semibold capitalize text-slate-500"
          >
            <span>{{$t('total')}} ({{$t('inclusive_of_vat')}})</span>
            <span>120 {{$t('egp')}}</span>
          </p>
        </div>

        <NuxtLink
          :to="localePath('/checkout')"
          tag="button"
          type="button"
          class="mt-6 theme-btn click-scale"
        >{{$t('checkout')}}</NuxtLink>
      </aside>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style >
</style>