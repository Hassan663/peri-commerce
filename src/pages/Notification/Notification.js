// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import { SwipeListView } from 'react-native-swipe-list-view';

import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import { styles } from './styles';
import { getNotification } from '../../store/action/action';
import { RenderItem, } from './Components/RenderHiddenItem';
import {
  useDispatch,
  useSelector
} from 'react-redux';

const Notification = ({ navigation }) => {
  const [myCarts, setmyCarts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getNotification())
    });
    return unsubscribe;
  }, [navigation]);

  const myOrders = useSelector((state) => state.root.myOrders);

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
