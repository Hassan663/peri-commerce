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

export const ArrivalCart = ({ navigation }) => {

    return (
        <TouchableOpacity
            activeOpacity={.8}
            onPress={() => {
                if (navigation) { navigation.navigate('Category') }
            }}
            style={styles.cartContainer}>
            <Image source={require('../../../assets/arrivalItem.png')} style={styles.cartImg} resizeMode='cover' />
            <Image
                source={require('../../../assets/arrivalItemHeart.png')}
                resizeMode='contain'
                style={styles.cartHeart}
            />
            <Title
                title={`The Marc Jacobs`}
                weight={'600'}
                color={Colors.primary}
                type={'Poppin-14'} />
            <Title
                title={`Traveler Tote`}
                weight={'400'}
                color={Colors.fontColor}
                type={'Poppin-11'} />
            <Title
                title={`$195.00`}
                weight={'600'}
                color={Colors.primary}
                type={'Poppin-14'} />
        </TouchableOpacity>
    );
}; 
