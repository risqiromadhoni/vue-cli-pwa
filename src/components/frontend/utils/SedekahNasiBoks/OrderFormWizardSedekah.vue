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
  name: "OrderFormWizardSedekah",
  data() {
    return {
      formPage: "",
      dataForm: []
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    WizardFormOneSedekah: async () => await import(`./WizardFormOneSedekah`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormTwoSedekah: async () => await import(`./WizardFormTwoSedekah`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormThreeSedekah: async () =>
      await import(`./WizardFormThreeSedekah`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormFourSedekah: async () => await import(`./WizardFormFourSedekah`)
  },
  created() {
    this.formPage = "WizardFormOneSedekah";
    this.$store.dispatch("setOrderStep", [
      {
        name: "Lokasi",
        img: svg1,
        isActive: true,
        component: "WizardFormOneSedekah",
        isFinish: false
      },
      {
        name: "Nominal Sedekah",
        img: svg2,
        isActive: false,
        component: "WizardFormTwoSedekah",
        isFinish: false
      },
      {
        name: "Penyedekah",
        img: svg3,
        isActive: false,
        component: "WizardFormThreeSedekah",
        isFinish: false
      },
      {
        name: "Kirim Sedekah",
        img: svg4,
        isActive: false,
        component: "WizardFormFourSedekah",
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
