<template>
  <b-row>
    <div class="popular-foods">
      <b-row>
        <b-col md="4" v-for="p in product" :key="p.name">
          <ProductBox :product="p" />
        </b-col>
      </b-row>
      <div :id="$style.loadMore" class="h6">
        <b-button @click="loadProduct" pill variant="outline-warning">
          <i class="icofont icofont-spinner-alt-5"></i>
          Load More
        </b-button>
      </div>
    </div>
  </b-row>
</template>

<script>
import regencieData from "@/store/static/regencies";
import products from "@/store/static/product";
export default {
  name: "WizardFormTwo",
  data() {
    return {
      regenciesOptions: [],
      city: {},
      product: []
    };
  },
  components: {
    ProductBox: () => import("@/components/frontend/utils/products/Product")
  },
  mounted() {
    this.regenciesOptions = regencieData;
    this.product = products;
  },
  methods: {
    saveLocation: async function() {
      await alert("two");
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
