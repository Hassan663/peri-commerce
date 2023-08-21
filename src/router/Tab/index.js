import * as React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../../pages/Splash/Splash';
import WalkThrough from '../../pages/WalkThrough/WalkThrough';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';
import ForgetPass from '../../pages/ForgetPass/ForgetPass';
import AppTabs from '../BottomTab/BottomTabs';
import Category from '../../pages/Category/Category';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
import CheckOut from '../../pages/CheckOut/CheckOut';
import MyCart from '../../pages/MyCart/MyCart';
import PlaceOrder from '../../pages/PlaceOrder/PlaceOrder';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);




  return (
    user ? (
      <Stack.Navigator
        screenOptions={{ headerShown: false }
        }
      >
        <Stack.Screen name="AppTabs" component={AppTabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator >
    ) : (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="WalkThrough" component={WalkThrough} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
      </Stack.Navigator>
    )
  );
}
