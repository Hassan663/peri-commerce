import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    productContainer: {
        paddingHorizontal: RFPercentage(3),
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: RFPercentage(2),
        justifyContent: 'space-between',
        width: "100%",
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
    rowFront: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        justifyContent: 'center',
        marginVertical: 10,
        height: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        alignSelf: 'center',
        width: '90%',
        borderRadius: RFPercentage(2)

    },
    rowBack: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        alignSelf: 'center',
        width: '90%',
        height: 50,
        borderRadius: RFPercentage(2),
        overflow: 'hidden',
    },
    row: {
        width: '90%',
        alignSelf: "center",
        marginVertical: RFPercentage(1),
        alignItems: 'center',
        flexDirection: "row",

        // backgroundColor: 'red',
        justifyContent: "space-between"
    },
});