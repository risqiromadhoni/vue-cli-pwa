<template>
  <div id="app">
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <!-- header section start -->
    <HeaderComponents />
    <!-- header section ending -->
    <router-view />
    <!-- Footer Section Start Here -->
    <FooterComponents />
    <!-- Footer Section Ending Here -->
  </div>
</template>

<script>
import "@/assets/style/frontend/scss/global.scss";
export default {
  name: "FrontendIndexPage",
  components: {
    HeaderComponents: () => import("@/components/frontend/Header"),
    FooterComponents: () => import("@/components/frontend/Footer")
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(this.showLocation);
  },
  methods: {
    showLocation: function(position) {
      const res = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      };
      console.log(res);
      return res;
    }
  }
};
</script>
