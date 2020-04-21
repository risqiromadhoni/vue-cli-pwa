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
          <router-link tag="a" :to="{ name: 'Home' }">
            <img
              v-lazy="require('@/assets/images/frontend/logo/01.png')"
              alt="logo"
            />
          </router-link>
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
                <ChartComponent />
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
  components: {
    ChartComponent: () => import("@/components/frontend/utils/Chart")
  }
};
</script>
