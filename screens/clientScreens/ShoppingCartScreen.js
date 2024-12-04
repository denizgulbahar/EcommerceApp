import { ScreenWrapper } from "../../components/wrappers/screenWrapper";
import { CartContainer } from "../../redux/feature/cart";

const ShoppingCartScreen = () => {

  return (
    <ScreenWrapper>
      <CartContainer/>
    </ScreenWrapper>
  );
};

export default ShoppingCartScreen;