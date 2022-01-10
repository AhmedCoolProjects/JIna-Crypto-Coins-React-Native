import React from 'react';
import {View, Text, Image} from 'react-native';
import icons from '../../constants/icons';

const TransactionHistoryCard = ({transactionItem}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
      }}>
      <Image
        source={icons.transaction}
        style={{
          width: 25,
          height: 25,
          marginRight: 10,
          tintColor: '#1d04a8',
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            color: '#1d04a8',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {transactionItem.description}
        </Text>
        <Text
          style={{
            color: '#1d04a8',
            fontSize: 12,
            opacity: 0.5,
            marginTop: 5,
          }}>
          {transactionItem.date}
        </Text>
      </View>
      <Text
        style={{
          color: transactionItem.amount < 0 ? '#f00' : '#0f0',
          fontSize: 14,
          fontWeight: '700',
        }}>
        {transactionItem.amount} {transactionItem.currency}
      </Text>
      <Image
        source={icons.right_arrow}
        style={{
          width: 20,
          height: 20,
          marginLeft: 10,
          tintColor: '#1d04a8',
        }}
      />
    </View>
  );
};

export default TransactionHistoryCard;
