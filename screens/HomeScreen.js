import React from 'react';
import {View, ScrollView} from 'react-native';
import HomeHeader from '../components/parts/HomeHeader';
import {transactionHistory, trendingCurrencies} from '../assets/data/dummy';
import SetAlertsCard from '../components/cards/SetAlertsCard';
import MoreInfosCard from '../components/cards/MoreInfosCard';
import TransactionsHistory from '../components/parts/TransactionsHistory';

const HomeScreen = ({navigation}) => {
  const [trending, setTrending] = React.useState(trendingCurrencies);
  const [transactions, setTransactions] = React.useState(transactionHistory);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingBottom: 50,
        }}>
        <HomeHeader navigation={navigation} trending={trending} />
        <SetAlertsCard marginTop="22%" />
        <MoreInfosCard />
        <TransactionsHistory transactions={transactions} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
