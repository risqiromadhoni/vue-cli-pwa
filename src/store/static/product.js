import Vue from "vue";
import img1 from "@/assets/images/frontend/popular-food/02.jpg";
import img2 from "@/assets/images/frontend/popular-food/drinks.jpg";
export const type = [
  {
    name: "makan",
    img: img1
  },
  {
    name: "minum",
    img: img2
  }
];
let data = [];
for (let i = 0; i < 12; i++) {
  let typep = type[Math.floor(Math.random() * type.length)];
  data.push({
    name: Vue.faker().commerce.productName(),
    price: Vue.faker().commerce.price(),
    price_disk: Vue.faker().commerce.price(),
    type: typep.name,
    img: typep.img,
    star: type[Math.floor(Math.random() * 5)]
  });
}
export default data;
