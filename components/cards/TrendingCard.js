import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const TrendingCard = ({cardItem, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate('CurrencyDetailsScreen', {
          currency: cardItem,
        });
      }}
      style={{
        paddingHorizontal: 15,
        paddingVertical: 20,
        minWidth: 170,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        elevation: 5,
        backgroundColor: '#fff',
        marginHorizontal: 8,
        marginVertical: 4,
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={cardItem.image}
          style={{
            width: 25,
            height: 25,
            marginRight: 10,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000',
            }}>
            {cardItem.currency}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              opacity: 0.4,
            }}>
            {cardItem.code}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#000',
        }}>
        {cardItem.amount} $
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: cardItem.changes[0] === '+' ? '#00c853' : '#ff3d00',
        }}>
        {cardItem.changes}
      </Text>
    </TouchableOpacity>
  );
};

export default TrendingCard;
