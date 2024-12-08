import { ScreenWrapper } from "../../components/wrappers/screenWrapper";
import { ShoppingCartContainer } from "../../redux/feature/cart/shoppingCartContainer";

const ShoppingCartScreen = () => {

  return (
    <ScreenWrapper>
      <ShoppingCartContainer />
    </ScreenWrapper>
  );
};

export default ShoppingCartScreen;