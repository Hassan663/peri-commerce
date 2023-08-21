

// @app
import React, {
    useState
} from 'react';

import { Alert } from "react-native";
import auth from '@react-native-firebase/auth';

export const handleLogin = async (email, password, navigation) => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        navigation.navigate('Home')
        //  console.log(email, password);
    } catch (error) {
        Alert.alert('Login Error', 'Invalid email or password.');
    }
};


export const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
};

export const validateName = (name) => {
    const pattern = /^[A-Za-z\s]+$/;
    return pattern.test(name);
};


export const handleSignup = async (email, password, confirmPassword, firstName, lastName, navigation) => {
    try {
        if (!validateEmail(email)) Alert.alert('Invalid Email', 'Please enter a valid email address.');
        else if (!validateName(firstName) || !validateName(lastName)) Alert.alert('Invalid Name', 'Please enter a valid first and last name.');
        else if (password !== confirmPassword) Alert.alert('Password Mismatch', 'Passwords do not match.');
        else {
            // Create user with email and password
            await auth().createUserWithEmailAndPassword(email, password);

            // Update user display name
            const user = auth().currentUser;
            if (user) await user.updateProfile({ displayName: firstName + ' ' + lastName, });

            // Navigate to another screen (you can customize this part)
            navigation.navigate('Login'); // Change 'SignIn' to your actual screen name
        }
    } catch (error) {

        Alert.alert(error.message)
        console.error('Signup error:', error.message);
        // Handle error (show error message to user, etc.)
    }
};