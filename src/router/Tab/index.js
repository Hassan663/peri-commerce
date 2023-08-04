import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Splash from '../../pages/Splash/Splash';
import WalkThrough from '../../pages/WalkThrough/WalkThrough';

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
      initialRouteName='WalkThrough'
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="WalkThrough" component={WalkThrough} />
    </Stack.Navigator>
  );
}
