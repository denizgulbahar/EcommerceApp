export default listOrderDetails = (items, totalPrice) => {
    const itemNames = items.map(item => item.name).join(', ');
    return `Order Data:\nItems: ${itemNames}\nTotal Price: $${totalPrice.toFixed(2)}`;
};