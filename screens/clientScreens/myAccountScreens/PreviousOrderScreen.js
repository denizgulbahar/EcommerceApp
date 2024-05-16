import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { PreviousOrderContainer } from '../../../components/containers/PreviousOrderContainer';
import { BalanceContainer } from '../../../components/containers/BalanceContainer';
import { ScreenWrapper } from '../../../components/wrappers/screenWrapper';
const PreviousOrderScreen = () => {
    const {t} = useTranslation()
    const previousOrdersData = [
      {
          "id": "21321321",
          "SiparisTarihi": "15.03.2024",
          "SiparisUrunu": "Led Lamp",
          "OdemeToplam": "240 TL",
          "TeslimatAdresi": "123 Main St, Apartment 4B, Istanbul, Turkey",
          "TeslimatAdSoyad": "John Doe",
          "TeslimatTel": "+553 457 0123",
          "OdemeTipi": "3 Taksitli"
      },
      {
          "id": "21321322",
          "SiparisTarihi": "16.03.2024",
          "SiparisUrunu": "Wireless Mouse",
          "OdemeToplam": "150 TL",
          "TeslimatAdresi": "456 Elm St, Office 12, Ankara, Turkey",
          "TeslimatAdSoyad": "Berk",
          "TeslimatTel": "+553 458 4567",
          "OdemeTipi": "Tek Çekim"
      },
      {
          "id": "21321323",
          "SiparisTarihi": "17.03.2024",
          "SiparisUrunu": "Bluetooth Speaker",
          "OdemeToplam": "320 TL",
          "TeslimatAdresi": "789 Pine St, House 22, Izmir, Turkey",
          "TeslimatAdSoyad": "Alice Johnson",
          "TeslimatTel": "+553 459 7890",
          "OdemeTipi": "6 Taksitli"
      }
  ]

    const renderItem = ({ item,index }) => (
        <PreviousOrderContainer key={index} values={item} />
     );
    return (
        <ScreenWrapper>
            <BalanceContainer balance={1000} />
            <FlatList
                data={previousOrdersData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </ScreenWrapper>
    );
};

export default PreviousOrderScreen;