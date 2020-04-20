<template>
  <div class="section-wrapper">
    <ul class="tab-bar d-none d-md-flex">
      <li
        v-for="step in dataForm.step"
        :key="step.component"
        :class="{ tablinks: true, active: step.isActive }"
        @click="actionStep(step.component)"
      >
        <img v-lazy="step.img" alt="food-product" />
        <span>{{ step.name | capitalize }}</span>
      </li>
    </ul>
    <keep-alive>
      <component :is="formPage"></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "OrderFormWizard",
  data() {
    return {
      formPage: "WizardFormOne"
    };
  },
  props: {
    dataForm: Object
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    WizardFormOne: async () => await import(`./WizardFormOne`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormTwo: async () => await import(`./WizardFormTwo`),
    // eslint-disable-next-line vue/no-unused-components
    WizardFormThree: async () => await import(`./WizardFormThree`)
  },
  created() {
    this.$Progress.start();
  },
  mounted() {
    this.$Progress.finish();
  },
  methods: {
    actionStep: function(param) {
      this.formPage = param;
      this.dataForm.step.map(m => {
        return m.component == this.formPage
          ? (m.isActive = true)
          : (m.isActive = false);
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/style/frontend/scss/custom";
</style>
