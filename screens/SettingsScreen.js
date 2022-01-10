import React from 'react';
import {View, Text} from 'react-native';

const SettingsScreen = () => {
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
        Settings
      </Text>
    </View>
  );
};

export default SettingsScreen;
