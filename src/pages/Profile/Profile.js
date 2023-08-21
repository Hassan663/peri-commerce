// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  View,
  Text,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { styles } from './styles';
import Button from '../../components/Button';

const Profile = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const currentUser = auth().currentUser;
    if (currentUser) { setUserProfile(currentUser); }
  }, []);
  const handleLogout = async () => {
    try {
      await auth().signOut();
      // Navigate to the login screen or any other appropriate screen
      navigation.navigate('Login'); // Update 'Login' with the actual screen name
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.line]}>{userProfile?._user?.displayName}</Text>
        <Text style={styles.title}>{userProfile?._user?.email}</Text>
      </View>
      <View style={styles.logOutContainer}>

        <Button
          callBack={() => handleLogout()}
          title={'Log Out'}
          primary />
      </ View>
    </View >
  );
};
export default Profile;
