<template>
  <!-- Banner Section start here -->
  <section class="banner style-2">
    <div class="banner-area">
      <div id="banner-img" class="left-side">
        <div class="section-wrapper">
          <swiper
            class="banner-slider"
            ref="bannerSwiper"
            :options="swiperOptions"
          >
            <swiper-slide
              class="slide-1"
              :style="
                `background: url(${require(`@/assets/images/frontend/banner/bg/01.jpg`)});`
              "
            ></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="right-side">
        <div class="banner-content">
          <div class="section-header pr-md-5">
            <h3 class="sub-title">Login untuk melanjutkan</h3>
            <p>
              Silahkan login sebelum memulai pemesanan atau mengatur langganan
              kamu.
            </p>
            <div id="form-login" class="form-login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" />
              </div>
              <div class="row">
                <div class="col-6 col-sm-6 col-md-6">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >remember me</label
                    >
                  </div>
                </div>
                <div class="col-6 col-sm-6 col-md-6">
                  <a href="#" class="text-warning float-right"
                    >Belum memilik akun? Daftar</a
                  >
                </div>
              </div>
              <button type="submit" class="btn btn-warning btn-block mb-3">
                Login
              </button>
              <p class="small">
                Dengan login atau mendaftar, berarti kamu menyetujui
                <a href="#" class="text-warning">Syarat Ketentuan</a> dan
                <a href="#" class="text-warning">Kebijakan Privasi</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Banner Section ending here -->
</template>

<script>
export default {
  name: "SignInPage",
  data() {
    return {
      swiperOptions: {
        lazy: true,
        slidesPerView: 1,
        spaceBetween: 10
      }
    };
  },
  computed: {},
  mounted() {}
};
</script>
