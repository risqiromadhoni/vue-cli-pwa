<template>
  <div class="section-wrapper">
    <ul class="tab-bar d-none d-md-flex">
      <li
        v-for="step in dataForm"
        :key="step.component"
        :class="{ tablinks: true, active: step.isActive }"
      >
        <img :src="imgTop(step)" alt="food-product" />
        <span>{{ step.name | capitalize }}</span>
      </li>
    </ul>
    <keep-alive>
      <component
        :is="formPage"
        transition="fade"
        transition-mode="out-in"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import finish from "@/assets/images/frontend/svg/step-circle-checked.svg";
import svg1 from "@/assets/images/frontend/svg/step-circle-1.svg";
import svg2 from "@/assets/images/frontend/svg/step-circle-2.svg";
import svg3 from "@/assets/images/frontend/svg/step-circle-3.svg";
import svg4 from "@/assets/images/frontend/svg/step-circle-4.svg";
export default {
  // FIXME: Name must be unique
  name: "OrderFormWizardReserve",
  data() {
    return {
      formPage: "",
      dataForm: []
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    WizardFormOneReserve: async () => await import(`./WizardFormOneReserve`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormTwoReserve: async () => await import(`./WizardFormTwoReserve`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormThreeReserve: async () =>
      await import(`./WizardFormThreeReserve`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormFourReserve: async () => await import(`./WizardFormFourReserve`)
  },
  created() {
    this.formPage = "WizardFormOneReserve";
    this.$store.dispatch("setOrderStep", [
      {
        name: "Restoran",
        img: svg1,
        isActive: true,
        component: "WizardFormOneReserve",
        isFinish: false
      },
      {
        name: "Makanan & Minuman",
        img: svg2,
        isActive: false,
        component: "WizardFormTwoReserve",
        isFinish: false
      },
      {
        name: "Jadwal",
        img: svg3,
        isActive: false,
        component: "WizardFormThreeReserve",
        isFinish: false
      },
      {
        name: "Pembayaran",
        img: svg4,
        isActive: false,
        component: "WizardFormFourReserve",
        isFinish: false
      }
    ]);
    this.dataForm = this.$store.state.order.step;
  },
  methods: {
    imgTop: function(params) {
      if (!params.isFinish) return params.img;
      else return finish;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/style/frontend/scss/custom";
</style>
