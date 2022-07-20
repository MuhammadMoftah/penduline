<template>
  <section>
    <PopupModal classes="max-w-4xl">
      <div class="pt-5 pb-7">
        <video class="w-full mx-auto rounded-lg" controls>
          <source :src="link" type="video/mp4" />
          <source :src="link" type="video/ogg" />Your browser does not support HTML video.
        </video>
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