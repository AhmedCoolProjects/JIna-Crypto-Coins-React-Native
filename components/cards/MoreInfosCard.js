import React from 'react';
import {View, Text, Linking} from 'react-native';
import {repository} from '../../assets/data/dummy';

const MoreInfosCard = () => {
  return (
    <View
      style={{
        marginTop: 30,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#3407b3',
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 15,
          fontWeight: '700',
        }}>
        How the app words?
      </Text>
      <Text>
        The app is a free app that is made for the purpose of learning and
        practicing how the crypto currencies market works. You can find more on
        the README.md file of the repository below.
      </Text>
      <Text
        onPress={() => {
          Linking.openURL(repository);
        }}
        style={{
          color: '#fff',
          fontSize: 12,
          fontWeight: '700',
          marginTop: 10,
          textDecorationLine: 'underline',
        }}>
        Learn More
      </Text>
    </View>
  );
};

export default MoreInfosCard;
