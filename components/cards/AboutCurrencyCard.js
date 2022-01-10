import React from 'react';
import {View, Text} from 'react-native';

const AboutCurrencyCard = ({name, description}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginTop: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            marginRight: 8,
          }}>
          About
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
      </View>
      <Text
        style={{
          color: '#000',
          fontSize: 14,
          marginTop: 10,
          opacity: 0.6,
        }}>
        {description}
      </Text>
    </View>
  );
};

export default AboutCurrencyCard;
