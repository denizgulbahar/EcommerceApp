import { ScreenWrapper } from "../../components/wrappers/screenWrapper";
import { FavouriteContainer } from "../../redux/feature/cart/favouriteContainer";
export default function FavouriteScreen ({ navigation }) {
  
  return (
    <ScreenWrapper type='flatlist'>
      <FavouriteContainer navigation={navigation} />
    </ScreenWrapper>
  );
}
