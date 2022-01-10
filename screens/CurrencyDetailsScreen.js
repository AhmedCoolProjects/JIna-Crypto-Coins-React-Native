import React from 'react';
import {ScrollView, View} from 'react-native';
import AboutCurrencyCard from '../components/cards/AboutCurrencyCard';
import BuyCurrencyCard from '../components/cards/BuyCurrencyCard';
import CurrencyCard from '../components/cards/CurrencyCard';
import BackPreviousScreen from '../components/parts/BackPreviousScreen';
import SetAlertsCard from '../components/cards/SetAlertsCard';

const CurrencyDetailsScreen = ({route, navigation}) => {
  const {currency} = route.params;
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingBottom: 20,
        }}>
        <BackPreviousScreen onPress={() => navigation.goBack()} />
        <CurrencyCard currency={currency} />
        <BuyCurrencyCard currency={currency} />
        <AboutCurrencyCard
          name={currency.currency}
          description={currency.description}
        />
        <SetAlertsCard marginTop={10} />
      </View>
    </ScrollView>
  );
};

export default CurrencyDetailsScreen;
