<template>
  <div :class="`p-food-item`" @click="choseRice">
    <div :class="`p-food-inner ${$style.pFoodItemActive}`">
      <div class="p-food-thumb">
        <img v-lazy="product.img" alt="p-food" />
        <span>
          <del>{{ product.price }}</del>
          - {{ product.price_disk }}
        </span>
      </div>
      <div class="p-food-content">
        <div class="p-food-author">
          <a href="#">
            <img
              :src="require('@/assets/images/frontend/chef/author/02.jpg')"
              alt="food-author"
            />
          </a>
        </div>
        <h6>
          <a href="#">{{ product.name }}</a>
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
                <span class="tooltip-label">
                  {{ "Dikemas" | capitalize }}
                </span>
                <span class="tooltip-info">
                  {{
                    "Dengan plastik BPA sebagai wadah standart makanan atau minuman"
                      | capitalize
                  }}
                </span>
              </div>
            </div>
          </li>
          <li>
            <i :class="'icofont ' + iconType(product.type)"></i>
            <div class="time-tooltip">
              <div class="time-tooltip-holder">
                <span class="tooltip-label">
                  {{ product.type | capitalize }}
                </span>
                <span class="tooltip-info">
                  {{ `Enjoy your ${product.type}` | capitalize }}
                </span>
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
    <div class="cart"></div>
  </div>
</template>

<script>
export default {
  name: "ProductUtilsComponent",
  props: {
    product: Object
  },
  methods: {
    iconType: function(params) {
      return params == "makan" ? "icofont-burger" : "icofont-soft-drinks";
    },
    choseRice: async function() {
      await console.log(this.product);
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
.pFoodItemActive {
  &::before {
    content: "Before";
    width: 100px;
    height: 10px;
    background-color: black;
  }
  &::after {
    content: "After";
    width: 100px;
    height: 10px;
    background-color: black;
  }
}
</style>
