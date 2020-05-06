<template>
  <b-row>
    <b-col sm>
      <div class="mb-4">
        <b-card
          border-variant="secondary"
          header-tag="header"
          footer-tag="footer"
          :class="$style.cardInvoice"
        >
          <template v-slot:header>
            <b-avatar
              class="mr-3"
              :src="require('@/assets/images/frontend/icons/details-pane.png')"
              variant="light"
            ></b-avatar>
            <span class="mr-auto h6 text-dark">Nasi Boks</span>
          </template>
          <div class="table-responsive">
            <table>
              <tbody>
                <tr v-for="(item, key) in invService" :key="key">
                  <td>{{ $t(key) | capitalize }}</td>
                  <td class="px-3">:</td>
                  <td>
                    {{ item }}
                    <span v-show="key == 'long_subscription'">hari</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <template v-slot:footer>
            <em>Invoice : FPD-{{ invoice }}</em>
            <span :class="$style.copyInvoice">
              <i
                class="icofont icofont-ui-copy"
                v-b-tooltip.hover
                title="Salin Invoice"
                @click="salinInvoice"
              ></i>
            </span>
          </template>
        </b-card>
      </div>
      <div>
        <b-card
          border-variant="secondary"
          header-tag="header"
          footer-tag="footer"
          :class="$style.cardInvoice"
        >
          <template v-slot:header>
            <b-avatar
              class="mr-3"
              :src="require('@/assets/images/frontend/icons/overtime.png')"
              variant="light"
            ></b-avatar>
            <span class="mr-auto h6 text-dark">Rincian Pesanan</span>
          </template>
          <div>
            <b-row class="align-items-center">
              <b-col cols="4">
                <b-img-lazy
                  fluid
                  :src="require(`@/assets/images/frontend/${invDetail.logo}`)"
                  alt="logo"
                ></b-img-lazy>
              </b-col>
              <b-col cols="6">
                <p class="font-weight-bold m-0">
                  {{ invDetail.restaurant | capitalize }}
                </p>
                <p class="m-0">
                  <small>Paket Makan Siang</small>
                </p>
              </b-col>
              <b-col cols="2">
                <b-badge pill variant="light">
                  <i class="icofont icofont-clock-time"></i>
                  {{ invDetail.hour }}
                </b-badge>
              </b-col>
            </b-row>
            <ul class="timeline">
              <li v-for="item in invDetail.detail" :key="item.day">
                <a>
                  {{ new Date() | date("DD MMMM YYYY") }}
                  <b-badge
                    pill
                    variant="light"
                    v-b-tooltip.hover
                    :title="`Hari Ke - ${item.day}`"
                  >
                    <i class="icofont icofont-calendar"></i>
                    {{ item.day }}
                  </b-badge>
                </a>
                <p>
                  Hari ke {{ item.day }} Pesanan anda di antar pukul 11:00. Bila
                  ada pertanyaan silahkan hubungi
                  <a href="tel:+62331725998">
                    <em>customer service</em>
                  </a>
                  kami.
                </p>
              </li>
            </ul>
          </div>
          <template v-slot:footer>
            <small>
              <em>* Harap hubungi kami untuk pengubahan jadwal :)</em>
            </small>
          </template>
        </b-card>
      </div>
    </b-col>
    <b-col sm>
      <div class="mb-4">
        <b-card
          border-variant="secondary"
          header-tag="header"
          footer-tag="footer"
          :class="$style.cardInvoice"
        >
          <template v-slot:header>
            <b-avatar
              class="mr-3"
              :src="require('@/assets/images/frontend/icons/user-male.png')"
              variant="light"
            ></b-avatar>
            <span class="mr-auto h6 text-dark">Data Pemesan</span>
          </template>
          <div>
            <b-row v-for="(item, key) in invUser" :key="key">
              <b-col cols="6">
                <div>
                  <p class="m-0">{{ $t(key) | capitalize }}</p>
                </div>
              </b-col>
              <b-col cols="6">
                <div>
                  <p class="text-right">
                    <a
                      v-if="key == 'telp'"
                      :href="`tel:+${item}`"
                      target="_blank"
                      v-b-tooltip.hover
                      title="Klik untuk telpon secara redirect"
                    >
                      <i
                        class="icofont icofont-external-link pr-1 text-success"
                      ></i>
                      {{ item }}
                    </a>
                    <a
                      v-else-if="key == 'address'"
                      :href="
                        `https://www.google.com/maps/search/?api=1&query=${encodeURI(
                          item
                        )}`
                      "
                      target="_blank"
                      v-b-tooltip.hover
                      title="Klik untuk mencari alamat di google maps"
                    >
                      <i
                        class="icofont icofont-external-link pr-1 text-success"
                      ></i>
                      {{ item }}
                    </a>
                    <span v-else>{{ item | capitalize }}</span>
                  </p>
                </div>
              </b-col>
            </b-row>
          </div>
          <template v-slot:footer></template>
        </b-card>
      </div>
      <div>
        <b-card
          border-variant="secondary"
          header-tag="header"
          footer-tag="footer"
          :class="$style.cardInvoice"
        >
          <template v-slot:header>
            <b-avatar
              class="mr-3"
              :src="require('@/assets/images/frontend/icons/invoice.png')"
              variant="light"
            ></b-avatar>
            <span class="mr-auto h6 text-dark">Rincian Harga</span>
          </template>
          <div>
            <b-row
              v-for="(item, key) in invPrice.item"
              :key="key"
              class="align-items-center"
            >
              <b-col>
                <div>
                  <p class="m-0">{{ item.name }}</p>
                  <small>{{ item.total }} Item</small>
                </div>
              </b-col>
              <b-col>
                <div>
                  <p class="text-right">{{ item.price }}</p>
                </div>
              </b-col>
            </b-row>
          </div>
          <template v-slot:footer>
            <b-row class="align-items-center">
              <b-col>
                <div>
                  <p class="m-0 font-weight-light">{{ $t("ppn") }} (10%)</p>
                </div>
              </b-col>
              <b-col>
                <div>
                  <p class="text-right font-weight-light">
                    {{ invPrice.global.ppn }}
                  </p>
                </div>
              </b-col>
            </b-row>
            <b-row class="align-items-center">
              <b-col>
                <div>
                  <p class="m-0 font-weight-bold">
                    {{ $t("total_price") | capitalize }}
                  </p>
                </div>
              </b-col>
              <b-col>
                <div>
                  <p class="text-right font-weight-bold">
                    {{ invPrice.global.total_price }}
                  </p>
                </div>
              </b-col>
            </b-row>
          </template>
        </b-card>
      </div>
      <div class="d-block float-right">
        <button class="food-btn style-2">
          <span>Bayar</span>
        </button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import Vue from "vue";
import * as moment from "moment";
import _ from "lodash";
import snackbar from "@/utils/snackbar";
import { randString, intToIdr, reformatDate } from "@/utils/helper";
export default {
  name: "",
  data() {
    const invoice = randString();
    return {
      total: 0,
      invoice: invoice,
      invService: {},
      invDetail: {},
      invUser: {},
      invPrice: {}
    };
  },
  computed: {
    storeData: function() {
      return this.$store.state.order;
    },
    getOrder: function() {
      const total = _.sum(
        _.map(this.storeData.form.product, "price_disk").map(numStr =>
          parseInt(numStr)
        )
      );
      return {
        location: this.storeData.form.location,
        product: this.storeData.form.product,
        customer: this.storeData.form.customer,
        price: {
          ppn: intToIdr(_.ceil((10 / 100) * total)),
          total: intToIdr(_.ceil(_.ceil((10 / 100) * total) + total))
        }
      };
    }
  },
  mounted() {
    this.total = 120000;
    this.invService = {
      date: moment().format("DD MMMM YYYY"),
      outlet: "foodpedia",
      long_subscription: moment(
        reformatDate(this.getOrder.customer.date.dateRange.end.date, [1, 0, 2])
      ).diff(
        moment(
          reformatDate(this.getOrder.customer.date.dateRange.start.date, [
            1,
            0,
            2
          ])
        ),
        "days"
      ),
      total_payment: this.getOrder.price.total
    };
    this.invDetail = {
      logo: "logo/01.png",
      restaurant: "foodpedia jakarta",
      hour: "12:00",
      detail: [
        {
          day: 1,
          date: moment(
            reformatDate(this.getOrder.customer.date.dateRange.start.date, [
              1,
              0,
              2
            ])
          ).format("DD MMM YYYY")
        },
        {
          day: moment(
            reformatDate(this.getOrder.customer.date.dateRange.end.date, [
              1,
              0,
              2
            ])
          ).diff(
            moment(
              reformatDate(this.getOrder.customer.date.dateRange.start.date, [
                1,
                0,
                2
              ])
            ),
            "days"
          ),
          date: moment(
            reformatDate(this.getOrder.customer.date.dateRange.end.date, [
              1,
              0,
              2
            ])
          ).format("DD MMM YYYY")
        }
      ]
    };
    this.invUser = {
      name: Vue.faker().name.firstName(),
      telp: Vue.faker().phone.phoneNumber(),
      address: Vue.faker().address.streetAddress()
    };
    this.invPrice = {
      item: this.getOrder.product,
      global: {
        ppn: this.getOrder.price.ppn,
        total_price: this.getOrder.price.total
      }
    };
  },
  methods: {
    salinInvoice: function() {
      return snackbar.actionText("success_copy_code_invoice");
    }
  }
};
</script>

<style lang="scss" module>
.copyInvoice {
  float: right;
  cursor: pointer;
}
.cardInvoice {
  padding: 0 15px;
  border-style: dashed;
  footer,
  header {
    background: none;
  }
}
</style>

<style lang="scss">
ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: " ";
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 50px;
}
ul.timeline > li a {
  color: #ff9800;
}
ul.timeline > li:before {
  content: " ";
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #ff9800;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
</style>
