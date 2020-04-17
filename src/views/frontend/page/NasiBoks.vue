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
export default {
  name: "NasiBoksPage",
  data() {
    return {
      wizardFormOrder: {}
    };
  },
  components: {
    OrderFormWizard: () =>
      import("@/components/frontend/utils/NasiBoksPage/OrderWizard")
  },
  created() {
    // Create Navigation
    this.wizardFormOrder = {
      step: [
        {
          name: "Step Satu",
          img: svg1,
          isActive: true,
          component: "WizardFormOne"
        },
        {
          name: "Step Dua",
          img: svg2,
          isActive: false,
          component: "WizardFormTwo"
        },
        {
          name: "Step Tiga",
          img: svg3,
          isActive: false,
          component: "WizardFormThree"
        }
      ]
    };
    // this.wizardFormOrder.push(navStep);
  },
  mounted() {}
};
</script>
