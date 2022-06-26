<template>
  <section class="py-2">
    <vue-slider
      :value="value"
      :min="min"
      :duration="0.2"
      :lazy="true"
      :tooltip="'hover'"
      :max="max"
      :direction="$t('dir')"
      @change="change"
    ></vue-slider>
  </section>
</template>

<script>
// import component
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";

// import theme
import "vue-slider-component/theme/default.css";
export default {
  components: {
    VueSlider,
  },
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    change(value) {
      this.$emit("input", value);
      // console.log("range", value);
    },
  },
};
</script>

<style scoped>
>>> .vue-slider-process {
  @apply bg-theme1 hover:brightness-110;
}
>>> .vue-slider-dot-tooltip-inner:after,
>>> .vue-slider-dot-tooltip-inner {
  display: none;
}
</style>