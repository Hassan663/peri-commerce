// @app
import React from 'react';
import { Image, ScrollView, View, } from 'react-native';

import { styles } from './styles';
import { SafeAreaView } from 'react-native';
import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import OutlinedTextInput from './Components/OutlinedTextInput';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.loginIcon} source={require("../../assets/SplashIcon2.png")} />
        <Title title={`Hey, Login Now.`} color={Colors.black} weight={'600'} type={'Poppin-20'} />
        <View style={styles.subHeading}>
          <Title title={`Lorem ipsum dolor sit consectetur  elit.`} color={Colors.gray} weight={'400'} type={'Poppin-16'} />
        </View>
        <OutlinedTextInput title={'Email'} />
        <OutlinedTextInput title={'Password'} Password />
      </ScrollView>
    </SafeAreaView >
  );
};
export default Login;
