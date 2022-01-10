import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import icons from '../constants/icons';
import SettingsScreen from '../screens/SettingsScreen';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import PortfolioScreen from '../screens/PortfolioScreen';
import PricesScreen from '../screens/PricesScreen';
import TransactionsScreen from '../screens/TransactionsScreen';

export const Tab = createBottomTabNavigator();

const DATA_SCREENS = [
  {
    title: 'Home',
    screen: HomeScreen,
    icon: icons.home,
  },
  {
    title: 'Portfolio',
    screen: PortfolioScreen,
    icon: icons.pie_chart,
  },
  {
    title: 'Transactions',
    screen: TransactionsScreen,
    icon: icons.transaction,
  },
  {
    title: 'Prices',
    screen: PricesScreen,
    icon: icons.line_graph,
  },

  {
    title: 'Settings',
    screen: SettingsScreen,
    icon: icons.settings,
  },
];

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: '#000',

        tabBarActiveTintColor: '#00aaff',

        tabBarShowLabel: false,
        headerShown: false,
      }}>
      {DATA_SCREENS.map(({title, screen, icon}) => (
        <Tab.Screen
          key={title}
          name={title}
          component={screen}
          options={{
            tabBarIcon: ({color, size, focused}) =>
              title === 'Transactions' ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#00aaff',
                    padding: 15,
                    borderRadius: 200,
                    marginTop: -30,
                  }}>
                  <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                      width: size,
                      height: size,
                      tintColor: '#fff',
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={icon}
                    resizeMode="contain"
                    style={{width: size, height: size, tintColor: color}}
                  />
                  {focused && (
                    <Text
                      style={{
                        color: color,
                        fontSize: 10,
                      }}>
                      {title}
                    </Text>
                  )}
                </View>
              ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
