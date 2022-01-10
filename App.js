import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import CurrencyDetailsScreen from './screens/CurrencyDetailsScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#734afa'} />
      <Stack.Navigator
        initialRouteName="BottomTabNavigation"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name="CurrencyDetailsScreen"
          component={CurrencyDetailsScreen}
        />
        <Stack.Screen
          name="TransactionsScreen"
          component={TransactionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
