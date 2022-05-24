<template>
  <main class="pt-32">
    <section class="bg-gradient-to-b from-body to-stone-200">
      <div class="container grid grid-cols-1 lg:grid-cols-2">
        <article class="flex items-center h-[200px] lg:h-[400px]">
          <div>
            <h5 class="mb-6 text-3xl text-slate-800">{{$t('blogs')}}</h5>
            <h5 class="mb-6 text-3xl font-semibold text-slate-800">{{$t('new_baby_care')}}</h5>
          </div>
        </article>
        <figure class>
          <img src="~/assets/images/kid1.png" class="object-cover w-full h-[400px]" alt />
        </figure>
      </div>
    </section>

    <!-- topic  section -->
    <section class="mt-32">
      <TopicSection link="https://www.youtube.com/watch?v=kf4woPY5gxQ">
        <template #bgImage>
          <img
            src="~/assets/images/penduline2.png"
            class="object-cover w-full h-full rounded-lg"
            alt
          />
        </template>

        <template #mainImage>
          <img src="~/assets/images/peppers-5.png" class="object-contain w-full max-w-[200px]" alt />
        </template>
        <template #type>{{$t("topic")}}</template>
        <template #category>Are Your Ready For New Baby?</template>
        <template #title>Here Is Some Tips</template>
        <template #details>{{$t("lorem")}}</template>
      </TopicSection>
    </section>

    <!-- Kids Care Topics section -->
    <section class="container mt-32">
      <Title v-if="$t('dir') == 'ltr'" :first="$t('kids')" :rest="$t('care') + ' '+ $t('topics')" />
      <Title v-else :first="$t('topics')" :rest="$t('care') + ' '+ $t('kids')" />
      <div class="grid grid-cols-1 gap-5 mt-16 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard2 v-for="n in 6" :key="n" />
      </div>
    </section>

    <!-- Hair Care Topics section -->
    <section class="container mt-32">
      <Title v-if="$t('dir') == 'ltr'" :first="$t('hair')" :rest="$t('care') + ' '+ $t('topics')" />
      <Title v-else :first="$t('topics')" :rest="$t('care') + ' '+ $t('hair')" />
      <div class="grid grid-cols-1 gap-5 mt-16 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard2 v-for="n in 3" :key="n" />
      </div>
    </section>

    <!-- Hair Care Topics section -->
    <section class="container mt-32">
      <Title v-if="$t('dir') == 'ltr'" :first="$t('more')" :rest="$t('topics') " />
      <Title v-else :first="$t('topics')" :rest="$t('more')" />
      <figure
        class="relative grid items-center grid-cols-1 mt-16 overflow-hidden rounded-lg bg-opacity-80 h-80 bg-theme0 lg:grid-cols-2"
      >
        <img src="~/assets/images/bg3.png" class="absolute top-0 left-0 w-full h-full z-[-1]" />

        <h5
          class="px-5 pt-10 text-4xl font-bold text-white uppercase lg:pt-0"
        >{{$t("new_baby_care")}}</h5>
        <img src="~/static/penduline.png" class="object-contain mx-auto h-72" alt />
      </figure>
      <div class="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard2 v-for="n in 4" :key="n" />
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>