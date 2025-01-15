const listOrderDetails = ({ state, t }) => {
    const itemNames = state.cartItems.map(item => item.title).join(', ');
    const price = parseFloat(state.totalPrice);  // Convert the string to a number
    let fixedPrice;
    if (!isNaN(price)) {
        fixedPrice = price.toFixed(2); // Format the price to 2 decimal places
    } else {
        console.error(t("totalNotValid"));
    }
    return `${t("orderData")}:\nItems: ${itemNames}\n${t("generalTotal")}: $${fixedPrice}`;
};
export default listOrderDetails;