<template>
  <div id="app">
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
          <a href="index-2.html" class="logo"
            ><img
              v-lazy="require('@/assets/images/frontend/logo/01.png')"
              alt="logo"
          /></a>
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
                <a class="active" href="#0">About</a>
              </li>
              <li>
                <a href="#0">Layanan Kami</a>
                <ul>
                  <li><a href="#0">Nasi Boks</a></li>
                  <li><a href="#0">Reservasi Tempat</a></li>
                  <li><a href="#0">Sedekah Nasi Boks</a></li>
                </ul>
              </li>
              <li>
                <a href="#0">Blog</a>
              </li>
              <li><a href="#0">Contact</a></li>
              <li><a href="#0">Help</a></li>
            </ul>
            <div class="scocial-media">
              <a href="#" class="facebook"
                ><i class="icofont icofont-facebook"></i
              ></a>
              <a href="#" class="twitter"
                ><i class="icofont icofont-twitter"></i
              ></a>
              <a href="#" class="linkedin"
                ><i class="icofont icofont-linkedin"></i
              ></a>
              <a href="#" class="vimeo"
                ><i class="icofont icofont-vimeo"></i
              ></a>
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
                <router-link :to="{ name: 'About' }" tag="a">
                  About
                </router-link>
              </li>
              <li>
                <a href="#0">Layanan Kami</a>
                <ul>
                  <li><a href="#0">Nasi Boks</a></li>
                  <li><a href="#0">Reservasi Tempat</a></li>
                  <li><a href="#0">Sedekah Nasi Boks</a></li>
                </ul>
              </li>
              <li>
                <a href="#0">Blog</a>
              </li>
              <li><a href="#0">Contact</a></li>
              <li><a href="#0">Help</a></li>
            </ul>
          </div>
          <div class="author-option">
            <div class="author-area">
              <div class="author-account">
                <i class="icofont icofont-ui-user"></i>
                <div class="author-select">
                  <select name="author-select" id="author-select">
                    <option value="1">My Account </option>
                    <option value="2">Log Out </option>
                  </select>
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
                <div class="count-item">04</div>
                <div class="cart-content">
                  <div class="cart-title">
                    <div class="add-item">4 Items Added</div>
                    <div class="list-close"><a href="#">Close</a></div>
                  </div>
                  <div class="cart-scr scrollbar">
                    <div class="cart-con-item">
                      <div class="cart-item">
                        <div class="cart-inner">
                          <div class="cart-top">
                            <div class="thumb">
                              <a href="#"
                                ><img
                                  v-lazy="
                                    require('@/assets/images/frontend/popular-food/01.jpg')
                                  "
                                  alt=""
                              /></a>
                            </div>
                            <div class="content">
                              <a href="#">Split Remedy Split End Shampoo</a>
                            </div>
                            <div class="remove-btn">
                              <a href="#"
                                ><i class="icofont icofont-close"></i
                              ></a>
                            </div>
                          </div>
                          <div class="cart-bottom">
                            <div class="sing-price">Tk. 140</div>
                            <div class="cart-plus-minus">
                              <div class="dec qtybutton">-</div>
                              <div class="dec qtybutton">-</div>
                              <input
                                class="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                value="1"
                              />
                              <div class="inc qtybutton">+</div>
                              <div class="inc qtybutton">+</div>
                            </div>
                            <div class="total-price">Tk. 280.00</div>
                          </div>
                        </div>
                      </div>
                      <div class="cart-item">
                        <div class="cart-inner">
                          <div class="cart-top">
                            <div class="thumb">
                              <a href="#"
                                ><img
                                  v-lazy="
                                    require('@/assets/images/frontend/popular-food/02.jpg')
                                  "
                                  alt=""
                              /></a>
                            </div>
                            <div class="content">
                              <a href="#">Split Remedy Split End Shampoo</a>
                            </div>
                            <div class="remove-btn">
                              <a href="#"
                                ><i class="icofont icofont-close"></i
                              ></a>
                            </div>
                          </div>
                          <div class="cart-bottom">
                            <div class="sing-price">Tk. 140</div>
                            <div class="cart-plus-minus">
                              <div class="dec qtybutton">-</div>
                              <div class="dec qtybutton">-</div>
                              <input
                                class="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                value="1"
                              />
                              <div class="inc qtybutton">+</div>
                              <div class="inc qtybutton">+</div>
                            </div>
                            <div class="total-price">Tk. 280.00</div>
                          </div>
                        </div>
                      </div>
                      <div class="cart-item">
                        <div class="cart-inner">
                          <div class="cart-top">
                            <div class="thumb">
                              <a href="#"
                                ><img
                                  v-lazy="
                                    require('@/assets/images/frontend/popular-food/03.jpg')
                                  "
                                  alt=""
                              /></a>
                            </div>
                            <div class="content">
                              <a href="#">Split Remedy Split End Shampoo</a>
                            </div>
                            <div class="remove-btn">
                              <a href="#"
                                ><i class="icofont icofont-close"></i
                              ></a>
                            </div>
                          </div>
                          <div class="cart-bottom">
                            <div class="sing-price">Tk. 140</div>
                            <div class="cart-plus-minus">
                              <div class="dec qtybutton">-</div>
                              <div class="dec qtybutton">-</div>
                              <input
                                class="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                value="1"
                              />
                              <div class="inc qtybutton">+</div>
                              <div class="inc qtybutton">+</div>
                            </div>
                            <div class="total-price">Tk. 280.00</div>
                          </div>
                        </div>
                      </div>
                      <div class="cart-item">
                        <div class="cart-inner">
                          <div class="cart-top">
                            <div class="thumb">
                              <a href="#"
                                ><img
                                  v-lazy="
                                    require('@/assets/images/frontend/popular-food/04.jpg')
                                  "
                                  alt=""
                              /></a>
                            </div>
                            <div class="content">
                              <a href="#">Split Remedy Split End Shampoo</a>
                            </div>
                            <div class="remove-btn">
                              <a href="#"
                                ><i class="icofont icofont-close"></i
                              ></a>
                            </div>
                          </div>
                          <div class="cart-bottom">
                            <div class="sing-price">Tk. 140</div>
                            <div class="cart-plus-minus">
                              <div class="dec qtybutton">-</div>
                              <div class="dec qtybutton">-</div>
                              <input
                                class="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                value="1"
                              />
                              <div class="inc qtybutton">+</div>
                              <div class="inc qtybutton">+</div>
                            </div>
                            <div class="total-price">Tk. 280.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-scr-bottom">
                    <ul>
                      <li>
                        <div class="title">Subtotal</div>
                        <div class="price">Tk. 1045.00</div>
                      </li>
                      <li>
                        <div class="title">Shipping</div>
                        <div class="price">Tk. 40.00</div>
                      </li>
                      <li>
                        <div class="title">Cart Total</div>
                        <div class="price">Tk. 1085.00</div>
                      </li>
                    </ul>
                    <a href="#" class="food-btn"><span>Place Order</span></a>
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
    <router-view />
    <!-- Footer Section Start Here -->
    <footer class="footer">
      <div class="bg-shape-style"></div>
      <div class="container">
        <div class="footer-top">
          <div class="footer-area text-center">
            <div class="footer-logo">
              <a href="index-2.html"
                ><img
                  v-lazy="
                    require('@/assets/images/frontend/header/footer/01.png')
                  "
                  alt="footer-logo"
              /></a>
            </div>
            <div class="scocial-media">
              <a href="#" class="facebook"
                ><i class="icofont icofont-facebook"></i
              ></a>
              <a href="#" class="twitter"
                ><i class="icofont icofont-twitter"></i
              ></a>
              <a href="#" class="linkedin"
                ><i class="icofont icofont-linkedin"></i
              ></a>
              <a href="#" class="vimeo"
                ><i class="icofont icofont-vimeo"></i
              ></a>
            </div>
            <div class="footer-menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">How it works?</a></li>
                <li><a href="#">Menus</a></li>
                <li><a href="#">Chefs</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom text-center">
          <p>
            &copy; 2019 <a href="#"><span>Pesanduluan</span></a> Design by
            <a href="#"><span>FoodPedia</span></a
            >.
          </p>
        </div>
      </div>
    </footer>
    <!-- Footer Section Ending Here -->
  </div>
</template>

<script>
import "@/assets/style/frontend/scss/global.scss";
export default {};
</script>
