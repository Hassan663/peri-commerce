// @app
import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import { styles } from './styles';
import { useEffect } from 'react';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WalkThrough')
    }, 1000);
  }, [])
  return (
    <View style={styles.container}>
      <Image
        style={styles.splash_Icon}
        resizeMode='contain'
        source={require('../../assets/SplashIcon2.png')} />
    </View >
  );
};
export default Splash;
