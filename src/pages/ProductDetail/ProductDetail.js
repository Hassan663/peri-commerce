// @app
import React, {
  useState
} from 'react';
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles';
import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import { PRODUCTCOLOR, PRODUCTSIZE, RATING } from './DummyData';

const ProductDetail = ({ navigation }) => {
  const [noOfItem, setNoOfItem] = useState(0)
  const [selectSize, setSelectSize] = useState("")
  const [selectColor, setSelectColor] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemImgContainer}>
        <View style={styles.productContainer}>
          <View style={styles.circle(35)}>
            <Image source={require('../../assets/back.png')} />
          </View>
          <Image source={require('../../assets/cart.png')} />
        </View>
        <Image
          style={styles.itemImg}
          resizeMode='contain'
          source={require('../../assets/mobile.png')} />
      </View>
      <View style={styles.itemSheet}>
        <View style={styles.sheetHeader}>
          <View style={styles.itemNameContainer}>
            <Title
              title={`Roller Rabbit`}
              color={Colors.primary}
              weight={'600'}
              type={`Poppin-18`} />
            <Title
              title={`Vado Odelle Dress`}
              color={Colors.fontColor}
              weight={'400'}
              type={`Poppin-11`} />
          </View>
          <View style={styles.noOfItemContainer}>
            <View style={styles.noOfItemWrapper}>
              <AntDesign
                onPress={() => noOfItem > 0 && setNoOfItem(noOfItem - 1)}
                color={Colors.primary}
                name={'minus'}
                size={RFPercentage(2)} />

              <Title title={noOfItem} color={Colors.primary} weight={'400'} type={`Poppin-14`} />

              <AntDesign
                onPress={() => noOfItem < 10 && setNoOfItem(noOfItem + 1)}
                color={Colors.primary}
                name={'plus'}
                size={RFPercentage(2)} />
            </View>
          </View>

        </View>
        <View style={styles.row}>
          <View style={styles.reviewContainer}>

            {RATING.map(() => (
              <AntDesign
                name={`star`}
                color={Colors.yellow}
                size={RFPercentage(2)}
                style={styles.mr1}
              />))}

            <Title
              title={`(320 Review)`}
              color={Colors.primary}
              weight={'400'}
              type={`Poppin-11`} />

          </View>
          <Title
            title={`Avaliable in stok`}
            color={Colors.primary}
            weight={'600'}
            type={`Poppin-11`} />
        </View>
        <View style={styles.sizeSection}>
          <View style={{ flex: 1 }}>
            <Title title={`Size`} color={Colors.primary} weight={'600'} type={`Poppin-16`} />

            <View style={styles.sizeContainer}>
              {PRODUCTSIZE.map((item, index) => (
                <TouchableOpacity
                  key={index.toString()}
                  activeOpacity={.8}
                  onPress={() => setSelectSize(item)}
                  style={styles.circle(40, selectSize == item ? Colors.primary : Colors.white, 2)}>
                  <Title title={item} color={selectSize == item ? Colors.white : Colors.primary} weight={'600'} type={`Poppin-14`} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.selectColorContainer}>
            {PRODUCTCOLOR.map((item, index) => (
              <TouchableOpacity
                activeOpacity={.8}
                onPress={() => setSelectColor(item)}
                key={index.toString()}
                style={styles.circle(20, item, 2)}>
                {item == selectColor &&
                  <AntDesign
                    color={item == Colors.white ? Colors.black : Colors.white}
                    name={'check'}
                    size={RFPercentage(1.5)} />
                }
              </TouchableOpacity>
            ))}
          </View>

        </View>

        <Title
          title={`Description`}
          color={Colors.primary}
          weight={'600'}
          type={`Poppin-16`} />

        <Title
          title={`Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.`}
          color={Colors.fontColor}
          weight={'400'}
          type={`Poppin-11`} />

        <View style={styles.sheetFooter}>
          <View style={{ flex: 1.5 }}>

            <Title
              title={`Total Price`}
              color={Colors.fontColor}
              weight={'400'}
              type={`Poppin-9`} />
            <Title
              title={`$198.00`}
              color={Colors.primary}
              weight={'700'}
              type={`Poppin-18`} />

          </View>
          <View style={styles.cartContainer}>

            <Image style={{ marginHorizontal: RFPercentage(1) }} source={require('../../assets/cartIcon.png')} />

            <Title
              title={`Add to cart`}
              color={Colors.white}
              weight={'600'}
              type={`Poppin-16`} />
          </View>
        </View>
      </View>

    </SafeAreaView >
  );
};
export default ProductDetail;
