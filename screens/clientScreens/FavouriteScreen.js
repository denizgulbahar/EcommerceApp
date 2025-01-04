import { useTranslation } from "react-i18next";
import { ScreenWrapper } from "../../components/wrappers/screenWrapper";
import { FavouriteContainer } from "../../redux/feature/cart/favouriteContainer";
export default function FavouriteScreen ({ navigation }) {

  const { t } = useTranslation()
  return (
    <ScreenWrapper type='flatlist'>
      <FavouriteContainer navigation={navigation} title={t("myFavourites")}/>
    </ScreenWrapper>
  );
}
