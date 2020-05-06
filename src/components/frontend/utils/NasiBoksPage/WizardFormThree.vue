<template>
  <b-row>
    <b-col sm>
      <b-form-group label="Pemesan :">
        <b-list-group>
          <b-list-group-item>
            <div :class="$style.elipsis">{{ nameUser | capitalize }}</div>
            <span :class="$style.rightArrow" @click="addressCustomer = true">
              {{ $t("edit") }}
              <i class="icofont icofont-rounded-right"></i>
            </span>
          </b-list-group-item>
        </b-list-group>
      </b-form-group>
      <!-- Modal -->
      <b-modal
        v-model="addressCustomer"
        id="modal-address"
        centered
        title="Biodata Pemesan"
      >
        <b-form-group
          :label="$t('fullname') | capitalize"
          label-for="name-user"
        >
          <b-form-input
            id="name-user"
            type="text"
            required
            v-model="nameUser"
            :placeholder="$t('fullname') | capitalize"
          ></b-form-input>
        </b-form-group>
        <b-form-group :label="$t('telp') | capitalize" label-for="phone-user">
          <b-form-input
            id="phone-user"
            type="text"
            required
            v-model="phoneUser"
            :placeholder="$t('telp') | capitalize"
          ></b-form-input>
        </b-form-group>
        <template v-slot:modal-footer>
          <div class="w-100">
            <em class="float-left"
              >*{{ $t("make_sure_your_data_is_correct") }}.</em
            >
            <b-button
              variant="warning"
              size="sm"
              class="float-right"
              @click="addressCustomer = false"
              >{{ $t("close") }}</b-button
            >
          </div>
        </template>
      </b-modal>
      <b-form-group label="Alamat Penerima :">
        <b-list-group>
          <b-list-group-item>
            <div :class="$style.elipsis">{{ addressUser | capitalize }}</div>
            <span :class="$style.rightArrow" @click="addressModal = true">
              {{ $t("edit") }}
              <i class="icofont icofont-rounded-right"></i>
            </span>
          </b-list-group-item>
        </b-list-group>
      </b-form-group>
      <!-- Modal -->
      <b-modal
        v-model="addressModal"
        id="modal-address"
        centered
        title="Alamat Penerima"
      >
        <div class="py-2">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31733.640282183675!2d106.81369610193498!3d-6.170236196550788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f50f1bd7bfc9%3A0x6828e51e719c24bd!2sGraha%20Foodpedia%20Pasar%20Baru!5e0!3m2!1sid!2sid!4v1587368310704!5m2!1sid!2sid"
            allowfullscreen
          ></b-embed>
        </div>
        <b-form-group
          :label="$t('address') | capitalize"
          label-for="address-user"
        >
          <b-form-textarea
            id="address-user"
            required
            v-model="addressUser"
            :placeholder="$t('address') | capitalize"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <template v-slot:modal-footer>
          <div class="w-100">
            <em class="float-left"
              >*{{ $t("make_sure_your_data_is_correct") }}.</em
            >
            <b-button
              variant="warning"
              size="sm"
              class="float-right"
              @click="addressModal = false"
              >{{ $t("close") }}</b-button
            >
          </div>
        </template>
      </b-modal>
    </b-col>
    <b-col sm>
      <b-form-group
        :label="$t('chose_range_date') | capitalize"
        label-for="date-range"
      >
        <functional-calendar
          :is-date-range="true"
          :disabled-day-names="['Senin', 'Minggu']"
          :limits="limitDate"
          v-model="range"
        ></functional-calendar>
      </b-form-group>
      <!-- <b-card>
        <code>{{ range }}</code>
      </b-card> -->
    </b-col>
    <b-col cols="12" class="my-3">
      <div class="d-block">
        <b-button
          pill
          variant="outline-warning"
          class="float-right"
          @click="saveData"
        >
          <span class="pr-3">{{ $t("next") | capitalize }}</span>
          <i class="icofont icofont-arrow-right"></i>
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import moment from "moment";
import toast from "@/utils/toast";
import _ from "lodash";
export default {
  name: "WizardFormThree",
  data() {
    return {
      addressCustomer: false,
      addressModal: false,
      range: {},
      nameUser: "",
      phoneUser: "",
      addressUser: "",
    };
  },
  computed: {
    limitDate: function() {
      return {
        min: moment().format("DD/MM/YYYY"),
        max: moment()
          .add(6, "months")
          .format("DD/MM/YYYY"),
      };
    },
  },
  mounted() {
    this.nameUser = "Risqi Romadhoni";
    this.phoneUser = "074304797437";
    this.addressUser =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque molestiae nostrum id placeat consequuntur.";
  },
  methods: {
    modalOrderUser: function() {
      alert("modal");
    },
    modalOrderAddress: function() {
      alert("alamat");
    },
    saveData: async function() {
      if (
        _.isEmpty(this.range) &&
        this.nameUser != "" &&
        this.phoneUser != "" &&
        this.addressUser != ""
      )
        toast.warning("Mohon Lengkapi Form di Atas");
      else {
        await this.insrtData();
        let step = this.$store.state.order.step;
        const newStep = step.map((m) => {
          // Finish curent page form
          if (m.component === "WizardFormThree") m.isFinish = true;
          // Change curent page form
          this.$parent.formPage = "WizardFormFour";
          // Role Activate page form
          if (m.component == this.$parent.formPage) {
            m.isActive = true;
            m.isFinish = false;
          } else m.isActive = false;
          return m;
        });
        await this.$store.dispatch("setOrderStep", newStep);
      }
    },
    insrtData: async function() {
      await new Promise((resolve) => {
        const data = {
          key: "customer",
          data: {
            name: this.nameUser,
            phone: this.phoneUser,
            address: this.addressUser,
            date: this.range,
          },
        };
        this.$store.dispatch("setOrderDetail", data);
        resolve(data);
      });
    },
  },
};
</script>

<style lang="scss" module>
.rightArrow {
  float: right;
  color: #ff9800;
  cursor: pointer;
}
.elipsis {
  float: left;
  width: 75%;
}
</style>

<style lang="scss">
.vfc-main-container {
  box-shadow: none;
  -webkit-box-shadow: none;
  z-index: 1;
}
</style>
