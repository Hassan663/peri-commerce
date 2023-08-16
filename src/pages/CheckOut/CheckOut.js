import React, {
  useState
} from 'react';
import {
  Dimensions,
  SafeAreaView, ScrollView, View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles';
import Colors from '../../styles/Colors';
import Title from '../../components/Title';
import Button from '../../components/Button';
import OutlinedTextInput from '../Signup/Components/OutlinedTextInput';

const windowHeight = Dimensions.get('window').height;

const CheckOut = ({ navigation }) => {

  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [zipCode, setzipCode] = useState('')
  const [recievenumber, setrecievenumber] = useState('')
  const [email, setemail] = useState('')
  const [contactNo, setcontactNo] = useState('')

  return (
    <SafeAreaView
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ height: windowHeight, }}>
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
        <View style={styles.ph3}>
          <View style={styles.my2}>
            <Title
              title={'Delivery Address'}
              type={'Poppin-18'}
              weight={'600'}
              color={Colors.primary} />
          </View>
          <OutlinedTextInput
            marginY={RFPercentage(0.1)}
            val={addressLine1}
            onChange={(val) => setAddressLine1(val)}
            title={'address Line 1'}
            placeHolder={'address Line 1'}
          />
          <OutlinedTextInput
            marginY={RFPercentage(0.1)}
            val={addressLine2}
            onChange={(val) => setAddressLine2(val)}
            title={'address Line 2'}
            placeHolder={'address Line 2'}
          />
          <OutlinedTextInput
            marginY={RFPercentage(0.1)}
            val={zipCode}
            onChange={(val) => setzipCode(val)}
            title={'Zip Code'}
            placeHolder={'Zip Code'}
          />
          <View style={{ marginVertical: RFPercentage(2.5) }}>
            <Title
              title={'Contact Details'}
              type={'Poppin-18'}
              weight={'600'}
              color={Colors.primary} />
          </View>
          <OutlinedTextInput
            marginY={RFPercentage(0.1)}
            val={recievenumber}
            onChange={(val) => setrecievenumber(val)}
            title={'Receiver Name'}
            placeHolder={'Receiver Name'}
          />
          <OutlinedTextInput
            marginY={RFPercentage(0.1)}
            val={email}
            onChange={(val) => setemail(val)}
            title={'Email'}
            placeHolder={'Email'}
          />
          <OutlinedTextInput
            marginY={RFPercentage(0.1)}
            val={contactNo}
            onChange={(val) => setcontactNo(val)}
            title={'Contact no.'}
            placeHolder={'Contact no.'}
          />
        </View>

        <View style={styles.nextBtnContainer}>
          <View style={styles.footerBtn}>
            <Button title={'Next'} primary />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView >
  );
};
export default CheckOut;
