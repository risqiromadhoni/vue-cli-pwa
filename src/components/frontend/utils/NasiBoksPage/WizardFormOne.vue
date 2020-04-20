<template>
  <b-row>
    <b-col sm>
      <div>One</div>
    </b-col>
    <b-col sm>
      <div class="contact-form">
        <form enctype="multipart/form-data" id="location-form">
          <v-select
            label="name"
            :options="provienceOptions"
            v-model="provience"
            @input="provience => filterCity()"
          ></v-select>
          <v-select
            label="name"
            :options="regenciesOptions"
            v-model="city"
          ></v-select>
          <button @click="saveLocation" class="food-btn style-2">
            <span>book a table</span>
          </button>
        </form>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import provienceData from "@/store/static/provience";
import regencieData from "@/store/static/regencies";
export default {
  name: "WizardFormOne",
  data() {
    return {
      provienceOptions: [],
      regenciesOptions: [],
      provience: {},
      city: {}
    };
  },
  mounted() {
    this.provienceOptions = provienceData;
    this.regenciesOptions = regencieData;
  },
  methods: {
    saveLocation: async function() {
      await console.log(this.provience);
    },
    filterCity: function() {
      // eslint-disable-next-line no-unused-vars
      this.regenciesOptions = this.regenciesOptions.filter(
        f => parseInt(f.province_id) == parseInt(this.provience.id)
      );
      return this.regenciesOptions;
    }
  }
};
</script>

<style></style>
