<template>
  <b-row>
    <b-col sm>
      <div class="contact-form">
        <form id="location-form" enctype="multipart/form-data">
          <p class="h6 font-weight-bold">Pilih Kota :</p>
          <v-select
            label="name"
            :options="regenciesOptions"
            v-model="city"
          ></v-select>
          <button @click="saveLocation" class="food-btn style-2">
            <span>Selanjutnya</span>
          </button>
        </form>
      </div>
    </b-col>
    <b-col sm>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31733.640282183675!2d106.81369610193498!3d-6.170236196550788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f50f1bd7bfc9%3A0x6828e51e719c24bd!2sGraha%20Foodpedia%20Pasar%20Baru!5e0!3m2!1sid!2sid!4v1587368310704!5m2!1sid!2sid"
        width="600"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
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
      city: {}
    };
  },
  mounted() {
    this.regenciesOptions = regencieData;
  },
  methods: {
    saveLocation: async function() {
      await console.log(this.provience);
    }
  }
};
</script>
