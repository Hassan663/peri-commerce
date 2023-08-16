// @app
import React, {
  useState
} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import Title from '../../components/Title';
import { styles } from './styles';
import { ArrivalCart } from '../Home/Components/ArrivalCart';
import {
  COMPANY,
  MODAL
} from './DummyData';

const Category = ({ navigation }) => {

  const [selectedCompany, setSeletedCompany] = useState('')
  const [selectedModal, setSeletedModal] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>

        <TouchableOpacity activeOpacity={.8}
          onPress={() => navigation.pop()}
          style={styles.rowContainer}>
          <AntDesign
            name={`left`}
            size={RFPercentage(2)}
            style={styles.mr1}
            color={Colors.primary} />
          <Title title={'Phones'} type={'Poppin-16'} weight={'600'} color={Colors.primary} />
        </TouchableOpacity>

        <View style={styles.rowContainer}>
          <AntDesign
            name={`search1`}
            size={RFPercentage(3)}
            style={styles.mr1}
            color={Colors.fontColor} />
          <AntDesign
            style={styles.mr1}
            name={`shoppingcart`}
            size={RFPercentage(3)}
            color={Colors.fontColorV2} />
        </View>
      </View>

      <View style={styles.row}>
        <Title
          title={`50 results in iPhone 13/13pro/max`}
          weight={'600'}
          color={Colors.gray}
          type={'Poppin-14'} />
        <Image source={require('../../assets/system-uicons_filtering.png')} />
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          data={COMPANY}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => setSeletedCompany(item)} style={[styles.companyWrapper, { paddingHorizontal: 0 }]}>
                <Title
                  title={item}
                  weight={selectedCompany == item ? "600" : '400'}
                  color={selectedCompany == item ? Colors.black : Colors.gray}
                  type={'Poppin-14'} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          data={MODAL}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => setSeletedModal(item)} style={[styles.companyWrapper, { backgroundColor: Colors.lightGray, }]}>
                <Title
                  title={item}
                  weight={selectedModal == item ? "600" : '400'}
                  color={selectedModal == item ? Colors.black : Colors.gray}
                  type={'Poppin-14'} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <FlatList
        data={[0, 0, 0, 0, 0, 0,]}
        numColumns={2}
        contentContainerStyle={styles.listContainer2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={() => <ArrivalCart navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
      />

    </SafeAreaView >
  );
};
export default Category;
