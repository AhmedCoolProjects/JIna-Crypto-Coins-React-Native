import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TransactionHistoryCard from '../cards/TransactionHistoryCard';

const TransactionsHistory = ({transactions}) => {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
      }}>
      <Text
        style={{
          color: '#000',
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Transactions History
      </Text>
      {transactions.map(item => (
        <TransactionHistoryCard key={item.id} transactionItem={item} />
      ))}
    </View>
  );
};

export default TransactionsHistory;
