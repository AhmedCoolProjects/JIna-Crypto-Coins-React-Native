import React from 'react';
import {View, Text, Animated} from 'react-native';

const DotsCard = ({nbr, itemScroll, width}) => {
  const dotPosition = Animated.divide(itemScroll, width);
  return (
    <View
      style={{
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: 10,
        flexDirection: 'row',
      }}>
      {nbr.map((item, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        const size = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [6, 10, 6],
          extrapolate: 'clamp',
        });
        const color = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: ['#ccc', '#1d04a8', '#ccc'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`${index}`}
            style={{
              height: size,
              width: size,
              borderRadius: 15,
              backgroundColor: color,
              marginHorizontal: 5,
              opacity: opacity,
            }}
          />
        );
      })}
    </View>
  );
};

export default DotsCard;
