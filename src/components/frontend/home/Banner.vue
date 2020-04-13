<template>
  <div class="section-wrapper">
    <swiper class="banner-slider" ref="bannerSwiper" :options="swiperOptions">
      <swiper-slide
        v-for="img in swiperImg"
        :key="img"
        class="slide-1"
        :style="
          `background: url(${require(`@/assets/images/frontend/banner/bg/0${img}.jpg`)});`
        "
      ></swiper-slide>
    </swiper>
    <div class="banner-pagination"></div>
  </div>
</template>

<script>
export default {
  name: "SponsorComponent",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".banner-pagination",
          clickable: true
        },
        loop: true
      },
      swiperImg: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    swiper() {
      return this.$refs.bannerSwiper.$swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>
