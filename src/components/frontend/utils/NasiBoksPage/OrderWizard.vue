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
      <component :is="formPage"></component>
    </keep-alive>
  </div>
</template>

<script>
import finish from "@/assets/images/frontend/svg/step-circle-checked.svg";
export default {
  name: "OrderFormWizard",
  data() {
    return {
      formPage: "WizardFormOne",
      dataForm: []
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    WizardFormOne: async () => await import(`./WizardFormOne`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormTwo: async () => await import(`./WizardFormTwo`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormThree: async () => await import(`./WizardFormThree`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormFour: async () => await import(`./WizardFormFour`)
  },
  created() {
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
