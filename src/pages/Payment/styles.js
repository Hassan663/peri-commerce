import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import { StyleSheet } from 'react-native';

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
    nextBtnContainer: {
        flex: 1,
        paddingBottom: RFPercentage(2),
        justifyContent: 'flex-end',
    },
    footerBtn: {
        height: 50,
        width: '92%',
        alignSelf: "center"
    },
    ph3: {
        paddingHorizontal: RFPercentage(3)
    },
    my2: {
        marginVertical: RFPercentage(2.5)
    },
});