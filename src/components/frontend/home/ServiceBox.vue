<template>
  <b-col sm>
    <div @click="detailService" class="product-item style-2">
      <div class="product-thumb">
        <img
          v-lazy="require(`@/assets/images/frontend/${services.images}`)"
          :alt="services.slug"
          :title="services.title"
        />
      </div>
      <div class="product-content">
        <div class="product-title">
          <h6>
            <router-link tag="a" :to="{ name: services.route }">
              {{ services.title | capitalize }}
            </router-link>
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
  },
  methods: {
    detailService: function() {
      return this.$router.push({ name: this.services.route });
    }
  }
};
</script>
