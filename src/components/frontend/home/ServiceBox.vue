<template>
  <b-col sm>
    <div class="product-item style-2">
      <div class="product-thumb">
        <img
          v-lazy="require(`@/assets/images/frontend/${services.img}`)"
          :alt="services.slug"
          :title="services.name"
        />
      </div>
      <div class="product-content">
        <div class="product-title">
          <h6>
            <router-link tag="a" :to="{ name: services.route }">{{
              services.name | capitalize
            }}</router-link>
          </h6>
        </div>
        <div class="product-desc">
          <p>{{ services.description }}</p>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "ServiceBoxComponent",
  props: {
    services: Object
  }
};
</script>
