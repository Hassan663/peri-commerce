import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ActionTypes from '../constant/constant';

import {
  GoogleSignin,
  statusCodes
} from '@react-native-google-signin/google-signin';

export const GoogleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    let userInfo = await auth().signInWithCredential(googleCredential)
    if (userInfo?.additionalUserInfo?.isNewUser == true) {
      if (userInfo.user) {
        let userDocObj = {
          email: userInfo?.user?.email,
          lastName: userInfo?.additionalUserInfo?.profile?.family_name,
          firstName: userInfo?.additionalUserInfo?.profile?.given_name,
          photoURL: userInfo?.user?.photoURL,
          displayName: userInfo?.user?.displayName,
          socialAuth: true,
          currentUserUid: userInfo?.user?.uid
        }
        const collectionRef = await firestore().collection('users');
        await collectionRef.add(userDocObj);

      }
    }
  } catch (error) {
    console.log(error, 'error')
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

export const getNotification = () => {
  return async (dispatch) => {
    firestore().collection('order').get()
      .then((querySnapshot) => {
        let allOrder = []
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          allOrder.push(doc.data())
        });
        const currentUserUid = auth().currentUser?.uid;
        let myOrders = allOrder.filter((val) => val?.orderBy?.currentUserUid == currentUserUid)
        console.log(myOrders, 'myOrders')
        var productsArray = myOrders.reduce(function (result, obj) {
          return result.concat(obj.Products);
        }, []);
        dispatch({ type: ActionTypes.MYORDERS, payload: productsArray });
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }
}
export const getNewArrivals = () => {
  return async (dispatch) => {
    firestore().collection('New Arrivals').get()
      .then((querySnapshot) => {
        let newArrivals = []
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          newArrivals.push({ id: doc.id, data: doc.data() })
        });
        dispatch({ type: ActionTypes.NEWARRIVALS, payload: newArrivals });
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }
}

export const addItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Item added successfully.');
  } catch (error) {
    console.error('Error adding item:', error);
  }
};

export const deleteItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Item deleted successfully.');
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};


export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Item retrieved successfully:');
      return value;
    } else {
      console.log('Item not found.');
      return null;
    }
  } catch (error) {
    console.error('Error getting item:', error);
    return null;
  }
};
