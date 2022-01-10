import React from 'react';
import {View, Text} from 'react-native';

const PortfolioScreen = () => {
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
        Portfolio
      </Text>
    </View>
  );
};

export default PortfolioScreen;
