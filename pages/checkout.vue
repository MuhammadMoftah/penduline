<template>
  <section class="container pt-32">
    <h5 class="mb-8 text-lg font-semibold capitalize text-slate-800">
      {{$t('checkout')}}
      <span class="mx-3 text-sm text-slate-400">(120 {{$t('egp')}})</span>
    </h5>

    <div class="grid grid-cols-1 gap-5 lg:grid-cols-7">
      <article
        class="max-h-[500px] space-y-5 overflow-y-auto ltr:pr-2 rtl:pl-2 col-span-7 lg:col-span-5"
      >
        <div class="font-semibold rounded-lg bg-blue-50 alert alert-info">
          <div class="text-sm text-blue-500">
            <InfoIcon class="w-5 h-5 text-blue-700" />
            <span>{{$t('free_shipping_if')}} 200 {{$t('egp')}}</span>
            <NuxtLink
              :to="localePath('/products')"
              class="font-bold underline"
            >{{$t('continue_shopping')}}</NuxtLink>
          </div>
        </div>

        <div class="p-5 bg-white shadow-sm rounded-xl">
          <h5 class="mb-4 text-lg font-semibold text-slate-800">{{$t('delivery_method')}}</h5>

          <aside>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" class="radio radio-primary radio-xs" name="checkout-type" />
              <p
                class="text-sm font-semibold text-slate-600"
              >{{$t('delivery_to_door')}} (+20 {{$t('egp')}})</p>
            </label>
            <p class="mt-1 text-xs text-slate-500">
              {{$t('delivery_between')}}
              <span class="font-semibold text-slate-600">Tuesday 24 May</span> ,
              <span class="font-semibold text-slate-600">Wednesday 25 May</span>
            </p>
          </aside>

          <aside class="mt-6">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" class="radio radio-primary radio-xs" name="checkout-type" />
              <p
                class="text-sm font-semibold text-slate-600"
              >{{$t('collect_from_pos')}} ({{$t('free_shipping')}})</p>
            </label>
            <p class="mt-1 text-xs text-slate-500">
              {{$t('delivery_between')}}
              <span class="font-semibold text-slate-600">Tuesday 24 May</span> ,
              <span class="font-semibold text-slate-600">Wednesday 25 May</span>
            </p>
          </aside>

          <button
            type="button"
            class="block max-w-xs mx-auto mt-16 theme-btn click-scale"
          >{{$t('submit')}}</button>
        </div>
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
      </aside>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style >
</style>