import React from 'react';
import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import {portfolio} from '../../assets/data/dummy';
import icons from '../../constants/icons';
import images from '../../constants/images';
import TrendingCard from '../cards/TrendingCard';

const HomeHeader = ({trending, navigation}) => {
  return (
    <View>
      <ImageBackground
        source={images.banner}
        style={{
          width: '100%',
          height: 260,
        }}>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            padding: 15,
          }}>
          <Image
            source={icons.notification_white}
            style={{
              tintColor: '#fff',
              width: 25,
              height: 25,
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
            margingBottom: 15,
          }}>
          <Text>My Balance</Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {portfolio.balance} $
          </Text>
          <Text>{portfolio.changes} last 24 hours</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: '-30%',
            left: 0,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 15,
              fontWeight: '700',
            }}>
            Trending
          </Text>
          <FlatList
            horizontal
            data={trending}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <TrendingCard navigation={navigation} cardItem={item} />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeHeader;
