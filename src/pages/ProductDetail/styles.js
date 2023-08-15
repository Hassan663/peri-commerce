import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.white,
    },
    productContainer: {
        paddingHorizontal: RFPercentage(2),
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: RFPercentage(2),
        justifyContent: 'space-between',
        width: "100%",
    },
    // rowContainer: {
    //     flexDirection: 'row',
    //     alignItems: "center",
    // },
    mr1: {
        marginRight: RFPercentage(1)
    },
    circle: (size, color, borderwidth) => ({
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        borderWidth: borderwidth ? borderwidth : 0,
        borderColor: Colors.inputBg,
        backgroundColor: color ? color : Colors.primary,
        borderRadius: size / 2
    }),
    row: {
        width: '100%',
        marginVertical: RFPercentage(1),
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    },
});