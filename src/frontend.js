// TODO: start import frontend requirement
try {
  window.$ = window.jQuery = require("jquery");
  require("@tmmc/animate-scss");
  require("@/assets/js/waypoints");
  require("isotope-layout");
  require("wow.js");
  require("swiper");
  //   require("@/assets/js/tab");
  require("lightcase");
  require("@/assets/js/jquery.counterup");
  require("@/assets/js/functions");
} catch (err) {
  console.error(err);
}
// TODO: start import frontend requirement
