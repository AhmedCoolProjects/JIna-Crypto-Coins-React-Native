import React from 'react';
import {View, Text, Image} from 'react-native';
import LineChartCard from './LineChartCard';

const CurrencyCard = ({currency}) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 5,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={currency.image}
          style={{
            width: 25,
            height: 25,
            marginRight: 15,
          }}
        />
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {currency.currency}
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 12,
              opacity: 0.5,
              marginTop: 5,
            }}>
            {currency.code}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
            }}>
            {currency.amount} $
          </Text>
          <Text
            style={{
              color: currency.changes[0] === '-' ? '#f00' : '#0f0',
              fontSize: 12,
              marginTop: 5,
              fontWeight: '500',
            }}>
            {currency.changes}
          </Text>
        </View>
      </View>
      {/* Chart */}
      <LineChartCard data={currency.chartData} />
    </View>
  );
};

export default CurrencyCard;
