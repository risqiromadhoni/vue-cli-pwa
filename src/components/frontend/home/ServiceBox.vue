<template>
  <b-col sm>
    <div class="product-item style-2">
      <div class="product-thumb">
        <img
          v-lazy="require(`@/assets/images/frontend/${services.img}`)"
          alt="food-product"
          :title="services.name"
        />
      </div>
      <div class="product-content">
        <div class="product-title">
          <h6>
            <a href="#">{{ services.name }}</a>
          </h6>
        </div>
        <div class="product-desc">
          <p>
            {{ services.description }}
          </p>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "ServiceBoxComponent",
  props: {
    services: Object,
  },
};
</script>
