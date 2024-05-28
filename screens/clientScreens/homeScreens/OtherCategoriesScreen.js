import { StyleSheet, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import ButtonOriginal from "../../../components/buttons/buttonOriginal";
import { ScreenWrapper } from "../../../components/wrappers/screenWrapper";

const OtherCategoriesScreen = ({ navigation }) => {
  const {t} = useTranslation()
  const items = [
    { id: '1', title: 'item1', route: 'Route1' },
    { id: '2', title: 'item2', route: 'Route2' },
    { id: '3', title: 'item3', route: 'Route3' },
    { id: '4', title: 'item4', route: 'Route4' },
    { id: '5', title: 'item5', route: 'Route5' },
    { id: '6', title: 'item6', route: 'Route6' },
    { id: '7', title: 'item7', route: 'Route7' },
  ];
  const renderItem = (item) => (
    <ButtonOriginal
      key={item.id} 
      buttonStyle={styles.itemContainer}
      onPress={() => navigation.navigate(item.route)} 
      textStyle={styles.itemText}
      title={t(item.title)}
    />
  )
return (
        <ScreenWrapper>
          <ScrollView contentContainerStyle={styles.container}>
            {items.map(renderItem)}
          </ScrollView>
        </ScreenWrapper>
        )
      }
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100, 
    flexBasis: '40%', //  2 column for beginning
    flexGrow: 1, // Equals grow for each items
    margin: 5,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
 })

export default OtherCategoriesScreen;