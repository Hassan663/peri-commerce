// @app
import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import Title from '../../components/Title';
import { styles } from './styles';
import { ArrivalCart } from './Components/ArrivalCart';
import { Banner } from './Components/Banner';

const windowWidth = Dimensions.get('window').width;
const widthFlex1 = windowWidth / 10

const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* HEADER */}
        <View style={styles.headerContainer}>
          <View style={styles.circle(36)}>
            <Image resizeMode='contain' source={require('../../assets/menu.png')} />
          </View>
          <View style={styles.circle(50)}>
            <Image source={require('../../assets/userIcon.png')} />
          </View>
        </View>
        {/* HEADER */}

        <Title
          title={'Welcome,'}
          color={Colors.primary}
          weight={'600'}
          type={`Poppin-25`} />
        <Title
          title={'Our Fashions App'}
          color={Colors.fontColor}
          weight={'600'}
          type={`Poppin-20`} />

        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <AntDesign name={`search1`} color={Colors.primary} size={RFPercentage(3)} />
            <TextInput
              placeholder='Search...'
              style={styles.searchContainer} />
          </View>
          <View style={styles.filterContainer}>
            <Image resizeMode='contain' source={require('../../assets/filtter.png')} />
          </View>
        </View>

        <FlatList
          horizontal
          contentContainerStyle={{ height: 160, }}
          showsHorizontalScrollIndicator={false}
          snapToInterval={widthFlex1 * 8 + 20} // Width of each item + margin
          decelerationRate={'normal'} // Adjust as needed
          data={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
          renderItem={() => <Banner />}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.row}>
          <Title
            title={`New Arrivals`}
            weight={'700'}
            color={Colors.primary}
            type={'Poppin-18'} />
          <Title
            title={`View All`}
            weight={'600'}
            color={Colors.fontColor}
            type={'Poppin-11'} />
        </View>
        <FlatList
          data={[0, 0, 0, 0, 0, 0,]}
          numColumns={2}
          contentContainerStyle={{ marginBottom: RFPercentage(10) }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={() => <ArrivalCart />}
          keyExtractor={(item, index) => index.toString()}
        />

      </ScrollView>
    </SafeAreaView >
  );
};
export default Home;
