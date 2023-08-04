// @app
import React from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';

import { styles } from './styles';
import Button from '../../components/Button';

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View >
  );
};
export default Splash;
