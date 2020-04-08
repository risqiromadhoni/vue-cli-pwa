<template>
  <div class="about">
    <h1 :class="aboutStyle.textGreen">This is an about page</h1>
  </div>
</template>

<script>
import aboutStyle from "../assets/css/About.module.scss";

export default {
  name: "About",
  data() {
    return {
      aboutStyle
    };
  }
};
</script>
