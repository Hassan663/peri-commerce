

// @app
import React, {
    useState
} from 'react';

import { Alert } from "react-native";

export const handleLogin = async (email, password, navigation) => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        navigation.navigate('AppTabs')
        //  console.log(email, password);
    } catch (error) {
        Alert.alert('Login Error', 'Invalid email or password.');
    }
};