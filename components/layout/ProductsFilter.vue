<template>
  <section>
    <div class="flex items-center justify-between h-10 mb-6 capitalize">
      <span class="text-xl font-semibold text-slate-800">{{$t('filter')}}</span>
      <button
        type="button"
        class="text-sm font-semibold capitalize text-theme1 click-scale"
      >{{$t('clear')}}</button>
    </div>

    <CollapseFilter class="my-4 capitalize" :title="'Filter name example'">
      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 1</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>

      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 2</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>

      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 3</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>
    </CollapseFilter>

    <CollapseFilter class="my-4 capitalize" :title="'Filter 2'">
      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 1</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>

      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 2</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>

      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 3</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>
    </CollapseFilter>

    <CollapseFilter class="my-4 capitalize" :title="'Filter 3'">
      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 1</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>

      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 2</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>

      <label class="cursor-pointer label">
        <span class="label-text text-slate-600">filter 3</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs border-slate-200" />
      </label>
    </CollapseFilter>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>