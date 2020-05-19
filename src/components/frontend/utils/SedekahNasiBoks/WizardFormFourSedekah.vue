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
            <span class="mr-auto h6 text-dark">Sedekah Nasi Boks</span>
          </template>
          <div class="table-responsive">
            <table>
              <tbody>
                <tr v-for="(item, key) in invService" :key="key">
                  <td>{{ $t(key) | capitalize }}</td>
                  <td class="px-3">:</td>
                  <td>{{ item }}</td>
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
                :title="$t('copy_invoice')"
                @click="salinInvoice(`FPD-${invoice}`)"
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
              src="data:image/png;base64,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"
              variant="light"
            ></b-avatar>
            <span class="mr-auto h6 text-dark">Tujuan Sedekah</span>
          </template>
          <div>
            <b-row align-v="center" v-for="(item, key) in invDetail" :key="key">
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
            <span class="mr-auto h6 text-dark">Data Penyedekah</span>
          </template>
          <div>
            <b-row align-v="center" v-for="(item, key) in invUser" :key="key">
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
            <span class="mr-auto h6 text-dark">Rincian Sedekah</span>
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
                </div>
              </b-col>
              <b-col>
                <div>
                  <p class="text-right">{{ item.price | intToIdr }}</p>
                </div>
              </b-col>
            </b-row>
          </div>
          <template v-slot:footer>
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
                    {{ invPrice.total_price }}
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
import moment from "moment";
import snackbar from "@/utils/snackbar";
import { randString } from "@/utils/helper";
export default {
  name: "WizardFormFourSedekah",
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
      return {
        location: this.storeData.form.location,
        customer: this.storeData.form.customer,
        product: this.storeData.form.product[0]
      };
    }
  },
  mounted() {
    this.total = 120000;
    this.invService = {
      date: moment().format("DD MMMM YYYY"),
      outlet: "foodpedia",
      total_payment: this.getOrder.product.currency
    };
    this.invDetail = {
      name: this.getOrder.location.orphanage_name,
      telp: this.getOrder.location.phone,
      city: this.getOrder.location.city,
      address: this.getOrder.location.orphanage_address
    };
    this.invUser = {
      name: this.getOrder.customer.name,
      telp: this.getOrder.customer.phone,
      address: this.getOrder.customer.address
    };
    this.invPrice = {
      item: [
        {
          name: "Sedekah",
          price: this.getOrder.product.nominal
        }
      ],
      total_donation: this.getOrder.product.currency
    };
  },
  methods: {
    salinInvoice: function(param) {
      console.log(param);
      return snackbar.actionText("success_copy_code_invoice");
    },
    restoLogo: function(img) {
      if (typeof img == "undefined")
        return require(`@/assets/images/frontend/logo/01.png`);
      return require(`@/assets/images/frontend/${img}`);
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
  margin: 10px 0;
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
