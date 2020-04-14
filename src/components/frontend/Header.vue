<template>
  <div>
    <!-- search area -->
    <div class="search-area">
      <div class="search-input">
        <div class="search-close">
          <span></span>
          <span></span>
        </div>
        <form>
          <input type="text" name="text" placeholder="*Search Here......." />
        </form>
      </div>
    </div>
    <!-- search area -->

    <!-- Mobile Menu Start Here -->
    <div class="mobile-menu">
      <nav class="mobile-header d-xl-none">
        <div class="header-logo">
          <a href="index-2.html" class="logo">
            <img
              v-lazy="require('@/assets/images/frontend/logo/01.png')"
              alt="logo"
            />
          </a>
        </div>
        <div class="header-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <nav class="menu">
        <div class="mobile-menu-area d-xl-none">
          <div class="mobile-menu-area-inner" id="scrollbar">
            <div class="mobile-search">
              <input type="text" placeholder="Search Here........." />
              <button type="submit">
                <i class="icofont icofont-search-2"></i>
              </button>
            </div>
            <ul>
              <li>
                <router-link :to="{ name: 'About' }" tag="a">{{
                  $t("about")
                }}</router-link>
              </li>
              <li>
                <a href="#0">Layanan Kami</a>
                <ul>
                  <li>
                    <a href="#0">Nasi Boks</a>
                  </li>
                  <li>
                    <a href="#0">Reservasi Tempat</a>
                  </li>
                  <li>
                    <a href="#0">Sedekah Nasi Boks</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#0">Blog</a>
              </li>
              <li>
                <a href="#0">Contact</a>
              </li>
              <li>
                <a href="#0">Help</a>
              </li>
            </ul>
            <div class="scocial-media">
              <a href="#" class="facebook">
                <i class="icofont icofont-facebook"></i>
              </a>
              <a href="#" class="twitter">
                <i class="icofont icofont-twitter"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="icofont icofont-linkedin"></i>
              </a>
              <a href="#" class="vimeo">
                <i class="icofont icofont-vimeo"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- Mobile Menu Ending Here -->

    <!-- header section start -->
    <header class="header-section header-2 d-xl-block d-none">
      <div class="container">
        <div class="header-area">
          <div class="logo">
            <router-link :to="{ name: 'Home' }" tag="a" class="active">
              <img
                v-lazy="require('@/assets/images/frontend/logo/01.png')"
                alt="logo"
              />
            </router-link>
          </div>
          <div class="main-menu">
            <ul>
              <li>
                <router-link :to="{ name: 'About' }" tag="a">{{
                  $t("about")
                }}</router-link>
              </li>
              <li>
                <a href="#0">Layanan Kami</a>
                <ul>
                  <li>
                    <a href="#0">Nasi Boks</a>
                  </li>
                  <li>
                    <a href="#0">Reservasi Tempat</a>
                  </li>
                  <li>
                    <a href="#0">Sedekah Nasi Boks</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#0">Blog</a>
              </li>
              <li>
                <a href="#0">Contact</a>
              </li>
              <li>
                <a href="#0">Help</a>
              </li>
            </ul>
          </div>
          <div class="author-option">
            <div class="author-area">
              <div class="author-account pl-md-3">
                <!-- remove if not login -->
                <!-- <i class="icofont icofont-ui-user"></i> -->
                <!-- add class if login <div class="author-select"> -->
                <div>
                  <router-link
                    :to="{ name: 'Login' }"
                    tag="a"
                    class="h6 text-white m-0"
                    >MASUK</router-link
                  >
                  <i class="icofont icofont-slashdot"></i>
                  <router-link
                    :to="{ name: 'Register' }"
                    tag="a"
                    class="h6 text-white m-0"
                    >DAFTAR</router-link
                  >
                  <!-- <select name="author-select" id="author-select">
                    <option value="1">My Account </option>
                    <option value="2">Log Out </option>
                  </select>-->
                </div>
              </div>
              <div class="cart-option">
                <div class="cart-icon">
                  <img
                    v-lazy="
                      require('@/assets/images/frontend/header/cart-2.png')
                    "
                    alt="shop-cart"
                  />
                </div>
                <div class="count-item">{{ totalCarts.carts }}</div>
                <div class="cart-content">
                  <div class="cart-title">
                    <div class="add-item">
                      {{ totalCarts.carts }} Items Added
                    </div>
                    <div class="list-close">
                      <a href="#">Close</a>
                    </div>
                  </div>
                  <div class="cart-scr scrollbar">
                    <div class="cart-con-item">
                      <div
                        v-for="cart in carts"
                        :key="cart.id"
                        class="cart-item"
                      >
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
                              <router-link tag="a" :to="{ name: 'Home' }">{{
                                cart.name
                              }}</router-link>
                            </div>
                            <div class="remove-btn">
                              <a
                                href="javascript:"
                                @click="removeCart(cart.id)"
                              >
                                <i class="icofont icofont-close"></i>
                              </a>
                            </div>
                          </div>
                          <div class="cart-bottom">
                            <div class="sing-price">Tk. 00</div>
                            <div class="cart-plus-minus">
                              <div
                                class="dec qtybutton"
                                @click="decQty(cart.id)"
                              >
                                -
                              </div>
                              <input
                                class="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                v-model="cart.qty"
                              />
                              <div
                                class="inc qtybutton"
                                @click="incQty(cart.id)"
                              >
                                +
                              </div>
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
              </div>
              <div class="search-start">
                <i class="icofont icofont-search-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header section ending -->
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      carts: [],
      totalCarts: {}
    };
  },
  created() {
    for (let i = 1; i < 5; i++) {
      this.carts.push({
        id: i,
        name: this.$faker().commerce.productName(),
        price: this.$faker().commerce.price(),
        send: this.$faker().commerce.price(),
        qty: i
      });
    }
    this.totalCarts = {
      total: this.carts
        .map(el => parseInt(el.price))
        .reduce((a, b) => a + b, 0),
      carts: this.carts.length
    };
  },
  methods: {
    incQty: function(id) {
      let arr = this.carts.find(el => el.id === id);
      let qty = Math.round(arr.qty + 1);
      return (arr.qty = qty);
    },
    decQty: function(id) {
      let arr = this.carts.find(el => el.id === id);
      if (arr.qty === 1) {
        return this.carts.splice(arr, 1);
      } else {
        let qty = Math.round(arr.qty - 1);
        return (arr.qty = qty);
      }
    },
    removeCart: function(id) {
      let arr = this.carts.find(el => el.id === id);
      return this.carts.splice(arr, 1);
    }
  }
};
</script>
