<template>
  <!-- Food Product Section Style 2 Start here -->
  <section class="product style-2 bg-body padding-tb">
    <div class="container">
      <div class="section-header">
        <h3>{{ $t("transaction_history") | capitalize }}</h3>
        <p>{{ $t("transaction_history_desc") }}.</p>
      </div>
      <div class="section-wrapper">
        <ul class="tab-bar">
          <li
            v-for="(item, key) in services"
            :key="key"
            :class="{ tablinks: true, active: true }"
          >
            <b-avatar variant="light" :src="loadImage(item.images)"></b-avatar>
            <span>{{ item.title }}</span>
          </li>
        </ul>
        <div class="tabcontent">
          <div class="row no-gutters">
            <div v-for="(item, key) in data" :key="key" class="col-lg-6 col-12">
              <div class="product-item style-2">
                <div class="product-thumb">
                  <img :src="item.user.gender" alt="food-product" />
                </div>
                <div class="product-content">
                  <div class="product-title">
                    <h6>
                      <a target="_self">{{ item.invoice }}</a>
                    </h6>
                    <small>{{ item.order.tgl }}</small>
                  </div>
                  <div class="product-desc">
                    <table>
                      <tbody>
                        <tr>
                          <td>{{ $t("status") }}</td>
                          <td>
                            <div class="px-2">:</div>
                          </td>
                          <td class="text-success">
                            {{ item.order.status | capitalize }}
                          </td>
                        </tr>
                        <tr>
                          <td>{{ $t("total") }}</td>
                          <td>
                            <div class="px-2">:</div>
                          </td>
                          <td>{{ item.order.total | intToIdr }}</td>
                        </tr>
                        <tr>
                          <td>{{ $t("customer") }}</td>
                          <td>
                            <div class="px-2">:</div>
                          </td>
                          <td>{{ item.order.total | capitalize }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Food Product Section Style 2 Ending here -->
</template>

<script>
import _ from "lodash";
import male from "@/assets/images/frontend/svg/avatar-male.svg";
import female from "@/assets/images/frontend/svg/avatar-female.svg";
import { randString } from "@/utils/helper";
import moment from "moment";
export default {
  name: "OrderHistoryViewAuth",
  data() {
    return {
      services: [],
      male: male,
      female: female,
      data: []
    };
  },
  created() {
    this.services = _.map(
      this.$store.state.service.services,
      this.remapNavigate
    );
  },
  mounted() {
    this.data = [
      {
        invoice: `FPD-${randString()}`,
        order: {
          tgl: moment().format("DD MMM YYYY"),
          total: 100000,
          status: "menunggu konfirmasi"
        },
        user: {
          gender: male,
          name: "risqi romadhoni"
        }
      },
      {
        invoice: `FPD-${randString()}`,
        order: {
          tgl: moment().format("DD MMM YYYY"),
          total: 100000,
          status: "telah dibayar"
        },
        user: {
          gender: female,
          name: "nina oktaviani"
        }
      }
    ];
  },
  methods: {
    remapNavigate: function(obj) {
      obj.route = `${obj.route}OrderHistory`;
      return obj;
    },
    loadImage: function(params) {
      if (typeof params !== "undefined")
        return require(`@/assets/images/frontend/${params}`);
      return require(`@/assets/images/frontend/icons/services-0.png`);
    }
  }
};
</script>
