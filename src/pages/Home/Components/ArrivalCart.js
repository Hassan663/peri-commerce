// @app
import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import Title from '../../../components/Title';
import Colors from '../../../styles/Colors';
import { styles } from '../styles';

export const ArrivalCart = ({ item, navigation, selectedProduct, category }) => {
    if (category) {
        var photoURL = item?.value?.photoURL
        var name = item?.value?.name
        var price = item?.value?.price
        var keys = item.key
        var selectedProductId = selectedProduct?.id
        // console.log(item?.value, '?.subcategories', selectedProduct.id)
    } else if (item?.data?.subcategories) {
        var keys = Object.keys(item?.data?.subcategories);
        if (keys.length > 0) {
            const firstKey = keys[0];
            const firstValue = item?.data?.subcategories[firstKey];
            var photoURL = firstValue?.items[1]?.photoURL
            var name = firstValue?.items[1]?.name
            var price = firstValue?.items[1]?.price
        }
    }
    return (
        <TouchableOpacity
            activeOpacity={.8}
            onPress={() => {
                if (navigation) {
                    if (category) {
                        navigation.navigate('ProductDetail', { item, selectedProductId })
                    }
                    else {
                        navigation.navigate('Category', { item })
                    }
                }
            }}
            style={styles.cartContainer}>
            {/* <Image source={require('../../../assets/arrivalItem.png')} style={styles.cartImg} resizeMode='cover' /> */}
            <View style={styles.cartImg}>
                <Image source={{ uri: photoURL }} style={styles.cartImg} resizeMode='contain' />
            </View>
            <Image
                source={require('../../../assets/arrivalItemHeart.png')}
                resizeMode='contain'
                style={styles.cartHeart}
            />
            <Title
                title={name}
                weight={'600'}
                color={Colors.primary}
                type={'Poppin-14'} />
            <Title
                title={category ? keys : keys && keys[0]}
                weight={'400'}
                color={Colors.fontColor}
                type={'Poppin-11'} />
            <Title
                title={`$${price}`}
                weight={'600'}
                color={Colors.primary}
                type={'Poppin-14'} />
        </TouchableOpacity>
    );
}; 
