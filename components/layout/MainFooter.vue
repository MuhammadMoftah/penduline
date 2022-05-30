<template>
  <footer class="mt-32 from-theme0 to-theme2 bg-gradient-to-r">
    <!-- upper footer  -->
    <div class="container grid grid-cols-1 py-16 space-y-16 lg:space-y-0 lg:grid-cols-5">
      <div class="flex flex-col justify-between col-span-2 mt-1 h-52">
        <div>
          <p class="flex items-center mb-5 text-sm text-white text-opacity-60">
            <PinIcon class="w-5 h-5 text-white text-opacity-80 rtl:ml-3 ltr:mr-3" />
            {{$t("dokki_addr")}}
          </p>
          <p class="flex items-center mb-5 text-sm text-white text-opacity-60">
            <HeadphoneIcon class="w-5 h-5 text-white text-opacity-80 rtl:ml-3 ltr:mr-3" />
            <span dir="ltr">+201205914102</span>
          </p>
          <p class="flex items-center text-sm text-white text-opacity-60">
            <TimerIcon class="w-5 h-5 text-white text-opacity-80 rtl:ml-3 ltr:mr-3" />
            6 {{$t("days")}} – {{$t("friday_off")}} ({{$t("from")}} 10 {{$t("am")}} {{$t("to")}} 6 {{$t("pm")}})
          </p>
        </div>

        <div class="flex items-center text-white">
          <a
            href="https://www.facebook.com/penduline.kids"
            target="_blank"
            class="p-1 mx-1 rounded-full hover:bg-opacity-10 click-scale hover:bg-white"
          >
            <FacebookIcon class="w-6 h-6" />
          </a>

          <a
            href="https://twitter.com/Penduline_kids"
            target="_blank"
            class="p-1 mx-1 rounded-full hover:bg-opacity-10 click-scale hover:bg-white"
          >
            <TwitterIcon class="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/penduline_kids"
            target="_blank"
            class="p-1 mx-1 rounded-full hover:bg-opacity-10 click-scale hover:bg-white"
          >
            <InstaIcon class="w-6 h-6" />
          </a>

          <a
            href="https://www.youtube.com/channel/UC3CluiIbwXWc0iTa_pWaNWw/"
            target="_blank"
            class="p-1 mx-1 rounded-full hover:bg-opacity-10 click-scale hover:bg-white"
          >
            <YoutubeIcon class="w-6 h-6" />
          </a>

          <span class="w-[1px] h-6 bg-white bg-opacity-30 mx-3 rounded-full"></span>

          <a
            href="javascript:void(0)"
            class="p-1 mx-1 rounded-full hover:bg-opacity-10 click-scale hover:bg-white"
          >
            <AppleIcon class="w-6 h-6" />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.semak.pend"
            target="_blank"
            class="p-1 mx-1 rounded-full hover:bg-opacity-10 click-scale hover:bg-white"
          >
            <PlaystoreIcon class="w-6 h-6" />
          </a>
        </div>
      </div>
      <div class="capitalize">
        <h5 class="mb-5 text-lg font-bold text-white">{{ $t('quick_links')}}</h5>
        <NuxtLink
          class="block mb-3 text-white text-opacity-50 hover:text-opacity-90"
          :to="localePath('/blogs')"
        >{{$t('blogs')}}</NuxtLink>
        <NuxtLink
          class="block mb-3 text-white text-opacity-50 hover:text-opacity-90"
          :to="localePath('/about')"
        >{{$t('who_we_are')}}</NuxtLink>
        <NuxtLink
          class="block mb-3 text-white text-opacity-50 hover:text-opacity-90"
          :to="localePath('/contact-us')"
        >{{$t('contact_us')}}</NuxtLink>
        <!-- <NuxtLink
          class="block mb-3 text-white text-opacity-50 hover:text-opacity-90"
          :to="localePath('/products')"
        >{{$t('terms_and_conditions')}}</NuxtLink>
        <NuxtLink
          class="block mb-3 text-white text-opacity-50 hover:text-opacity-90"
          :to="localePath('/products')"
        >{{$t('replacement_and_retrieval')}}</NuxtLink>-->
      </div>

      <div class="col-span-2">
        <h5 class="mb-5 text-lg font-bold text-white">{{ $t('about_penduline')}}</h5>
        <p class="flex items-start text-white text-opacity-50">
          <img class="w-6 rtl:ml-3 ltr:mr-3" src="~/assets/images/pendulin_icon_white.svg" />
          {{$t("penduline_info")}}
        </p>
      </div>
    </div>

    <!-- lower footer  -->
    <div class="bg-theme0">
      <div class="container flex justify-between py-4 text-white text-opacity-80">
        {{$t('copy_rights')}}
        <p class="flex items-center">
          {{$t('developed_with')}}
          <HeartIcon class="w-4 h-4 mx-1" />
          {{$t('by')}}
          <a href="https://joovlly.com/" target="_blank">
            <img class="w-16 mx-2" src="~/assets/images/joovlly.svg" />
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>