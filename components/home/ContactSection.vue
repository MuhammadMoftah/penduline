<template>
  <section class="container">
    <div class="flex justify-between mb-8">
      <Title :first="$t('contact_us')" />
    </div>

    <div class="grid grid-cols-1 mt-16 lg:grid-cols-3">
      <article class="mb-8">
        <h5 class="mb-2 text-xl font-semibold capitalize text-slate-800">{{$t("dokki_giza")}}</h5>
        <span class="block mb-2 text-slate-500">{{$t("dokki_addr")}}</span>
        <a
          target="_blank"
          class="block mb-2 text-sm capitalize btn-link"
          href="https://www.google.com/maps?q=64+,+Tahrir+Street+,+Dokki+,+Giza,+Dokki+12311,+Egypt&z=8"
        >{{$t("view_on_map")}}</a>

        <p
          class="mb-2 text-sm capitalize"
        >{{$t("from")}} 10 {{$t("am")}} {{$t("to")}} 6 {{$t("pm")}}</p>

        <p class="flex items-center text-sm capitalize">
          <span class>{{$t("phone")}}:</span>
          <a
            href="tel:+201068977599 "
            class="mx-1 font-semibold btn-link text-slate-600 hover:text-theme1"
          >01068977599</a>
        </p>

        <button
          class="w-48 my-8 rounded-full shadow-xl theme-btn click-scale shadow-pink-300"
        >{{$t('more_details')}}</button>
      </article>

      <figure class="col-span-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.9829925344084!2d31.20423551511494!3d30.037345781884948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846d26c5d7555%3A0x1b3ce123d7c18231!2s64%20El%20Tahrir%2C%20Ad%20Doqi%2C%20Dokki%2C%20Giza%20Governorate%203751120!5e0!3m2!1sen!2seg!4v1653391566057!5m2!1sen!2seg"
          height="400"
          class="w-full rounded-md shadow-md"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped >
</style>