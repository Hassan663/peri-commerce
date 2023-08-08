// @app
import React, {
  useState
} from 'react';
import {
  Image,
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import auth from '@react-native-firebase/auth';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import OutlinedTextInput from './Components/OutlinedTextInput';
import Button from '../../components/Button';
import { styles } from './styles';
import { handleLogin } from './Components/CallBack';

const Signup = ({ navigation }) => {

  const [email, setEmail] = useState('mynameismuzammilhussainshah@gmail.com');
  const [firstName, setFirstName] = useState('muzammil ');
  const [lastName, setLastName] = useState('shah');
  const [password, setPassword] = useState('123456');
  const [confirmPassword, setConfirmPassword] = useState('12345');
  const [isCheck, setisCheck] = useState(false);


  // const handleSignup = async () => {
  //   try {
  //     if (password !== confirmPassword) {
  //       // Passwords don't match
  //       alert('Passwords do not match');
  //       return;
  //     }

  //     // Create user with email and password
  //     await auth().createUserWithEmailAndPassword(email, password);

  //     // Update user display name
  //     const user = auth().currentUser;
  //     if (user) {
  //       await user.updateProfile({
  //         displayName: firstName + ' ' + lastName,
  //       });
  //     }

  //     // Navigate to another screen (you can customize this part)
  //     navigation.navigate('Login'); // Change 'SignIn' to your actual screen name
  //   } catch (error) {
  //     console.error('Signup error:', error.message);
  //     // Handle error (show error message to user, etc.)
  //   }
  // };

  const handleSignup = async () => {
    try {
      if (!validateEmail(email)) {
        Alert.alert('Invalid Email', 'Please enter a valid email address.');
        return;
      }

      if (!validateName(firstName) || !validateName(lastName)) {
        Alert.alert('Invalid Name', 'Please enter a valid first and last name.');
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert('Password Mismatch', 'Passwords do not match.');
        return;
      }

      // Create user with email and password
      await auth().createUserWithEmailAndPassword(email, password);

      // Update user display name
      const user = auth().currentUser;
      if (user) {
        await user.updateProfile({
          displayName: firstName + ' ' + lastName,
        });
      }

      // Navigate to another screen (you can customize this part)
      navigation.navigate('Login'); // Change 'SignIn' to your actual screen name
    } catch (error) {
      console.error('Signup error:', error.message);
      // Handle error (show error message to user, etc.)
    }
  };

  const validateEmail = (email) => {
    // Very basic email validation, you can use a more robust method
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validateName = (name) => {
    // Basic name validation, allowing only alphabets and spaces
    const pattern = /^[A-Za-z\s]+$/;
    return pattern.test(name);
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.backBtnContainer}>
          <AntDesign
            size={RFPercentage(2)}
            color={Colors.primary}
            name={'left'} />
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
            <View style={styles.squareContainer}></View>
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
          <Button
            callBack={() => handleSignup(email, password, navigation)}
            title={'Sign Up'}
            primary />
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
