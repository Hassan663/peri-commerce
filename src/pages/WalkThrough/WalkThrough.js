// @app
import React, { useEffect } from 'react';
import {
  Image,
  SafeAreaView,
} from 'react-native';

import Swiper from 'react-native-swiper';
import { useRef } from 'react';

import { styles } from './styles';
import { Slide } from './Components/Slide';
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize, AdEventType, RewardedAdEventType } from 'react-native-google-mobile-ads';

// const interstitialId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3340464236132360/1792547171';
const interstitialId = 'ca-app-pub-3340464236132360/1792547171';
// const adUnitId2 = 'ca-app-pub-3340464236132360/2693413925';


const interstitial = InterstitialAd.createForAdRequest(interstitialId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});




const WalkThrough = ({ navigation }) => {
  const swiperRef2 = useRef(null)

   {/* INTERSTITIAL */ }
   useEffect(async () => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => { interstitial.show(); });
    interstitial.load();
    return unsubscribe;
  }, [])
  {/* INTERSTITIAL */ }


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
