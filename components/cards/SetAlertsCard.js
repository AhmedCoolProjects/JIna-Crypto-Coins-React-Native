import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import icons from '../../constants/icons';

const SetAlertsCard = ({marginTop}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        marginTop: marginTop,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        elevation: 5,
      }}>
      <Image
        source={icons.notification_color}
        style={{
          width: 25,
          height: 25,
          marginRight: 10,
        }}
      />
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 15,
            fontWeight: '600',
          }}>
          Set Alert Notification
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 12,
            opacity: 0.5,
          }}>
          Get notified when the price of a currency reaches a certain value
        </Text>
      </View>
      <Image
        source={icons.right_arrow}
        style={{
          width: 20,
          height: 20,
          marginLeft: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default SetAlertsCard;
