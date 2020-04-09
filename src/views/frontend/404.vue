<template>
  <div>
    <!-- Page Header Section Start Here -->
    <Breadcrumb title="404 Page Not Found" sub1="Home" sub2="404" />
    <!-- Page Header Section Ending Here -->

    <!-- fore zero fore page start here -->
    <section class="fore-zero padding-tb">
      <div class="container">
        <div class="section-wrapper">
          <div class="zero-item">
            <div class="zero-thumb">
              <img
                :src="require('@/assets/images/frontend/404.png')"
                alt="404"
              />
            </div>
            <div class="zero-content">
              <h3>Oops! The Page You Are Looking For Could Not Be Found</h3>
              <router-link
                tag="a"
                :to="{ name: 'Home' }"
                class="food-btn style-2"
                ><span>Back to Home</span></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- fore zero fore page ending here -->
  </div>
</template>

<script>
export default {
  name: "404Page",
  components: {
    Breadcrumb: () => import("@/components/frontend/Breadcrumb.vue")
  }
};
</script>

<style></style>
