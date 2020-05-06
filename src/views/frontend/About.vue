<template>
  <div>
    <!-- Page Header Section Start Here -->
    <Breadcrumb title="About Pesanduluan" sub1="Home" sub2="About" />
    <!-- Page Header Section Ending Here -->

    <!-- About Section Start here -->
    <section class="about about-page padding-tb">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-12">
            <div class="about-thumb">
              <img
                :src="require('@/assets/images/frontend/about/01.png')"
                alt="about-food"
              />
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="about-content">
              <div class="section-header">
                <span>Welcome Pesanduluan</span>
                <h3>About Restaurant History!</h3>
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
                  optimal paradigms reliable techno Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Architecto quidem alias est
                  suscipit voluptatum facilis nulla praesentium consectetur
                  voluptatem ducimus, quod molestias illo unde iste quisquam
                  repellat iure excepturi recusandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section Ending here -->
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {
    Breadcrumb: () => import("@/components/frontend/Breadcrumb.vue")
  }
};
</script>
