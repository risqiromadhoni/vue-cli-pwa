<template>
  <b-row>
    <b-col sm>
      <b-form-group label="Pemesan :">
        <b-list-group>
          <b-list-group-item>
            Risqi Romadhoni
            <span :class="$style.rightArrow" @click="addressCustomer = true">
              edit
              <i class="icofont icofont-rounded-right"></i>
            </span>
          </b-list-group-item>
        </b-list-group>
      </b-form-group>
      <!-- Modal -->
      <b-modal v-model="addressCustomer" id="modal-address" centered title="Biodata Pemesan">
        <p class="my-4">Biodata Pemesan</p>
        <template v-slot:modal-footer>
          <div class="w-100">
            <p class="float-left">Silahkan cek ulang data anda.</p>
            <b-button
              variant="outline-primary"
              size="sm"
              class="float-right"
              @click="addressCustomer = false"
            >Close</b-button>
          </div>
        </template>
      </b-modal>
      <b-form-group label="Alamat Penerima :">
        <b-list-group>
          <b-list-group-item>
            Jl. Nangka 5
            <span :class="$style.rightArrow" @click="addressModal = true">
              edit
              <i class="icofont icofont-rounded-right"></i>
            </span>
          </b-list-group-item>
        </b-list-group>
      </b-form-group>
      <!-- Modal -->
      <b-modal v-model="addressModal" id="modal-address" centered title="Alamat Penerima">
        <p class="my-4">Alamat Penerima</p>
        <template v-slot:modal-footer>
          <div class="w-100">
            <p class="float-left">Silahkan cek ulang data anda.</p>
            <b-button
              variant="outline-primary"
              size="sm"
              class="float-right"
              @click="addressModal = false"
            >Close</b-button>
          </div>
        </template>
      </b-modal>
    </b-col>
    <b-col sm>
      <functional-calendar
        :is-date-range="true"
        :disabled-day-names="['Senin', 'Minggu']"
        :limits="limitDate"
        v-model="range"
      ></functional-calendar>
      <b-card>
        <code>{{ range }}</code>
      </b-card>
    </b-col>
    <b-col cols="12" class="my-3">
      <div class="d-block">
        <b-button pill variant="outline-warning" class="float-right">
          <span class="pr-3">{{$t("next") | capitalize}}</span>
          <i class="icofont icofont-arrow-right"></i>
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import * as moment from "moment";
export default {
  name: "WizardFormThree",
  data() {
    return {
      addressCustomer: false,
      addressModal: false,
      range: {}
    };
  },
  computed: {
    limitDate: function() {
      return {
        min: moment().format("DD/MM/YYYY"),
        max: moment()
          .add(6, "months")
          .format("DD/MM/YYYY")
      };
    }
  },
  mounted() {},
  methods: {
    modalOrderUser: function() {
      alert("modal");
    },
    modalOrderAddress: function() {
      alert("alamat");
    }
  }
};
</script>

<style lang="scss" module>
.rightArrow {
  float: right;
  color: #ff9800;
  cursor: pointer;
}
</style>

<style lang="scss">
.vfc-main-container {
  box-shadow: none;
  -webkit-box-shadow: none;
}
</style>
