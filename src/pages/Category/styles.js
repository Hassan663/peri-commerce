import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    mr1: {
        marginRight: RFPercentage(1)
    },
    row: {
        width: '100%',
        paddingHorizontal: RFPercentage(3),
        marginTop: RFPercentage(2),
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    companyWrapper: {
        paddingHorizontal: RFPercentage(2),
        paddingVertical: RFPercentage(1),
        borderRadius: RFPercentage(.5),
        marginHorizontal: RFPercentage(1),
        marginVertical: RFPercentage(1),
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
    listContainer: {
        justifyContent: "center",
        paddingHorizontal: RFPercentage(2)
    },
    listContainer2: {
        justifyContent: "center",
        marginVertical: RFPercentage(1),
        paddingHorizontal: RFPercentage(3)
    },
});