<template>
  <main>
    <!-- product section  -->
    <section
      class="pb-6 bg-cover pt-36"
      :style="`background-image: url(${require('~/assets/images/bg.png')})`"
    >
      <header class="container py-3 capitalize">
        <small class="font-semibold text-slate-600">{{$t("product")}}</small>
        <h5 class="text-xl font-semibold text-slate-800">{{tab}}</h5>
      </header>

      <div class="container flex flex-wrap">
        <div class="flex w-full pb-16 lg:w-2/3">
          <nav class="flex flex-col space-y-6 duration-500">
            <button
              type="button"
              @click="tab = 'image'"
              class="flex items-center h-12 gap-1 text-xs font-semibold duration-300 rounded-full text-slate-600"
              :class="tab == 'image' ? 'bg-white w-12 justify-center':'w-full justify-start'"
            >
              <ImageIcon class="w-5 h-5 text-slate-500" />
              {{tab == 'image' ? '' : 'image'}}
            </button>

            <button
              type="button"
              @click="tab = 'ingredients'"
              class="flex items-center h-12 gap-1 text-xs font-semibold duration-300 rounded-full text-slate-600"
              :class="tab == 'ingredients' ? 'bg-white w-12 justify-center':'w-full justify-start'"
            >
              <PlateIcon class="w-5 h-5 text-slate-500" />
              {{tab == 'ingredients' ? '' : 'ingredients'}}
            </button>

            <button
              type="button"
              @click="tab = 'description'"
              class="flex items-center h-12 gap-1 text-xs font-semibold duration-300 rounded-full text-slate-600"
              :class="tab == 'description' ? 'bg-white w-12  justify-center':'w-full justify-start'"
            >
              <BookIcon class="w-5 h-5 text-slate-500" />
              {{tab == 'description' ? '' : 'description'}}
            </button>

            <button
              type="button"
              @click="tab = 'safety'"
              class="flex items-center h-12 gap-1 text-xs font-semibold duration-300 rounded-full text-slate-600"
              :class="tab == 'safety' ? 'bg-white w-12  justify-center':'w-full justify-start'"
            >
              <WarningIcon class="w-5 h-5 text-slate-500" />
              {{tab == 'safety' ? '' : 'safety'}}
            </button>

            <!-- todo: useage secition  -->
            <button
              v-if="false"
              type="button"
              @click="tab = 'useage'"
              class="flex items-center h-12 gap-1 text-xs font-semibold duration-300 rounded-full text-slate-600"
              :class="tab == 'useage' ? 'bg-white w-12  justify-center':'w-full justify-start'"
            >
              <LightIcon class="w-5 h-5 text-slate-500" />
              {{tab == 'useage' ? '' : 'useage'}}
            </button>
          </nav>

          <section class="w-full bg-slate flex items-center h-[450px]">
            <!-- image section -->
            <figure v-if="tab == 'image'" class="h-full mx-auto max-w-md">
              <img
                v-if="item.images"
                :src="item.images[0]"
                class="object-contain h-full mx-auto"
                alt
              />
            </figure>

            <!-- ingredients section -->
            <figure
              class="relative flex flex-wrap content-start w-full h-full gap-2 p-3"
              v-if="tab == 'ingredients'"
            >
              <img
                v-if="item.images"
                :src="item.images[0]"
                class="absolute inset-0 object-contain h-full mx-auto opacity-20 blur-[1px]"
                alt
              />
              <template v-for="(el,i) in item.ingredients ">
                <div
                  :key="i"
                  :data-tip="el.name"
                  class="w-20 h-20 p-2 bg-black rounded-md cursor-pointer bg-opacity-60 tooltip hover:brightness-90"
                >
                  <img :src="el.icon" class="object-contain w-full h-full" :alt="el.name" />
                </div>
              </template>
            </figure>

            <!-- descr section -->
            <p
              v-if="tab == 'description'"
              class="relative w-11/12 px-10 pb-5 mx-auto text-sm leading-[27px] bg-white pt-14 text-slate-500 line rounded-3xl"
            >
              <img
                v-if="item.images"
                :src="item.images[0]"
                class="absolute object-contain h-32 -top-[80px] rtl:right-24 ltr:left-24"
                alt
              />
              {{item.description}}
            </p>

            <!-- safety section -->
            <div
              v-if="tab == 'safety'"
              class="relative w-11/12 px-10 pb-5 mx-auto text-sm leading-[27px] bg-white pt-14 text-slate-500 line rounded-3xl"
            >
              <img
                v-if="item.images"
                :src="item.images[0]"
                class="absolute object-contain h-32 -top-[80px] rtl:right-24 ltr:left-24"
                alt
              />
              <ul class="font-semibold list-disc">
                <li>{{item.warnings}}</li>
              </ul>
            </div>

            <!-- how to use section -->
            <div
              v-if="tab == 'useage'"
              class="relative w-11/12 px-10 pb-5 mx-auto text-sm leading-[27px] bg-white pt-14 text-slate-500 line rounded-3xl"
            >
              <img
                src="~/static/shower.png"
                class="absolute object-contain h-32 -top-[80px] rtl:right-24 ltr:left-24"
                alt
              />
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque cupiditate odio sint ipsa facere rerum veritatis ut explicabo magni ea iure corrupti
                <button
                  type="button"
                  dir="ltr"
                  @click="$store.commit('global/modal', 'useageVideo')"
                  class="flex items-center w-56 p-2 mx-auto my-5 duration-200 bg-white rounded-full shadow cursor-pointer hover:scale-95"
                >
                  <span class="p-2 rounded-full bg-theme1">
                    <PlayArrowIcon class="w-6 h-6 text-white" />
                  </span>
                  <span class="px-5 font-semibold uppercase text-slate-700">{{$t("watch_video")}}</span>
                </button>
              </div>
            </div>
          </section>
        </div>
        <div class="w-full lg:w-1/3">
          <header class="pt-1 pb-4 capitalize">
            <small class="font-semibold text-slate-600">{{$t("name")}}</small>
            <h5 class="text-2xl font-semibold text-slate-800">{{item.name}}</h5>
          </header>

          <p class="text-sm mb-5 leading-[27px] text-slate-600 font-semibold">
            <small class="block py-1 text-sm font-normal capitalize">{{$t("details")}}</small>
            {{item.description}}
          </p>

          <p class="text-sm leading-[27px] text-slate-600 font-semibold mb-5">
            <small class="block py-1 text-sm font-normal capitalize">{{$t("price")}}</small>
            <span class="text-3xl">{{item.price}} {{$t("egp")}}</span>
          </p>

          <!-- actions -->
          <div
            class="flex items-center justify-between p-3 mt-4 shadow-sm bg-slate-100 rounded-3xl bg-opacity-20"
          >
            <button
              @click="quantity++"
              class="w-12 duration-300 border rounded-full h-9 click-scale border-theme1 hover:bg-theme1 hover:text-white text-theme1"
            >
              <PlusIcon class="w-4 h-4 mx-auto" />
            </button>

            <input
              class="p-1 text-sm font-semibold text-center rounded-full outline-none h-9 w-14 text-slate-600 bg-slate-100"
              v-model="quantity"
              disabled
              type="number"
            />

            <button
              @click="quantity--"
              :disabled="quantity <= 1"
              class="w-12 duration-300 border rounded-full disabled:opacity-50 disabled:pointer-events-none h-9 click-scale border-theme1 hover:bg-theme1 hover:text-white text-theme1"
            >
              <MinusIcon class="w-4 h-4 mx-auto" />
            </button>

            <button
              type="button"
              class="h-10 text-xs font-semibold capitalize border rounded-full w-36 click-scale border-theme1 text-slate-800 hover:bg-theme1 hover:bg-opacity-5"
              @click="$addToCart(item, quantity)"
            >
              {{$t("add_to_cart")}}
              <BasketIcon class="inline-block w-4 h-4 mx-2 align-sub text-theme1" />
            </button>

            <!-- <button
              type="button"
              class="w-10 h-10 text-center rounded-full bg-opacity-10 bg-theme1 hover:bg-opacity-20 click-scale"
            >
              <HeartIcon class="w-5 h-5 mx-auto text-theme1" />
            </button>-->
            <label
              class="w-10 h-10 text-center rounded-full bg-opacity-10 bg-theme1 hover:bg-opacity-20 click-scale swap swap-rotate"
              v-if="$auth.user"
            >
              <input @click="handleFavProduct(item)" type="checkbox" :checked="isFavProduct(item)" />
              <HeartIcon class="w-5 h-5 text-theme1 drop-shadow swap-off" />
              <HeartCrossIcon class="w-5 h-5 text-theme1 drop-shadow swap-on" />
            </label>
          </div>
        </div>
      </div>
    </section>

    <!-- related products section -->
    <section class="mt-32">
      <RelatedProducts />
    </section>

    <!-- topic  section -->
    <section class="mt-32">
      <TopicSection link="https://www.youtube.com/channel/UC3CluiIbwXWc0iTa_pWaNWw">
        <template #bgImage>
          <UserIcon class="w-full h-full text-slate-400" />
        </template>

        <template #mainImage>
          <img src="~/static/kid1.png" class="object-contain w-full" alt />
        </template>
        <template #type>{{$t("topic")}}</template>
        <template #category>Children Skin Spots Treatment</template>
        <template #title>Does your son suffer from skin patches that look like burns?</template>
        <template #details>{{$t("lorem")}}</template>
      </TopicSection>
    </section>

    <!-- bolgs section -->
    <section class="mt-32">
      <HomeBlogsSection />
    </section>

    <!-- modals  -->
    <PopupYoutubeModal
      v-if="$store.state.global.modal == 'useageVideo'"
      link="https://www.youtube.com/embed/kf4woPY5gxQ"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      tab: "image",
      quantity: 1,
      item: {},
    };
  },
  async fetch() {
    const item = await this.$axios.$get(`/products/${this.$route.params.id}?include=ingredients,categories`)
    this.item = item.data;
  },

  methods: {
    handleFavProduct(item) {
      const items = this.$store.state.favorite.items;
      const condition = items.some(el => el.id == item.id)

      if (condition) {
        this.$store.commit('favorite/deleteItem', item);
        this.$toast.success('Removed from favorites');
      } else {
        this.$store.commit('favorite/appendItems', item);
        this.$toast.success('Added from favorites');
      }

      // Save in local storage
      this.$auth.$storage.setLocalStorage("favProducts", this.$store.state.favorite.items);
    },
    isFavProduct(item) {
      const items = this.$store.state.favorite.items;
      const isFound = items.some(el => el.id == item.id)
      if (isFound) {
        return true
      }
      return false
    },
  },
};
</script>

<style>
</style>