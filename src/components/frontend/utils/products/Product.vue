<template>
  <div :class="`p-food-item`">
    <div :class="`p-food-inner`" @click="choseRice">
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
                <span class="tooltip-label">{{ "Dikemas" | capitalize }}</span>
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
                <span class="tooltip-label">{{
                  product.type | capitalize
                }}</span>
                <span class="tooltip-info">{{
                  `Enjoy your ${product.type}` | capitalize
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
    <div :class="{ itemCart: true, active: isActive }">
      <div class="checked-item">
        <div class="icons8-check">
          <ProductCheck />
        </div>
        <div class="productQty">
          <div class="cart-plus-minus">
            <div class="dec qtybutton" @click="decQty">-</div>
            <input
              class="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              v-model="qty"
            />
            <div class="inc qtybutton" @click="incQty">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductUtilsComponent",
  data() {
    return {
      isActive: false,
      qty: 0
    };
  },
  props: {
    product: Object
  },
  components: {
    ProductCheck: () => import("@/components/frontend/constants/ProductCheck")
  },
  methods: {
    iconType: function(params) {
      return params == "makan" ? "icofont-burger" : "icofont-soft-drinks";
    },
    choseRice: async function() {
      await this.insrtData(this.product);
      const data = this.$store.getters.itemActive(this.product);
      if (typeof data == "object") {
        this.isActive = true;
        this.incQty();
      } else this.isActive = false;
    },
    insrtData: async function(product) {
      await new Promise(resolve => {
        const data = {
          key: "product",
          data: product
        };
        this.$store.dispatch("setOrderDetail", data);
        resolve(data);
      });
    },
    decQty: async function() {
      let product = this.product;
      product["qty"] = this.qty - 1;
      await this.insrtData(product);
      if (this.qty <= 1) {
        this.isActive = false;
        return (this.qty = this.qty - 1);
      } else return (this.qty = this.qty - 1);
    },
    incQty: async function() {
      let product = this.product;
      product["qty"] = this.qty + 1;
      await this.insrtData(product);
      return (this.qty = this.qty + 1);
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
</style>

<style lang="scss">
.p-food-item {
  position: relative;
  cursor: pointer;
}
.itemCart {
  display: none;
  opacity: 0;
  position: absolute;
  align-items: center;
  border-radius: 10px;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #ffc947, $alpha: 0.5);
  &.active {
    display: flex;
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
    -moz-transition: opacity 0.25s ease-in-out;
    -webkit-transition: opacity 0.25s ease-in-out;
    .checked-item {
      overflow: hidden;
      margin: 0 auto;
      .icons8-check {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
}
</style>
