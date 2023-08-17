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
        marginVertical: RFPercentage(4),
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
        marginVertical: 10,
        height: 100,
        shadowColor: "#000",
        flexDirection: 'row',
        flex: 1,
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
        justifyContent: "space-between"
    },
    noOfItemWrapper: {
        height: 30,
        width: 70,
        borderRadius: 30,
        flexDirection: "row",
        paddingHorizontal: RFPercentage(1),
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.inputBg
    },
    headerCartPopup: {
        position: "absolute", zIndex: 2, top: -5, right: '3%',
    },
    headerCartContainer: {
        borderRadius: RFPercentage(3),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    myCartWrapper: {
        marginHorizontal: RFPercentage(3),
        marginVertical: RFPercentage(2)
    },
    myCartContentContainer: {
        justifyContent: 'space-evenly',
        flex: 1
    },
    cartItemImg: {
        borderRadius: RFPercentage(1),
        height: 80,
        width: 80,
        resizeMode: "contain",
        marginHorizontal: RFPercentage(1),
    },
    cartItemContentBody: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    cartItemContentWrapper: {
        flex: 1,
        height: '100%',
        justifyContent: "space-evenly"
    },
    mr2: { marginRight: RFPercentage(2) },
    deleteContainer: {
        flex: 1,
        height: "100%",
        backgroundColor: Colors.primary,
        borderRadius: RFPercentage(2),
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'flex-end',

    },
    promoContainer: {
        height: 50,
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: RFPercentage(2),
        flexDirection: 'row',
        backgroundColor: Colors.inputBg,
        borderRadius: RFPercentage(2),
        alignItems: 'center',
        marginVertical: RFPercentage(2)
    },
    applyText: {
        color: Colors.white,
        fontSize: 11,
        fontWeight: "600"
    },
    applyContainer: {
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: 'center',
        height: 30,
        width: 60,
        borderRadius: RFPercentage(1.5)
    },
    checkOutContainer: {
        height: 50,
        flexDirection: "row",
        borderRadius: RFPercentage(1),
        overflow: 'hidden',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: RFPercentage(1),
        width: '100%',
        backgroundColor: Colors.primary
    }
});