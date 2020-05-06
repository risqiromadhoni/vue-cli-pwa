<template>
  <div>
    <!-- Banner Section start here -->
    <section class="banner style-2">
      <div class="banner-area">
        <div class="left-side">
          <BannerSwiperComponent />
        </div>
        <div class="right-side">
          <div class="banner-content">
            <div class="section-header pr-md-5">
              <span class="sub-title">Temukan Selera Anda</span>
              <h2>Makanlah Makanan Sehat Dan Alami</h2>
              <p>
                Pesanduluan aja kalau kamu bingung mau makan apa hari ini,
                langganan makin hemat loh!
              </p>
              <!-- <span href="#" class="food-btn style-2"><span>Discover menu</span></a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Banner Section ending here -->

    <!-- About Section Start here -->
    <section class="about padding-tb">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-12">
            <div class="about-thumb">
              <img
                v-lazy="require('@/assets/images/frontend/about/01.png')"
                alt="about-food"
              />
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="about-content">
              <div class="section-header">
                <span>Welcome Pesanduluan</span>
                <h3>Tentang Kami</h3>
              </div>
              <div class="section-wrapper">
                <p>
                  Synergistca conceptualize leveraged inte ectual capital
                  through virtual and the a and Proactiviely initiate lrisk
                  highyield a platforms after realtme froms growth that awesome
                  tently matrix robusti method powerm foistcky Sytical concepta
                  leved ntelectua anding capita hrough virtua nteectua that
                  capta the and Proactiviely initiate low risk highyield
                  platforms after realtme froms that there andin Proctive
                  initate low risk high yeld platform aftering Conven iterate
                  optimal paradigms reliable techno
                </p>
                <a href="#" class="food-btn style-2">
                  <span>Read Our History</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section Ending here -->

    <!-- Food Product Section Start here -->

    <!-- Food Product Section Ending here -->

    <!-- Food Product Section Style 2 Start here -->
    <section
      class="product style-2 padding-tb"
      style="background-image: url(assets/css/bg-image/product-2.jpg);"
    >
      <div class="container">
        <div class="section-header">
          <h3>{{ $t("our_service") }}</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="section-wrapper">
          <div id="burger" class="tabcontent">
            <div class="row no-gutters">
              <ServiceBoxComponent
                v-for="service in services"
                :key="service._id"
                :services="service"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Food Product Section Style 2 Ending here -->

    <!-- Booking Table Section Start Here -->
    <!-- <section class="booking-table padding-tb">
      <div class="shape-1">
        <img v-lazy="require('@/assets/images/frontend/banner/shape/02.png')" alt="banner" />
      </div>
      <div class="shape-2">
        <img v-lazy="require('@/assets/images/frontend/banner/shape/02.png')" alt="banner" />
      </div>
      <div class="container">
        <div class="section-header">
          <h3>Jadwalkan Kunjungan Anda</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="section-wrapper">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-6 col-12">
              <div class="bg-table"></div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="contact-form">
                <form action="https://www.foxcoders.com/">
                  <input type="text" name="name" placeholder="Full Name*" />
                  <input type="email" name="email" placeholder="Your Eamil*" />
                  <input type="text" name="number" placeholder="Phone Number" />
                  <div class="res-tab time-zone">
                    <select>
                      <option value="1">Enter Time</option>
                      <option value="2">10:00 AM</option>
                      <option value="3">11:00 AM</option>
                      <option value="4">12:00 PM</option>
                      <option value="5">01:00 PM</option>
                      <option value="6">02:00 PM</option>
                      <option value="7">03:00 PM</option>
                      <option value="8">04:00 PM</option>
                      <option value="9">05:00 PM</option>
                    </select>
                  </div>
                  <div class="res-tab table-zone">
                    <select>
                      <option value="1">Room Type</option>
                      <option value="2">Normal</option>
                      <option value="3">VIP</option>
                      <option value="4">VVIP</option>
                    </select>
                  </div>
                  <input type="date" name="time" data-provide="datepicker" />
                  <textarea name="message" rows="6" placeholder="Message"></textarea>
                  <button type="submit" class="food-btn style-2">
                    <span>book a table</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <!-- Booking Table Section Ending Here -->

    <!-- Blog Section Start here -->
    <section class="blog-section padding-tb" style="background-color: #fffaf4">
      <div class="container">
        <div class="section-header">
          <h3>Artikel Terbaru</h3>
          <p>
            Completely network impactful users whereas next-generation
            applications engage out thinking via tactical action.
          </p>
        </div>
        <div class="section-wrapper">
          <div class="row">
            <div class="col-xl-6 col-12 blog-left">
              <div class="post-item">
                <div class="post-inner">
                  <div class="post-thumb">
                    <a href="#">
                      <img
                        v-lazy="require('@/assets/images/frontend/blog/01.jpg')"
                        alt="petuk-blog"
                      />
                    </a>
                  </div>
                  <div class="post-content">
                    <h5>
                      <a href="#">Center What For Semicon Remoing.</a>
                    </h5>
                    <a href="#" class="date">22 December 2019</a>
                    <p>
                      Drama enable wordwid action team where Motin Was Proce
                      Aramin Raher Conven Cuvas rama enabe wordwd acton team
                      herea mnes Uroced Aran Manu Produ Raher Convene Cuva
                    </p>
                    <a href="#" class="food-btn">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-12 blog-right">
              <div class="col-md-6 col-12">
                <div class="post-item">
                  <div class="post-inner">
                    <div class="post-thumb">
                      <a href="#">
                        <img
                          v-lazy="
                            require('@/assets/images/frontend/blog/02.jpg')
                          "
                          alt="petuk-blog"
                        />
                      </a>
                    </div>
                    <div class="post-content">
                      <h6>
                        <a href="#">Forin Semcon Remon..</a>
                      </h6>
                      <a href="#" class="date">22 December 2019</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="post-item">
                  <div class="post-inner">
                    <div class="post-thumb">
                      <a href="#">
                        <img
                          v-lazy="
                            require('@/assets/images/frontend/blog/03.jpg')
                          "
                          alt="petuk-blog"
                        />
                      </a>
                    </div>
                    <div class="post-content">
                      <h6>
                        <a href="#">Forin Semcon Remon..</a>
                      </h6>
                      <a href="#" class="date">22 December 2019</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="post-item">
                  <div class="post-inner">
                    <div class="post-thumb">
                      <a href="#">
                        <img
                          v-lazy="
                            require('@/assets/images/frontend/blog/04.jpg')
                          "
                          alt="petuk-blog"
                        />
                      </a>
                    </div>
                    <div class="post-content">
                      <h6>
                        <a href="#">Forin Semcon Remon..</a>
                      </h6>
                      <a href="#" class="date">22 December 2019</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="post-item">
                  <div class="post-inner">
                    <div class="post-thumb">
                      <a href="#">
                        <img
                          v-lazy="
                            require('@/assets/images/frontend/blog/05.jpg')
                          "
                          alt="petuk-blog"
                        />
                      </a>
                    </div>
                    <div class="post-content">
                      <h6>
                        <a href="#">Forin Semcon Remon..</a>
                      </h6>
                      <a href="#" class="date">22 December 2019</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog Section Ending here -->

    <!-- Sponsor Section Start Here -->
    <div class="sponsor-section">
      <div class="container">
        <div class="section-wrapper">
          <div class="sponsor-slider">
            <!-- Sponsor Swiper Component -->
            <SponsorComponent />
          </div>
        </div>
      </div>
    </div>
    <!-- Sponsor Section Ending Here -->
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    SponsorComponent: () => import("@/components/frontend/home/Sponsor"),
    BannerSwiperComponent: () => import("@/components/frontend/home/Banner"),
    ServiceBoxComponent: () => import("@/components/frontend/home/ServiceBox"),
  },
  created() {
    this.$store.dispatch("setService");
    this.$store.dispatch("getRegency");
    this.$store.dispatch("getOutlet");
  },
  computed: {
    services() {
      return this.$store.getters.services;
    },
  },
};
</script>
