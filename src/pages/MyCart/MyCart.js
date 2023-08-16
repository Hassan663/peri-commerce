// @app
import React, {
  useState
} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SwipeListView } from 'react-native-swipe-list-view';

import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import Button from '../../components/Button';
import { styles } from './styles';
import { MYCARTDATA } from './DummyData';

const windowHeight = Dimensions.get('window').height;
const heightFlex1 = windowHeight / 10

const MyCart = ({ navigation }) => {
  const [noOfItem, setNoOfItem] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}     >
        <View style={{ height: heightFlex1 * 1, }}>
          <View style={styles.productContainer}>
            <View style={styles.circle(35)}>
              <Image source={require('../../assets/back.png')} />
            </View>
            <View style={styles.headerCartContainer}>
              <View style={[styles.circle(12), styles.headerCartPopup]}>
                <Title type={`Poppin-9`} color={Colors.white} weight={`700`} title={MYCARTDATA.length} />
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
            data={MYCARTDATA}
            contentContainerStyle={styles.myCartContentContainer}
            renderItem={(data, rowMap) => (
              <View style={styles.rowFront}>
                <Image style={styles.cartItemImg} source={data.item.photoURL} />

                <View style={styles.cartItemContentWrapper}>
                  <View>
                    <Title
                      type={`Poppin-14`}
                      color={Colors.primary}
                      weight={`600`}
                      title={data?.item?.name}
                    />
                    <Title
                      type={`Poppin-11`}
                      color={Colors.fontColor}
                      weight={`400`}
                      title={data?.item?.description} />
                  </View>
                  <View style={styles.cartItemContentBody}>
                    <Title type={`Poppin-14`} color={Colors.primary} weight={`700`} title={data?.item?.price} />
                    <View style={[styles.noOfItemWrapper, styles.mr2]}>
                      <AntDesign
                        onPress={() => noOfItem > 0 && setNoOfItem(noOfItem - 1)}
                        color={Colors.primary}
                        name={'minus'}
                        size={RFPercentage(2)} />
                      <Title
                        title={noOfItem}
                        color={Colors.primary}
                        weight={'400'}
                        type={`Poppin-14`} />
                      <AntDesign
                        onPress={() => noOfItem < 10 && setNoOfItem(noOfItem + 1)}
                        color={Colors.primary}
                        name={'plus'}
                        size={RFPercentage(2)} />
                    </View>
                  </View>
                </View>
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}>
                <View style={{ flex: 1, }} />
                <View style={styles.deleteContainer} >
                  <MaterialIcons name={`delete`} size={RFPercentage(3)} color={Colors.white} />
                </View>
              </View>
            )}
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
              title={`Total (${MYCARTDATA.length} item) :`} />
            <Title
              type={`Poppin-20`}
              color={Colors.primary}
              weight={`600`}
              title={`$500`} />

          </View>
          <View style={styles.row}>
            <View style={styles.checkOutContainer}>
              <Title
                type={`Poppin-16`}
                color={Colors.white}
                weight={`600`}
                title={`PROCEED TO CHECHOUT`} />
              <Image source={require('../../assets/rightIcon.png')} />
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView >
  );
};
export default MyCart;
