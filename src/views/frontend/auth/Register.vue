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
          <div class="section-header pr-md-5">
            <h3 class="sub-title">Buat akun anda</h3>
            <p>Silahkan mengisi form di bawah untuk mendaftar</p>
            <div id="form-login" class="form-login">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nama"
                />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">+62</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  placeholder="no. telphone"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Ulangi Password"
                />
              </div>
              <button type="submit" class="btn btn-warning btn-block mb-3">
                Daftar
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
  name: "RegisterPage"
};
</script>

<style></style>
