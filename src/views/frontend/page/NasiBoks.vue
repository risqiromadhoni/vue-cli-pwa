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
      <OrderFormWizard :dataForm="wizardFormOrder" />
    </div>
  </section>
  <!-- Booking Table Section Ending Here -->
</template>

<script>
import svg1 from "@/assets/images/frontend/svg/step-circle-1.svg";
import svg2 from "@/assets/images/frontend/svg/step-circle-2.svg";
import svg3 from "@/assets/images/frontend/svg/step-circle-3.svg";
import svg4 from "@/assets/images/frontend/svg/step-circle-4.svg";
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
  created() {
    // Create Navigation
    this.$store.dispatch("setOrderStep", [
      {
        name: "Restoran",
        img: svg1,
        isActive: true,
        component: "WizardFormOne",
        isFinish: 0
      },
      {
        name: "Makanan & Minuman",
        img: svg2,
        isActive: false,
        component: "WizardFormTwo",
        isFinish: 0
      },
      {
        name: "Jadwal",
        img: svg3,
        isActive: false,
        component: "WizardFormThree",
        isFinish: 0
      },
      {
        name: "Pembayaran",
        img: svg4,
        isActive: false,
        component: "WizardFormFour",
        isFinish: 0
      }
    ]);
    // this.wizardFormOrder.push(navStep);
  },
  mounted() {
    this.wizardFormOrder = this.$store.state.order.step;
  }
};
</script>
