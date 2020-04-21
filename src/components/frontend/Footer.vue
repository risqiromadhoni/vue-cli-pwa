<template>
  <footer class="footer">
    <div class="bg-shape-style"></div>
    <div class="container">
      <div class="footer-top">
        <div class="footer-area text-center">
          <div class="footer-logo">
            <router-link tag="a" :to="{ name: 'Home' }">
              <img
                v-lazy="
                  require('@/assets/images/frontend/header/footer/01.png')
                "
                alt="footer-logo"
              />
            </router-link>
          </div>
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
          <div class="footer-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">How it works?</a>
              </li>
              <li>
                <a href="#">Menus</a>
              </li>
              <li>
                <a href="#">Chefs</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p>
          &copy; 2019
          <a href="#">
            <span>Pesanduluan</span>
          </a>
          Design by
          <a href="#">
            <span>FoodPedia</span>
          </a>
          {{ "." }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>
