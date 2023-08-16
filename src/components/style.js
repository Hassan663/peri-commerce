import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../styles/Colors';
export const styles = StyleSheet.create({
    poppin_25: {
        fontSize: 25,
    },
    poppin_20: {
        fontSize: 20,
    },
    poppin_7: {
        fontSize: 7,
    },
    poppin_9: {
        fontSize: 9,
    },
    poppin_11: {
        fontSize: 12,
    },
    poppin_12: {
        fontSize: 12,
    },
    poppin_14: {
        fontSize: 14,
    },
    poppin_16: {
        fontSize: 16,
    },
    poppin_18: {
        fontSize: 18,
    },
    primaryBtn: {
        flex: 1,
        backgroundColor: Colors.primary,
        borderRadius: RFPercentage(1),
        justifyContent: "center",
        alignItems: 'center'
    },
    primaryText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.white,
        textTransform: 'uppercase',
    }
});