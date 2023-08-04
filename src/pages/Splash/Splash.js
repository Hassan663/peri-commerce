// @app
import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import { styles } from './styles';

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.splash_Icon}
        resizeMode='contain'
        source={require('../../assets/SplashIcon.png')} />
    </View >
  );
};
export default Splash;
