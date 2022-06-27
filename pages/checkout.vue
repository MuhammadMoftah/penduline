<template>
  <section class="container pt-32">
    <h5 class="mb-8 text-lg font-semibold capitalize text-slate-800">
      {{$t('checkout')}}
      <span class="mx-3 text-sm text-slate-400">({{subTotal}} {{$t('egp')}})</span>
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

          <div class="space-y-6" v-if="addresses.length">
            <aside v-for="el in addresses" :key="el.id" class>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="pickedLocation"
                  class="radio radio-primary radio-xs"
                  name="checkout-type"
                  :value="el"
                />
                <p
                  class="text-sm font-semibold capitalize text-slate-600"
                >{{el.name}} (+{{el.district.delivery_fees}} {{$t('egp')}})</p>
              </label>
              <p class="mt-1 text-xs text-slate-500">
                {{$t('delivery_within')}}
                <span
                  class="font-semibold text-slate-600"
                >{{el.district.delivery_days}} {{$t('days')}}</span>
              </p>
            </aside>
          </div>

          <!-- <aside>
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
          </aside>-->

          <!-- <aside class="mt-6">
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
          </aside>-->

          <div class="grid mt-16 place-items-center">
            <button
              type="button"
              @click="makeOrder()"
              class="max-w-xs mx-auto btn theme-btn click-scale"
              :class="mixLoader == 'order' ? 'loading' : ''"
            >{{$t('submit')}}</button>
          </div>
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
              @click="applyCoupon()"
              class="text-white capitalize border-0 btn no-animation click-scale bg-theme1 hover:bg-theme0"
              :class="mixLoader == 'coupon' ? 'loading' : ''"
            >{{$t('apply')}}</button>
          </div>

          <div class="px-1 py-2 capitalize border-b border-slate-100">
            <p class="flex items-center justify-between py-2 text-xs font-semibold text-slate-500">
              <span>{{$t('subtotal')}} ({{itemQuantity}} {{$t('items')}})</span>
              <span>{{subTotal}} {{$t('egp')}}</span>
            </p>
            <p class="flex items-center justify-between py-2 text-xs font-semibold text-slate-500">
              <span>{{$t('delivery_within')}}</span>
              <span>{{pickedLocation.district ? pickedLocation.district.delivery_days : '...' }} {{$t('days')}}</span>
            </p>

            <p class="flex items-center justify-between py-2 text-xs font-semibold text-slate-500">
              <span>{{$t('shipping')}}</span>
              <span>{{pickedLocation.district ? pickedLocation.district.delivery_fees : '...'}} {{$t('egp')}}</span>
            </p>

            <p class="flex items-center justify-between py-2 text-xs font-semibold text-slate-500">
              <span>{{$t('discount')}}</span>
              <span>0 {{$t('egp')}}</span>
            </p>
          </div>
          <p
            class="flex items-center justify-between px-1 py-2 text-xs font-semibold capitalize text-slate-500"
          >
            <!-- ({{$t('inclusive_of_vat')}}) -->
            <span>{{$t('total')}}</span>
            <span>{{grandTotal}} {{$t('egp')}}</span>
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>

<script>
export default {
  name: "CheckoutPage",

  data() {
    return {
      locations: [],
      addresses: [],
      pickedLocation: {},
      form: {},
    };
  },
  mounted() {
    this.$axios
      .$get("/locations?include=children,parent,descendants&filter[type]=city")
      .then((res) => {
        this.locations = res.data;
      });
    // this.$axios.$get("/coupons");

    this.$axios.$get("/addresses?include=city,district").then((res) => {
      this.addresses = res.data;
    });
  },
  methods: {
    makeOrder() {
      this.mixLoader = "order";
      if (!this.pickedLocation.id) {
        this.$toast.error("Please pick a location");
        this.mixLoader = false;
        return;
      }

      // the correct to sent .pickedLocation.id
      this.form["address_id"] = this.addresses[0].id;
      // this.form["address_id"] = this.pickedLocation.id;
      this.form["delivery_days"] = this.pickedLocation.district?.delivery_days;
      this.form["delivery_fees"] = this.pickedLocation.district?.delivery_fees;
      this.form["sub_total"] = this.subTotal;
      this.form["grand_total"] = this.grandTotal;
      for (let i in this.cartItems) {
        this.form[`products[${i}][id]`] = this.cartItems[i].id;
        this.form[`products[${i}][price]`] = this.cartItems[i].price;
        this.form[`products[${i}][quantity]`] = this.cartItems[i].quantity;
      }

      this.form["type"] = "cash";

      this.form = this.$objectToFormData(this.form);

      this.$axios
        .post("/orders", this.form)
        .then((res) => {
          this.$toast.success("Order placed successfully");

          this.$store.commit("cart/items", []);
          this.$auth.$storage.setLocalStorage("cartItems", []);
          this.$router.push("/products");
        })
        .catch((err) => {
          this.$errorHandler(err);
          this.mixLoader = false;
        });

      this.mixLoader = false;
    },
    applyCoupon() {
      this.mixLoader = "coupon";
      setTimeout(() => {
        this.mixLoader = false;
        this.$toast.error("Coupon code is not valid");
      }, 700);
    },
  },
  computed: {
    cartItems() {
      return this.$store.getters["cart/items"];
    },
    itemQuantity() {
      return this.$store.getters["cart/itemsQuantity"];
    },
    subTotal() {
      return this.$store.getters["cart/subTotal"];
    },
    grandTotal() {
      if (!this.pickedLocation.id) {
        return 0;
      }
      return (
        this.$store.getters["cart/subTotal"] + this.pickedLocation.district?.delivery_fees
      );
    },
  },
};
</script>

<style >
</style>