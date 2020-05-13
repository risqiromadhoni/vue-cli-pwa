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
        <h3>{{ $t("book_place") }}</h3>
        <p>{{ $t("book_place_desc") }}</p>
      </div>
      <OrderFormWizardReserve />
    </div>
  </section>
  <!-- Booking Table Section Ending Here -->
</template>

<script>
export default {
  name: "ReservasiTempatPage",
  data() {
    return {
      wizardFormOrder: []
    };
  },
  components: {
    OrderFormWizardReserve: () =>
      import(
        "@/components/frontend/utils/ReservasiTempat/OrderFormWizardReserve"
      )
  },
  mounted() {
    this.$store.dispatch("destroyOrder");
  }
};
</script>
