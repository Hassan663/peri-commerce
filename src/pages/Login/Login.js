// @app
import React from 'react';
import { TouchableOpacity, View, } from 'react-native';

import Swiper from 'react-native-swiper';
import { useRef } from 'react';

import { styles } from './styles';
import { Slide } from './Components/Slide';
import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import { changeSlide } from './Components/CallBack';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View >
  );
};
export default Login;
