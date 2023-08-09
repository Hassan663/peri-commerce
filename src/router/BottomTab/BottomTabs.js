import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../pages/Home/Home';
import Notification from '../../pages/Notification/Notification';
import Cart from '../../pages/Cart/Cart';
import Profile from '../../pages/Profile/Profile';
import { CustomTabBar } from './CustomTabBarStyles';

const Tab = createBottomTabNavigator();

function AppTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({ headerShown: false, })}
            tabBar={props => <CustomTabBar {...props} />} >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default AppTabs;
