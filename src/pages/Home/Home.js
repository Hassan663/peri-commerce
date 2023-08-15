// @app
import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles';
import Colors from '../../styles/Colors';
import Title from '../../components/Title';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: RFPercentage(10), flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', backgroundColor: "red" }}>
        <View style={styles.circle(36)}>
          <Image resizeMode='contain' source={require('../../assets/menu.png')} />

        </View>
        <View style={styles.circle(50)}></View>
      </View>
      <Title title={'Welcome,'} color={Colors.primary} weight={'600'} type={`Poppin-25`} />
      <Title title={'Our Fashions App'} color={Colors.fontColor} weight={'600'} type={`Poppin-20`} />
      <View style={{
        height: 50,
        width: "100%",
        marginVertical: RFPercentage(2),
        flexDirection: "row",
      }}>
        <View style={{
          height: "100%",
          width: "80%",
          backgroundColor: Colors.inputBg,
          paddingHorizontal: RFPercentage(2),
          borderRadius: RFPercentage(4),
          flexDirection: 'row',
          alignItems: "center",
        }}>
          <AntDesign name={`search1`} color={Colors.primary} size={RFPercentage(3)} />
          <TextInput
            placeholder='Search...'
            style={{
              flex: 1,
              paddingHorizontal: RFPercentage(1),
            }} />
        </View>
        <View style={{
          height: "100%",
          width: "20%",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}>
          <Image resizeMode='contain' source={require('../../assets/filtter.png')} />
          {/* <View style={styles.circle(50)}></View> */}

        </View>
      </View>
    </SafeAreaView >
  );
};
export default Home;
