<template>
  <div :class="`p-food-item`" @click="choseRice">
    <div :class="`p-food-inner`">
      <div class="p-food-thumb">
        <img v-lazy="product.img" alt="p-food" />
        <span>
          <del>{{ product.price }}</del>
          - {{ product.price_disk }}
        </span>
      </div>
      <div class="p-food-content">
        <div class="p-food-author">
          <a href="#">
            <img
              :src="require('@/assets/images/frontend/chef/author/02.jpg')"
              alt="food-author"
            />
          </a>
        </div>
        <h6>
          <a href="#">{{ product.name }}</a>
        </h6>
        <!-- <div class="p-food-group">
                  <span>Type of food :</span>
                  <a href="#">Beef Roast</a>
                  <a href="#">Pizza</a>
                  <a href="#">Stakes</a>
        </div>-->
        <ul class="del-time">
          <li>
            <i class="icofont icofont-box"></i>
            <div class="time-tooltip">
              <div class="time-tooltip-holder">
                <span class="tooltip-label">{{ "Dikemas" | capitalize }}</span>
                <span class="tooltip-info">
                  {{
                    "Dengan plastik BPA sebagai wadah standart makanan atau minuman"
                      | capitalize
                  }}
                </span>
              </div>
            </div>
          </li>
          <li>
            <i :class="'icofont ' + iconType(product.type)"></i>
            <div class="time-tooltip">
              <div class="time-tooltip-holder">
                <span class="tooltip-label">
                  {{ product.type | capitalize }}
                </span>
                <span class="tooltip-info">
                  {{ `Enjoy your ${product.type}` | capitalize }}
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div class="p-food-footer">
          <div class="left">
            <div class="rating">
              <i class="icofont icofont-star"></i>
              <i class="icofont icofont-star"></i>
              <i class="icofont icofont-star"></i>
              <i class="icofont icofont-star"></i>
              <i class="icofont icofont-star"></i>
            </div>
          </div>
          <div :class="'right ' + $style.addCart">
            <i class="icofont icofont-ui-add"></i>
            <span>{{ "Pilih" }}</span>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ itemCart: true, active: isActive }">
      <div class="checked-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="96"
          height="96"
          viewBox="0 0 172 172"
          style=" fill:#000000;"
        >
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          >
            <path d="M0,172v-172h172v172z" fill="none" />
            <g>
              <path
                d="M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z"
                fill="#c8e6c9"
              />
              <path
                d="M123.93317,52.2665l-48.62583,48.68317l-20.07383,-20.0165l-10.13367,10.13367l30.22183,30.15017l58.74875,-58.81683z"
                fill="#4caf50"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductUtilsComponent",
  data() {
    return {
      isActive: false
    };
  },
  props: {
    product: Object
  },
  methods: {
    iconType: function(params) {
      return params == "makan" ? "icofont-burger" : "icofont-soft-drinks";
    },
    choseRice: async function() {
      await this.insrtData();
      const data = this.$store.getters.itemActive(this.product);
      if (typeof data == "object") this.isActive = true;
      else this.isActive = false;
    },
    insrtData: async function() {
      await new Promise(resolve => {
        const data = {
          key: "product",
          data: this.product
        };
        this.$store.dispatch("setOrderDetail", data);
        resolve(data);
      });
    }
  }
};
</script>

<style lang="scss" module>
.addCart {
  cursor: pointer;
  &:hover {
    i.icofont,
    span {
      color: #ff9800 !important;
    }
  }
}
</style>

<style lang="scss">
.p-food-item {
  position: relative;
  cursor: pointer;
}
.itemCart {
  display: flex;
  opacity: 0;
  position: absolute;
  align-items: center;
  border-radius: 10px;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #ff9800, $alpha: 0.5);
  &.active {
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
    -moz-transition: opacity 0.25s ease-in-out;
    -webkit-transition: opacity 0.25s ease-in-out;
    .checked-item {
      overflow: hidden;
      margin: 0 auto;
    }
  }
}
</style>
