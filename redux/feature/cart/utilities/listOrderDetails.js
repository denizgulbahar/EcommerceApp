const listOrderDetails = (state) => {
    const itemNames = state.cartItems.map(item => item.title).join(', ');
    const price = parseFloat(state.totalPrice);  // Convert the string to a number
    let fixedPrice;
    if (!isNaN(price)) {
        fixedPrice = price.toFixed(2); // Format the price to 2 decimal places
    } else {
        console.error('totalPrice is not a valid number');
    }
    return `Order Data:\nItems: ${itemNames}\nTotal Price: $${fixedPrice}`;
};
export default listOrderDetails;