import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import Title from '../../components/Title';
import Button from '../../components/Button';
import { styles } from './styles';

const PlaceOrder = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.rowContainer}>
          <AntDesign
            name={`left`}
            size={RFPercentage(2)}
            style={styles.mr1}
            color={Colors.primary} />
          <Title
            title={'Checkout'}
            type={'Poppin-16'}
            weight={'600'}
            color={Colors.primary} />
        </View>

        <View style={styles.rowContainer}>
          <AntDesign
            name={`search1`}
            size={RFPercentage(3)}
            style={styles.mr1}
            color={Colors.fontColor} />
          <AntDesign
            style={styles.mr1}
            name={`shoppingcart`}
            size={RFPercentage(3)}
            color={Colors.fontColorV2} />
        </View>
      </View>
      <Image style={styles.placeOrderImg} source={require('../../assets/orderPlace.jpg')} />
      <View style={styles.orderPlaceMsgWrapper}>
        <Title
          title={'Your Order has been placed'}
          type={'Poppin-20'}
          weight={'600'}
          color={Colors.black} />
        <Text style={styles.orderPlaceMsg}>
          {`Your items has been placed and is on it’s way to being processed`}
        </Text>
      </View>

      <View style={styles.nextBtnContainer}>
        <View style={styles.footerBtn}>
          <Button title={'Back to home'} primary />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PlaceOrder;
