
// @app
import React, { } from 'react';
import {
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from '../styles';
import { addItem, getItem } from '../../../store/action/action';
import Colors from '../../../styles/Colors';

export const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
        <View style={{ flex: 1, }} />
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={async () => {
                const username = await getItem('myCart');
                if (username !== null) {
                    let objClone = JSON.parse(JSON.parse(JSON.stringify(username)));
                    let getIndex = objClone.findIndex((val) => val.id == data.item.id)
                    objClone.splice(getIndex, 1)
                    await addItem('myCart', JSON.stringify(objClone))
                    setmyCarts(objClone)
                }
            }} style={styles.deleteContainer} >
            <MaterialIcons name={`delete`} size={RFPercentage(3)} color={Colors.white} />
        </TouchableOpacity>
    </View>
)