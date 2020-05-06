<template>
  <!-- Booking Table Section Start Here -->
  <section id="nasi-boks" class="booking-table padding-tb product style-2">
    <div class="shape-1">
      <img
        v-lazy="require('@/assets/images/frontend/banner/shape/01.png')"
        alt="banner"
      />
    </div>
    <div class="shape-2">
      <img
        v-lazy="require('@/assets/images/frontend/banner/shape/02.png')"
        alt="banner"
      />
    </div>
    <div class="container">
      <div class="section-header">
        <h3>Nasi Boks</h3>
        <p>Atur jadwal makan kamu sesuai dengan keinginan.</p>
      </div>
      <OrderFormWizard />
    </div>
  </section>
  <!-- Booking Table Section Ending Here -->
</template>

<script>
export default {
  name: "NasiBoksPage",
  data() {
    return {
      wizardFormOrder: []
    };
  },
  components: {
    OrderFormWizard: () =>
      import("@/components/frontend/utils/NasiBoksPage/OrderWizard")
  },
  mounted() {
    this.$store.dispatch("destroyOrder");
  }
};
</script>
