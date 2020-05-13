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
            :class="$style.groupInput"
            :label="$t('orphanage_name') + ' :'"
            label-for="input-title"
          >
            <b-form-input
              id="input-title"
              v-model="modelTitle"
              type="text"
              required
              :placeholder="$t('orphanage_name')"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            :class="$style.groupInput"
            :label="$t('orphanage_telp') + ' :'"
            label-for="input-phone"
          >
            <b-form-input
              id="input-phone"
              v-model="modelPhone"
              type="number"
              required
              :placeholder="$t('orphanage_telp')"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            :class="$style.groupInput"
            :label="$t('chose_city') + ' :'"
            label-for="chose-city"
          >
            <b-form-input
              v-model="modelCity"
              list="city-list"
              :placeholder="$t('list_of_city')"
            ></b-form-input>
            <b-form-datalist
              id="city-list"
              :options="regenciesOptions"
            ></b-form-datalist>
          </b-form-group>
          <b-form-group
            :class="$style.groupInput"
            :label="$t('address') + ' :'"
            label-for="address-user"
          >
            <b-form-textarea
              id="address-user"
              required
              v-model="modelAddress"
              :placeholder="$t('orphanage_name_desc')"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </form>
      </div>
    </b-col>
    <b-col sm>
      <div>
        <img
          v-lazy="
            require('@/assets/images/frontend/banner/bg/close-up-photo-of-sushi-served-on-table.jpg')
          "
          alt="food-one"
          class="img-fluid d-none d-md-flex"
        />
      </div>
    </b-col>
    <b-col cols="12" class="my-3">
      <div class="d-block">
        <b-button
          pill
          variant="outline-warning"
          :class="{ 'float-right': true, disabled: btnNext }"
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
import _ from "lodash";
export default {
  name: "WizardFormOneSedekah",
  data() {
    return {
      btnNext: true,
      regency: [],
      outlet: [],
      regenciesOptions: [],
      modelTitle: "",
      modelCity: "",
      modelAddress: "",
      modelPhone: 0,
      myCity: {},
      city: {}
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    modelCity: function(newData, oldData) {
      this.choseMyCity(newData);
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData: async function() {
      await new Promise(resolve => {
        this.regency = this.$store.state.region.regency;
        this.outlet = this.$store.state.outlet.outlet;
        this.regenciesOptions = this.regency.map(m => m.name);
        resolve(this.regenciesOptions);
      });
    },
    choseMyCity: async function(params) {
      const choseCity = this.regency.find(f => f.name == params);
      return (this.myCity = choseCity);
    },
    saveData: async function() {
      if (
        _.isEmpty(this.modelTitle) &&
        _.isEmpty(this.modelPhone) &&
        _.isEmpty(this.myCity) &&
        _.isEmpty(this.modelAddress)
      )
        toast.warning("Mohon Lengkapi Form di Atas");
      else {
        await this.insrtData();
        let step = this.$store.state.order.step;
        const newStep = step.map(m => {
          // Finish curent page form
          if (m.component == this.$parent.formPage) m.isFinish = true;
          // Change curent page form
          this.$parent.formPage = "WizardFormTwoSedekah";
          // Role Activate page form
          if (m.component == this.$parent.formPage) {
            m.isActive = true;
            m.isFinish = false;
          } else m.isActive = false;
          return m;
        });
        await this.$store.dispatch("setOrderStep", newStep);
      }
    },
    insrtData: async function() {
      await new Promise(resolve => {
        const data = {
          key: "location",
          data: {
            city: this.modelCity,
            phone: this.modelPhone,
            orphanage_name: this.modelTitle,
            orphanage_address: this.modelAddress
          }
        };
        this.$store.dispatch("setOrderDetail", data);
        resolve(data);
      });
    }
  }
};
</script>

<style lang="scss" module>
$with-full: 100%;
$d-block: block;
$zero: 0;
#locationForm {
  .groupInput {
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
