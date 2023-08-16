import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productContainer: {
        paddingHorizontal: RFPercentage(2),
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: RFPercentage(2),
        justifyContent: 'space-between',
        width: "100%",
    },
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
    itemImgContainer: { height: "43%", },
    itemImg: {
        position: 'absolute',
        height: '85%',
        width: "85%",
        resizeMode: "contain",
        bottom: RFPercentage(3),
        alignSelf: 'center'
    },
    itemSheet: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: RFPercentage(4),
        borderTopRightRadius: RFPercentage(4),
        padding: RFPercentage(4),
    },
    sheetHeader: {
        height: RFPercentage(6),
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    itemNameContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
    },
    noOfItemContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
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
    reviewContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    mr1: {
        marginRight: RFPercentage(.5)
    },
    sizeSection: {
        height: 130,
        flexDirection: "row"
    },
    sizeContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    selectColorContainer: {
        width: 40,
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        borderRadius: RFPercentage(3),
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    sheetFooter: {
        flexDirection: 'row',
        marginVertical: RFPercentage(4),
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cartContainer: {
        flex: 2,
        height: "100%",
        flexDirection: "row",
        borderRadius: RFPercentage(1),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
});