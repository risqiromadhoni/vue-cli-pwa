<template>
  <section class="banner style-2">
    <div class="banner-area">
      <div id="banner-img" class="left-side">
        <div class="section-wrapper">
          <div class="banner-slider">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                :style="
                  `background: url(${require('@/assets/images/frontend/banner/bg/01.jpg')});`
                "
              ></div>
            </div>
            <div class="banner-pagination"></div>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="banner-content">
          <div class="section-header pr-md-5 text-justify">
            <h3 class="sub-title">Login untuk melanjutkan</h3>
            <p>
              Silahkan login sebelum memulai pemesanan atau mengatur langganan
              kamu.
            </p>
            <div id="form-login" class="form-login">
              <div class="form-group">
                <label for="exampleInputEmail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword"
                />
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
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style></style>
