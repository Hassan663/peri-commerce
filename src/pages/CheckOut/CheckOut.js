import React, {
  useState
} from 'react';
import {
  Dimensions,
  SafeAreaView, ScrollView, TouchableOpacity, View,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles';
import Colors from '../../styles/Colors';
import Title from '../../components/Title';
import Button from '../../components/Button';
import OutlinedTextInput from '../Signup/Components/OutlinedTextInput';
import { addItem, getItem } from '../../store/action/action';

const windowHeight = Dimensions.get('window').height;

const CheckOut = ({ navigation, route }) => {

  const [addressLine1, setAddressLine1] = useState('nagan chorangi abcd')
  const [addressLine2, setAddressLine2] = useState('saleem center acbd')
  const [zipCode, setzipCode] = useState('2044')
  const [recievenumber, setrecievenumber] = useState('03178941276')
  const [email, setemail] = useState('mynameismuzammilhussainshah@gmail.com')
  const [contactNo, setcontactNo] = useState('03123456789')
  return (
    <SafeAreaView
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ height: windowHeight, }}>
        <View style={styles.headerContainer}>

          <TouchableOpacity
            onPress={() => navigation.pop()}
            activeOpacity={.8}
            style={styles.rowContainer}>
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
          </TouchableOpacity>

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
            <Button
              callBack={async () => {
                // console.log(JSON.parse(myCart), 'myCart')
                // console.log(newArray, 'newArraynewArraynewArray')
                const collectionRef = firestore().collection('order');
                // const customDocumentRef = collectionRef.doc(key);
                const currentUserUid = auth().currentUser?.uid;
                let orderObj = { addressLine1, addressLine2, zipCode, recievenumber, email, contactNo, currentUserUid }
                let obj = { 'orderBy': orderObj, 'Products': route.params }
                console.log('route.params', obj)
                collectionRef.add(obj)
                  .then(async () => {
                    // const userUidToRemove = 'dXArIZ19UHZKAPMkPGu3jFhd7Re2';
                    const myCart = await getItem('myCart');
                    const newArray = JSON.parse(myCart).filter(item => item.userUid !== currentUserUid);
                    console.log('User added!', newArray);
                    await addItem('myCart', JSON.stringify(newArray))
                    // navigation.navigate('Home')
                  });
              }}
              title={'Next'} primary />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView >
  );
};
export default CheckOut;
