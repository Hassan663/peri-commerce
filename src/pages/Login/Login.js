// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  Image,
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import OutlinedTextInput from './Components/OutlinedTextInput';
import Button from '../../components/Button';
import { styles } from './styles';
import { handleLogin } from './Components/CallBack';
import { SignIn } from '../../store/action/action';

GoogleSignin.configure({
  webClientId:
    '761704855538-olml0n1e8saf9vmukip0otic5291679s.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
});

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('mynameismuzammilhussainshah@gmail.com');
  const [password, setPassword] = useState('123456');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.loginIcon}
          source={require("../../assets/SplashIcon2.png")} />
        <Title
          title={`Hey, Login Now.`}
          color={Colors.black}
          weight={'600'}
          type={'Poppin-20'} />
        <View style={styles.subHeading}>
          <Title
            title={`Lorem ipsum dolor sit consectetur  elit.`}
            color={Colors.gray}
            weight={'400'}
            type={'Poppin-16'} />
        </View>

        <OutlinedTextInput
          val={email}
          onChange={(val) => {
            console.log(val, 'dasad')
            setEmail(val)
          }}
          title={'Email'} />
        <OutlinedTextInput
          val={password}
          onChange={(val) => { setPassword(val) }}
          title={'Password'}
          Password />

        <TouchableOpacity activeOpacity={.8}
          onPress={() => navigation.navigate('ForgetPass')}
          style={styles.selfEnd}>
          <Title
            title={`Forgot Password`}
            color={Colors.red}
            weight={'400'}
            type={'Poppin-14'} />
        </TouchableOpacity>

        <View style={styles.btnWrapper}>
          <Button callBack={() => handleLogin(email, password, navigation)} title={'Sign In'} primary />
        </View>

        <View style={styles.rowWrapper}>
          <Title
            title={`Don’t have account. `}
            color={Colors.gray}
            weight={'400'}
            type={'Poppin-14'} />
          <TouchableOpacity
            activeOpacity={.8}
            onPress={() => navigation.navigate('Signup')}>
            <Title
              title={`Sign up`}
              color={Colors.primary}
              weight={'600'}
              type={'Poppin-14'} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowWrapper}>
          <Title
            title={`Or Sign in with social media`}
            color={Colors.gray}
            weight={'400'}
            type={'Poppin-14'} />
        </View>

        <View style={styles.rowWrapper}>
          <TouchableOpacity style={styles.circle}>
            <EvilIcons name={`sc-facebook`} size={RFPercentage(3.2)} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={SignIn}
            style={styles.circle}>
            <AntDesign name={`google`} size={RFPercentage(2)} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView >
  );
};
export default Login;
