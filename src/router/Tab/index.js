import * as React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import Splash from '../../pages/Splash/Splash';
import WalkThrough from '../../pages/WalkThrough/WalkThrough';
import Login from '../../pages/Login/Login';
import Home from '../../pages/Home/Home';
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

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);




  return (
    // <NavigationContainer>
    // <Stack.Navigator>
    //   {user ? (
    //     <Stack.Screen name="AppTabs" component={AppTabs} />
    //   ) : (
    //     <Stack.Screen name="Splash" component={Splash} />
    //   )}
    // </Stack.Navigator>
    // {/* </NavigationContainer> */}
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={user ? 'AppTabs' : 'Splash'}
    >
      {/* {user ? (
          <Stack.Screen name="AppTabs" component={AppTabs} />
        ) : (
          <Stack.Screen name="Splash" component={Splash} />
        )} */}
      <Stack.Screen name="AppTabs" component={AppTabs} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="WalkThrough" component={WalkThrough} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
}
