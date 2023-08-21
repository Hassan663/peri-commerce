// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SwipeListView } from 'react-native-swipe-list-view';

import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import Button from '../../components/Button';
import { styles } from './styles';
import { getItem } from '../../store/action/action';
import { RenderItem, renderHiddenItem, } from './Components/RenderHiddenItem';

const windowHeight = Dimensions.get('window').height;
const heightFlex1 = windowHeight / 10

const MyCart = ({ navigation }) => {
  const [totalPrice, settotalPrice] = useState(0)
  const [myCarts, setmyCarts] = useState([])
  useEffect(() => {
    // getData()
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData()

    });
    return unsubscribe;
  }, [navigation]);

  const getData = async () => {

    const myCart = await getItem('myCart');
    if (JSON.parse(myCart)?.length > 0) {
      const currentUserUid = auth().currentUser?.uid;
      let myCartFilter = JSON.parse(myCart).filter((val) => val.userUid == currentUserUid)
      let price = 0
      myCartFilter.map((item) => { price = price + item.price })
      console.log(price, 'myCartFilter')
      settotalPrice(price)
      setmyCarts(myCartFilter)
    } else {
      setmyCarts([])
      settotalPrice(0)

    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: RFPercentage(12) }} showsVerticalScrollIndicator={false}     >
        <View style={{ height: heightFlex1 * 1, }}>
          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={.8} style={styles.circle(35)}>
              <Image source={require('../../assets/back.png')} />
            </TouchableOpacity>
            <View style={styles.headerCartContainer}>
              <View style={[styles.circle(12), styles.headerCartPopup]}>
                <Title type={`Poppin-9`} color={Colors.white} weight={`700`} title={myCarts?.length} />
              </View>
              <Image source={require('../../assets/cart.png')} />
            </View>
          </View>
        </View>
        <View >
          <View style={styles.myCartWrapper}>
            <Title
              type={`Poppin-18`}
              color={Colors.primary}
              weight={`600`}
              title={`My Cart`} />
          </View>
          <SwipeListView
            data={myCarts}
            contentContainerStyle={styles.myCartContentContainer}
            renderItem={(data, rowMap) => <RenderItem data={data} rowMap={rowMap} />}

            renderHiddenItem={(data, rowMap) => renderHiddenItem(data, rowMap, setmyCarts, settotalPrice)}
            leftOpenValue={0}
            rightOpenValue={-50}
          />
        </View>
        <View style={{}}>
          <View style={styles.promoContainer}>
            <TextInput
              style={{ flex: 1 }}
              placeholder='Promo Code'
            />
            <Button
              title={`Apply`}
              titleStyle={styles.applyText}
              customStyle={styles.applyContainer}
            />
          </View>
          <View style={styles.row}>
            <Title
              type={`Poppin-14`}
              color={Colors.fontColor}
              weight={`600`}
              title={`Total (${myCarts?.length} item) :`} />
            <Title
              type={`Poppin-20`}
              color={Colors.primary}
              weight={`600`}
              title={`$${totalPrice.toFixed(2)}`} />

          </View>
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={.8}
              onPress={() => {
                if (myCarts.length > 0) navigation.navigate('CheckOut', myCarts)
              }}
              style={styles.checkOutContainer}>
              <Title
                type={`Poppin-16`}
                color={Colors.white}
                weight={`600`}
                title={`PROCEED TO CHECHOUT`} />
              <Image source={require('../../assets/rightIcon.png')} />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView >
  );
};
export default MyCart;
