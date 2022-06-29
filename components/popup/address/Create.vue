<template>
  <section>
    <PopupModal classes="max-w-lg" :title="oldData ? $t('edit_address') : $t('add_new_address') ">
      <form class="px-5 overflow-auto space-y-3 max-h-[75vh]" @submit.prevent="done()">
        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('address_name')"
            type="text"
            v-model="form.name"
          />
        </label>

        <label for class="relative flex">
          <select
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md appearance-none ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            v-model="form.city_id"
            @change="getDistricts"
          >
            <option value>{{$t('choose_city')}}</option>
            <option v-for="el in locations" :key="el.id" :value="el.id">{{el.name}}</option>
          </select>
          <DownChevronIcon
            class="absolute w-6 h-6 -translate-y-1/2 top-1/2 rtl:left-3 ltr:right-3 text-slate-400"
          />
        </label>

        <label
          for
          class="relative flex"
          :class="form.city_id ? '' : 'opacity-80 pointer-events-none' "
        >
          <select
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md appearance-none ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            v-model="form.district_id"
          >
            <option value>{{$t('select_neighborhood')}}</option>
            <option v-for="el in districts" :key="el.id" :value="el.id">{{el.name}}</option>
          </select>
          <DownChevronIcon
            class="absolute w-6 h-6 -translate-y-1/2 top-1/2 rtl:left-3 ltr:right-3 text-slate-400"
          />
        </label>

        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('street_name')"
            type="text"
            v-model="form.street_name"
          />
        </label>

        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('building_number')"
            type="text"
            v-model="form.building_number"
          />
        </label>

        <label for class="relative flex">
          <input
            class="w-full h-12 px-4 text-sm font-semibold border rounded-md ltr:tracking-wider text-slate-500 bg-slate-50 border-slate-200 outline-theme2"
            :placeholder="$t('postal_code')"
            type="text"
            v-model="form.postal_code"
          />
        </label>

        <label
          class="flex items-center gap-2 py-4 text-sm font-semibold cursor-pointer text-slate-500"
        >
          {{$t('set_default')}}
          <input
            v-model="form.is_default"
            type="checkbox"
            class="checkbox checkbox-sm checkbox-primary"
          />
        </label>

        <div class="py-2">
          <button class="theme-btn btn" :class="mixLoader ? 'loading':''">{{$t("submit")}}</button>
        </div>
      </form>
    </PopupModal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        district_id: "",
        city_id: ""
      },
      locations: [],
      districts: [],
      city: "",

    };
  },
  computed: {
    oldData() {
      return this.$store.state.addresses.item
    }
  },

  created() {
    this.getLocations();
    this.fillOldData()

  },
  methods: {
    fillOldData() {
      console.log(this.oldData);
      this.getDistricts()
      if (this.oldData) {
        this.form.name = this.oldData.name;
        this.form.street_name = this.oldData.street_name;
        this.form.building_number = this.oldData.building_number;
        this.form.postal_code = this.oldData.postal_code;
        this.form.is_default = this.oldData.is_default;
        this.form.city_id = this.oldData.city_id;
        this.form.district_id = this.oldData.district_id;
      }
    },

    getLocations() {
      this.$axios.get("/locations?include=children,parent,descendants&filter[type]=city")
        .then((response) => {
          this.locations = response.data.data;
        })
        .catch((err) => {
          this.$errorHandler(err);
        });
    },
    getDistricts() {
      this.$axios.get(`/locations?include=children,parent,descendants&filter[type]=district&filter[parent_id]=${this.form.city_id}`)
        .then((response) => {
          this.districts = response.data.data;
        })
        .catch((err) => {
          this.$errorHandler(err);
        });
    },
    done() {
      if (this.oldData) {
        this.edit()
        return
      }
      this.create()
    },
    create() {
      this.mixLoader = true
      this.$axios.post('/addresses', this.form)
        .then(() => {
          this.$store.commit('global/closeModal');
          this.$store.dispatch('addresses/getItems')
        })
        .catch((err) => { this.$errorHandler(err) })
    },
    edit() {
      this.mixLoader = true
      this.$axios.post(`/addresses/${this.oldData.id}?_method=PUT`, this.form)
        .then(() => {
          this.$store.commit('global/closeModal');
          this.$store.dispatch('addresses/getItems')
        })
        .catch((err) => { this.$errorHandler(err) })
    }
  },
};
</script>

<style>
</style>