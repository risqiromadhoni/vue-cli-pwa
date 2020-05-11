import _ from "lodash";

export default {
  percent: state => {
    if (state.step.length >= 1)
      return Math.round(
        (state.step.length /
          state.step.reduce((a, b) => a + (b["isFinish"] || 0), 0)) *
          100
      );
  },
  itemActive: state => param => state.form.product.find(f => f.id == param.id),
  getProductInv: state => {
    return param => {
      const product = state.form["product"];
      let mpProduct = _.map(product, obj => {
        obj.subtotal = _.ceil(obj.qty * obj.price_disk);
        return obj;
      });
      const subtotal = _.sum(
        _.map(mpProduct, obj => {
          return obj.subtotal;
        })
      );
      let mpPpnProduct = _.ceil((param / 100) * subtotal);
      return {
        item: mpProduct,
        subtotal: subtotal,
        ppn: mpPpnProduct,
        total: _.ceil(subtotal + mpPpnProduct)
      };
    };
  }
};
