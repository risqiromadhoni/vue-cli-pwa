<template>
  <b-row>
    <div class="popular-foods pb-0">
      <b-row>
        <b-col cols="12" class="mb-3 d-md-none d-sm-flex">
          <b-row align-v="center">
            <b-col cols="4">
              <div class="font-weight-bold">
                <i class="h4 icofont icofont-arrow-left"></i>
              </div>
            </b-col>
            <b-col cols="8">
              <div class="h5 font-weight-light">
                {{ $t("food_and_drink") | capitalize }}
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12">
          <b-row align-v="center">
            <b-col md="6" offset-md="3">
              <b-list-group
                v-for="donation in donations"
                :key="donation.nominal"
                class="mb-3"
                @click="saveProduct(donation.nominal)"
              >
                <b-list-group-item
                  href="#"
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">{{ donation.nominal | intToIdr }}</h6>
                    <i
                      class="icofont icofont-thin-right h4 font-weight-bold mb-0"
                    ></i>
                  </div>
                  <b-alert
                    v-show="donation.note"
                    show
                    variant="secondary"
                    :style="alertSmall"
                  >
                    <small>{{ donation.note }}</small>
                  </b-alert>
                </b-list-group-item>
              </b-list-group>
              <!-- Custom Donation -->
              <b-list-group class="mb-3">
                <b-list-group-item
                  href="#"
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">{{ $t("nominal_other_donations") }}</h6>
                  </div>
                  <div>
                    <b-input-group size="lg" prepend="Rp" class="mt-2">
                      <b-form-input type="number" v-model="idr"></b-form-input>
                    </b-input-group>
                    <small v-show="warnIdr" class="text-danger">
                      {{ $t("donation_min_tenthousand") }}
                    </small>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="my-3">
          <div class="d-block">
            <b-button
              pill
              variant="outline-warning"
              :class="{ 'float-right': true, disabled: btnNext }"
              @click="saveProduct()"
            >
              <span class="pr-3">{{ $t("next") | capitalize }}</span>
              <i class="icofont icofont-arrow-right"></i>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-row>
</template>

<script>
import products from "@/store/static/product";
import toast from "@/utils/toast";
import i18n from "@/plugins/i18n";
import { intToIdr } from "@/utils/helper";
export default {
  name: "WizardFormTwoSedekah",
  data() {
    return {
      btnNext: false,
      city: {},
      product: [],
      price: 100000,
      alertSmall: {
        padding: "0.25rem 1.25rem",
        margin: "10px 0 0 0"
      },
      donations: [
        { nominal: 10000, note: i18n.t("minimum_nominal_donation") },
        { nominal: 20000 },
        { nominal: 50000 },
        { nominal: 100000, note: i18n.t("nominal_value_is_often_chosen") }
      ],
      idr: 0,
      warnIdr: false
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    idr: function(newData, oldData) {
      this.handleIdr(newData);
    }
  },
  mounted() {
    this.product = products;
  },
  methods: {
    saveProduct: async function(params = 0) {
      if (params !== 0) this.idr = params;
      this.processProduct(this.idr);
    },
    processProduct: async function(params) {
      if (params < 10000) toast.warning(i18n.t("donation_min_tenthousand"));
      else await this.nextStep();
    },
    nextStep: async function() {
      await this.insrtData();
      let step = this.$store.state.order.step;
      const newStep = step.map(m => {
        // Finish curent page form
        if (m.component === "WizardFormTwoSedekah") m.isFinish = true;
        // Change curent page form
        this.$parent.formPage = "WizardFormThreeSedekah";
        // Role Activate page form
        if (m.component == this.$parent.formPage) {
          m.isActive = true;
          m.isFinish = false;
        } else m.isActive = false;
        return m;
      });
      await this.$store.dispatch("setOrderStep", newStep);
    },
    loadProduct: function() {
      return this.product.concat(products);
    },
    handleIdr: async function(params) {
      if (params === 0) this.idr = 0;
      if (params < 10000) this.warnIdr = true;
      else this.warnIdr = false;
    },
    insrtData: async function() {
      await new Promise(resolve => {
        const data = {
          key: "product",
          data: {
            nominal: this.idr,
            currency: intToIdr(this.idr)
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
#loadMore {
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #ff9800 !important;
  }
}

.boxProduct {
  &:hover {
    border: 2px solid #ff9800;
  }
}
</style>

<style lang="scss">
.popular-foods {
  width: 100%;
}
.input-group {
  .input-group-prepend,
  .input-group-text {
    border: 0;
    background-color: #e2e3e5;
  }
  input {
    background-color: #e2e3e5;
    border: 0;
    text-align: right;
    &:focus {
      background-color: #e2e3e5;
      box-shadow: none;
    }
  }
}
.list-group-item {
  &:hover {
    border: 1px solid #ff9800;
    background-color: white;
  }
}
</style>
