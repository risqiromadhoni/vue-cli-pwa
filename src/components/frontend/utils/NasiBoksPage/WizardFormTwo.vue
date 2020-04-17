<template>
  <b-row>
    <b-col sm>
      <div>Two</div>
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
            <span>book a table</span>
          </button>
        </form>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {};
</script>

<style></style>
