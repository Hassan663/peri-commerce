import * as React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../../pages/Splash/Splash';
import WalkThrough from '../../pages/WalkThrough/WalkThrough';
import Login from '../../pages/Login/Login';
import Home from '../../pages/Home/Home';
import Signup from '../../pages/Signup/Signup';
import ForgetPass from '../../pages/ForgetPass/ForgetPass';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='ForgetPass'
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="WalkThrough" component={WalkThrough} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
