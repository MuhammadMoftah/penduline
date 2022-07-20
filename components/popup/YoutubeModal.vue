<template>
  <section>
    <PopupModal classes="max-w-4xl">
      <div class="pt-5 pb-7">
        <iframe
          class="w-full mx-auto h-[400px] max-w-3xl rounded-lg"
          :src="link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </PopupModal>
  </section>
</template>

<script>

export default {
  props: ["link"],

  methods: {},
};
</script>

<style>
</style>