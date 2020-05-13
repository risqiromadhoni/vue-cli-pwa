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
        <b-col md="4" v-for="p in product" :key="p.name">
          <ProductBox :product="p" />
        </b-col>
        <b-col cols="12" class="my-3">
          <div class="d-block">
            <b-button
              pill
              variant="outline-warning"
              :class="{ 'float-right': true, disabled: btnNext }"
              @click="saveProduct"
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
export default {
  name: "WizardFormTwoReserve",
  data() {
    return {
      btnNext: false,
      city: {},
      product: []
    };
  },
  components: {
    ProductBox: () => import("@/components/frontend/utils/products/Product")
  },
  mounted() {
    this.product = products;
  },
  computed: {
    storeProduct: function() {
      return this.$store.state.order.form.product;
    }
  },
  methods: {
    saveProduct: async function() {
      if (
        typeof this.storeProduct == "undefined" ||
        this.storeProduct.length <= 0
      )
        toast.warning("Silahkan Memilih Menu!");
      else {
        let step = this.$store.state.order.step;
        const newStep = step.map(m => {
          // Finish curent page form
          if (m.component === "WizardFormTwoReserve") m.isFinish = true;
          // Change curent page form
          this.$parent.formPage = "WizardFormThreeReserve";
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
    loadProduct: function() {
      return this.product.concat(products);
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
