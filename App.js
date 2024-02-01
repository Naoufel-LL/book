import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';
import tab from './tabs/tab';
import FirstScreen from './screens/FirstScreen';
import MovieScreen from './screens/MovieScreen';
import BuyTicket from './screens/BuyTicket';
import CategoriePage from './screens/CategoriePage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstScreen'>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={tab} options={{ headerShown: false }} />
        <Stack.Screen name="MovieScreen" component={MovieScreen} options={{ headerShown: true }} />
        <Stack.Screen name="BuyTicket" component={BuyTicket} options={{ headerShown: true }} />
        <Stack.Screen name="CategoriePage" component={CategoriePage} options={{ headerShown: true }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
