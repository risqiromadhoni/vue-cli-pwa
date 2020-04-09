<template>
  <section class="page-header">
    <div class="shape-1">
      <img
        :src="require('@/assets/images/frontend/banner/shape/01.png')"
        alt="banner"
      />
    </div>
    <div class="shape-2">
      <img
        :src="require('@/assets/images/frontend/banner/shape/02.png')"
        alt="banner"
      />
    </div>
    <div class="container">
      <div class="page-title text-center">
        <h3>{{ title }}</h3>
        <ul class="breadcrumb">
          <li>
            <router-link tag="a" :to="{ name: 'Home' }">
              {{ sub1 }}
            </router-link>
          </li>
          <li>{{ sub2 }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BreadcrumbComponent",
  props: {
    title: String,
    sub1: String,
    sub2: String
  }
};
</script>

<style></style>
