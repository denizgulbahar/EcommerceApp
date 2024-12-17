import { ScreenWrapper } from "../../components/wrappers/screenWrapper";
import { ShoppingCartContainer } from "../../redux/feature/cart/shoppingCartContainer";

const ShoppingCartScreen = () => {

  return (
    <ScreenWrapper type='flatlist'>
      <ShoppingCartContainer />
    </ScreenWrapper>
  );
};

export default ShoppingCartScreen;