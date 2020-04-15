<template>
  <span>
    <div v-show="totalCarts.carts >= 1" class="count-item">
      {{ totalCarts.carts }}
    </div>
    <div v-show="totalCarts.carts >= 1" class="cart-content">
      <div class="cart-title">
        <div class="add-item">{{ totalCarts.carts }} Items Added</div>
        <div class="list-close">
          <a href="#">Close</a>
        </div>
      </div>
      <div class="cart-scr scrollbar">
        <div class="cart-con-item">
          <div v-for="cart in carts" :key="cart.id" class="cart-item">
            <div class="cart-inner">
              <div class="cart-top">
                <div class="thumb">
                  <router-link tag="a" :to="{ name: 'Home' }">
                    <img
                      v-lazy="
                        require(`@/assets/images/frontend/popular-food/0${cart.id}.jpg`)
                      "
                      alt
                    />
                  </router-link>
                </div>
                <div class="content">
                  <router-link tag="a" :to="{ name: 'Home' }">
                    {{ cart.name }}
                  </router-link>
                </div>
                <div class="remove-btn">
                  <a href="javascript:" @click="removeCart(cart)">
                    <i class="icofont icofont-close"></i>
                  </a>
                </div>
              </div>
              <div class="cart-bottom">
                <div class="sing-price">Tk. 00</div>
                <div class="cart-plus-minus">
                  <div class="dec qtybutton" @click="decQty(cart)">-</div>
                  <input
                    class="cart-plus-minus-box"
                    type="text"
                    name="qtybutton"
                    v-model="cart.qty"
                  />
                  <div class="inc qtybutton" @click="incQty(cart)">+</div>
                </div>
                <div class="total-price">Tk. {{ cart.price }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-scr-bottom">
        <ul>
          <li>
            <div class="title">Subtotal</div>
            <div class="price">Tk. {{ totalCarts.total }}</div>
          </li>
          <li>
            <div class="title">Shipping</div>
            <div class="price">Tk. 00</div>
          </li>
          <li>
            <div class="title">Cart Total</div>
            <div class="price">Tk. {{ totalCarts.total }}</div>
          </li>
        </ul>
        <a href="#" class="food-btn">
          <span>Place Order</span>
        </a>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: "ChartComponent",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("setCarts");
  },
  computed: {
    carts() {
      return this.$store.getters.carts;
    },
    totalCarts() {
      return this.$store.getters.totalCarts;
    }
  },
  methods: {
    incQty: function(data) {
      data["activity"] = "inc";
      return this.$store.dispatch("updateCart", data);
    },
    decQty: function(data) {
      data["activity"] = "dec";
      return this.$store.dispatch("updateCart", data);
    },
    removeCart: function(data) {
      return this.$store.dispatch("deleteCart", data);
    }
  }
};
</script>
