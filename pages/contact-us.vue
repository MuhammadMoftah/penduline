<template>
  <main class="container pt-32">
    <header
      class="relative py-16 mb-16 overflow-hidden text-center text-white bg-theme0 rounded-3xl"
    >
      <img
        class="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-10"
        src="~/assets/images/title-bg.png"
        alt
      />
      <h5 class="mb-3 text-4xl font-bold capitalize ltr:tracking-widest">{{$t("contact_us")}}</h5>
      <p class="text-sm font-semibold ltr:tracking-widest">{{$t("info_about_us")}}</p>
    </header>

    <section class="flex flex-wrap">
      <div class="w-full lg:w-5/12">
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
          >{{$t("from")}} 10 {{$t("am")}} {{$t("to")}} 6 {{$t("pm")}} ({{$t('friday_off')}})</p>

          <p class="flex items-center text-sm capitalize">
            <span class>{{$t("phone")}}:</span>
            <a
              href="tel:+201068977599 "
              class="mx-1 font-semibold btn-link text-slate-600 hover:text-theme1"
            >01068977599</a>
          </p>
        </article>

        <article class="mb-8">
          <h5 class="mb-2 text-xl font-semibold capitalize text-slate-800">6 {{ $t("october")}}</h5>
          <span class="block mb-2 text-slate-500">{{$t("oct_addr")}}</span>
          <a
            target="_blank"
            class="block mb-2 text-sm capitalize btn-link"
            href="https://goo.gl/maps/cHywjHAYPSwdwuQ59"
          >{{$t("view_on_map")}}</a>

          <p
            class="mb-2 text-sm capitalize"
          >{{$t("from")}} 10 {{$t("am")}} {{$t("to")}} 10 {{$t("pm")}}</p>

          <p class="flex items-center text-sm capitalize">
            <span class>{{$t("phone")}}:</span>
            <a
              href="tel:16659"
              class="mx-1 font-semibold btn-link text-slate-600 hover:text-theme1"
            >16659</a>
          </p>
        </article>

        <article class="mb-8">
          <h5 class="mb-2 text-xl font-semibold capitalize text-slate-800">{{ $t("cairo")}}</h5>
          <span class="block mb-2 text-slate-500">{{$t("cairo_addr")}}</span>
          <a
            target="_blank"
            class="block mb-2 text-sm capitalize btn-link"
            href="https://goo.gl/maps/ABYfmrPHgSqYEjyG7"
          >{{$t("view_on_map")}}</a>

          <p
            class="mb-2 text-sm capitalize"
          >{{$t("from")}} 10 {{$t("am")}} {{$t("to")}} 10 {{$t("pm")}}</p>

          <p class="flex items-center text-sm capitalize">
            <span class>{{$t("phone")}}:</span>
            <a
              href="tel:16659"
              class="mx-1 font-semibold btn-link text-slate-600 hover:text-theme1"
            >16659</a>
          </p>
        </article>
      </div>

      <form class="w-full p-8 lg:p-16 lg:w-7/12 bg-slate-100 rounded-xl">
        <h5 class="mb-6 text-2xl font-semibold text-slate-600">{{$t("feel_free_to_contact")}}</h5>
        <input
          class="w-full h-12 px-4 mb-4 border rounded-md bg-slate-50 border-slate-300 outline-slate-400"
          :placeholder="$t('name')"
          type="text"
        />

        <input
          class="w-full h-12 px-4 mb-4 border rounded-md bg-slate-50 border-slate-300 outline-slate-400"
          :placeholder="$t('your_email')"
          type="email"
        />

        <input
          class="w-full h-12 px-4 mb-4 border rounded-md bg-slate-50 border-slate-300 outline-slate-400"
          :placeholder="$t('subject')"
          type="text"
        />

        <textarea
          class="w-full p-4 mb-4 border rounded-md resize-none bg-slate-50 border-slate-300 outline-slate-400"
          :placeholder="$t('message')"
          rows="8"
          type="text"
        />

        <button
          class="w-full text-sm font-semibold text-center text-white uppercase rounded-md ltr:tracking-widest h-14 click-scale bg-gradient-to-r from-theme0 to-theme1"
        >{{$t("send_us_message")}}</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>