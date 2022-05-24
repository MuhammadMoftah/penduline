<template>
  <section>
    <Modal classes="max-w-4xl">
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
    </Modal>
  </section>
</template>

<script>
import Modal from "~/components/popup/Modal.vue";

export default {
  props: ["link"],
  components: {
    Modal,
  },
  methods: {},
};
</script>

<style>
</style>