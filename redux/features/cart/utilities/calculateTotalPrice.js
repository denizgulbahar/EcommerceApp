export default calculateTotalPrice = (state) => {
    state.totalPrice = state.cartItems
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
};