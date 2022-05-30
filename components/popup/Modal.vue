<template>
  <section>
    <span @click="close()" class="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-[99]"></span>

    <!-- modal content -->
    <transition name="slide-in-Y">
      <div
        v-if="open"
        class="py-5 px-6 bg-slate-50 rounded-2xl w-full max-h-[98vh] fixed z-[99] top-1/2 -translate-y-1/2 mx-auto left-0 right-0"
        :class="classes ? classes : 'max-w-2xl min-h-[200px]'"
      >
        <!-- close button  -->
        <button
          type="button"
          @click="close()"
          class="absolute p-1 top-5 ltr:right-5 rtl:left-10 btn btn-circle btn-ghost btn-sm"
        >
          <CrossIcon class="w-6 h-6 text-slate-600" />
        </button>

        <!-- title -->
        <div class="flex flex-col items-center justify-center">
          <h5
            class="mb-1 text-3xl font-bold capitalize text-slate-800"
            v-if="title"
          >{{title}}</h5>
          <p class="text-sm font-semibold capitalize text-slate-500" v-if="subtitle">{{subtitle}}</p>
        </div>

        <!-- modal body  -->
        <section class="mt-5">
          <slot name="default"></slot>
        </section>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: ["classes", "title", "subtitle"],
  data() {
    return {
      open: false,
    };
  },
  created() {
    setTimeout(() => {
      this.open = true;
    }, 10);
  },

  methods: {
    close() {
      this.open = false;
      setTimeout(() => {
        this.$store.commit("global/closeModal");
      }, 100);
    },
  },
};
</script>

<style>
</style>