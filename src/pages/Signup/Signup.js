// @app
import React, {
  useState
} from 'react';
import {
  Image,
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import OutlinedTextInput from './Components/OutlinedTextInput';
import Button from '../../components/Button';
import { styles } from './styles';
import { handleLogin } from './Components/CallBack';

const Signup = ({ navigation }) => {

  const [email, setEmail] = useState('mynameismuzammilhussainshah@gmail.com');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCheck, setisCheck] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          marginTop: RFPercentage(10),
          flexDirection: 'row',
          marginTop: RFPercentage(10),
          alignItems: "center", marginTop: RFPercentage(5),
        }}>
          <AntDesign size={RFPercentage(2)} color={Colors.primary} name={'left'} />
          <Title
            title={`Back`}
            color={Colors.primary}
            weight={'400'}
            type={'Poppin-16'} />
        </View>
        <Image
          style={styles.loginIcon}
          source={require("../../assets/SplashIcon2.png")} />

        <Title
          title={`Create your account.`}
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
          val={firstName}
          onChange={(val) => setFirstName(val)}
          title={'firstName'} />
        <OutlinedTextInput
          val={lastName}
          onChange={(val) => setLastName(val)}
          title={'lastName'} />
        <OutlinedTextInput
          val={email}
          onChange={(val) => setEmail(val)}
          title={'Email'} />
        <OutlinedTextInput
          val={password}
          onChange={(val) => setPassword(val)}
          title={'Password'} Password />
        <OutlinedTextInput
          val={confirmPassword}
          onChange={(val) => setConfirmPassword(val)}
          title={'confirmPassword'} Password />
        <TouchableOpacity
          style={styles.selfEnd}
          activeOpacity={.9} onPress={() => { setisCheck(!isCheck) }} >
          {isCheck ?
            <AntDesign name={'checksquareo'} size={RFPercentage(2.5)} />
            :
            <View style={{ height: RFPercentage(2.5), width: RFPercentage(2.5), backgroundColor: Colors.lightGray }}></View>
          }
          <View style={{ marginLeft: RFPercentage(1) }}>
            <Title
              title={` I agree to `}
              color={Colors.gray}
              weight={'400'}
              type={'Poppin-12'} />
          </View>
          <Title
            title={`Terms & Conditions`}
            color={Colors.primary}
            weight={'400'}
            type={'Poppin-12'} />
          <Title
            title={` & `}
            color={Colors.gray}
            weight={'400'}
            type={'Poppin-12'} />
          <Title
            title={`Privacy Policy.`}
            color={Colors.primary}
            weight={'400'}
            type={'Poppin-12'} />
        </TouchableOpacity>

        <View style={styles.btnWrapper}>
          <Button callBack={() => handleLogin(email, password, navigation)} title={'Sign Up'} primary />
        </View>

        <View style={styles.rowWrapper}>
          <Title
            title={`Alread have account. `}
            color={Colors.gray}
            weight={'400'}
            type={'Poppin-14'} />
          <Title
            title={`Sign in`}
            color={Colors.primary}
            weight={'600'}
            type={'Poppin-14'} />
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
          <TouchableOpacity style={styles.circle}>
            <AntDesign name={`google`} size={RFPercentage(2)} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView >
  );
};
export default Signup;
