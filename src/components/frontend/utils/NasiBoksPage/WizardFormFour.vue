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
              src="https://img.icons8.com/cotton/64/000000/invoice.png"
              variant="light"
            ></b-avatar>
            <span class="mr-auto h6 text-dark">Nasi Boks</span>
          </template>
          <div class="table-responsive">
            <table>
              <tbody>
                <tr>
                  <td>Tanggal</td>
                  <td class="px-3">:</td>
                  <td>{{ new Date() | date("DD MMMM YYYY") }}</td>
                </tr>
                <tr>
                  <td>Outlet</td>
                  <td class="px-3">:</td>
                  <td>Foodpedia</td>
                </tr>
                <tr>
                  <td>Jumlah Pembayaran</td>
                  <td class="px-3">:</td>
                  <td>Rp. {{ total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <template v-slot:footer>
            <em>Invoice : P2W-QM098</em>
            <span :class="$style.copyInvoice">
              <i
                class="icofont icofont-ui-copy"
                v-b-tooltip.hover
                title="Salin Invoice"
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
              src="https://img.icons8.com/color/48/000000/overtime.png"
              variant="light"
            ></b-avatar>
            <span class="mr-auto h6 text-dark">Rincian Pesanan</span>
          </template>
          <div>
            <div>
              <h6>Paket Makan Siang</h6>
            </div>
            <ul class="timeline">
              <li>
                <a target="_blank" href="https://www.totoprayogo.com/#"
                  >21 March, 2014</a
                >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum neque cum eveniet ab, quaerat saepe quod, vitae beatae
                  provident aperiam quam porro dignissimos maiores similique
                  ullam ea at deserunt? Eum?
                </p>
              </li>
              <li>
                <a href="#">21 March, 2014</a>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum neque cum eveniet ab, quaerat saepe quod, vitae beatae
                  provident aperiam quam porro dignissimos maiores similique
                  ullam ea at deserunt? Eum?
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
          <textarea name="message" rows="6" placeholder="Message"></textarea>
          <button type="submit" class="food-btn style-2">
            <span>bayar</span>
          </button>
        </form>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      total: 0
    };
  },
  computed: {},
  mounted() {
    this.total = 120000;
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
