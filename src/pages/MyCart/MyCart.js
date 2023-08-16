// @app
import React, { } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView, ScrollView, Text, TextInput, View,
} from 'react-native';

import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import { SwipeListView } from 'react-native-swipe-list-view';
import Button from '../../components/Button';

const windowHeight = Dimensions.get('window').height;
const heightFlex1 = windowHeight / 10

const MyCart = ({ navigation }) => {

  const data = [
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
    // { key: '1', text: 'Item 1' },
    // { key: '2', text: 'Item 2' },
    // { key: '3', text: 'Item 3' },
    // Add more items here
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{}}>

        <View style={{ height: heightFlex1 * 1, backgroundColor: 'blue' }}>
          <View style={styles.productContainer}>
            <View style={styles.circle(35)}>
              <Image source={require('../../assets/back.png')} />
            </View>
            <View style={{
              // height: 20, width: 20,
              // overflow: "hidden",
              borderRadius: RFPercentage(3),
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.30,

              elevation: 13,
            }}>

              <View style={[styles.circle(12), { position: "absolute", zIndex: 2, top: -5, right: '3%', }]}>
                <Title type={`Poppin-9`} color={Colors.white} weight={`700`} title={`5`} />
              </View>
              <Image source={require('../../assets/cart.png')} />
            </View>
          </View>
        </View>
        <View style={{
          // height: heightFlex1 * 6
          paddingVertical: RFPercentage(1)
        }}>
          {/* <ScrollView> */}
          <View style={{ marginHorizontal: RFPercentage(3), marginVertical: RFPercentage(2) }}>

            <Title type={`Poppin-18`} color={Colors.primary} weight={`600`} title={`My Cart`} />
          </View>
          <SwipeListView
            data={data}
            // style={{justifyContent: 'space-between'}}
            contentContainerStyle={{ justifyContent: 'space-evenly', flex: 1 }}
            renderItem={(data, rowMap) => (
              <View style={styles.rowFront}>
                <Text>{data.item.text}</Text>
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}>
                <View style={{ flex: 1, }} />
                <View style={{
                  flex: 1,
                  height: "100%",
                  backgroundColor: Colors.primary,
                  borderRadius: RFPercentage(2),
                  justifyContent: 'center',
                  paddingLeft: 15,
                  paddingRight: 15,
                  alignItems: 'flex-end',

                }} >
                  <MaterialIcons name={`delete`} size={RFPercentage(3)} color={Colors.white} />
                </View>
              </View>
            )}
            leftOpenValue={0}
            rightOpenValue={-75}
          />
          {/* </ScrollView> */}
        </View>
        <View style={{ height: heightFlex1 * 3 }}>
          <View style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
            paddingHorizontal: RFPercentage(2),
            flexDirection: 'row',
            backgroundColor: Colors.inputBg,
            borderRadius: RFPercentage(2),
            alignItems: 'center',
            // justifyContent: 'flex-end',
            marginVertical: RFPercentage(2)
          }}>
            <TextInput
              style={{ flex: 1 }}
              placeholder='Promo Code'
            />

            <Button
              title={`Apply`}
              titleStyle={{ color: Colors.white, fontSize: 11, fontWeight: "600" }}
              customStyle={{ backgroundColor: Colors.primary, justifyContent: "center", alignItems: 'center', height: 30, width: 60, borderRadius: RFPercentage(1.5) }}
            />
          </View>
          <View style={styles.row}>
            <Title type={`Poppin-14`} color={Colors.fontColor} weight={`600`} title={`Total (3 item) :`} />
            <Title type={`Poppin-20`} color={Colors.primary} weight={`600`} title={`$500`} />

          </View>
          <View style={styles.row}>
            <View style={{
              height: 50,
              flexDirection: "row",
              borderRadius: RFPercentage(1),
              overflow: 'hidden',
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: RFPercentage(1),
              width: '100%',
              // alignSelf: 'center',
              backgroundColor: Colors.primary
            }}>
              <Title type={`Poppin-16`} color={Colors.white} weight={`600`} title={`PROCEED TO CHECHOUT`} />
              <Image source={require('../../assets/rightIcon.png')} />
            </View>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView >
  );
};
export default MyCart;
