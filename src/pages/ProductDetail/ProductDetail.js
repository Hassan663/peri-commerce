// @app
import React, { } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView, View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles';
import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import Button from '../../components/Button';

const ProductDetail = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        height: "43%",

      }}>
        <View style={styles.productContainer}>
          <View style={styles.circle(35)}>
            <Image source={require('../../assets/back.png')} />
          </View>
          <Image source={require('../../assets/cart.png')} />
        </View>
        <Image style={{
          position: 'absolute',
          height: '85%',
          width: "85%",
          resizeMode: "contain",
          bottom: RFPercentage(3),
          alignSelf: 'center'
        }}
          resizeMode='contain' source={require('../../assets/mobile.png')} />
      </View>
      <View style={{
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: RFPercentage(4),
        borderTopRightRadius: RFPercentage(4),
        padding: RFPercentage(4),
      }}>
        <View style={{ height: RFPercentage(6), justifyContent: "space-between", flexDirection: 'row' }}>
          <View style={{ flex: 1, height: '100%', justifyContent: 'space-between', }}>
            <Title title={`Roller Rabbit`} color={Colors.primary} weight={'600'} type={`Poppin-18`} />
            <Title title={`Vado Odelle Dress`} color={Colors.fontColor} weight={'400'} type={`Poppin-11`} />
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <View style={{ height: 30, width: 70, borderRadius: 30, flexDirection: "row", paddingHorizontal: RFPercentage(1), justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.inputBg }}>
              <AntDesign color={Colors.primary} name={'minus'} size={RFPercentage(2)} />
              <Title title={`1`} color={Colors.primary} weight={'400'} type={`Poppin-14`} />
              <AntDesign color={Colors.primary} name={'plus'} size={RFPercentage(2)} />
            </View>
          </View>

        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: 'row', alignItems: "center", }}>

            {[0, 0, 0, 0, 0].map(() => <AntDesign name={`star`} color={Colors.yellow} size={RFPercentage(2)} style={{ marginRight: RFPercentage(.5) }} />)}
            <Title title={`(320 Review)`} color={Colors.primary} weight={'400'} type={`Poppin-11`} />
          </View>
          <Title title={`Avaliable in stok`} color={Colors.primary} weight={'600'} type={`Poppin-11`} />
        </View>
        <View style={{ height: 130, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Title title={`Size`} color={Colors.primary} weight={'600'} type={`Poppin-16`} />
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: "space-evenly", alignItems: 'center' }}>

              <View style={styles.circle(40, Colors.white, 2)}>
                <Title title={`S`} color={Colors.primary} weight={'600'} type={`Poppin-14`} />

              </View>
              <View style={styles.circle(40, Colors.white, 2)}>
                <Title title={`M`} color={Colors.primary} weight={'600'} type={`Poppin-14`} />

              </View>
              <View style={styles.circle(40, Colors.white, 2)}>
                <Title title={`L`} color={Colors.primary} weight={'600'} type={`Poppin-14`} />

              </View>
              <View style={styles.circle(40, Colors.white, 2)}>
                <Title title={`XL`} color={Colors.primary} weight={'600'} type={`Poppin-14`} />

              </View>
              <View style={styles.circle(40, Colors.white, 2)}>
                <Title title={`XXL`} color={Colors.primary} weight={'600'} type={`Poppin-14`} />
              </View>
            </View>
          </View>
          <View style={{
            width: 40,
            backgroundColor: Colors.white,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
            borderRadius: RFPercentage(3),
            justifyContent: 'space-evenly',
            alignItems: 'center'

          }}>
            <View style={styles.circle(20, Colors.white, 2)}>
              <AntDesign name={'check'} size={RFPercentage(2)} />
            </View>
            <View style={styles.circle(20, Colors.primary)}></View>
            <View style={styles.circle(20, Colors.lightGreen)}></View>
            <View style={styles.circle(20, Colors.yellow)}></View>

          </View>

        </View>
        <Title title={`Description`} color={Colors.primary} weight={'600'} type={`Poppin-16`} />
        <Title
          title={`Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.`}
          color={Colors.fontColor}
          weight={'400'}
          type={`Poppin-11`} />
        <View style={{ flexDirection: 'row', marginVertical: RFPercentage(4), height: 50, alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 1.5 }}>
            <Title
              title={`Total Price`}
              color={Colors.fontColor}
              weight={'400'}
              type={`Poppin-9`} />
            <Title
              title={`$198.00`}
              color={Colors.primary}
              weight={'700'}
              type={`Poppin-18`} />
          </View>
          <View style={{ flex: 2, height: "100%", flexDirection: "row", borderRadius: RFPercentage(1), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary }}>
            <Image style={{ marginHorizontal: RFPercentage(1) }} source={require('../../assets/cartIcon.png')} />
            <Title title={`Add to cart`} color={Colors.white} weight={'600'} type={`Poppin-16`} />

          </View>
        </View>
      </View>

    </SafeAreaView >
  );
};
export default ProductDetail;
