import React from 'react';
import {View, Text} from 'react-native';

const TransactionsScreen = () => {
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Transactions
      </Text>
    </View>
  );
};

export default TransactionsScreen;
