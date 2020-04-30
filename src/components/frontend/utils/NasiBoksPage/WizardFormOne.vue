<template>
  <b-row>
    <b-col cols="12" class="mb-3 d-md-none d-sm-flex">
      <b-row align-v="center">
        <b-col cols="4">
          <div class="font-weight-bold">
            <i class="h4 icofont icofont-arrow-left"></i>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="h5 font-weight-light">Restoran</div>
        </b-col>
      </b-row>
    </b-col>
    <b-col sm>
      <div class="contact-form">
        <form :id="$style.locationForm" enctype="multipart/form-data">
          <b-form-group
            :id="$style.pilihKota"
            label="Pilih Kota :"
            label-for="chose-city"
          >
            <b-form-input v-model="modelCity" list="city-list"></b-form-input>
            <b-form-datalist
              id="city-list"
              :options="regenciesOptions"
            ></b-form-datalist>
          </b-form-group>
          <b-form-group
            :id="$style.pilihOutlet"
            label="Pilih Outlet :"
            label-for="chose-outlet"
          >
            <b-form-input
              v-model="modelOutlet"
              list="outlet-list"
            ></b-form-input>
            <b-form-datalist
              id="outlet-list"
              :options="outletsOptions"
            ></b-form-datalist>
          </b-form-group>
        </form>
      </div>
    </b-col>
    <b-col sm>
      <div>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31733.640282183675!2d106.81369610193498!3d-6.170236196550788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f50f1bd7bfc9%3A0x6828e51e719c24bd!2sGraha%20Foodpedia%20Pasar%20Baru!5e0!3m2!1sid!2sid!4v1587368310704!5m2!1sid!2sid"
          allowfullscreen
        ></b-embed>
      </div>
    </b-col>
    <b-col cols="12" class="my-3">
      <div class="d-block">
        <b-button
          pill
          variant="outline-warning"
          :class="`float-right ${btnNext}`"
          @click="saveData"
        >
          <span class="pr-3">{{ $t("next") | capitalize }}</span>
          <i class="icofont icofont-arrow-right"></i>
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import toast from "@/utils/toast";
export default {
  name: "WizardFormOne",
  data() {
    return {
      btnNext: "disabled",
      regency: [],
      outlet: [],
      regenciesOptions: [],
      outletsOptions: [],
      modelCity: "",
      myCity: {},
      modelOutlet: "",
      myOutlet: {},
      city: {}
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    modelCity: function(newData, oldData) {
      this.choseMyCity(newData);
    },
    // eslint-disable-next-line no-unused-vars
    modelOutlet: function(newData, oldData) {
      this.choseOutlet(newData);
    }
  },
  created() {
    this.$store.dispatch("getRegency");
    this.$store.dispatch("getOutlet");
  },
  mounted() {
    this.regency = this.$store.state.region.regency;
    this.outlet = this.$store.state.outlet.outlet;
    this.regenciesOptions = this.regency.map(m => m.name);
  },
  methods: {
    choseMyCity: async function(params) {
      const choseCity = this.regency.find(f => f.name == params);
      if (typeof choseCity == "object") {
        this.outletsOptions = this.outlet
          .filter(fl => fl.city_id == choseCity._id)
          .map(m => m.name);
      }
      return (this.myCity = choseCity);
    },
    choseOutlet: async function(params) {
      const choseOutlet = this.outlet.find(f => f.name == params);
      if (typeof choseOutlet == "object" && typeof this.myCity == "object") {
        this.btnNext = "";
      }
      return (this.myOutlet = choseOutlet);
    },
    saveData: async function() {
      if (this.btnNext == "disabled") {
        toast.warning("Mohon Lengkapi Form di Atas");
      } else {
        const step = this.$store.state.order.step;
        console.log(
          this.$parent.formPage,
          step.map(m => {
            // Finish curent page form
            if (m.component == this.$parent.formPage) {
              m.isFinish = true;
            }
            // Change curent page form
            this.$parent.formPage = "WizardFormTwo";
            // Role Activate page form
            if (m.component == this.$parent.formPage) {
              m.isActive = true;
              m.isFinish = false;
            } else {
              m.isActive = false;
            }
            return m;
          }),
          this.$parent.formPage
        );
        // this.$store.dispatch("setOrderStep");
        await console.log("next");
      }
    }
  }
};
</script>

<style lang="scss" module>
$with-full: 100%;
$d-block: block;
$zero: 0;
#locationForm {
  #pilihKota {
    width: $with-full;
    display: $d-block;
    margin: 0;
  }
  #pilihOutlet {
    width: $with-full;
    display: $d-block;
    margin: 0;
  }
}
</style>

<style lang="scss">
.h5,
.h4 {
  color: #ff9800;
}
</style>
