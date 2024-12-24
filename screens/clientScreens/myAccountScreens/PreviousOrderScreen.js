import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { PreviousOrderContainer } from '../../../components/containers/PreviousOrderContainer';
import { ScreenWrapper } from '../../../components/wrappers/screenWrapper';
const PreviousOrderScreen = () => {
    const {t} = useTranslation()
    const previousOrdersData = [
      {
          "orderNumber": "21321321",
          "orderDate": "15.03.2024",
          "orderProduct": "Led Lamp",
          "ÖdemeMiktarı": "240 TL",
          "teslimatAdresi": "Kocatepe Mahallesi, Atatürk Bulvarı, No: 789, Kat 3, Daire 10, Çankaya, Ankara, Türkiye",
          "teslimatAdSoyad": "Uğur Yıldırım",
          "teslimatTel": "+553 457 0123",
          "odemeTipi": "3 Taksitli"
      },
      {
          "orderNumber": "21321322",
          "orderDate": "16.03.2024",
          "orderProduct": "Wireless Mouse",
          "ÖdemeMiktarı": "150 TL",
          "teslimatAdresi": "Güzelyalı Mahallesi, İnönü Caddesi, No: 456, Kat 2, Daire 7, Konak, İzmir, Türkiye",
          "teslimatAdSoyad": "Berk Çevrim",
          "teslimatTel": "+553 458 4567",
          "odemeTipi": "Tek Çekim"
      },
      {
          "orderNumber": "21321323",
          "orderDate": "17.03.2024",
          "orderProduct": "Bluetooth Speaker",
          "ÖdemeMiktarı": "320 TL",
          "teslimatAdresi": "Cumhuriyet Mahallesi, Atatürk Caddesi, No: 123, Daire 4B, Şişli, İstanbul, Türkiye",
          "teslimatAdSoyad": "Aleyna Erdinç",
          "teslimatTel": "+553 459 7890",
          "odemeTipi": "6 Taksitli"
      }
  ]

    const renderItem = ({ item,index }) => (
        <PreviousOrderContainer key={index} values={item} />
     );
    return (
        <ScreenWrapper type="flatlist">
            <FlatList
                data={previousOrdersData}
                renderItem={renderItem}
                keyExtractor={(item) => item.orderNumber}
            />
        </ScreenWrapper>
    );
};

export default PreviousOrderScreen;