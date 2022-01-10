import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import icons from '../../constants/icons';

const BackPreviousScreen = ({onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={icons.back_arrow}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            tintColor: '#000',
            marginRight: 10,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackPreviousScreen;
