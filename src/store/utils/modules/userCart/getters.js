export default {
  carts: state => {
    return state.carts.slice(0, 5);
  },
  totalCarts: state => {
    return {
      total: state.carts
        .map(el => parseInt(el.price))
        .reduce((a, b) => a + b, 0),
      carts: state.carts.length
    };
  }
};