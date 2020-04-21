<template>
  <b-row>
    <div class="popular-foods">
      <b-row>
        <b-col md="4" v-for="p in product" :key="p.name">
          <div class="p-food-item">
            <div :class="'p-food-inner '">
              <div class="p-food-thumb">
                <img v-lazy="p.img" alt="p-food" />
                <span>
                  <del>{{ p.price }}</del>
                  - {{ p.price_disk }}
                </span>
              </div>
              <div class="p-food-content">
                <div class="p-food-author">
                  <a href="#">
                    <img
                      :src="
                        require('@/assets/images/frontend/chef/author/02.jpg')
                      "
                      alt="food-author"
                    />
                  </a>
                </div>
                <h6>
                  <a href="#">{{ p.name }}</a>
                </h6>
                <!-- <div class="p-food-group">
                  <span>Type of food :</span>
                  <a href="#">Beef Roast</a>
                  <a href="#">Pizza</a>
                  <a href="#">Stakes</a>
                </div>-->
                <ul class="del-time">
                  <li>
                    <i class="icofont icofont-box"></i>
                    <div class="time-tooltip">
                      <div class="time-tooltip-holder">
                        <span class="tooltip-label">{{
                          "Dikemas" | capitalize
                        }}</span>
                        <span class="tooltip-info">{{
                          "Dengan plastik BPA sebagai wadah standart makanan atau minuman"
                            | capitalize
                        }}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i :class="'icofont ' + iconType(p.type)"></i>
                    <div class="time-tooltip">
                      <div class="time-tooltip-holder">
                        <span class="tooltip-label">{{
                          p.type | capitalize
                        }}</span>
                        <span class="tooltip-info">{{
                          `Enjoy your ${p.type}` | capitalize
                        }}</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="p-food-footer">
                  <div class="left">
                    <div class="rating">
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                    </div>
                  </div>
                  <div :class="'right ' + $style.addCart">
                    <i class="icofont icofont-ui-add"></i>
                    <span>{{ "Pilih" }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  mounted() {
    this.regenciesOptions = regencieData;
    this.product = products;
  },
  methods: {
    saveLocation: async function() {
      await console.log(this.provience);
    },
    iconType: function(params) {
      return params == "makan" ? "icofont-burger" : "icofont-soft-drinks";
    },
    loadProduct: function() {
      return this.product.concat(products);
    }
  }
};
</script>

<style lang="scss" module>
.addCart {
  cursor: pointer;
  &:hover {
    i.icofont,
    span {
      color: #ff9800 !important;
    }
  }
}

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
