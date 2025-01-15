import { ScreenWrapper } from "../../components/wrappers/screenWrapper";
import { ShoppingCartContainer } from "../../redux/feature/cart/shoppingCartContainer";

const ShoppingCartScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <ShoppingCartContainer navigation={navigation} />
    </ScreenWrapper>
  );
};

export default ShoppingCartScreen;