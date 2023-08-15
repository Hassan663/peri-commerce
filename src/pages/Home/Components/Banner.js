// @app
import React from 'react';
import {
    View,
    Image,
} from 'react-native';

import Colors from '../../../styles/Colors';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import { styles } from '../styles';

export const Banner = () => {
    return (
        <View style={styles.bannerContainer}  >
            <Image
                source={require('../../../assets/homeBanner.png')}
                resizeMode='cover'
                style={styles.banner} />
            <View style={styles.bannerContentContainer}>
                <Title
                    title={`50% Off`}
                    color={Colors.primary}
                    type={`Poppin-25`}
                    weight={`700`} />
                <Title
                    title={`On everything today`}
                    color={Colors.primary}
                    type={`Poppin-16`}
                    weight={`400`} />
                <Title
                    title={`With code:FSCREATION`}
                    color={Colors.fontColor}
                    type={`Poppin-11`}
                    weight={`600`} />
                <View style={styles.getNowContainer}>
                    <Button titleStyle={styles.getNowTitle} title={`Get Now`} />
                </View>
            </View>
        </View>)
}
