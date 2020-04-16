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
      <div class="section-wrapper">
        <ul class="tab-bar d-none d-md-flex">
          <li :class="`tablinks ${active1}`" id="defaultOpen">
            <img v-lazy="imgStep1" alt="food-product" />
            <span>Step Satu</span>
          </li>
          <li class="tablinks">
            <img
              v-lazy="require(`@/assets/images/frontend/product/icon/02.png`)"
              alt="food-product"
            />
            <span>Step Dua</span>
          </li>
          <li class="tablinks">
            <img
              v-lazy="require(`@/assets/images/frontend/product/icon/03.png`)"
              alt="food-product"
            />
            <span>Step Tiga</span>
          </li>
        </ul>
        <b-row>
          <b-col sm>
            <div></div>
          </b-col>
          <b-col sm>
            <div class="contact-form">
              <form action="https://www.foxcoders.com/">
                <input type="text" name="name" placeholder="Full Name*" />
                <input type="email" name="email" placeholder="Your Eamil*" />
                <input type="text" name="number" placeholder="Phone Number" />
                <div class="res-tab time-zone">
                  <select>
                    <option value="1">Enter Time</option>
                    <option value="2">10:00 AM</option>
                    <option value="3">11:00 AM</option>
                    <option value="4">12:00 PM</option>
                    <option value="5">01:00 PM</option>
                    <option value="6">02:00 PM</option>
                    <option value="7">03:00 PM</option>
                    <option value="8">04:00 PM</option>
                    <option value="9">05:00 PM</option>
                  </select>
                </div>
                <div class="res-tab table-zone">
                  <select>
                    <option value="1">Room Type</option>
                    <option value="2">Normal</option>
                    <option value="3">VIP</option>
                    <option value="4">VVIP</option>
                  </select>
                </div>
                <input type="date" name="time" data-provide="datepicker" />
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                ></textarea>
                <button type="submit" class="food-btn style-2">
                  <span>book a table</span>
                </button>
              </form>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
  <!-- Booking Table Section Ending Here -->
</template>

<script>
import img from "@/assets/images/frontend/product/icon/01.png";
import svg from "@/assets/images/frontend/svg/step-circle-checked.svg";
export default {
  name: "NasiBoksPage",
  data() {
    return {
      imgStep1: img,
      active1: "active"
    };
  },
  mounted() {
    setTimeout(() => {
      this.imgStep1 = svg;
      this.active1 = "";
    }, 2000);
  }
};
</script>

<style lang="scss">
@import "@/assets/style/frontend/scss/custom";
</style>
