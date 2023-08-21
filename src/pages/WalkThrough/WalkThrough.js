// @app
import React from 'react';
import { Image, SafeAreaView, TouchableOpacity, View, } from 'react-native';

import Swiper from 'react-native-swiper';
import { useRef } from 'react';

import { styles } from './styles';
import { Slide } from './Components/Slide';
import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import { changeSlide } from './Components/CallBack';

const WalkThrough = ({ navigation }) => {
  const swiperRef2 = useRef(null)

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.splash_Icon}
        resizeMode='contain'
        source={require('../../assets/SplashIcon2.png')} />
      <Swiper
        showsPagination={false}
        ref={swiperRef2}
        autoplay={true}
        loop={false}
        style={styles.wrapper}
        showsButtons={false}
      >
        <Slide swiperRef={swiperRef2} />
        <Slide swiperRef={swiperRef2} />
        <Slide swiperRef={swiperRef2} />
      </Swiper>
    </SafeAreaView >
  );
};
export default WalkThrough;
