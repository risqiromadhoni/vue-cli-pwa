<template>
  <b-row>
    <b-col sm>
      <div class="contact-form">
        <form :id="$style.locationForm" enctype="multipart/form-data">
          <b-form-group
            :id="$style.pilihKota"
            label="Pilih Kota :"
            label-for="chose-city"
          >
            <b-form-input list="city-list"></b-form-input>
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
            <b-form-input list="outlet-list"></b-form-input>
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
  </b-row>
</template>

<script>
import regencieData from "@/store/static/regencies";
export default {
  name: "WizardFormOne",
  data() {
    return {
      regenciesOptions: [],
      outletsOptions: [],
      city: {}
    };
  },
  mounted() {
    this.regenciesOptions = regencieData.map(m => {
      return `${m.name}`;
    });
    this.outletsOptions = regencieData.map(m => {
      return m.name;
    });
  },
  methods: {
    saveLocation: async function() {
      await console.log(this.provience);
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
