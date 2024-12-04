import { useState, useEffect } from "react";
export const usePayment = ({ cartItems = [], totalPrice }) => {

    const[cargoPrice, setCargoPrice] = useState(0)

    function handlePrecision(totalPrice, cargoPrice) {
        var precision = 100 // 2 decimal parts
        var generalTotal = (totalPrice * precision + cargoPrice * precision) / precision
        return generalTotal;
    }
    
    useEffect(() => {
        if (totalPrice > 0 && totalPrice < 300) {
          setCargoPrice(15);
        } else {
          setCargoPrice(0);
        }
    }, [totalPrice, cartItems.length]);
      
    const generalTotal = handlePrecision(totalPrice, cargoPrice)

    return { cargoPrice, generalTotal }
      
}