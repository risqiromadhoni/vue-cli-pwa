<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="img in swiperImg" :key="img">
      <div class="sponsor-item">
        <div class="sponsor-thumb">
          <a href="#"
            ><img
              :src="require(`@/assets/images/frontend/sponsor/0${img}.png`)"
              alt="food-sopnsor"
          /></a>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "SponsorComponent",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 6,
        spaceBetween: 10,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        breakpoints: {
          992: {
            slidesPerView: 4
          },
          576: {
            slidesPerView: 3
          },
          400: {
            slidesPerView: 2
          }
        },
        loop: true
      },
      swiperImg: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style></style>
