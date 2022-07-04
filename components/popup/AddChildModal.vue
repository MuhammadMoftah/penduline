<template>
  <section>
    <PopupModal classes="max-w-lg" :title="$t('add_child')">
      <form class="px-5 overflow-auto space-y-3 max-h-[75vh]" @submit.prevent="done()">
        <label class="relative flex">
          <div
            class="flex flex-col items-center w-32 gap-1 p-2 mx-auto border rounded-lg cursor-pointer hover:bg-slate-100"
          >
            <img
              v-if="avatarPrev"
              class="object-contain w-16 h-16 rounded-full bg-slate-800"
              :src="avatarPrev"
              alt
            />
            <BabyIcon v-else class="object-contain w-16 h-16 rounded-full text-slate-600" />
            <input type="file" hidden @change="prevImage($event)" />
            <span
              v-if="!avatarPrev"
              class="text-xs font-medium capitalize text-slate-500"
            >{{this.$t('upload')}}</span>
          </div>
        </label>
        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('name')"
            type="text"
            v-model="form.name"
          />
        </label>

        <label for class="relative flex">
          <select
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md appearance-none ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            v-model="form.gender"
          >
            <option value>{{$t('gender')}}</option>
            <option value="male">{{this.$t('male')}}</option>
            <option value="female">{{this.$t('female')}}</option>
          </select>
          <DownChevronIcon
            class="absolute w-6 h-6 -translate-y-1/2 top-1/2 rtl:left-3 ltr:right-3 text-slate-400"
          />
        </label>

        <label for class="relative flex">
          <select
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md appearance-none ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            v-model="form.relation"
          >
            <option value>{{$t('relation')}}</option>
            <option value="son">{{this.$t('son')}}</option>
            <option value="daughter">{{this.$t('daughter')}}</option>
            <option value="grand-son">{{this.$t('grandson')}}</option>
            <option value="grand-daughter">{{this.$t('granddaughter')}}</option>
            <option value="nephew">{{this.$t('nephew')}}</option>
          </select>
          <DownChevronIcon
            class="absolute w-6 h-6 -translate-y-1/2 top-1/2 rtl:left-3 ltr:right-3 text-slate-400"
          />
        </label>

        <label for class="relative flex">
          <select
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md appearance-none ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            v-model="form.location_id"
          >
            <option value>{{$t('choose_city')}}</option>
            <option v-for="el in locations" :key="el.id" :value="el.id">{{el.name}}</option>
          </select>
          <DownChevronIcon
            class="absolute w-6 h-6 -translate-y-1/2 top-1/2 rtl:left-3 ltr:right-3 text-slate-400"
          />
        </label>

        <date-picker
          v-model="form.birthdate"
          :placeholder="this.$t('birthdate')"
          value-type="format"
          format="YYYY-MM-DD"
        ></date-picker>
        <label for class="relative block mt-6">
          <p class="mb-2 text-sm font-semibold text-slate-600">{{$t('upload_birth_certificate')}}</p>
          <input
            type="file"
            class="text-sm border-none cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-theme1 hover:file:bg-slate-200 file:cursor-pointer"
            @change="form['child-birthdate-certificate'] = $event.target.files[0]"
            accept="image/*"
          />
        </label>

        <div class="py-2">
          <button class="flex theme-btn btn" :class="mixLoader ? 'loading': ''">{{$t("submit")}}</button>
        </div>
      </form>
    </PopupModal>
  </section>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  components: { DatePicker },

  data() {
    return {
      form: {
        status: 'active',
        gender: "",
        relation: "",
        user_id: this.$auth.user.id,
        location_id: ""
      },
      locations: [],
      avatarPrev: '',
    };
  },
  created() {
    this.getLocations()
  },

  methods: {
    getLocations() {
      this.$axios.get('/locations?per_page=99999').then(response => {
        this.locations = response.data.data
      }).catch(err => this.$errorHandler(err))
    },
    prevImage(event) {
      this.avatarPrev = URL.createObjectURL(event.target.files[0]);
      this.form['child-avatar'] = event.target.files[0];
    },
    done() {
      this.mixLoader = true;
      const payload = this.$objectToFormData(this.form);
      this.$axios.post('/children', payload).then(() => {
        this.$successHandler('We have added your child successfully')
        this.$nuxt.refresh()
      }).catch(err => {
        this.$errorHandler(err)
      })

    },
  },
};
</script>

<style>
</style>