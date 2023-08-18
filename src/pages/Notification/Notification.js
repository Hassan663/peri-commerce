// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  DeviceEventEmitter,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
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
import { getNotification } from '../../store/action/action';
import { RenderItem, renderHiddenItem, } from './Components/RenderHiddenItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

const windowHeight = Dimensions.get('window').height;
const heightFlex1 = windowHeight / 10

const Notification = ({ navigation }) => {
  const [myCarts, setmyCarts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNotification())
    // getData()
  }, [])
  const myOrders = useSelector((state) => state.root.myOrders);
  console.log(myOrders, 'myOrders')
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: RFPercentage(12) }} showsVerticalScrollIndicator={false}     >

        <View >
          <View style={styles.myCartWrapper}>
            <Title
              type={`Poppin-18`}
              color={Colors.primary}
              weight={`600`}
              title={`My Orders`} />
          </View>
          <SwipeListView
            data={myCarts && myOrders}
            contentContainerStyle={styles.myCartContentContainer}
            renderItem={(data, rowMap) => <RenderItem data={data} rowMap={rowMap} />}
            leftOpenValue={0}
            rightOpenValue={-50}
          />
        </View>

      </ScrollView>
    </SafeAreaView >
  );
};
export default Notification;
