import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerContainer: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: Colors.inputBg,
        paddingHorizontal: RFPercentage(2),
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        width: "100%"
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    mr1: {
        marginRight: RFPercentage(1)
    },
    footerBtn: {
        height: 50,
        width: '92%',
        alignSelf: "center"
    },
    nextBtnContainer: {
        flex: 1,
        paddingBottom: RFPercentage(2),
        justifyContent: 'flex-end',
    },
    placeOrderImg: {
        height: 270,
        marginVertical: RFPercentage(3),
        resizeMode: "contain",
        width: "100%"
    },
    orderPlaceMsg: {
        fontSize: 16,
        marginVertical: RFPercentage(2),
        fontWeight: '400',
        textAlign: "center",
        color: Colors.fontColor
    },
    orderPlaceMsgWrapper: {
        alignItems: 'center',
        width: "65%",
        alignSelf: 'center'
    },

});