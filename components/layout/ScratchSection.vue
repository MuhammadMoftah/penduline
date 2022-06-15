<template>
  <main class="py-40 bg-gradient-to-br from-theme0 to-theme1">
    <div class="container">
      <h5 class="text-4xl font-bold text-white capitalize ltr:tracking-wide">{{$t("scratch_win")}}</h5>

      <div class="mt-16">
        <ol class="relative border-gray-200 rtl:border-r ltr:border-l">
          <li class="mb-20 ltr:ml-4 rtl:mr-4">
            <div
              class="absolute w-4 h-4 mt-3 bg-pink-200 border border-pink-200 rounded-full ltr:-left-2 rtl:-right-2"
            ></div>
            <h3 class="mb-4 text-2xl font-semibold text-pink-100">1- {{$t('scratch_step1')}}</h3>
            <a
              class="flex h-48 w-80"
              :href="require('~/assets/images/scratchproducts.png')"
              target="_blank"
            >
              <img
                :src="require('~/assets/images/scratchproducts.png')"
                class="object-cover w-full h-full rounded-lg hover:opacity-80"
                alt
              />
            </a>
          </li>

          <li class="mb-20 ltr:ml-4 rtl:mr-4">
            <div
              class="absolute w-4 h-4 mt-3 bg-pink-200 border border-pink-200 rounded-full ltr:-left-2 rtl:-right-2"
            ></div>
            <h3 class="mb-4 text-2xl font-semibold text-pink-100">2- {{$t('scratch_step2')}}</h3>
            <a
              class="flex h-48 w-80"
              :href="require('~/assets/images/scratchmodal.png')"
              target="_blank"
            >
              <img
                :src="require('~/assets/images/scratchmodal.png')"
                class="object-cover w-full h-full rounded-lg hover:opacity-80"
                alt
              />
            </a>
          </li>
          <li class="mb-20 ltr:ml-4 rtl:mr-4">
            <div
              class="absolute w-4 h-4 mt-3 bg-pink-200 border border-pink-200 rounded-full ltr:-left-2 rtl:-right-2"
            ></div>
            <h3 class="mb-4 text-2xl font-semibold text-pink-100">3- {{$t('scratch_step3')}}</h3>

            <HappyIllu class="w-full max-w-xs text-pink-200" />
          </li>
        </ol>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>