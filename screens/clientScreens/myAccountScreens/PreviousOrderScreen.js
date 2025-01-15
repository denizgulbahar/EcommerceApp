import React from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { PreviousOrderContainer } from '../../../components/containers/PreviousOrderContainer';
import { ScreenWrapper } from '../../../components/wrappers/screenWrapper';
import { Header } from '../../../components/header/header';
import { BackButton } from '../../../components/buttons/backButton';
const PreviousOrderScreen = ({ navigation }) => {
    const {t} = useTranslation()
    const previousOrdersData = [
      {
          "siparisNo": "21321321",
          "siparisTarihi": "15.03.2024",
          "siparisÜrünü": "Led Lamp",
          "ÖdemeMiktarı": "240 TL",
          "teslimatAdresi": "Kocatepe Mahallesi, Atatürk Bulvarı, No: 789, Kat 3, Daire 10, Çankaya, Ankara, Türkiye",
          "teslimatAdSoyad": "Uğur Yıldırım",
          "teslimatTel": "+553 457 0123",
          "odemeTipi": "3 Taksit"
      },
      {
          "siparisNo": "21321322",
          "siparisTarihi": "16.03.2024",
          "siparisÜrünü": "Shirts With Jacket",
          "ÖdemeMiktarı": "120 $",
          "teslimatAdresi": "Güzelyalı Mahallesi, İnönü Caddesi, No: 456, Kat 2, Daire 7, Konak, İzmir, Türkiye",
          "teslimatAdSoyad": "Berk Çevrim",
          "teslimatTel": "+553 458 4567",
          "odemeTipi": "2 Taksit"
      },
      {
          "siparisNo": "21321323",
          "siparisTarihi": "17.03.2024",
          "siparisÜrünü": "Denim Jacket",
          "ÖdemeMiktarı": "69.99 $",
          "teslimatAdresi": "Cumhuriyet Mahallesi, Atatürk Caddesi, No: 123, Daire 4B, Şişli, İstanbul, Türkiye",
          "teslimatAdSoyad": "Aleyna Erdinç",
          "teslimatTel": "+553 459 7890",
          "odemeTipi": "6 Taksit"
      }
    ]

    const renderItem = ({ item,index }) => (
        <PreviousOrderContainer key={index} values={item} />
     );
    return (
        <ScreenWrapper>
            <BackButton navigation={navigation} />
            <Header text={t("previousOrders")} />
            <FlatList
                scrollEnabled={false}
                style={{ flex: 1, marginVertical: 10 }}
                data={previousOrdersData}
                renderItem={renderItem}
                keyExtractor={(item) => item.siparisNo}
            />
        </ScreenWrapper>
    );
};

export default PreviousOrderScreen;