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
import auth from '@react-native-firebase/auth';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles';
import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import { RATING } from './DummyData';
import { addItem, deleteItem, getItem } from '../../store/action/action';

const ProductDetail = ({ navigation, route }) => {
  const [noOfItem, setNoOfItem] = useState(1)
  const [selectSize, setSelectSize] = useState("")
  const [selectColor, setSelectColor] = useState("")
  const productDetail = route?.params?.item

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemImgContainer}>
        <View style={styles.productContainer}>
          <TouchableOpacity activeOpacity={.8} onPress={() => navigation.pop()} style={styles.circle(35)}>
            <Image source={require('../../assets/back.png')} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('MyCart')}  >

            <Image source={require('../../assets/cart.png')} />
          </TouchableOpacity>
        </View>
        <Image
          style={styles.itemImg}
          resizeMode='contain'
          source={{ uri: productDetail?.value?.photoURL }} />
      </View>
      <View style={styles.itemSheet}>
        <View style={[styles.sheetHeader,]}>
          <View style={[styles.itemNameContainer,]}>
            <Title
              title={productDetail?.value?.name}
              color={Colors.primary}
              weight={'600'}
              type={`Poppin-18`} />
            <Title
              title={productDetail.key}
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
        <View style={[styles.row,]}>
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
              {productDetail?.value?.size?.map((item, index) => (
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
            {productDetail?.value?.colors?.map((item, index) => (
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
          title={productDetail?.value?.description}
          color={Colors.fontColor}
          weight={'400'}
          type={`Poppin-11`} />

        <View style={styles.sheetFooter}>
          <View style={{ flex: 1.5, }}>

            <Title
              title={`Total Price`}
              color={Colors.fontColor}
              weight={'400'}
              type={`Poppin-9`} />
            <Title
              title={`$${(productDetail?.value?.price * noOfItem).toFixed(2)}`}
              color={Colors.primary}
              weight={'700'}
              type={`Poppin-18`} />

          </View>
          <TouchableOpacity
            onPress={async () => {
              if (selectSize && selectColor) {

                const currentUserUid = auth().currentUser?.uid;
                const myCartObj = {}
                myCartObj.company = productDetail.key
                myCartObj.name = productDetail.value.name
                myCartObj.description = productDetail.value.description
                myCartObj.photoURL = productDetail.value.photoURL
                myCartObj.price = productDetail.value.price
                myCartObj.noOfItem = noOfItem
                myCartObj.selectColor = selectColor
                myCartObj.selectSize = selectSize
                myCartObj.userUid = currentUserUid
                myCartObj.id = Math.random().toString(36).substring(2, 10);

                let myCart = []
                myCart.push(myCartObj)
                // deleteItem('myCart');
                const username = await getItem('myCart');
                // console.log(JSON.parse(username), 'JSON.parse(username)')
                if (JSON.parse(username)?.length > 0) {
                  // deleteItem('myCart');
                  await addItem('myCart', JSON.stringify([...JSON.parse(username), ...myCart]))
                  // console.log([...JSON.parse(username), ...myCart], 'mergeArray')
                  navigation.navigate('MyCart')
                } else {
                  await addItem('myCart', JSON.stringify(myCart))
                  navigation.navigate('MyCart')
                }
              } else {
                alert('please select size or color', 'item',)

              }
              // myCartObj.company =

            }}
            style={styles.cartContainer}>

            <Image style={{ marginHorizontal: RFPercentage(1) }} source={require('../../assets/cartIcon.png')} />

            <Title
              title={`Add to cart`}
              color={Colors.white}
              weight={'600'}
              type={`Poppin-16`} />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView >
  );
};
export default ProductDetail;
